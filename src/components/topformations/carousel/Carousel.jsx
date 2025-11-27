import React from 'react';

export default function Carousel({ children, className = '', ...rest }) {
  return (
    <div className={`top-formations__carousel ${className}`} {...rest}>
      {children}
    </div>
  );
}
