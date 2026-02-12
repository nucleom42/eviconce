import React from "react";
export default function TimeSlotBlock({ timeSlot }) {
  const parseTime = (val) => (val instanceof Date ? val : new Date(val));

  const start = parseTime(timeSlot.start_time);
  const end = parseTime(timeSlot.end_time);

  const durationHours = (end - start) / (1000 * 60 * 60);
  const durationMinutes = (end - start) / (1000 * 60);
  const offsetMinutes = start.getMinutes(); // 0 or 30
  const clientName = timeSlot.client?.first_name;

  return (
    <div
      className={`time-slot-block ${timeSlot.state}`}
      style={{
        position: "absolute",
        top: `${(offsetMinutes / 60) * 100}%`,
        height: `${durationHours * 100}%`,
        left: 0,
        right: 0,
      }}
    >
      {clientName ? (
        <>
          <div className="client-name">{clientName}</div>
          <div className="time-label">
            {timeSlot.service_name} ({durationMinutes} min)
          </div>
        </>
      ) : (
        <>
          <div>{timeSlot.state}</div>
        </>
      )}
    </div>
  );
}
