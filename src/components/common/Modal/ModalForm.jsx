

import React, { useState } from "react";
import "./ModalForm.css";
import Button from "../Button";

export default function ModalForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+33",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.countryCode.trim() !== "" &&
      formData.phone.trim() !== ""
    );
  };

  return (
    <div className="modal-form-container">
      <h2 className="modal-form-container__title">
        Vous ne savez pas encore quelle formation est la meilleure option pour vous ?
      </h2>
      <p className="modal-form__note_top" style={{ marginBottom: 16, textAlign: 'center', width: '100%' }}>
        Nous sommes là pour bien vous orienter
      </p>
      <form className="modal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          className="modal-form__input"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          className="modal-form__input"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="modal-form__input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* Phone input full width */}
        <div style={{ width: '100%' }}>
          <div className="modal-form__phone-group" style={{ width: '100%' }}>
            <input
              type="text"
              name="countryCode"
              placeholder="+33"
              className="modal-form__input modal-form__input--country"
              value={formData.countryCode}
              onChange={handleChange}
              required
              style={{ width: '80px', minWidth: '80px' }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Portable"
              className="modal-form__input modal-form__input--phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: 'calc(100% - 92px)' }}
            />
          </div>
        </div>
        <p className="form__note" style={{ textAlign: 'left', width: '100%' }}>*Tous les champs sont obligatoires</p>
        <Button
          type="submit"
          variant="secondary"
          className="hero__btn-secondary modal-form__submit-btn"
          disabled={!isFormValid()}
        >
          Créer mon dossier de candidature
        </Button>
      </form>
    </div>
  );
}
