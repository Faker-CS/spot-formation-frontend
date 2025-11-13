import React from 'react'
import './Button.css'

/**
 * Reusable Button component
 * Props:
 * - variant: 'primary' | 'ghost'
 * - href: if provided renders an <a> (useful for linking)
 * - ...props forwarded to the underlying element
 */
export default function Button({ variant = 'primary', href, children, className = '', ...props }) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={props.type || 'button'} className={classes} {...props}>
      {children}
    </button>
  )
}
