import React, { useEffect, useState } from "react";
import EventBlock from "./EventBlock";
import "./../styles/Calendar.css";

const HOURS = Array.from({ length: 24 }, (_, i) => i);

const parseTime = (str) =>
  new Date(str.replace(" ", "T").replace(" -", "-"));

/* ---------- DATE HELPERS ---------- */
const startOfDay = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const hourOf = (d) => parseTime(d).getHours();

const isWeekend = (day, weekends = []) => {
  const wday = day.getDay() === 0 ? 7 : day.getDay();
  return weekends.includes(wday);
};

const isWithin = (hour, from, to) => hour >= from && hour < to;

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

export default function Calendar({ employees }) {
  const [weekStart, setWeekStart] = useState(startOfDay(new Date()));
  const [events, setEvents] = useState([]);
  const [dragging, setDragging] = useState(null);

  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [availabilityWindow, setAvailabilityWindow] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  /* ---------- DAYS ---------- */
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  /* ---------- NAV ---------- */
  const nextWeek = () => setWeekStart(addDays(weekStart, 7));
  const prevWeek = () => setWeekStart(addDays(weekStart, -7));
  const goToday = () => setWeekStart(startOfDay(new Date()));

  /* ---------- AVAILABILITY ---------- */
  useEffect(() => {
    if (!currentEmployee) return;

    const from = weekStart.toISOString().slice(0, 10);
    const to = addDays(weekStart, 6).toISOString().slice(0, 10);

    fetch(
      `/api/employees/${currentEmployee.id}/availability?from=${from}&to=${to}`
    )
      .then((r) => r.json())
      .then((json) => {
        setAvailabilityWindow(json.employee.window);
        setTimeSlots(json.employee.time_slots);
      });
  }, [currentEmployee, weekStart]);

  /* ---------- EVENTS ---------- */
  useEffect(() => {
    const from = weekStart.toISOString().slice(0, 10);

    fetch(`/api/events?from=${from}`)
      .then((r) => r.json())
      .then(setEvents)
      .catch(() => {});
  }, [weekStart]);

  /* ---------- OCCUPIED ---------- */

const isOccupied = (day, hour) => {
  const dayStr = day.toISOString().slice(0, 10);

  return timeSlots.some((s) => {
    if (s.day !== dayStr) return false;

    const start = parseTime(s.start_time);
    const end = parseTime(s.end_time);

    const hStart = start.getHours() + start.getMinutes() / 60;
    const hEnd = end.getHours() + end.getMinutes() / 60;

    return hour >= hStart && hour < hEnd;
  });
};


  /* ---------- DRAG ---------- */
  const startDrag = (day, hour) => {
    if (isOccupied(day, hour)) return;

    setDragging({
      date: day.toISOString().slice(0, 10),
      startHour: hour,
      endHour: hour + 1,
      title: ""
    });
  };

  const updateDrag = (hour) => {
    if (!dragging) return;
    setDragging((d) => ({ ...d, endHour: hour + 1 }));
  };

  const endDrag = async () => {
    if (!dragging) return;

    const event = { ...dragging, title: "New event" };
    setEvents((e) => [...e, event]);

    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event)
    });

    setDragging(null);
  };

  /* ---------- TIME SLOT BLOCKS ---------- */

  const slotEvents = timeSlots.map((slot) => {
    const start = parseTime(slot.start_time);
    const end = parseTime(slot.end_time);

    return {
      id: slot.id,
      date: slot.day,
      startHour: start.getHours() + start.getMinutes() / 60,
      endHour: end.getHours() + end.getMinutes() / 60,
      title: ""
    };
  });

  const slotStartingAt = (day, hour) => {
    const dayStr = day.toISOString().slice(0, 10);

    return timeSlots.find((s) => {
      if (s.day !== dayStr) return false;

      const start = parseTime(s.start_time);
      return start.getHours() === hour;
    });
  };



  return (
    <section className="calendar-card">
      {/* ---------- HEADER ---------- */}
      <header className="calendar__header sticky">
        <h2>
          {days[0].toLocaleDateString("uk-UA", { day: "numeric", month: "long" })}
          {" – "}
          {days[6].toLocaleDateString("uk-UA", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </h2>

        <select
          value={currentEmployee?.id || ""}
          onChange={(e) =>
            setCurrentEmployee(
              employees.find((emp) => emp.id === Number(e.target.value))
            )
          }
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
            type="date"
            value={weekStart.toISOString().slice(0, 10)}
            onChange={(e) =>
              setWeekStart(startOfDay(new Date(e.target.value)))
            }
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

        <div className="week-body" onMouseUp={endDrag}>
          {HOURS.map((hour) => (
            <div key={hour} className="week-row">
              <div className="time-col">{hour}:00</div>


              {days.map((day) => {
                const slot = slotStartingAt(day, hour);
                const available =
                  isAvailable({ day, hour, window: availabilityWindow })

                return (
                  <div
                    key={`${day}-${hour}`}
                    className={`week-cell ${available ? "" : "unavailable"}`}
                    onMouseDown={
                      available ? () => startDrag(day, hour) : undefined
                    }
                    onMouseEnter={
                      available ? () => updateDrag(hour) : undefined
                    }
                  >
                    {slot && (
                      <div
                        className="time-slot-block"
                        style={{
                          height: `${
                            (parseTime(slot.end_time) - parseTime(slot.start_time)) /
                            (1000 * 60 * 60) *
                            100
                          }%`
                        }}
                      />
                    )}
                  </div>
                );
              })}

            </div>
          ))}

          {/* EVENTS */}
          {events.map((e, i) => (
            <EventBlock key={`event-${i}`} event={e} weekStart={weekStart} />
          ))}

          {/* TIME SLOTS */}
          {slotEvents.map((e) => (
            <EventBlock
              key={`slot-${e.id}`}
              event={e}
              weekStart={weekStart}
              busy
            />
          ))}

          {/* DRAG PREVIEW */}
          {dragging && (
            <EventBlock preview event={dragging} weekStart={weekStart} />
          )}
        </div>
      </div>
    </section>
  );
}
