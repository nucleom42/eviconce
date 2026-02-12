import React, { useState, useEffect } from "react";
import ClientForm from "./ClientForm";
import "./../styles/Clients.css";

export default function Clients({ dashboardData }) {
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [error, setError] = useState(null);

  const fetchClients = async () => {
    try {
      const response = await fetch("/api/clients", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setClients(data.clients);
      } else {
        setError("Failed to fetch clients");
      }
    } catch (err) {
      setError("Failed to fetch clients");
    }
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/clients", {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setClients(data.clients || data); // Handle both {clients: [...]} and [...]
        } else {
          setError("Failed to fetch clients");
        }
      } catch (err) {
        setError("Failed to fetch clients");
      }
    };

    fetchClients();
  }, []); // Empty dependency array - only run once on mount

  // Open modal for creating new client
  const handleCreate = () => {
    setEditingClient(null);
    setIsModalOpen(true);
  };

  // Open modal for editing client
  const handleEdit = (client) => {
    setEditingClient(client);
    setIsModalOpen(true);
  };

  // Delete client
  const handleDelete = async (id) => {
    if (!window.confirm("Ви впевнені, що хочете видалити цього клієнта?")) {
      return;
    }

    try {
      const response = await fetch(`/api/clients/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        setClients(clients.filter((client) => client.id !== id));
      } else {
        const body = await response.json();
        setError(body.message || "Помилка при видаленні");
      }
    } catch (err) {
      setError("Помилка при видаленні");
    }
  };

  // Handle save from form
  const handleSave = (savedClient) => {
    if (editingClient) {
      // Update existing
      setClients(
        clients.map((client) =>
          client.id === savedClient.id ? savedClient : client,
        ),
      );
    } else {
      // Add new
      setClients([...clients, savedClient]);
    }
    setIsModalOpen(false);
    setEditingClient(null);
  };

  // Close modal
  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingClient(null);
  };

  return (
    <div className="clients-container">
      <div className="clients-header">
        <h2>Клієнти</h2>
        <button className="btn-primary" onClick={handleCreate}>
          + Додати клієнта
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {clients.length === 0 ? (
        <div className="empty-state">
          <p>Немає клієнтів. Додайте першого!</p>
        </div>
      ) : (
        <div className="clients-table">
          <table>
            <thead>
              <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Email</th>
                <th>Телефон</th>
                <th>Дії</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.first_name}</td>
                  <td>{client.last_name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone || "N/A"}</td>
                  <td className="actions content-center">
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(client)}
                    >
                      Редагувати
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(client.id)}
                    >
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCancel}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ClientForm
              client={editingClient}
              onSave={handleSave}
              onCancel={handleCancel}
              isModal={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
