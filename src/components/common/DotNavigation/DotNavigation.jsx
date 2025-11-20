import React from "react";
import PropTypes from "prop-types";

/**
 * DotNavigation Component
 * Displays a series of dots for carousel/slider navigation
 * 
 * @param {number} total - Total number of dots to display
 * @param {number} current - Current active index (0-based)
 * @param {function} onDotClick - Callback function when a dot is clicked
 * @param {string} activeColor - Custom color for active dot (default: #40BFDE)
 * @param {string} nextColor - Custom color for next dot (default: #1B365E)
 * @param {string} inactiveColor - Custom color for inactive dots (default: #D9D9D9)
 */
export default function DotNavigation({ 
  total, 
  current, 
  onDotClick,
  activeColor = "#40BFDE",
  nextColor = "#1B365E",
  inactiveColor = "#D9D9D9"
}) {
  const getDotColor = (index) => {
    if (index === current) return activeColor;
    if (index === current + 1) return nextColor;
    return inactiveColor;
  };

  return (
    <div 
      className="flex flex-row justify-center items-center p-0 gap-1.5"
      style={{
        width: '90px',
        height: '6px',
        margin: '20px auto'
      }}
    >
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          style={{
            backgroundColor: getDotColor(index),
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            border: 'none',
            padding: 0,
            cursor: 'pointer'
          }}
          className="transition-colors duration-300 ease-in-out"
        />
      ))}
    </div>
  );
}

DotNavigation.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onDotClick: PropTypes.func.isRequired,
  activeColor: PropTypes.string,
  nextColor: PropTypes.string,
  inactiveColor: PropTypes.string,
};
