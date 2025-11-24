import React from "react";
import SubDropdown from "./SubDropdown";

export default function Dropdown({ link }) {
  const { label, href, variant } = link;

  return (
    <div className="navbar__dropdown">
      <a href={href} className={`navbar__menu-btn ${variant ? `navbar__menu-btn--${variant}` : ""}`.trim()}>
        {label}
      </a>
      <SubDropdown link={link} />
    </div>
  );
}

