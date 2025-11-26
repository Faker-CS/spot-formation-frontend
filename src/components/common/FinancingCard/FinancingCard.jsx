import React from "react";
import "./FinancingCard.css";

export default function FinancingCard({ item }) {
  const logoUrl = new URL(
    `../../../assets/logos/financement/${item.logo}`,
    import.meta.url
  ).href;

  return (
    <div className="financing-card">
      <div className="financing-card__header">
        <div className="financing-card__title-col">
          <h4>{item.title}</h4>
          {item.subtitle && (
            <span className="financing-card__subtitle">{item.subtitle}</span>
          )}
        </div>
      </div>

      <div className="financing-card__logo-center">
        <img src={logoUrl} alt={item.title} />
      </div>

      <p className="financing-card__desc">{item.description}</p>

      <div className="financing-card__divider" />

      <a className="financing-card__cta" href={item.href}>
        <img src="../assets/icons/micro/arrow-right-circle.svg" alt={item.ctaLabel} />
        <span className="financing-card__cta-label">{item.ctaLabel}</span>
      </a>
    </div>
  );
}
