import React, { useEffect, useRef, useState } from "react";
import TimeSlotBlock from "./TimeSlotBlock";
import CalendarHeader from "./CalendarHeader";
import TimeSlotForm from "./TimeSlotForm";
import "./../styles/Calendar.css";

import {
  HOURS,
  parseTime,
  toLocalISOString,
  overlaps,
  startOfDay,
  dateAt,
  addDays,
  addMinutes,
  isAvailable,
} from "./../utils/time";

export default function Calendar({ employees, companyId }) {
  const [weekStart, setWeekStart] = useState(startOfDay(new Date()));
  const [editingSlot, setEditingSlot] = useState(null);

  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [availabilityWindow, setAvailabilityWindow] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const weekBodyRef = useRef(null);
  const [previewSlot, setPreviewSlot] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editTimeSlotError, setEditTimeSlotError] = useState(null);
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const fetchAvailability = () => {
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
  };

  /* ---------- AVAILABILITY ---------- */
  useEffect(() => {
    if (!currentEmployee) return;
    fetchAvailability();
  }, [currentEmployee, weekStart]);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());

    tick(); // initial
    const id = setInterval(tick, 60 * 5 * 1000); // update every 5 minutes

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


  const slotsInHour = (day, hour) => {
    const dayStr = day.toISOString().slice(0, 10);

    const cellStart = dateAt(day, hour, 0);
    const cellEnd = dateAt(day, hour + 1, 0);

    return timeSlots.filter((s) => {
      if (s.day !== dayStr) return false;

      const start = parseTime(s.start_time);
      const end = parseTime(s.end_time);

      return overlaps(start, end, cellStart, cellEnd);
    });
  };

  return (
    <section className="calendar-card">
      {/* ---------- HEADER ---------- */}
      <CalendarHeader
        days={days}
        weekStart={weekStart}
        setWeekStart={setWeekStart}
        employees={employees}
        currentEmployee={currentEmployee}
        setCurrentEmployee={(emp) => {
          if (!emp) {
            setCurrentEmployee(null);
            setTimeSlots([]);
            setAvailabilityWindow(null);
            setPreviewSlot(null);
          } else {
            setCurrentEmployee(emp);
          }
        }}
      />

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
                const slots = slotsInHour(day, hour);
                const available = isAvailable({
                  day,
                  hour,
                  window: availabilityWindow,
                });

                return (
                  <div
                    key={`${day.toISOString()}-${hour}`}
                    className={`week-cell ${available ? "" : "unavailable"}`}
                    onMouseDown={(e) => {
                      setEditTimeSlotError(null);
                      if (!available || !currentEmployee) return;

                      const rect = e.currentTarget.getBoundingClientRect();
                      const offsetY = e.clientY - rect.top;
                      const ratio = offsetY / rect.height;

                      const startMinutes = ratio >= 0.5 ? 30 : 0;
                      const endMinutes = startMinutes + 30;

                      const clickedStart = dateAt(day, hour, startMinutes);
                      const clickedEnd = dateAt(day, hour, endMinutes);

                      for (const slot of slots) {
                        const slotStart = parseTime(slot.start_time);
                        const slotEnd = parseTime(slot.end_time);

                        if (
                          overlaps(clickedStart, clickedEnd, slotStart, slotEnd)
                        ) {
                          setSelectedClient(slot);
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
                    {slots.map((slot) => (
                      <TimeSlotBlock key={slot.id} timeSlot={slot} />
                    ))}

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
        <TimeSlotForm
          slot={editingSlot}
          weekStart={weekStart}
          previewSlot={previewSlot}
          setPreviewSlot={setPreviewSlot}
          setTimeSlots={setTimeSlots}
          setEditingSlot={setEditingSlot}
          editingSlot={editingSlot}
          currentEmployee={currentEmployee}
        />
      )}
    </section>
  );
}
