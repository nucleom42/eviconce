export const HOURS = Array.from({ length: 24 }, (_, i) => i);

export const parseTime = (str) => {
  if (!str) return null;

  return new Date(str.replace(" ", "T").replace(" -", "-"));
};

export const toLocalISOString = (date) => {
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

export const windowForDay = (day, windows) => {
  const dayOnly = startOfDay(day);

  return (
    windows
      .filter((w) => {
        const from = parseDateOnly(w?.effective_date);
        const to = parseDateOnly(w?.end_date);
        if (from && from > dayOnly) return false;
        if (to && to < dayOnly) return false;
        return true;
      })
      .sort(
        (a, b) => parseDateOnly(b?.effective_date) - parseDateOnly(a?.effective_date),
      )[0] || null
  );
};

export const overlaps = (aStart, aEnd, bStart, bEnd) =>
  aStart < bEnd && bStart < aEnd;

export const nextBlockedTime = (day, startTime) => {
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
export const startOfDay = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

export const dateAt = (d, hours, minutes) => {
  const x = new Date(d);
  x.setHours(hours, minutes, 0, 0);
  return x;
};

export const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

export const hourOf = (d) => {
  if (!d) return null;
  return parseTime(d).getHours();
};

export const isWeekend = (day, weekends = []) => {
  if (!weekends.length) return false;
  const wday = day.getDay() === 0 ? 7 : day.getDay();
  return weekends.includes(wday);
};

export const isWithin = (hour, from, to) => hour >= from && hour < to;

export const roundToStep = (date, step = 15) => {
  const d = new Date(date);
  const minutes = d.getMinutes();
  const rounded = Math.round(minutes / step) * step;
  d.setMinutes(rounded, 0, 0);
  return d;
};

export const addMinutes = (date, mins) =>
  new Date(date.getTime() + mins * 60 * 1000);

const dateOnly = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

const parseDateOnly = (str) => {
  if (!str) return null;
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/* ---------- AVAILABILITY (WINDOW ONLY) ---------- */
export const isAvailable = ({ day, hour, window }) => {
  if (!window) return false;
  if (day < startOfDay(new Date())) return false;

  const effective_date = parseDateOnly(window.effective_date);
  const effective_end = parseDateOnly(window.end_date);
  if (effective_date && effective_date > day) return false;
  if (effective_end && effective_end < day) return false;

  if (isWeekend(day, window.weekends)) return false;

  const startHour = hourOf(window.start_time);
  const endHour = hourOf(window.end_time);
  if (!isWithin(hour, startHour, endHour)) return false;

  const breakFrom = hourOf(window.break_from);
  const breakTo = hourOf(window.break_to);
  if (isWithin(hour, breakFrom, breakTo)) return false;

  return true;
};

export const isAvailableForDay = ({ day, hour, windows }) => {
  const window = windowForDay(day, windows);
  if (!window) return false;

  return isAvailable({ day, hour, window });
};


/* ---------- AVAILABILITY (WINDOW LIST) ---------- */
export const isAvailableInAny = ({ day, hour, windows }) => {
  if (!windows || windows.length === 0) return false;

  return windows.some((window) => {
    return isAvailable({ day, hour, window });
  });
};

export const toTimeValue = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, "0")}:${String(
    d.getMinutes(),
  ).padStart(2, "0")}`;
};

export const applyTime = (baseISO, hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const d = new Date(baseISO);
  d.setHours(h, m, 0, 0);
  return toLocalISOString(d);
};
