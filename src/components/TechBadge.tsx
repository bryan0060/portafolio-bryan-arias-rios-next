import React from 'react';
import './TechBadge.css';

interface TechBadgeProps {
  name: string;
  icon: React.ElementType;
  color: string;
}

const TechBadge = ({ name, icon: Icon, color }: TechBadgeProps) => {
  return (
    <div className="tech-badge">
      <div className="tech-badge-icon" style={{ color }}>
        <Icon />
      </div>
      <span className="tech-badge-name">{name}</span>
    </div>
  );
};

export default TechBadge;