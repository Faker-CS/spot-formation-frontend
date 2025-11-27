import React from 'react';

export default function Tabs({ tabs = [], activeId, onChange }) {
  return (
    <div className="top-formations__tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`top-formations__tab ${activeId === tab.id ? 'top-formations__tab--active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
