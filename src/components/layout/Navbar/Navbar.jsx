import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Prevent background scroll when menu is open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="navbar">
      <img src="/assets/images/logo-SF-H.png" alt="Spot Formations" />

      {/* Desktop menu - hidden on small screens via CSS */}
      <nav className="navbar__menu" aria-label="Navigation principale">
        <a href="#formations" className="navbar__menu-btn">
          Formations
        </a>
        <a href="#financement" className="navbar__menu-btn">
          Financement
        </a>
        <a href="#apropos" className="navbar__menu-btn">
          À propos
        </a>
        <a href="#methode" className="navbar__menu-btn">
          Méthode
        </a>
        <a href="#rejoindre" className="navbar__menu-btn navbar__menu-btn--active">
          Nous rejoindre
        </a>
        <a href="#enseigner" className="navbar__menu-btn navbar__menu-btn--secondary">
          Enseigner chez nous
        </a>

        <div className="navbar__actions">
          <a href="#contact" className="navbar__contact-btn">
            Nous contacter
          </a>
          <div className="navbar__divider"></div>

          <button className="navbar__account-btn" aria-label="Mon compte">
            <span className="navbar__account-icon">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                <circle cx="9.5" cy="4" r="3.25" stroke="#FC7F16" strokeWidth="1.5" />
                <path d="M2 13C2 10.2386 4.23858 8 7 8H12C14.7614 8 17 10.2386 17 13" stroke="#FC7F16" strokeWidth="1.5" />
              </svg>
            </span>
            <span className="navbar__arrow">
              <img src="/assets/icons/down-arrow.svg" alt="Arrow" />
            </span>
          </button>

          <button className="navbar__bookmark-btn" aria-label="Favoris">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 2.5C3 1.67157 3.67157 1 4.5 1H13.5C14.3284 1 15 1.67157 15 2.5V16.5L9 13L3 16.5V2.5Z" stroke="#FC7F16" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hamburger for mobile */}
      <button
        className="navbar__hamburger"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        <span className={`hamburger ${open ? "is-open" : ""}`} />
      </button>

      {/* Drawer / Full screen menu for mobile */}
      <div className={`navbar__drawer ${open ? "navbar__drawer--open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="navbar__drawer-header">
          <img src="/assets/images/logo-SF-H.png" alt="Spot Formations" />
          <button className="navbar__drawer-close" aria-label="Fermer le menu" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="navbar__drawer-content">
          <h2 className="navbar__drawer-title">Menu</h2>
          <ul className="navbar__drawer-list">
            <li><a href="#formations">Formations</a></li>
            <li><a href="#entrepreneuriat">Entreprenariat</a></li>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#methode">Méthode</a></li>
            <li><a href="#rejoindre">Nous rejoindre</a></li>
            <li><a href="#enseigner" className="highlight">Enseigner chez nous</a></li>
            <li><a href="#contact" className="contact-cta">Nous contacter</a></li>
          </ul>

          <div className="navbar__drawer-sections">
            <button className="drawer-section">Accès à votre Compte</button>
            <button className="drawer-section">Mes Bookmarks (0)</button>
          </div>
        </div>

        <div className="navbar__drawer-footer">
          <div className="drawer-footer-row">
            <span>Vous avez une question ?</span>
            <span className="drawer-phone">+ 33 6 00 00 00 00</span>
          </div>
          <div className="drawer-lang">Français (FR)</div>
        </div>
      </div>
    </div>
  );
}
