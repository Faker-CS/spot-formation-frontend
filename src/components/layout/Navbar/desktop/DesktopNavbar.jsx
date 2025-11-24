import React from "react";
import Dropdown from "./Dropdown";

export default function DesktopNavbar({ links }) {
  return (
    <nav className="navbar__menu" aria-label="Navigation principale">
      {links.map((link) => {
        if (link.subDrawerId) {
          return <Dropdown key={link.label} link={link} />;
        }

        return (
          <a
            key={link.label}
            href={link.href}
            className={`navbar__menu-btn ${link.variant ? `navbar__menu-btn--${link.variant}` : ""}`.trim()}
          >
            {link.label}
          </a>
        );
      })}

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
            <path
              d="M3 2.5C3 1.67157 3.67157 1 4.5 1H13.5C14.3284 1 15 1.67157 15 2.5V16.5L9 13L3 16.5V2.5Z"
              stroke="#FC7F16"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

