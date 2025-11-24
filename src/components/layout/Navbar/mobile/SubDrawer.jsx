import React from "react";
import Button from "../../../common/Button";

export default function SubDrawer({ config, isOpen, onBack, onClose }) {
  if (!config) return null;

  return (
    <div className={`navbar__subdrawer ${isOpen ? "navbar__subdrawer--open" : ""}`} aria-hidden={!isOpen}>
      <div className="navbar__subdrawer-header">
        <button className="subdrawer-back" aria-label="Retour au menu" type="button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="#1B365E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="subdrawer-title">
          <img src="/assets/images/logo-SF-H_blue.svg" alt="Spot Formations" />
          <span>{config.title}</span>
        </div>
        <button className="subdrawer-close" aria-label="Fermer la section" type="button" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="navbar__subdrawer-body">
        <ul className="subdrawer-list">
          {config.items.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="subdrawer-item">
                <span>{item.label}</span>
                <span className="drawer-link__arrow" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2L8 6L4 10" stroke="#1B365E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="subdrawer-ctas">
          {config.ctas.map((cta) => (
            <Button key={cta.id} href={cta.href} className={cta.className}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

