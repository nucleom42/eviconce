import React, { useState, useEffect } from "react";
import { toTimeValue, applyTime, toLocalISOString } from "../utils/time";
import ConfirmModal from "./ConfirmModal";
import "./../styles/WindowModalForm.css";


type Props = {
  open: boolean;
  employee: any;
  window?: any | null; // existing window (for edit)
  onClose: () => void;
  onSaved: (window: any) => void;
};

export default function WindowModalForm({
  open,
  employee,
  window,
  onClose,
  onSaved,
}: Props) {
  const [form, setForm] = useState({
    start_time: "",
    end_time: "",
    break_from: "",
    break_to: "",
    weekends: [] as number[],
    effective_date: new Date().toISOString().slice(0, 10),
    end_date: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const WEEKDAYS = [
    { id: 0, label: "Пн" },
    { id: 1, label: "Вт" },
    { id: 2, label: "Ср" },
    { id: 3, label: "Чт" },
    { id: 4, label: "Пт" },
    { id: 5, label: "Сб" },
    { id: 6, label: "Нд" },
  ];
  const [confirmOpen, setConfirmOpen] = useState(false);

  /* ---------- PREFILL ON EDIT ---------- */

  useEffect(() => {
    if (!open) return;

    if (window) {
      setForm({
        start_time: window.start_time || "",
        end_time: window.end_time || "",
        break_from: window.break_from || "",
        break_to: window.break_to || "",
        weekends: Array.isArray(window.weekends) ? window.weekends : [],
        effective_date: window.effective_date || "",
        end_date: window.end_date || "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [window, open]);

  const emptyForm = {
    start_time: "",
    end_time: "",
    break_from: "",
    break_to: "",
    weekends: [] as number[],
    effective_date: new Date().toISOString().slice(0, 10),
    end_date: "",
  };

  useEffect(() => {
    setError(null);
    setSuccessMessage(null);
  }, [open, window]);

  if (!open) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const payload = {
      ...form,
      employee_id: employee.id,
      id: window?.id,
    };

    try {
      const res = await fetch(`/api/windows/upsert`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const savedWindow = await res.json();

      setSuccessMessage(window ? "Віконце оновлено" : "Віконце створено");

      setTimeout(() => {
        setSuccessMessage(null);
        onSaved(savedWindow);
        onClose();
      }, 800);
    } catch (e: any) {
      setError(e.message || "Failed to save window");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window) return;
    try {
    const res = await fetch(`/api/windows/${window.id}`, { method: "DELETE", credentials: "include" });
    if (!res.ok) {
      throw new Error(await res.text());
    }
    setSuccessMessage("Віконце видалено");

    setTimeout(() => {
      setSuccessMessage(null);
      onSaved(null);
      onClose();
    }, 800);
    } catch (e: any) {
      setError(e.message || "Failed to delete window");
    }
  };

  return (
    form && (
      <>
        <div className="confirm-overlay" onClick={onClose}>
          <div className="glass-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{window ? "Редагувати віконце" : "Відкрити віконце"}</h3>

            {error && <div className="form__error">{error}</div>}
            {successMessage && (
              <div className="form__success">{successMessage}</div>
            )}

            <label>Start time</label>
            <input
              type="time"
              value={toTimeValue(form.start_time)}
              onChange={(e) => {
                const newTime = applyTime(
                  form.start_time || new Date().toISOString(),
                  e.target.value,
                );
                setForm((prev) => ({ ...prev, start_time: newTime }));
              }}
            />

            <label>End time</label>
            <input
              type="time"
              value={toTimeValue(form.end_time)}
              onChange={(e) => {
                const newTime = applyTime(
                  form.end_time || new Date().toISOString(),
                  e.target.value,
                );
                setForm((prev) => ({ ...prev, end_time: newTime }));
              }}
            />

            <label>Break from</label>
            <input
              type="time"
              value={toTimeValue(form.break_from)}
              onChange={(e) => {
                const newTime = applyTime(
                  form.break_from || new Date().toISOString(),
                  e.target.value,
                );
                setForm((prev) => ({ ...prev, break_from: newTime }));
              }}
            />

            <label>Break to</label>
            <input
              type="time"
              value={toTimeValue(form.break_to)}
              onChange={(e) => {
                const newTime = applyTime(
                  form.break_to || new Date().toISOString(),
                  e.target.value,
                );
                setForm((prev) => ({ ...prev, break_to: newTime }));
              }}
            />

            <div className="weekday-picker">
              <label className="form-label">Вихідні</label>

              <div className="weekday-grid">
                {WEEKDAYS.map((day) => {
                  const checked = form.weekends?.includes(day.id);

                  return (
                    <label key={day.id} className="weekday-checkbox mb-2">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          setForm((prev) => ({
                            ...prev,
                            weekends: checked
                              ? prev.weekends.filter((d) => d !== day.id)
                              : [...prev.weekends, day.id],
                          }));
                        }}
                      />
                      <span>{day.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <label>Effective date</label>
            <input
              type="date"
              value={form.effective_date}
              onChange={(e) =>
                setForm({ ...form, effective_date: e.target.value })
              }
            />

            <label>End date</label>
            <input
              type="date"
              value={form.end_date}
              onChange={(e) => setForm({ ...form, end_date: e.target.value })}
            />

            <div className="modal-actions">
              <button onClick={onClose} disabled={loading}>
                Cancel
              </button>
              {window && (
                <>
                  <button
                    className="danger"
                    onClick={() => setConfirmOpen(true)}
                  >
                    Delete
                  </button>

                  <ConfirmModal
                    open={confirmOpen}
                    title="Delete window"
                    message="Are you sure you want to delete this window?"
                    confirmText="Yes"
                    cancelText="No"
                    onConfirm={() => {
                      setConfirmOpen(false);
                      handleDelete();
                    }}
                    onCancel={() => setConfirmOpen(false)}
                  />
                </>
              )}
              <button
                className="apply"
                onClick={handleSubmit}
                disabled={loading}
              >
                {window ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
}
