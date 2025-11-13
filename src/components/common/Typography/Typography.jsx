import React from "react";
import "./Typography.css";

export function HH({ children, className = "", ...props }) {
  return (
    <h1 className={`typo typo--hh ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function H1({ children, className = "", ...props }) {
  return (
    <h1 className={`typo typo--h1 ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className = "", ...props }) {
  return (
    <h2 className={`typo typo--h2 ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className = "", ...props }) {
  return (
    <h3 className={`typo typo--h3 ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function GT({ children, className = "", ...props }) {
  return (
    <h3 className={`typo typo--gt ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className = "", ...props }) {
  return (
    <h4 className={`typo typo--h4 ${className}`} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, className = "", ...props }) {
  return (
    <h5 className={`typo typo--h5 ${className}`} {...props}>
      {children}
    </h5>
  );
}

export function H6({ children, className = "", ...props }) {
  return (
    <h6 className={`typo typo--h6 ${className}`} {...props}>
      {children}
    </h6>
  );
}

export function MH3({ children, className = "", ...props }) {
  return (
    <h3 className={`typo typo--m-h3 ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function MH1({ children, className = "", ...props }) {
  return (
    <h1 className={`typo typo--m-h1 ${className}`} {...props}>
      {children}
    </h1>
  );
}

export function MH7({ children, className = "", ...props }) {
  return (
    <h6 className={`typo typo--m-h7 ${className}`} {...props}>
      {children}
    </h6>
  );
}

export function P({ children, className = "", ...props }) {
  return (
    <p className={`typo typo--p ${className}`} {...props}>
      {children}
    </p>
  );
}

export function P2({ children, className = "", ...props }) {
  return (
    <p className={`typo typo--p2 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function P3({ children, className = "", ...props }) {
  return (
    <p className={`typo typo--p3 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function BtnCTA({ children, className = "", ...props }) {
  return (
    <span className={`typo typo--btn-cta ${className}`} {...props}>
      {children}
    </span>
  );
}

export function BtnMenu({ children, className = "", ...props }) {
  return (
    <span className={`typo typo--btn-menu ${className}`} {...props}>
      {children}
    </span>
  );
}

export function MBtnMenu({ children, className = "", ...props }) {
  return (
    <span className={`typo typo--m-btn-menu ${className}`} {...props}>
      {children}
    </span>
  );
}

export function B8({ children, className = "", ...props }) {
  return (
    <span className={`typo typo--b-8 ${className}`} {...props}>
      {children}
    </span>
  );
}

export default {
  HH,
  H1,
  H2,
  H3,
  GT,
  H4,
  H5,
  H6,
  MH3,
  MH1,
  MH7,
  P,
  P2,
  P3,
  BtnCTA,
  BtnMenu,
  MBtnMenu,
  B8,
};
