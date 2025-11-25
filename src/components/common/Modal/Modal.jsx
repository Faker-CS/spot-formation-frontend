import React from "react";
import "./Modal.css";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  //   React.useEffect(() => {
  //     if (open) {
  //       document.body.style.overflow = 'hidden';
  //     }
  //     return () => {
  //       document.body.style.overflow = 'unset';
  //     };
  //   }, [open]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div className="modal-container">
        <button
          className="modal-close"
          aria-label="Fermer"
          onClick={onClose}
          type="button"
        >
          <img
            src="/src/assets/icons/close/icon_close.svg"
            alt=""
            draggable="false"
          />
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
