import React from 'react';
import TechBadge from '../components/TechBadge';
import { TECH_STACK, LEARNING_AREAS } from '../data/technologies';
import './TechStack.css';

interface TechItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface LearningArea {
  title: string;
  status: string;
  description: string;
}

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <div className="section-header">
        <h2 className="section-title">Stack Tecnológico</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Tecnologías y herramientas que domino para crear soluciones completas
        </p>
      </div>

      <div className="tech-categories">
        <div className="tech-category animate-fadeInUp">
          <h3 className="category-title">Frontend</h3>
          <div className="tech-grid">
            {TECH_STACK.frontend.map((tech: TechItem, index: number) => (
              <TechBadge 
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>

        <div className="tech-category animate-fadeInUp delay-100">
          <h3 className="category-title">Backend</h3>
          <div className="tech-grid">
            {TECH_STACK.backend.map((tech: TechItem, index: number) => (
              <TechBadge 
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>

        <div className="tech-category animate-fadeInUp delay-200">
          <h3 className="category-title">Mobile</h3>
          <div className="tech-grid">
            {TECH_STACK.mobile.map((tech: TechItem, index: number) => (
              <TechBadge 
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>

        <div className="tech-category animate-fadeInUp delay-300">
          <h3 className="category-title">Bases de Datos</h3>
          <div className="tech-grid">
            {TECH_STACK.databases.map((tech: TechItem, index: number) => (
              <TechBadge 
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>

        <div className="tech-category animate-fadeInUp delay-400">
          <h3 className="category-title">Herramientas</h3>
          <div className="tech-grid">
            {TECH_STACK.tools.map((tech: TechItem, index: number) => (
              <TechBadge 
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="learning-section">
        <h3 className="learning-title">Aprendizaje en Progreso</h3>
        <div className="learning-grid">
          {LEARNING_AREAS.map((area: LearningArea, index: number) => (
            <div 
              key={index} 
              className="learning-card animate-scaleIn"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="learning-header">
                <h4 className="learning-card-title">{area.title}</h4>
                <span className="learning-status">{area.status}</span>
              </div>
              <p className="learning-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;