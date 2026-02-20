import React, { useState, useEffect } from "react";

type Props = {
  open: boolean;
  employee: any;
  service?: any; // Optional - if provided, we're editing
  onClose: () => void;
  onSaved: (service: any) => void;
};

export default function ServiceModalForm({
  open,
  employee,
  service,
  onClose,
  onSaved,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    duration: 30,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Prefill form when editing
  useEffect(() => {
    if (service) {
      setForm({
        name: service.name || "",
        description: service.description || "",
        price: service.price || "",
        duration: service.duration || 30,
      });
    } else {
      // Reset form when creating new
      setForm({
        name: "",
        description: "",
        price: "",
        duration: 30,
      });
    }
  }, [service, open]);

  if (!open) return null;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const payload = {
      ...form,
      employee_id: employee.id,
    };

    const url = service ? `/api/services/${service.id}` : "/api/services";
    const method = service ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const savedService = await res.json();
      const message = service
        ? `Service ${savedService.name} successfully updated`
        : `Service ${savedService.name} successfully created`;

      setSuccessMessage(message);

      setTimeout(() => {
        setSuccessMessage(null);
        onSaved(savedService);
        onClose();
      }, 1000);
    } catch (e: any) {
      setError(e.message || "Failed to save service");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!service) return;
    if (!window.confirm(`Are you sure you want to delete ${service.name}?`)) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/services/${service.id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      setSuccessMessage("Service deleted successfully");
      setTimeout(() => {
        setSuccessMessage(null);
        onSaved(null); // Signal deletion
        onClose();
      }, 1000);
    } catch (e: any) {
      setError(e.message || "Failed to delete service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="glass-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{service ? "Edit Service" : "Add Service"}</h3>

        {error && <div className="form__error">{error}</div>}
        {successMessage && (
          <div className="form__success">{successMessage}</div>
        )}

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          disabled={loading}
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          disabled={loading}
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          disabled={loading}
        />

        <input
          type="number"
          step={15}
          min={15}
          placeholder="Duration (min)"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: parseInt(e.target.value) })}
          disabled={loading}
        />

        <div className="modal-actions">
          <button onClick={onClose} disabled={loading}>
            Cancel
          </button>
          {service && (
            <button className="danger" onClick={handleDelete} disabled={loading}>
              Delete
            </button>
          )}
          <button className="apply" onClick={handleSubmit} disabled={loading}>
            {service ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
