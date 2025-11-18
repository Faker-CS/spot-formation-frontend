import React from "react";
import "./card.css";
import { Button } from "@mui/material";

export default function Card({
  category = "Marketing et Digital",
  title = "Ventes",
  location = "Paris - 6 jours",
  description = "Techniques de prospection, négociation et fidélisation client.",
  price = "1500€ TTC",
  financing = "Financement OPCO",
  onBookmark,
  onDiscover,
}) {
  return (
    <div className="card">
      {/* Header with tag and bookmark */}
      <div className="card__header">
        <div className="card__tag">{category}</div>
        <button className="card__bookmark" onClick={onBookmark} aria-label="Ajouter aux favoris">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 2.5C3 1.67157 3.67157 1 4.5 1H13.5C14.3284 1 15 1.67157 15 2.5V16.5L9 13L3 16.5V2.5Z"
              stroke="#FC7F16"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {/* Content section */}
      <div className="card__content">
        <div className="card__info">
          <div className="card__title-section">
            <h3 className="card__title">{title}</h3>
            <p className="card__location">{location}</p>
          </div>
          <p className="card__description">{description}</p>
        </div>
        <div className="card__price-section">
          <div className="card__price">{price}</div>
          <div className="card__financing">{financing}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="card__divider"></div>

      {/* Footer with button */}
      <div className="card__footer">
        <button className="card__discover-btn" onClick={onDiscover}>
          <img src="../assets/icons/micro/arrow-right-circle.svg" alt="Découvrir" />
          
          <span>Découvrir</span>
        </button>
        <Button className="card__register-btn">S'inscrire</Button>
      </div>
    </div>
  );
}
