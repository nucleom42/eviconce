import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ServiceModalForm from "./ServiceModalForm";
import "./../styles/Form.css";

export default function EmployeeForm({
  role,
  employee,
  onSave,
  onCancel,
  isModal = false,
}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    description: "",
    email: "",
    phone: "",
    password: "",
    role: role === "admin" ? 1 : 0,
  });
  const [errors, setErrors] = useState({});
  const [services, setServices] = useState([]);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  // Photo state
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  useEffect(() => {
    if (employee) {
      setForm({
        first_name: employee.first_name || "",
        last_name: employee.last_name || "",
        description: employee.description || "",
        email: employee.email || "",
        phone: employee.phone || "",
        password: "",
        role: employee.role ?? (role === "admin" ? 1 : 0),
      });
      setServices(employee.services || []);

      // Set existing photo
      if (employee.image) {
        setPhotoPreview("/images"+employee.image.image_url);
        setPhotoId(employee.image.id);
      }
    }
  }, [employee, role]);

  const silentLogout = async () => {
    await fetch("/api/employees/logout", {
      method: "POST",
      credentials: "include",
    });
  };

  useRef(() => {
    if (!employee) silentLogout();
  });

  const handleChange = (e) => {
    const value =
      e.target.name === "role" ? parseInt(e.target.value) : e.target.value;
    setForm({ ...form, [e.target.name]: value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = async () => {
    if (!photoId) {
      setPhotoFile(null);
      setPhotoPreview(null);
      return;
    }

    if (!window.confirm("Видалити фото?")) return;

    try {
      const response = await fetch(`/api/images/${photoId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        setPhotoFile(null);
        setPhotoPreview(null);
        setPhotoId(null);
      } else {
        alert("Помилка при видаленні фото");
      }
    } catch {
      alert("Помилка при видаленні фото");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("employee[first_name]", form.first_name);
    formData.append("employee[last_name]", form.last_name);
    formData.append("employee[description]", form.description);
    formData.append("employee[email]", form.email);
    formData.append("employee[phone]", form.phone);
    formData.append("employee[role]", form.role);

    if (form.password) {
      formData.append("employee[password]", form.password);
    }

    if (photoFile) {
      formData.append("image", photoFile);
    }

    const url = employee ? `/api/employees/${employee.id}` : "/api/employees";
    const method = employee ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      credentials: "include",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      if (isModal && onSave) {
        onSave({ ...data, services });
      } else {
        navigate("/companies/welcome");
      }
    } else {
      const body = await response.json();
      if (typeof body.errors === "string") {
        setErrors({ _base: body.errors });
      } else {
        setErrors(body.errors || {});
      }
      setPhotoFile(null);
      if (!photoId) setPhotoPreview(null);
    }
  };

  const handleAddService = () => {
    setEditingService(null);
    setServiceModalOpen(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setServiceModalOpen(true);
  };

  const handleDeleteService = async (service) => {
    if (!window.confirm(`Видалити послугу "${service.name}"?`)) return;
    try {
      const res = await fetch(`/api/services/${service.id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error(await res.text());
      setServices(services.filter((s) => s.id !== service.id));
    } catch {
      alert("Помилка при видаленні послуги");
    }
  };

  const handleServiceSaved = (savedService) => {
    if (savedService === null) {
      setServices(services.filter((s) => s.id !== editingService.id));
    } else if (editingService) {
      setServices(services.map((s) => (s.id === savedService.id ? savedService : s)));
    } else {
      setServices([...services, savedService]);
    }
    setEditingService(null);
  };

  const errorFor = (field) => errors[field]?.message || errors[field];
  const formatPrice = (price) => {
    if (!price) return "0";
    const num = parseFloat(price);
    return num.toFixed(0);
  };

  return (
    <div className={isModal ? "employee-form-modal" : "employee-form container"}>
      <h1>
        {employee ? "Редагувати" : "Створити"}{" "}
        {form.role === 1 ? "адміністратора" : "працівника"}
      </h1>

      <form onSubmit={handleSubmit}>
        {errors._base && (
          <div className="field-error" style={{ marginBottom: "1rem" }}>
            {errors._base}
          </div>
        )}

        <section className="form-section">
          <h3>Інформація про працівника</h3>

          {errorFor("first_name") && <div className="field-error">{errorFor("first_name")}</div>}
          <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="Імʼя" />

          {errorFor("last_name") && <div className="field-error">{errorFor("last_name")}</div>}
          <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Прізвище" />

          {errorFor("email") && <div className="field-error">{errorFor("email")}</div>}
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />

          {errorFor("phone") && <div className="field-error">{errorFor("phone")}</div>}
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Телефон" />

          {errorFor("password") && <div className="field-error">{errorFor("password")}</div>}
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder={employee ? "Новий пароль (залиште порожнім, щоб не змінювати)" : "Пароль"}
            required={!employee}
          />

          {errorFor("description") && <div className="field-error">{errorFor("description")}</div>}
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Опис" />

          {errorFor("role") && <div className="field-error">{errorFor("role")}</div>}
          <label htmlFor="role">Роль</label>
          <select id="role" name="role" value={form.role} onChange={handleChange} required>
            <option value={0}>Працівник</option>
            <option value={1}>Адміністратор</option>
          </select>
        </section>

        {/* Photo Section */}
        {employee && (
          <section className="form-section">
            <h3>Фото працівника</h3>

            {photoPreview && (
              <div className="logo-preview">
                <img
                  src={photoPreview}
                  alt="Employee photo preview"
                  style={{ width: 120, height: 120, objectFit: "cover", borderRadius: "50%" }}
                />
                <button type="button" className="btn-remove-logo" onClick={handleRemovePhoto}>
                  ✕ Видалити фото
                </button>
              </div>
            )}

            <div className="file-input-wrapper">
              <input
                type="file"
                id="photo-input"
                accept="image/*"
                onChange={handlePhotoChange}
                className="file-input"
              />
              <label htmlFor="photo-input" className="file-input-label">
                {photoPreview ? "Змінити фото" : "Завантажити фото"}
              </label>
              <span className="file-input-hint">PNG, JPG, GIF до 5MB</span>
            </div>

            {errorFor("photo") && <div className="field-error">{errorFor("photo")}</div>}
          </section>
        )}

        {/* Services Section */}
        {employee && (
          <section className="form-section services-section">
            <div className="services-header">
              <h3>Послуги</h3>
              <button type="button" className="btn-add-service" onClick={handleAddService}>
                + Додати послугу
              </button>
            </div>

            {services.length > 0 ? (
              <div className="services-grid">
                {services.map((service) => (
                  <div key={service.id} className="service-card">
                    <div className="service-card-header">
                      <h4>{service.name}</h4>
                      <div className="service-card-actions">
                        <button type="button" className="btn-icon-edit" onClick={() => handleEditService(service)} title="Редагувати">✎</button>
                        <button type="button" className="btn-icon-delete" onClick={() => handleDeleteService(service)} title="Видалити">🗑</button>
                      </div>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <div className="service-footer">
                      <span className="service-price">{formatPrice(service.price)} грн</span>
                      <span className="service-duration">{service.duration} хв</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-services">
                <p>Послуги ще не додані</p>
                <button type="button" className="btn-add-first-service" onClick={handleAddService}>
                  Додати першу послугу
                </button>
              </div>
            )}
          </section>
        )}

        <div className="form-actions">
          {isModal && onCancel && (
            <button type="button" onClick={onCancel}>Скасувати</button>
          )}
          <button type="submit">{employee ? "Оновити" : "Створити"}</button>
        </div>
      </form>

      {employee && (
        <ServiceModalForm
          open={serviceModalOpen}
          employee={employee}
          service={editingService}
          onClose={() => { setServiceModalOpen(false); setEditingService(null); }}
          onSaved={handleServiceSaved}
        />
      )}
    </div>
  );
}
