import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Form.css";

export default function CompanyForm({
  company,
  onSave,
  onCancel,
  isModal = false,
}) {
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
    street_line1: "",
    street_line2: "",
  });

  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoId, setLogoId] = useState(null);
  const [cachedLogoData, setCachedLogoData] = useState("");

  // Images state
  const [images, setImages] = useState([]);
  const [newImageFiles, setNewImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const [errors, setErrors] = useState({});

  // Prefill form if editing
  useEffect(() => {
    if (company) {
      setForm({
        name: company.name || "",
        email: company.email || "",
        website: company.website || "",
        phone: company.phone || "",
        description: company.description || "",
        city: company.address?.city || "",
        country: company.address?.country || "",
        postal: company.address?.postal || "",
        region: company.address?.region || "",
        street_line1: company.address?.street_line1 || "",
        street_line2: company.address?.street_line2 || "",
      });

      // Set existing logo
      if (company.images && company.images.length > 0) {
        const logo = company.images.find((img) => img.type === "logo");
        if (logo) {
          setLogoPreview(logo.image_url);
          setLogoId(logo.id);
        }
      }

      // Set existing images except logo
      if (company.images && company.images.length > 0) {
        setImages(company.images.filter((img) => img.type !== "logo"));
      }
    }
  }, [company]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = async () => {
    if (!logoId) {
      // Just remove preview if it's a new upload
      setLogoFile(null);
      setLogoPreview(null);
      setCachedLogoData("");
      return;
    }

    // Remove existing logo from server
    if (!window.confirm("Видалити логотип?")) return;

    try {
      const response = await fetch(`/api/images/${logoId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        setLogoFile(null);
        setLogoPreview(null);
        setLogoId(null);
        setCachedLogoData("");
      } else {
        alert("Помилка при видаленні логотипу");
      }
    } catch (error) {
      alert("Помилка при видаленні логотипу");
    }
  };

  // Handle multiple image uploads
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      setNewImageFiles([...newImageFiles, ...files]);

      // Create previews for all new files
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prev) => [
            ...prev,
            { file, preview: reader.result },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Remove existing image (from server)
  const handleRemoveExistingImage = async (imageId) => {
    if (!window.confirm("Видалити це зображення?")) return;

    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        setImages(images.filter((img) => img.id !== imageId));
      } else {
        alert("Помилка при видаленні зображення");
      }
    } catch (error) {
      alert("Помилка при видаленні зображення");
    }
  };

  // Remove preview of new image (not yet uploaded)
  const handleRemoveNewImage = (index) => {
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
    setNewImageFiles(newImageFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Company data
    formData.append("company[name]", form.name);
    formData.append("company[email]", form.email);
    formData.append("company[website]", form.website);
    formData.append("company[phone]", form.phone);
    formData.append("company[description]", form.description);

    // Address data
    formData.append("address[city]", form.city);
    formData.append("address[country]", form.country);
    formData.append("address[postal]", form.postal);
    formData.append("address[region]", form.region);
    formData.append("address[street_line1]", form.street_line1);
    formData.append("address[street_line2]", form.street_line2);

    // Logo handling - mark as type "logo"
    if (logoFile) {
      formData.append("logo", logoFile);
    } else if (cachedLogoData) {
      formData.append("logo_cached", cachedLogoData);
    }

    // Images handling - append multiple images (type "image")
    newImageFiles.forEach((file) => {
      formData.append("images[]", file);
    });

    const url = company ? `/api/companies/${company.id}` : "/api/companies";
    const method = company ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      credentials: "include",
      body: formData,
    });

    const body = await response.json();

    if (response.ok) {
      if (isModal && onSave) {
        onSave(body);
      } else {
        navigate(`/companies/${body.id}/dashboard`);
      }
    } else {
      setErrors(body.errors || {});
    }
  };

  const errorFor = (field) => errors[field]?.message;

  return (
    <div className={isModal ? "company-form-modal" : "company-form container"}>
      <h1>{company ? "Редагувати компанію" : "Створити компанію"}</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <section className="form-section">
          <h3>Компанія</h3>

          {errorFor("name") && (
            <div className="field-error">{errorFor("name")}</div>
          )}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Назва компанії"
          />

          {errorFor("email") && (
            <div className="field-error">{errorFor("email")}</div>
          )}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />

          {errorFor("website") && (
            <div className="field-error">{errorFor("website")}</div>
          )}
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="Веб сторінка"
          />

          {errorFor("phone") && (
            <div className="field-error">{errorFor("phone")}</div>
          )}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Номер телефона"
          />

          {errorFor("description") && (
            <div className="field-error">{errorFor("description")}</div>
          )}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Опис діяльності"
          />
        </section>

        <section className="form-section">
          <h3>Адреса</h3>

          {errorFor("city") && (
            <div className="field-error">{errorFor("city")}</div>
          )}
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Місто"
          />

          {errorFor("country") && (
            <div className="field-error">{errorFor("country")}</div>
          )}
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Країна"
          />

          {errorFor("postal") && (
            <div className="field-error">{errorFor("postal")}</div>
          )}
          <input
            name="postal"
            value={form.postal}
            onChange={handleChange}
            placeholder="Поштовий індекс"
          />

          {errorFor("region") && (
            <div className="field-error">{errorFor("region")}</div>
          )}
          <input
            name="region"
            value={form.region}
            onChange={handleChange}
            placeholder="Область"
          />

          {errorFor("street_line1") && (
            <div className="field-error">{errorFor("street_line1")}</div>
          )}
          <input
            name="street_line1"
            value={form.street_line1}
            onChange={handleChange}
            placeholder="Адреса 1"
          />

          {errorFor("street_line2") && (
            <div className="field-error">{errorFor("street_line2")}</div>
          )}
          <input
            name="street_line2"
            value={form.street_line2}
            onChange={handleChange}
            placeholder="Адреса 2"
          />
        </section>

        <section className="form-section">
          <h3>Логотип компанії</h3>

          {logoPreview && (
            <div className="logo-preview">
              <img
                src={
                  logoFile
                    ? logoPreview
                    : `/images${logoPreview}`
                }
                alt="Company logo preview"
              />
              <button
                type="button"
                className="btn-remove-logo"
                onClick={handleRemoveLogo}
              >
                ✕ Видалити логотип
              </button>
            </div>
          )}

          <div className="file-input-wrapper">
            <input
              type="file"
              id="logo-input"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange}
              className="file-input"
            />
            <label htmlFor="logo-input" className="file-input-label">
              {logoPreview ? "Змінити логотип" : "Завантажити логотип"}
            </label>
            <span className="file-input-hint">PNG, JPG, GIF до 5MB</span>
          </div>

          {cachedLogoData && (
            <input type="hidden" name="logo_cached" value={cachedLogoData} />
          )}

          {errorFor("logo") && (
            <div className="field-error">{errorFor("logo")}</div>
          )}
        </section>

        {/* Company Images Section */}
        <section className="form-section">
          <div className="images-header">
            <h3>Фотографії компанії</h3>
            <label htmlFor="images-input" className="btn-add-image">
              + Додати фото
            </label>
          </div>

          <input
            type="file"
            id="images-input"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            className="file-input"
            style={{ display: "none" }}
          />

          {/* Existing Images */}
          {images.length > 0 && (
            <div className="images-grid">
              <h4 className="images-subtitle">Завантажені фото</h4>
              <div className="images-list">
                {images.map((image) => (
                  <div key={image.id} className="image-item">
                    <img
                      src={`/images${image.image_url}`}
                      alt={image.image_name || "Company image"}
                    />
                    <button
                      type="button"
                      className="btn-remove-image"
                      onClick={() => handleRemoveExistingImage(image.id)}
                      title="Видалити"
                    >
                      ✕
                    </button>
                    <span className="image-name">{image.image_name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="images-grid">
              <h4 className="images-subtitle">Нові фото (буде завантажено)</h4>
              <div className="images-list">
                {imagePreviews.map((item, index) => (
                  <div key={index} className="image-item new-image">
                    <img src={item.preview} alt={`Preview ${index + 1}`} />
                    <button
                      type="button"
                      className="btn-remove-image"
                      onClick={() => handleRemoveNewImage(index)}
                      title="Видалити"
                    >
                      ✕
                    </button>
                    <span className="image-name">{item.file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length === 0 && imagePreviews.length === 0 && (
            <div className="empty-images">
              <p>Фотографії ще не додані</p>
              <label htmlFor="images-input" className="btn-add-first-image">
                Додати перше фото
              </label>
            </div>
          )}

          {errorFor("images") && (
            <div className="field-error">{errorFor("images")}</div>
          )}
        </section>

        <div className="form-actions">
          {isModal && onCancel && (
            <button type="button" onClick={onCancel}>
              Скасувати
            </button>
          )}
          <button type="submit">
            {company ? "Оновити" : "Створити компанію"}
          </button>
        </div>
      </form>
    </div>
  );
}
