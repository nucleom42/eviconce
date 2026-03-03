import React, { useState, useEffect } from "react";
import "./../styles/BookingScheduler.css";
import {
  HOURS,
  parseTime,
  toLocalISOString,
  overlaps,
  startOfDay,
  dateAt,
  addDays,
  addMinutes,
  isAvailableForDay,
  windowForDay,
} from "./../../companies/utils/time";

export default function BookingScheduler({ service, onClose, onComplete, company_id }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const [step, setStep] = useState(1);

  const getNext14Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const days = getNext14Days();

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots();
    }
  }, [selectedDate]);

  const fetchAvailableSlots = async () => {
    setLoading(true);
    try {
      const dateStr = selectedDate.toISOString().split("T")[0];
      const response = await fetch(
        `/api/employees/${service.employee.id}/frames?date=${dateStr}&service_id=${service.id}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch slots");
      }

      const data = await response.json();
      setAvailableSlots(data);
    } catch (error) {
      console.error("Error fetching slots:", error);
      setAvailableSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setStep(2);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setStep(3);
  };

  const handleClientInfoChange = (e) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // First, create or find the client
      const clientResponse = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: clientInfo.first_name,
          last_name: clientInfo.last_name,
          email: clientInfo.email,
          phone: clientInfo.phone,
          company_id: company_id,
        }),
      });

      if (!clientResponse.ok) {
        throw new Error("Failed to create client");
      }

      const client = await clientResponse.json();

      // Parse slot times
      const fromDate = new Date(selectedSlot.from);
      const toDate = new Date(selectedSlot.to);

      // Format payload matching your backend expectations
      const payload = {
        employee_id: service.employee.id,
        service_id: service.id,
        client_id: client.id,
        day: toLocalISOString(selectedDate).split("T")[0], // YYYY-MM-DD format
        start_time: toLocalISOString(fromDate), // Full ISO string
        end_time: toLocalISOString(toDate), // Full ISO string
        price: parseFloat(service.price),
        state: "scheduled", // or whatever default state you want
      };

      const response = await fetch("/api/time_slots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.errors || "Failed to create booking");
      }

      const timeSlot = await response.json();
      console.log("Booking created:", timeSlot);

      onComplete();
    } catch (error) {
      console.error("Booking error:", error);
      alert(`Помилка: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (date) => {
    const days = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const months = [
      "січ",
      "лют",
      "бер",
      "кві",
      "тра",
      "чер",
      "лип",
      "сер",
      "вер",
      "жов",
      "лис",
      "гру",
    ];
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
    };
  };

  function formatUAH(value, { decimals = 0 } = {}) {
    return (
      new Intl.NumberFormat("uk-UA", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value) + " грн"
    );
  }

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="booking-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" onClick={onClose}>
          ×
        </button>

        <div className="booking-header">
          <h2>Записатися на {service.name}</h2>
          <p className="booking-subtitle">
            з {service.employee.first_name} {service.employee.last_name}
          </p>
          <div className="booking-info">
            <span>{service.duration} хв</span>
            <span>•</span>
            <span>{formatUAH(service.price)}</span>
          </div>
        </div>

        <div className="booking-steps">
          <div className={`step ${step >= 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            <span className="step-label">Дата</span>
          </div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            <span className="step-label">Час</span>
          </div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>
            <span className="step-number">3</span>
            <span className="step-label">Контакти</span>
          </div>
        </div>

        <div className="booking-content">
          {/* Step 1: Select Date */}
          {step === 1 && (
            <div className="date-selector">
              <h3>Оберіть дату</h3>
              <div className="date-grid">
                {days.map((day, index) => {
                  const formatted = formatDate(day);
                  const isSelected =
                    selectedDate &&
                    day.toDateString() === selectedDate.toDateString();
                  return (
                    <button
                      key={index}
                      className={`date-btn ${isSelected ? "selected" : ""}`}
                      onClick={() => handleDateSelect(day)}
                    >
                      <span className="date-day">{formatted.day}</span>
                      <span className="date-number">{formatted.date}</span>
                      <span className="date-month">{formatted.month}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Select Time Slot */}
          {step === 2 && (
            <div className="time-selector">
              <button className="back-btn" onClick={() => setStep(1)}>
                ← Назад
              </button>
              <h3>
                Оберіть час на {selectedDate && formatDate(selectedDate).date}{" "}
                {selectedDate && formatDate(selectedDate).month}
              </h3>

              {loading ? (
                <div className="loading-slots">
                  <div className="spinner"></div>
                  <p>Завантаження доступних слотів...</p>
                </div>
              ) : availableSlots.length > 0 ? (
                <div className="time-grid">
                  {availableSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`time-btn ${
                        selectedSlot === slot ? "selected" : ""
                      }`}
                      onClick={() => handleSlotSelect(slot)}
                    >
                      {formatTime(slot.from)}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="no-slots">На цей день немає доступних слотів</p>
              )}
            </div>
          )}

          {/* Step 3: Client Information */}
          {step === 3 && (
            <div className="client-info">
              <button className="back-btn" onClick={() => setStep(2)}>
                ← Назад
              </button>
              <h3>Ваші контактні дані</h3>

              <div className="selected-summary">
                <p>
                  <strong>Дата:</strong>{" "}
                  {selectedDate && formatDate(selectedDate).date}{" "}
                  {selectedDate && formatDate(selectedDate).month}
                </p>
                <p>
                  <strong>Час:</strong> {formatTime(selectedSlot.from)}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Ім'я *"
                  value={clientInfo.first_name}
                  onChange={handleClientInfoChange}
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Прізвище *"
                  value={clientInfo.last_name}
                  onChange={handleClientInfoChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={clientInfo.email}
                  onChange={handleClientInfoChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон *"
                  value={clientInfo.phone}
                  onChange={handleClientInfoChange}
                  required
                />

                <button
                  type="submit"
                  className="submit-booking-btn"
                  disabled={submitting}
                >
                  {submitting ? "Обробка..." : "Підтвердити запис"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
