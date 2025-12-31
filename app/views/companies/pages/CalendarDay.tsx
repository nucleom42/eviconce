import React from "react";

export default function CalendarDay({ date }) {
  return (
    <div className="dayview-embedded">
      {[...Array(24)].map((_, hour) => (
        <div key={hour} className="time-row">
          <span className="time-label">
            {hour.toString().padStart(2, "0")}:00
          </span>
          <div className="time-slot"></div>
        </div>
      ))}
    </div>
  );
}

