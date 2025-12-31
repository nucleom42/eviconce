import React from "react";

export default function TimeInput({ value, onChangeFunc }) {
  return (
    <div className="time-range-row">
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFunc(e.target.value)}
        inputMode="numeric"
        placeholder="HH:MM"
      />
    </div>
  );
};
