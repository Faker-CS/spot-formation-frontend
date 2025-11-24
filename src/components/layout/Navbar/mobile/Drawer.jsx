import React from "react";
import SubDrawer from "./SubDrawer";

export default function Drawer({
  open,
  links,
  actions,
  subDrawers,
  activeSubDrawer,
  onClose,
  onOpenSubDrawer,
  onCloseSubDrawer,
}) {
  return (
    <div
      className={`navbar__drawer ${open ? "navbar__drawer--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div className="navbar__drawer-header">
        <img className="navbar__drawer-logo" src="/assets/images/Logo-SF-H_blue.svg" alt="Spot Formations" />
        <div className="navbar__drawer-meta">
          <h2 className="navbar__drawer-title">Menu</h2>
        </div>
      </div>

      <div className="navbar__drawer-content">
        <ul className="navbar__drawer-list">
          {links.map(({ href, label, variant, subDrawerId }) => {
            const isSubDrawer = Boolean(subDrawerId);
            const Component = isSubDrawer ? "button" : "a";
            const componentProps = isSubDrawer
              ? {
                  type: "button",
                  onClick: () => onOpenSubDrawer(subDrawerId),
                }
              : { href };

            return (
              <li key={label}>
                <Component
                  {...componentProps}
                  className={`drawer-link ${variant ? `drawer-link--${variant}` : ""} ${isSubDrawer ? "drawer-link--action" : ""}`}
                >
                  <span>{label}</span>
                  <span className="drawer-link__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 8 14" fill="none">
                      <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Component>
              </li>
            );
          })}
        </ul>

        <div className="navbar__drawer-sections">
          {actions.map(({ key, label, variant }) => (
            <button key={key} type="button" className={`drawer-section drawer-section--${variant}`}>
              <span className="drawer-section__icon" aria-hidden="true">
                {variant === "account" ? (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="12" r="5.25" stroke="#FC7F16" strokeWidth="1.8" />
                    <path d="M6 26C6 20.4772 10.4772 16 16 16C21.5228 16 26 20.4772 26 26" stroke="#FC7F16" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 4.5C6 3.67157 6.67157 3 7.5 3H16.5C17.3284 3 18 3.67157 18 4.5V21L12 17.25L6 21V4.5Z"
                      stroke="#EB5A2D"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="drawer-section__label">{label}</span>
              <span className="drawer-section__arrow" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 8 14" fill="none">
                  <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="navbar__drawer-footer">
        <div className="drawer-footer-row">
          <span className="drawer-footer-text">Vous avez une question ? (de 8h à 18h) :</span>
          <span className="drawer-phone">
            <img src="/assets/icons/icon-phone.svg" alt="" />
            + 33 6 00 00 00 00
          </span>
        </div>

        <div className="drawer-footer-divider" aria-hidden="true"></div>

        <button type="button" className="drawer-lang">
          <span className="drawer-lang__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="#C7F8FF" strokeWidth="1.4" />
              <path d="M3 12H21" stroke="#C7F8FF" strokeWidth="1.4" strokeLinecap="round" />
              <path
                d="M12 3C14.4853 5.82843 15.7279 8.91421 15.7279 12C15.7279 15.0858 14.4853 18.1716 12 21C9.51472 18.1716 8.27208 15.0858 8.27208 12C8.27208 8.91421 9.51472 5.82843 12 3Z"
                stroke="#C7F8FF"
                strokeWidth="1.4"
              />
            </svg>
          </span>
          <span>Français (FR)</span>
        </button>
      </div>

      <SubDrawer
        config={subDrawers[activeSubDrawer]}
        isOpen={Boolean(activeSubDrawer)}
        onBack={onCloseSubDrawer}
        onClose={onClose}
      />
    </div>
  );
}

