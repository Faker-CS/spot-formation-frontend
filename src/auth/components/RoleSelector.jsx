import React from "react";

export default function RoleSelector({ value, onChange }) {
  return (
    <div className="role-selector">
      <div className={`role-slider ${value === "mentor" ? "mentor" : ""}`} />

      <button
        type="button"
        className={`role-btn ${value === "apprenant" ? "active" : ""}`}
        onClick={() => onChange("apprenant")}
      >
        Espace Apprenant
      </button>

      <button
        type="button"
        className={`role-btn ${value === "mentor" ? "active" : ""}`}
        onClick={() => onChange("mentor")}
      >
        Espace Mentor
      </button>
    </div>
  );
}
