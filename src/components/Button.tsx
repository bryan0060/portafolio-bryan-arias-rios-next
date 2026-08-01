"use client";

import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  download?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  onClick,
  href,
  target,
  download,
  className = ''
}: ButtonProps) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        className={baseClass}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;