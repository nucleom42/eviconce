import React from "react";
import { useEffect, useState } from "react";
import {
  addMinutes,
  applyTime,
  toLocalISOString,
  toTimeValue,
  addDays,
} from "../utils/time";

type Props = {
  slot: any | null;
  weekStart: Date;
  previewSlot: any | null;
  setPreviewSlot: (s: any | null) => void;
  setTimeSlots: (s: any[]) => void;
  currentEmployee: any;
};

export default function TimeSlotForm({
  slot,
  weekStart,
  previewSlot,
  setPreviewSlot,
  setTimeSlots,
  currentEmployee,
}: Props) {
  const [editingSlot, setEditingSlot] = useState<any | null>(slot);
  const [timeStep, setTimeStep] = useState(() => slot?.duration ?? 15);

  const [clientQuery, setClientQuery] = useState("");
  const [clientResults, setClientResults] = useState<any[]>([]);
  const [clientLoading, setClientLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any | null>(null);
  const [editTimeSlotError, setEditTimeSlotError] = useState(null);
  const [editTimeSlotSuccess, setEditTimeSlotSuccess] = useState(null);
  const [availabilityWindow, setAvailabilityWindow] = useState(null);

  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [selectedServiceCustomPrice, setSelectedServiceCustomPrice] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (!slot) return;
    setEditingSlot(slot);
    setTimeStep(slot.duration ?? 15);
  }, [slot]);

  if (!editingSlot) return null;

  const shiftMinutes = (iso: string, mins: number) =>
    toLocalISOString(addMinutes(new Date(iso), mins));

  const queryClientSearch = (query: string) => {
    if (!query || query.length < 3) return;
    setClientLoading(true);

    fetch(`/api/clients?search=${query}`)
      .then((r) => r.json())
      .then((json) => {
        setClientLoading(false);
        setClientResults(json);
      });
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
        <h3>Edit time slot: {editingSlot.state?.toUpperCase()}</h3>

        {editTimeSlotError && (
          <div className="form__error">{editTimeSlotError}</div>
        )}
        {editTimeSlotSuccess && (
          <div className="form__success">{editTimeSlotSuccess}</div>
        )}

        {/* ---------- SERVICE ---------- */}
        <div className="form-group">
          <label>Service</label>
          <div className="time-range-row">
            <select
              className="width-100"
              onChange={(e) => {
                const newDuration = Number(e.target.value);
                const start = new Date(editingSlot.start_time);
                setTimeStep(newDuration);
                setEditingSlot((prev) => ({
                  ...prev,
                  duration: newDuration,
                  end_time: toLocalISOString(addMinutes(start, newDuration)),
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
                const serviceId = Number(e.target.value);
                let foundService = currentEmployee.services.find(
                  (s) => s.duration === serviceId,
                );
                if (!foundService) {
                  foundService = {
                    duration: newDuration,
                    name: e.target.name,
                    price: 0.0,
                  };
                }
                setSelectedService(foundService);
                setSelectedServiceCustomPrice(null);
              }}
            >
              {" "}
              <option value="">Select a service</option>
              {currentEmployee.services.length === 0 && (
                <>
                  <option value={15} name="quarter">
                    quarter
                  </option>
                  <option value={30} name="half">
                    half
                  </option>
                  <option value={45} name="academic">
                    academic
                  </option>
                  <option value={60} name="hour">
                    hour
                  </option>
                </>
              )}
              {currentEmployee.services.map((s) => (
                <option key={s.id} value={s.duration}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          {selectedService && (
            <>
              <div className="time-range-row mt-1 t-sm">
                <label>Duration</label>
                <input
                  type="number"
                  className="width-33"
                  step={15}
                  min={15}
                  value={selectedService.duration}
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
                    setSelectedService((prev) => ({
                      ...prev,
                      duration: newDuration,
                    }));
                  }}
                />
                <label className="content-center">Price</label>
                <input
                  type="number"
                  className="width-33"
                  step={0.01}
                  min={0}
                  value={
                    selectedServiceCustomPrice ||
                    Number(selectedService.price) ||
                    0
                  }
                  onChange={(e) => {
                    setSelectedServiceCustomPrice(Number(e.target.value));
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
          <input
            type="text"
            placeholder="Search client..."
            value={
              editingSlot?.client
                ? `${editingSlot.client.first_name} ${editingSlot.client.last_name}`
                : clientQuery
            }
            onChange={(e) => {
              setClientQuery(e.target.value);
              queryClientSearch(e.target.value);
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
              setEditingSlot(null);
              setClientQuery("");
              setSelectedClient(null);
              setPreviewSlot(null);
            }}
          >
            Close
          </button>
          <button className="apply" onClick={handleSchedule}>
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
