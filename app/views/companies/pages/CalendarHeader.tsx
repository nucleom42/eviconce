import React from "react";
import { useState } from "react";
import { addDays, startOfDay } from "./../utils/time";
import WindowModalForm from "./WindowModalForm";

type Props = {
  days: Date[];
  weekStart: Date;
  setWeekStart: (d: Date) => void;

  employees: any[];
  currentEmployee: any;
  setCurrentEmployee: (e: any | null) => void;
};

export default function CalendarHeader({
  days,
  weekStart,
  setWeekStart,
  employees,
  currentEmployee,
  setCurrentEmployee,
}: Props) {
  /* ---------- NAV ---------- */
  const nextWeek = () => setWeekStart(addDays(weekStart, 7));
  const prevWeek = () => setWeekStart(addDays(weekStart, -7));
  const goToday = () => setWeekStart(startOfDay(new Date()));
  const [windowModalOpen, setWindowModalOpen] = useState(false);
  const hasWindow = currentEmployee?.window;
  return (
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
            setCurrentEmployee(null);
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
      {currentEmployee && !hasWindow && (
        <button className="secondary" onClick={() => setWindowModalOpen(true)}>
          Відкрити віконце
        </button>
      )}
      {currentEmployee && (
        <WindowModalForm
          open={windowModalOpen}
          employee={currentEmployee}
          window={currentEmployee.window}
          onClose={() => setWindowModalOpen(false)}
          onSaved={(window) => {
            setCurrentEmployee((prev) => (prev ? { ...prev, window } : prev));
          }}
        />
      )}

      <div className="calendar__actions">
        <button onClick={prevWeek}>←</button>
        <button onClick={goToday}>Сьогодні</button>
        <button onClick={nextWeek}>→</button>

        <input
          className="date__picker"
          type="date"
          value={weekStart.toISOString().slice(0, 10)}
          onChange={(e) => setWeekStart(new Date(e.target.value + "T00:00:00"))}
        />
      </div>
    </header>
  );
}
