import React, { useEffect, useState } from "react";

import EventBlock from "./EventBlock";
import "./../styles/Calendar.css";

const HOURS = [...Array(24)].map((_, i) => i);

const startOfDay = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

export default function Calendar() {
  const [weekStart, setWeekStart] = useState(startOfDay(new Date()));
  const [events, setEvents] = useState([]);
  const [dragging, setDragging] = useState(null);

  /* ---------- DAYS ---------- */
  const days = [...Array(7)].map((_, i) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    return d;
  });

  /* ---------- NAV ---------- */
  const nextWeek = () =>
    setWeekStart(new Date(weekStart.setDate(weekStart.getDate() + 7)));

  const prevWeek = () =>
    setWeekStart(new Date(weekStart.setDate(weekStart.getDate() - 7)));

  const goToday = () => setWeekStart(startOfDay(new Date()));

  /* ---------- API ---------- */
  useEffect(() => {
    fetch(
      `/api/events?from=${weekStart.toISOString().slice(0, 10)}`
    )
      .then((r) => r.json())
      .then(setEvents)
      .catch(() => {});
  }, [weekStart]);

  /* ---------- DRAG CREATE ---------- */
  const startDrag = (day, hour) => {
    setDragging({
      day: day.toISOString().slice(0, 10),
      start: hour,
      end: hour + 1
    });
  };

  const updateDrag = (hour) => {
    if (!dragging) return;
    setDragging({ ...dragging, end: hour + 1 });
  };

  const endDrag = async () => {
    if (!dragging) return;

    const newEvent = {
      date: dragging.day,
      startHour: dragging.start,
      endHour: dragging.end,
      title: "New event"
    };

    setEvents([...events, newEvent]);

    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent)
    });

    setDragging(null);
  };

  return (
    <section className="calendar-card">
      {/* ---------- HEADER ---------- */}
      <header className="calendar__header sticky">
        <div>
          <h2>
            {days[0].toLocaleDateString("uk-UA", {
              day: "numeric",
              month: "long"
            })}{" "}
            –{" "}
            {days[6].toLocaleDateString("uk-UA", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </h2>
        </div>
        <button className="ghost-btn">Відкріти віконце</button>
        <select className="employee-select">
          <option></option>
          <option>Галя</option>
          <option>Свєта</option>
          <option>Пєтя</option>
        </select>
        <div className="calendar__actions">
          <button className="ghost-btn" onClick={prevWeek}>←</button>
          <button className="ghost-btn" onClick={goToday}>Сьогодні</button>
          <button className="ghost-btn" onClick={nextWeek}>→</button>

          <input
            type="date"
            value={weekStart.toISOString().slice(0, 10)}
            onChange={(e) =>
              setWeekStart(startOfDay(new Date(e.target.value)))
            }
            className="date-picker"
          />

        </div>
      </header>

      {/* ---------- GRID ---------- */}
      <div className="week-calendar">
        {/* Day headers */}
        <div className="week-header">
          <div className="time-col" />
          {days.map((d) => (
            <div key={d} className="day-col-header">
              <div className="day-name">
                {d.toLocaleDateString("uk-UA", { weekday: "short" })}
              </div>
              <div className="day-number">{d.getDate()}</div>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="week-body" onMouseUp={endDrag}>
          {HOURS.map((hour) => (
            <div key={hour} className="week-row">
              <div className="time-col">
                {hour.toString().padStart(2, "0")}:00
              </div>

              {days.map((day) => (
                <div
                  key={`${day}-${hour}`}
                  className="week-cell"
                  onMouseDown={() => startDrag(day, hour)}
                  onMouseEnter={() => updateDrag(hour)}
                />
              ))}
            </div>
          ))}

          {/* EVENTS */}
          {events.map((e, i) => (
            <EventBlock key={i} event={e} weekStart={weekStart} />
          ))}

          {/* DRAG PREVIEW */}
          {dragging && (
            <EventBlock
              event={{
                ...dragging,
                title: ""
              }}
              preview
              weekStart={weekStart}
            />
          )}
        </div>
      </div>
    </section>
  );
}
