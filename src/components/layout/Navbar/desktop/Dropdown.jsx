

import React, { useState, useRef, useEffect } from "react";
import { SUB_DRAWERS } from "../data/navbarData";
import SubDropdown from "./SubDropdown";

export default function Dropdown({ link }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { label, href, variant, subDrawerId } = link;
  const drawer = subDrawerId ? SUB_DRAWERS[subDrawerId] : null;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleToggle = (e) => {
    e.preventDefault();
    setOpen((prev) => {
      if (prev) {
        // Remove focus when closing
        if (dropdownRef.current) {
          dropdownRef.current.querySelector('.navbar__menu-btn')?.blur();
        }
      }
      return !prev;
    });
  };

  return (
    <div
      className="navbar__dropdown"
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block", zIndex: 10001 }}
    >
      <a
        href={href}
        className={`navbar__menu-btn ${variant ? `navbar__menu-btn--${variant}` : ""} ${open ? "navbar__menu-btn--active" : ""}`.trim()}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleToggle}
      >
        {label}
      </a>
      {drawer && open && (
        <div className="navbar__dropdown-menu" style={{ position: "absolute", top: "calc(100% + 10px)", left: -12, zIndex: 100010 }}>
          <div className="navbar__dropdown-list-wrapper">
            <SubDropdown drawer={drawer} />
          </div>
        </div>
      )}
    </div>
  );
}

