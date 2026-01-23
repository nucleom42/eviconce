import React from "react";
import { useEffect, useState, useRef } from "react";
import {
  addMinutes,
  applyTime,
  toLocalISOString,
  toTimeValue,
  addDays,
  dateAt,
} from "../utils/time";
import ConfirmModal from "./ConfirmModal";
import ClientModalForm from "./ClientModalForm";
import ServiceModalForm from "./ServiceModalForm";
import WindowModalForm from "./WindowModalForm";

import "./../styles/TimeSlotForm.css";

type Props = {
  slot: any | null;
  weekStart: Date;
  previewSlot: any | null;
  setPreviewSlot: (s: any | null) => void;
  setTimeSlots: (s: any[]) => void;
  setEditingSlot: (s: any | null) => void;
  editingSlot: any | null;
  currentEmployee: any;
};

export default function TimeSlotForm({
  slot,
  weekStart,
  previewSlot,
  setPreviewSlot,
  setTimeSlots,
  setEditingSlot,
  editingSlot,
  currentEmployee,
}: Props) {
  const [timeStep, setTimeStep] = useState(() => slot?.duration ?? 15);
  const [clientQuery, setClientQuery] = useState("");
  const [clientResults, setClientResults] = useState<any[]>([]);
  const [clientLoading, setClientLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any | null>(null);
  const [editTimeSlotError, setEditTimeSlotError] = useState(null);
  const [editTimeSlotSuccess, setEditTimeSlotSuccess] = useState(null);
  const [availabilityWindow, setAvailabilityWindow] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [selectedServiceCustomPrice, setSelectedServiceCustomPrice] = useState<
    number | null
  >(null);
  const [clientModalOpen, setClientModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  useEffect(() => {
    if (!slot) return;

    setEditingSlot(slot);
    setTimeStep(slot.duration ?? 15);

    const service = currentEmployee.services.find(
      (s) => s.id === slot.service_id,
    );

    if (service) {
      setSelectedService(service);
      const price = slot.price ? Number(slot.price) : null;
      setSelectedServiceCustomPrice(price);
    }
  }, [slot, currentEmployee]);

  if (!editingSlot) return null;

  const shiftMinutes = (iso: string, mins: number) =>
    toLocalISOString(addMinutes(new Date(iso), mins));

  const searchTimeout = useRef<number | null>(null);

  const queryClientSearch = (query: string) => {
    if (!query || query.length < 3) return;

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = window.setTimeout(async () => {
      setClientLoading(true);

      const res = await fetch(`/api/clients?search=${query}`);
      const json = await res.json();

      setClientResults(json);
      setClientLoading(false);
    }, 250);
  };

  const handleUpdate = async () => {
    setEditTimeSlotError(null);
    if (!editingSlot) return;

    try {
      const res = await fetch(`/api/time_slots/${editingSlot.id}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSlot),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Failed to update time slot");
      }

      const json = await res.json();

      setTimeSlots((prev) => prev.map((s) => (s.id === json.id ? json : s)));
      setEditTimeSlotSuccess("Time slot updated successfully!");
      setTimeout(() => {
        setEditTimeSlotSuccess(null);
        setEditingSlot(null);
        setClientQuery("");
        setSelectedClient(null);
        setPreviewSlot(null);
      }, 1000);
      fetchAvailability();
    } catch (err) {
      setEditTimeSlotError(err.message);
    }
  };

  const handleCancel = async () => {
    setEditTimeSlotError(null);
    if (!editingSlot) return;

    try {
      const res = await fetch(`/api/time_slots/${editingSlot.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Failed to delete time slot");
      }

      const json = await res.json();

      setTimeSlots((prev) => prev.filter((s) => s.id !== json.id));
      setEditTimeSlotSuccess("Time slot deleted successfully!");
      setTimeout(() => {
        setEditTimeSlotSuccess(null);
        setEditingSlot(null);
        setClientQuery("");
        setSelectedClient(null);
        setPreviewSlot(null);
      }, 1000);
      fetchAvailability();
    } catch (err) {
      setEditTimeSlotError(err.message);
    }
  };

  const handleSchedule = async () => {
    setEditTimeSlotError(null);
    if (!editingSlot) return;

    const payload = {
      ...editingSlot,
      client_id: editingSlot.client_id ?? previewSlot?.client_id ?? null,
    };

    console.log("POST payload:", payload);

    try {
      const res = await fetch("/api/time_slots", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Failed to schedule time slot");
      }

      const json = await res.json();

      setTimeSlots((prev) => [...prev, json]);
      setEditTimeSlotSuccess("Time slot scheduled successfully!");
      setTimeout(() => {
        setEditTimeSlotSuccess(null);
        setEditingSlot(null);
        setClientQuery("");
        setSelectedClient(null);
        setPreviewSlot(null);
      }, 1000);

      fetchAvailability();
    } catch (err) {
      setEditTimeSlotError(err.message);
    }
  };

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

  return (
    <div className="glass-overlay" onClick={() => setEditingSlot(null)}>
      <div className="glass-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form__title">
          <div className="form__title-left">Edit time slot:</div>
          <div className={`form__title-right form__title_${editingSlot.state}`}>
            {editingSlot.state}
          </div>
        </div>

        {editTimeSlotError && (
          <div className="form__error">{editTimeSlotError}</div>
        )}
        {editTimeSlotSuccess && (
          <div className="form__success">{editTimeSlotSuccess}</div>
        )}

        {/* ---------- DATE ---------- */}
        <div className="form-group mt-3">
          <div className="time-range-row">
            <label>Date</label>
            <input
              type="date"
              className="date__picker"
              value={editingSlot.day}
              onChange={(e) => {
                const day = e.target.value;

                setEditingSlot((prev) => ({
                  ...prev,
                  day,
                  start_time: `${day}${prev.start_time.slice(10)}`,
                  end_time: `${day}${prev.end_time.slice(10)}`,
                }));
              }}
            />
          </div>
        </div>

        {/* ---------- SERVICE ---------- */}
        <div className="form-group mt-2">
          <label>Service</label>
          <div className="time-range-row">
            <div className="input-with-button">
              <select
                className="width-100"
                value={editingSlot.service_id ?? ""}
                onChange={(e) => {
                  const serviceId = Number(e.target.value);
                  const service = currentEmployee.services.find(
                    (s) => s.id === serviceId,
                  );

                  if (!service) {
                    setSelectedService(null);
                    setSelectedServiceCustomPrice(null);
                    return;
                  }

                  const start = new Date(editingSlot.start_time);

                  setTimeStep(service.duration);

                  const updated = {
                    service_id: service.id,
                    duration: service.duration,
                    price: service.price,
                    end_time: toLocalISOString(
                      addMinutes(start, service.duration),
                    ),
                  };

                  setEditingSlot((prev) => ({ ...prev, ...updated }));
                  setPreviewSlot((prev) =>
                    prev ? { ...prev, ...updated } : null,
                  );

                  setSelectedService(service);
                  setSelectedServiceCustomPrice(null);
                }}
              >
                <option value="">Select a service</option>
                {currentEmployee.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
              <div
                className="input-button content-center"
                title="Add service"
                onClick={() => setServiceModalOpen(true)}
              >
                +
              </div>
            </div>
            <ServiceModalForm
              open={serviceModalOpen}
              employee={currentEmployee}
              onClose={() => setServiceModalOpen(false)}
              onCreated={(service) => {
                // add to employee services
                currentEmployee.services.push(service);

                setEditingSlot((prev) => ({
                  ...prev,
                  service_id: service.id,
                  duration: service.duration,
                  price: service.price,
                }));

                setSelectedService(service);
                setServiceModalOpen(false);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          {/* Time range and price */}
          {selectedService && (
            <>
              <div className="time-range-row mt-1 t-sm">
                <label>Duration</label>

                <input
                  type="number"
                  step={15}
                  min={15}
                  value={editingSlot.duration}
                  onChange={(e) => {
                    const newDuration = Number(e.target.value);
                    const start = new Date(editingSlot.start_time);

                    setTimeStep(newDuration);

                    setEditingSlot((prev) => ({
                      ...prev,
                      duration: newDuration,
                      end_time: toLocalISOString(
                        addMinutes(start, newDuration),
                      ),
                    }));

                    setPreviewSlot((prev) =>
                      prev
                        ? {
                            ...prev,
                            duration: newDuration,
                            end_time: toLocalISOString(
                              addMinutes(start, newDuration),
                            ),
                          }
                        : null,
                    );
                  }}
                />

                <label className="content-center">Price</label>

                <input
                  type="number"
                  step={0.01}
                  min={0}
                  value={
                    selectedServiceCustomPrice ??
                    Number(editingSlot.price ?? selectedService?.price ?? 0)
                  }
                  onChange={(e) => {
                    const price = Number(e.target.value);

                    setSelectedServiceCustomPrice(price);
                    setEditingSlot((prev) => ({
                      ...prev,
                      price,
                    }));
                  }}
                />
              </div>
            </>
          )}
        </div>

        {/* ---------- TIME ---------- */}
        <div className="form-group time-range">
          <label>Time</label>
          <div className="time-range-row">
            <input
              type="time"
              step={900}
              value={toTimeValue(editingSlot.start_time)}
              onChange={(e) => {
                const newStart = applyTime(
                  editingSlot.start_time,
                  e.target.value,
                );
                setEditingSlot((prev) => ({
                  ...prev,
                  start_time: newStart,
                  end_time: shiftMinutes(newStart, timeStep),
                }));
              }}
            />

            <input
              type="time"
              step={900}
              value={toTimeValue(editingSlot.end_time)}
              onChange={(e) => {
                const newEnd = applyTime(editingSlot.end_time, e.target.value);
                setEditingSlot((prev) => ({
                  ...prev,
                  end_time: newEnd,
                  start_time: shiftMinutes(newEnd, -timeStep),
                }));
              }}
            />
          </div>
        </div>

        {/* ---------- CLIENT ---------- */}
        <div className="form-group">
          <label>Client</label>
          <div className="input-with-button">
            <input
              type="text"
              placeholder="Search client..."
              value={
                editingSlot?.client
                  ? `${editingSlot.client.first_name} ${editingSlot.client.last_name}`
                  : clientQuery
              }
              onChange={(e) => {
                // If user starts typing → remove selected client
                setEditingSlot((prev) => ({
                  ...prev,
                  client: null,
                  client_id: null,
                }));
                setClientQuery(e.target.value);
                queryClientSearch(e.target.value);
              }}
            />
            <div
              className="input-button content-center"
              onClick={() => setClientModalOpen(true)}
              title="Add client"
            >
              +
            </div>
          </div>
          <ClientModalForm
            open={clientModalOpen}
            onClose={() => setClientModalOpen(false)}
            onCreated={(client) => {
              setEditingSlot((prev) => ({
                ...prev,
                client_id: client.id,
                client,
              }));
            }}
          />

          {clientLoading && <div className="hint">Searching…</div>}

          {clientResults.length > 0 && (
            <ul className="autocomplete-list">
              {clientResults.map((client) => (
                <li
                  key={client.id}
                  onClick={() => {
                    setClientResults([]);
                    setEditingSlot((prev) => ({
                      ...prev,
                      client_id: client.id,
                      client,
                    }));
                  }}
                >
                  <strong>
                    {client.first_name} {client.last_name}
                  </strong>
                  <div className="muted">{client.email}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ---------- ACTIONS ---------- */}
        <div className="modal-actions">
          <button
            onClick={() => {
              setEditTimeSlotError(null);
              setEditingSlot(null);
              setClientQuery("");
              setSelectedClient(null);
            }}
          >
            Close
          </button>
          {editingSlot.state === "preview" && (
            <button className="apply" onClick={handleSchedule}>
              Schedule
            </button>
          )}

          {editingSlot.state === "scheduled" && (
            <>
              <button className="danger" onClick={() => setConfirmOpen(true)}>
                Delete
              </button>

              <ConfirmModal
                open={confirmOpen}
                title="Delete time slot"
                message="Are you sure you want to delete this time slot?"
                confirmText="Yes"
                cancelText="No"
                onConfirm={() => {
                  setConfirmOpen(false);
                  handleCancel();
                }}
                onCancel={() => setConfirmOpen(false)}
              />
            </>
          )}
          {editingSlot.state === "scheduled" && (
            <button className="apply" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
