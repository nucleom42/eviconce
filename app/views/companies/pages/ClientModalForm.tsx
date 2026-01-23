import React, { useState } from "react";
import "./../styles/ClientModalForm.css";

type Props = {
  open: boolean;
  onClose: () => void;
  onCreated: (client: any) => void;
};

export default function ClientCreateModal({ open, onClose, onCreated }: Props) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
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

    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const client = await res.json();
      setSuccessCreatedMessage(
        `Client ${client.first_name} successfully created`,
      );
      setTimeout(() => {
        setSuccessCreatedMessage(null);
        onCreated(client);
        onClose();
      }, 1000);
    } catch (e: any) {
      setError(e.message || "Failed to create client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="confirm-overlay" onClick={onClose}>
      <div className="glass-modal small" onClick={(e) => e.stopPropagation()}>
        <h3>New client</h3>

        {error && <div className="form__error">{error}</div>}

        {successCreatedMessage && (
          <div className="form__success">{successCreatedMessage}</div>
        )}

        {["first_name", "last_name", "email", "phone"].map((field) => (
          <input
            key={field}
            placeholder={field.replace("_", " ")}
            value={(form as any)[field]}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, [field]: e.target.value }))
            }
          />
        ))}

        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
          <button className="apply" disabled={loading} onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
