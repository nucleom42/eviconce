import React, { useState } from "react";

type Props = {
  open: boolean;
  employee: any;
  onClose: () => void;
  onCreated: (service: any) => void;
};

export default function ServiceModalForm({
  open,
  employee,
  onClose,
  onCreated,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    duration: 30,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successCreatedMessage, setSuccessCreatedMessage] = useState<
    string | null
  >(null);

  if (!open) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    const payload = {
      ...form,
      employee_id: employee.id,
    };

    try {
      const res = await fetch("/api/services", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const service = await res.json();
      setSuccessCreatedMessage(`Service ${service.name} successfully created`);
      setTimeout(() => {
        setSuccessCreatedMessage(null);
        onCreated(service);
        onClose();
      }, 1000);
    } catch (e: any) {
      setError(e.message || "Failed to create service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="glass-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Add Service</h3>
        {error && <div className="form__error">{error}</div>}

        {successCreatedMessage && (
          <div className="form__success">{successCreatedMessage}</div>
        )}
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          type="number"
          step={15}
          min={15}
          placeholder="Duration (min)"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
        />

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="apply" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
