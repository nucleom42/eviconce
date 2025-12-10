import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CompanyForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    description: "",
    city: "",
    country: "",
    postal: "",
    region: "",
    lt: "",
    ln: "",
    street_line1: "",
    street_line2: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // JWT NOT sent here — this is creating company + employee
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      // backend should serialize using Employee.tx
      navigate("/login");  // redirect after success
    } else {
      console.error("Failed to create company");
    }
  };

  return (
    <div className="company-form">
      <h1>Create Company</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Company Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
        <input name="website" placeholder="Website" value={form.website} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

        <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <input name="country" placeholder="Country" value={form.country} onChange={handleChange} />
        <input name="postal" placeholder="Postal Code" value={form.postal} onChange={handleChange} />
        <input name="region" placeholder="Region/State" value={form.region} onChange={handleChange} />

        <input name="lt" placeholder="Latitude" value={form.lt} onChange={handleChange} />
        <input name="ln" placeholder="Longitude" value={form.ln} onChange={handleChange} />

        <input name="street_line1" placeholder="Street Line 1" value={form.street_line1} onChange={handleChange} />
        <input name="street_line2" placeholder="Street Line 2" value={form.street_line2} onChange={handleChange} />

        <button type="submit">Create Company</button>
      </form>
    </div>
  );
}
