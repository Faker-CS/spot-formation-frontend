import React, { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";
import LoginForm from "../../../../auth/components/LoginForm";

export default function DesktopNavbar({ links }) {
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    }

    if (accountOpen) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [accountOpen]);

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

        <div ref={accountRef} style={{ position: "relative", display: "inline-block" }}>
          <button
            className={`navbar__account-btn ${accountOpen ? 'is-open' : ''}`}
            aria-label="Mon compte"
            aria-expanded={accountOpen}
            onClick={() => setAccountOpen((v) => !v)}
          >
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

          {accountOpen && (
            <div style={{ position: "absolute", right: -50, top: "calc(100% + 10px)", zIndex: 100020, width: 460, height: 319, overflow: 'hidden' }}>
              <LoginForm onClose={() => setAccountOpen(false)} />
            </div>
          )}
        </div>

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

