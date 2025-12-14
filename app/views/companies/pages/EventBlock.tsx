import React from "react";

export default function EventBlock({ event, weekStart, preview }) {
  const dayIndex =
    (new Date(event.date) - weekStart) / (1000 * 60 * 60 * 24);

  if (dayIndex < 0 || dayIndex > 6) return null;

  return (
    <div
      className={`event-block ${preview ? "preview" : ""}`}
      style={{
        left: `calc(60px + ${dayIndex} * (100% - 60px) / 7)`,
        top: `${event.startHour * 48}px`,
        height: `${(event.endHour - event.startHour) * 48}px`
      }}
    >
      {event.title}
    </div>
  );
}

