import React, { useState } from "react";

export default function SubDropdown({ drawer }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredRight, setHoveredRight] = useState(null);
  const [showRight, setShowRight] = useState(false);

  if (!drawer) return null;

  const leftItems = drawer.items || [];
  const active = activeIndex !== null ? leftItems[activeIndex] : null;
  const rightItems = active ? active.subItems || [] : [];

  const handleLeftClick = (i) => {
    setActiveIndex(i);
    setShowRight(true);
  };

  const handleLeftOpen = (i) => {
    setActiveIndex(i);
    setShowRight(true);
  };

  return (
    <div className="navbar__dropdown-inner" role="menu" aria-label={drawer.title}>
      <div className="navbar__dropdown-left">
        {leftItems.map((item, i) => (
          <button
            key={item.label + i}
            className={`navbar__dropdown-left-item ${i === activeIndex ? "is-active" : ""}`}
            onClick={() => handleLeftClick(i)}
            onMouseEnter={() => handleLeftOpen(i)}
            onFocus={() => handleLeftOpen(i)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      {showRight && (
        <div className="navbar__dropdown-right">
          <div className="navbar__dropdown-right-inner">
            {rightItems.length === 0 && (
              <div className="navbar__dropdown-right-empty">Aucun sous-élément</div>
            )}
            {rightItems.map((r, idx) => (
              <a
                key={r.label + idx}
                href={r.href}
                className={`navbar__dropdown-right-item ${hoveredRight === idx ? "is-selected" : ""}`}
                onMouseEnter={() => setHoveredRight(idx)}
                onMouseLeave={() => setHoveredRight(null)}
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


