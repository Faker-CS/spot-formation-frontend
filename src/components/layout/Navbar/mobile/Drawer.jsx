import React from "react";
import SubDrawer from "./SubDrawer";
import globeSolid from "../../../../../src/assets/svgs/globe-solid-2.svg";

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
                  <img src="assets/icons/icon-monCompte.svg" alt="icon-monCompte" width="32" height="32" />
                ) : (
                  <img src="/assets/icons/icon-bookmark.svg" width="32" height="32" alt="Bookmark" />
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
            <img src={globeSolid} alt="Language Icon" />
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

