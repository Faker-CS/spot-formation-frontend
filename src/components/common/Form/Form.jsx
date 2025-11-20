import React, { useState } from "react";
import "./Form.css";
import Button from "../Button";

export default function Form({ title = "Démarrez votre nouvelle trajectoire :" }) {
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
    console.log("Form submitted:", formData);
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
    <div className="form-container">
      <h3 className="form-container__title">{title}</h3>
      
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          className="form__input"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          className="form__input"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form__input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <div className="form__phone-group">
          <input
            type="text"
            name="countryCode"
            placeholder="+33"
            className="form__input form__input--country"
            value={formData.countryCode}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Portable"
            className="form__input form__input--phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <p className="form__note">*Tous les champs sont obligatoires</p>
        
        <Button 
          type="submit" 
          variant="secondary"
          className="hero__btn-secondary form__submit-btn"
          disabled={!isFormValid()}
        >
          Créer mon dossier de candidature
        </Button>
      </form>
    </div>
  );
}
