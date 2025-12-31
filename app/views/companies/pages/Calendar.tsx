import React, { useEffect, useRef, useState } from "react";
import TimeSlotBlock from "./TimeSlotBlock";
import "./../styles/Calendar.css";

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const parseTime = (str) => {
  if (!str) return null;

  return new Date(str.replace(" ", "T").replace(" -", "-"));
};
const toLocalISOString = (date) => {
  if (!date) return null;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":00"
  );
};
const overlaps = (aStart, aEnd, bStart, bEnd) => aStart < bEnd && bStart < aEnd;

const nextBlockedTime = (day, startTime) => {
  const dayStr = day.toISOString().slice(0, 10);

  const sameDaySlots = timeSlots
    .filter((s) => s.day === dayStr)
    .map((s) => ({
      start: new Date(s.start_time),
      end: new Date(s.end_time),
    }));

  const futureStarts = sameDaySlots
    .map((s) => s.start)
    .filter((t) => t > startTime);

  if (futureStarts.length === 0) return null;

  return new Date(Math.min(...futureStarts));
};

/* ---------- DATE HELPERS ---------- */
const startOfDay = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

const dateAt = (d, hours, minutes) => {
  const x = new Date(d);
  x.setHours(hours, minutes, 0, 0);
  return x;
};

const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const hourOf = (d) => {
  if (!d) return null;
  return parseTime(d).getHours();
};

const isWeekend = (day, weekends = []) => {
  if (!weekends.length) return false;
  const wday = day.getDay() === 0 ? 7 : day.getDay();
  return weekends.includes(wday);
};

const isWithin = (hour, from, to) => hour >= from && hour < to;

const roundToStep = (date, step = 15) => {
  const d = new Date(date);
  const minutes = d.getMinutes();
  const rounded = Math.round(minutes / step) * step;
  d.setMinutes(rounded, 0, 0);
  return d;
};

const addMinutes = (date, mins) => new Date(date.getTime() + mins * 60 * 1000);

/* ---------- AVAILABILITY (WINDOW ONLY) ---------- */
const isAvailable = ({ day, hour, window }) => {
  if (!window) return false;

  if (isWeekend(day, window.weekends)) return false;

  const startHour = hourOf(window.start_time);
  const endHour = hourOf(window.end_time);
  if (!isWithin(hour, startHour, endHour)) return false;

  const breakFrom = hourOf(window.break_from);
  const breakTo = hourOf(window.break_to);
  if (isWithin(hour, breakFrom, breakTo)) return false;

  return true;
};
const toTimeValue = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, "0")}:${String(
    d.getMinutes(),
  ).padStart(2, "0")}`;
};

const applyTime = (baseISO, hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date(baseISO);
  d.setHours(h, m, 0, 0);
  return toLocalISOString(d);
};

export default function Calendar({ employees, companyId }) {
  const [weekStart, setWeekStart] = useState(startOfDay(new Date()));
  const [editingSlot, setEditingSlot] = useState(null);

  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [availabilityWindow, setAvailabilityWindow] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const weekBodyRef = useRef(null);
  const [previewSlot, setPreviewSlot] = useState(null);
  const [timeStep, setTimeStep] = useState(15);
  const [selectedService, setSelectedService] = useState(null);
  const [clientQuery, setClientQuery] = useState("");
  const [clientResults, setClientResults] = useState([]);
  const [clientLoading, setClientLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  /* ---------- DAYS ---------- */
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  /* ---------- NAV ---------- */
  const nextWeek = () => setWeekStart(addDays(weekStart, 7));
  const prevWeek = () => setWeekStart(addDays(weekStart, -7));
  const goToday = () => setWeekStart(startOfDay(new Date()));
  const services = () => {
    if (!currentEmployee) return [];
    return currentEmployee.services;
  };

  const [selectedServiceCustomPrice, setSelectedServiceCustomPrice] =
    useState(null);

  /* ---------- AVAILABILITY ---------- */
  useEffect(() => {
    if (!currentEmployee) return;

    const from = weekStart.toISOString().slice(0, 10);
    const to = addDays(weekStart, 6).toISOString().slice(0, 10);

    fetch(
      `/api/employees/${currentEmployee.id}/availability?from=${from}&to=${to}`,
    )
      .then((r) => r.json())
      .then((json) => {
        setAvailabilityWindow(json.employee.window);
        setTimeSlots(json.employee.time_slots);
      });
  }, [currentEmployee, weekStart]);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());

    tick(); // initial
    const id = setInterval(tick, 60 * 5 * 1000); // update every 5 minute

    return () => clearInterval(id);
  }, []);
  const hourRowRef = useRef(null);
  const [hourHeight, setHourHeight] = useState(0);

  useEffect(() => {
    if (!hourRowRef.current) return;

    setHourHeight(hourRowRef.current.getBoundingClientRect().height);
  }, [weekStart, currentEmployee]);

  const nowDayStr = now.toISOString().slice(0, 10);
  const nowHour = now.getHours();
  const nowMinutes = now.getMinutes();

  const nowTop = hourHeight * nowHour + (hourHeight * nowMinutes) / 60;

  const isTodayVisible = days.some(
    (d) => d.toISOString().slice(0, 10) === nowDayStr,
  );

  useEffect(() => {
    const el = weekBodyRef.current;
    if (!el) return;

    // Wait for layout
    requestAnimationFrame(() => {
      const totalScroll = el.scrollHeight - el.clientHeight;

      // Scroll to middle of the day (~12:00)
      el.scrollTop = totalScroll / 2;
    });
  }, [weekStart, currentEmployee]);

  /* ---------- TIME SLOTS ---------- */

  const slotStartingAt = (day, hour) => {
    const dayStr = day.toISOString().slice(0, 10);

    const cellStart = dateAt(day, hour, 0);
    const cellEnd = dateAt(day, hour + 1, 0);

    return timeSlots.find((s) => {
      if (s.day !== dayStr) return false;

      const start = parseTime(s.start_time);
      const end = parseTime(s.end_time);

      return overlaps(start, end, cellStart, cellEnd);
    });
  };

  const onStartTimeChange = (newStart) => {
    const start = roundToStep(newStart, 15);

    setEditingSlot((s) => ({
      ...s,
      start_time: toLocalISOString(start),
      end_time: toLocalISOString(addMinutes(start, s.duration)),
    }));
  };

  const onServiceSelect = (service) => {
    const start = new Date(editingSlot.start_time);

    setEditingSlot((s) => ({
      ...s,
      service_id: service.id,
      duration: service.duration,
      end_time: toLocalISOString(addMinutes(start, service.duration)),
    }));
  };
  const shiftMinutes = (iso, mins) =>
    toLocalISOString(addMinutes(new Date(iso), mins));

  const isPreviewHere = (day, hour) => {
    if (!previewSlot) return false;

    if (previewSlot.day !== day.toISOString().slice(0, 10)) return false;

    const cellStart = dateAt(day, hour, 0);
    const cellEnd = dateAt(day, hour + 1, 0);

    const slotStart = parseTime(previewSlot.start_time);
    const slotEnd = parseTime(previewSlot.end_time);

    return overlaps(slotStart, slotEnd, cellStart, cellEnd);
  };

  const queryClientSearch = (query) => {
    if (!query) {
      return [];
    }
    if (query.length < 3) {
      return [];
    }
    setClientLoading(true);
    fetch(`/api/clients?search=${query}`)
      .then((r) => r.json())
      .then((json) => {
        setClientLoading(false);
        setClientResults(json);
      });
  };

  const handleSchedule = () => {
    console.log(editingSlot);
    fetch(`/api/time_slots`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingSlot),
    })
      .then((r) => r.json())
      .then((json) => setTimeSlots([...timeSlots, json]))
      .then(() => setEditingSlot(null));
  };

  return (
    <section className="calendar-card">
      {/* ---------- HEADER ---------- */}
      <header className="calendar__header sticky">
        <h4>
          {days[0].toLocaleDateString("uk-UA", {
            day: "numeric",
            month: "long",
          })}
          {" – "}
          {days[6].toLocaleDateString("uk-UA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h4>

        <select
          className="employee-select"
          value={currentEmployee?.id || ""}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              // Reset everything if "Обрати працівника" is selected
              setCurrentEmployee(null);
              setTimeSlots([]);
              setAvailabilityWindow(null);
              setPreviewSlot(null);
            } else {
              setCurrentEmployee(
                employees.find((emp) => emp.id === Number(value)),
              );
            }
          }}
        >
          <option value="">Обрати працівника</option>
          {employees.map((e) => (
            <option key={e.id} value={e.id}>
              {e.first_name} {e.last_name}
            </option>
          ))}
        </select>

        <div className="calendar__actions">
          <button onClick={prevWeek}>←</button>
          <button onClick={goToday}>Сьогодні</button>
          <button onClick={nextWeek}>→</button>

          <input
            className="date__picker"
            type="date"
            value={weekStart.toISOString().slice(0, 10)}
            onChange={(e) => setWeekStart(startOfDay(new Date(e.target.value)))}
          />
        </div>
      </header>

      {/* ---------- GRID ---------- */}
      <div className="week-calendar">
        <div className="week-header">
          <div className="time-col" />
          {days.map((d) => (
            <div key={d.toISOString()} className="day-col-header">
              <div>{d.toLocaleDateString("uk-UA", { weekday: "short" })}</div>
              <div>{d.getDate()}</div>
            </div>
          ))}
        </div>

        <div className="week-body" ref={weekBodyRef}>
          {isTodayVisible && hourHeight > 0 && (
            <div className="now-line" style={{ top: `${nowTop}px` }}>
              <div className="now-dot" />
            </div>
          )}

          {HOURS.map((hour, i) => (
            <div
              key={hour}
              className="week-row"
              ref={i === 0 ? hourRowRef : null}
            >
              <div className="time-col">{hour}:00</div>

              {days.map((day) => {
                const slot = slotStartingAt(day, hour);
                const available = isAvailable({
                  day,
                  hour,
                  window: availabilityWindow,
                });

                return (
                  <div
                    key={`${day}-${hour}`}
                    className={`week-cell ${available ? "" : "unavailable"}`}
                    onMouseDown={(e) => {
                      if (!available || !currentEmployee) return;

                      const rect = e.currentTarget.getBoundingClientRect();
                      const offsetY = e.clientY - rect.top;
                      const ratio = offsetY / rect.height;

                      const startMinutes = ratio >= 0.5 ? 30 : 0;
                      const endMinutes = startMinutes + 30;

                      const clickedStart = dateAt(day, hour, startMinutes);
                      const clickedEnd = dateAt(day, hour, endMinutes);

                      if (slot) {
                        const slotStart = parseTime(slot.start_time);
                        const slotEnd = parseTime(slot.end_time);

                        if (
                          overlaps(clickedStart, clickedEnd, slotStart, slotEnd)
                        ) {
                          setEditingSlot(slot);
                          return;
                        }
                      }

                      if (previewSlot) {
                        const pStart = parseTime(previewSlot.start_time);
                        const pEnd = parseTime(previewSlot.end_time);

                        if (
                          previewSlot.day === day.toISOString().slice(0, 10) &&
                          overlaps(clickedStart, clickedEnd, pStart, pEnd)
                        ) {
                          setEditingSlot(previewSlot);
                          return;
                        }
                      }

                      setPreviewSlot({
                        day: day.toISOString().slice(0, 10),
                        dayIndex: days.findIndex(
                          (d) => d.toDateString() === day.toDateString(),
                        ),
                        start_time: toLocalISOString(clickedStart),
                        end_time: toLocalISOString(clickedEnd),
                        state: "preview",
                        employee_id: currentEmployee.id,
                        company_id: companyId,
                      });
                    }}
                  >
                    {slot && <TimeSlotBlock timeSlot={slot} />}
                    {isPreviewHere(day, hour) && (
                      <TimeSlotBlock timeSlot={previewSlot} />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {editingSlot && (
        <div className="glass-overlay" onClick={() => setEditingSlot(null)}>
          <div className="glass-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Edit time slot</h3>
            <div className="form-group">
              <label>Service</label>
              <div className="time-range-row">
                <select
                  className="width-100"
                  onChange={(e) => {
                    const newDuration = Number(e.target.value);
                    const start = new Date(editingSlot.start_time);
                    setTimeStep(newDuration);
                    setEditingSlot((prev) => ({
                      ...prev,
                      duration: newDuration,
                      end_time: toLocalISOString(
                        addMinutes(start, newDuration),
                      ),
                    }));
                    setPreviewSlot((prev) =>
                      prev
                        ? {
                            ...prev,
                            duration: newDuration,
                            end_time: toLocalISOString(
                              addMinutes(start, newDuration),
                            ),
                          }
                        : null,
                    );
                    const serviceId = Number(e.target.value);
                    let foundService = currentEmployee.services.find(
                      (s) => s.duration === serviceId,
                    );
                    if (!foundService) {
                      foundService = {
                        duration: newDuration,
                        name: e.target.name,
                        price: 0.0,
                      };
                    }
                    setSelectedService(foundService);
                    setSelectedServiceCustomPrice(null);
                  }}
                >
                  {" "}
                  <option value="">Select a service</option>
                  {currentEmployee.services.length === 0 && (
                    <>
                      <option value={15} name="quarter">
                        quarter
                      </option>
                      <option value={30} name="half">
                        half
                      </option>
                      <option value={45} name="academic">
                        academic
                      </option>
                      <option value={60} name="hour">
                        hour
                      </option>
                    </>
                  )}
                  {currentEmployee.services.map((s) => (
                    <option key={s.id} value={s.duration}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              {selectedService && (
                <>
                  <div className="time-range-row mt-1 t-sm">
                    <label>Duration</label>
                    <input
                      type="number"
                      className="width-33"
                      step={15}
                      min={15}
                      value={selectedService.duration}
                      onChange={(e) => {
                        const newDuration = Number(e.target.value);
                        const start = new Date(editingSlot.start_time);
                        setTimeStep(newDuration);
                        setEditingSlot((prev) => ({
                          ...prev,
                          duration: newDuration,
                          end_time: toLocalISOString(
                            addMinutes(start, newDuration),
                          ),
                        }));
                        setPreviewSlot((prev) =>
                          prev
                            ? {
                                ...prev,
                                duration: newDuration,
                                end_time: toLocalISOString(
                                  addMinutes(start, newDuration),
                                ),
                              }
                            : null,
                        );
                        setSelectedService((prev) => ({
                          ...prev,
                          duration: newDuration,
                        }));
                      }}
                    />
                    <label className="content-center">Price</label>
                    <input
                      type="number"
                      className="width-33"
                      step={0.01}
                      min={0}
                      value={
                        selectedServiceCustomPrice ||
                        Number(selectedService.price) ||
                        0
                      }
                      onChange={(e) => {
                        setSelectedServiceCustomPrice(Number(e.target.value));
                      }}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="form-group time-range">
              <label>Time</label>
              <div className="time-range-row">
                <input
                  type="time"
                  lang="uk-UA"
                  step={900}
                  value={toTimeValue(editingSlot.start_time)}
                  onChange={(e) => {
                    const newStart = applyTime(
                      editingSlot.start_time,
                      e.target.value,
                    );
                    editingSlot.start_time = newStart;
                    editingSlot.end_time = shiftMinutes(newStart, timeStep);
                    editingSlot.duration = timeStep;
                    setEditingSlot((prev) => ({
                      ...prev,
                      start_time: newStart,
                      end_time: shiftMinutes(newStart, timeStep),
                      duration: timeStep,
                    }));
                    setPreviewSlot((prev) =>
                      prev
                        ? {
                            ...prev,
                            start_time: newStart,
                            end_time: shiftMinutes(newStart, timeStep),
                            duration: timeStep,
                          }
                        : null,
                    );
                  }}
                />

                <span className="dash">–</span>

                <input
                  type="time"
                  lang="uk-UA"
                  step={900}
                  value={toTimeValue(editingSlot.end_time)}
                  onChange={(e) => {
                    const newEnd = applyTime(
                      editingSlot.end_time,
                      e.target.value,
                    );
                    editingSlot.end_time = newEnd;
                    editingSlot.start_time = shiftMinutes(newEnd, -timeStep);
                    editingSlot.duration = timeStep;
                    setEditingSlot((prev) => ({
                      ...prev,
                      end_time: newEnd,
                      start_time: shiftMinutes(newEnd, -timeStep),
                      duration: timeStep,
                    }));
                    setPreviewSlot((prev) =>
                      prev
                        ? {
                            ...prev,
                            end_time: newEnd,
                            start_time: shiftMinutes(newEnd, -timeStep),
                            duration: timeStep,
                          }
                        : null,
                    );
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Client</label>

              <div className="autocomplete">
                <input
                  type="text"
                  placeholder="Search client..."
                  value={
                    selectedClient
                      ? `${selectedClient.first_name} ${selectedClient.last_name}`
                      : clientQuery
                  }
                  onChange={(e) => {
                    setSelectedClient(null);
                    setClientQuery(e.target.value);
                    queryClientSearch(e.target.value);
                  }}
                />

                {clientLoading && <div className="hint">Searching…</div>}

                {clientResults.length > 0 && !selectedClient && (
                  <ul className="autocomplete-list">
                    {clientResults.map((client) => (
                      <li
                        key={client.id}
                        onClick={() => {
                          setSelectedClient(client);
                          setClientResults([]);

                          setEditingSlot((prev) => ({
                            ...prev,
                            client_id: client.id,
                          }));
                          console.log(client.id);
                        }}
                      >
                        <strong>
                          {client.first_name} {client.last_name}
                        </strong>
                        <div className="muted">{client.email}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="modal-actions">
              <button onClick={() => setEditingSlot(null)}>Close</button>
              <button className="apply" onClick={handleSchedule}>
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
