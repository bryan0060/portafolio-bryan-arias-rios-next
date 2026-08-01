import React from 'react';
import { ABOUT_TEXT } from '../data/constants';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">{ABOUT_TEXT.title}</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">
        {ABOUT_TEXT.description.map((paragraph: string, index: number) => (<p
          key={index}
          className="about-paragraph animate-fadeInUp"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {paragraph}
        </p>
        ))}
      </div>

      <div className="about-highlights">
        <div className="highlight-card animate-scaleIn delay-300">

          <h3 className="highlight-title">Full Stack</h3>
          <p className="highlight-text">
            Desarrollo completo de aplicaciones web y móviles con arquitectura frontend-backend
          </p>
        </div>

        <div className="highlight-card animate-scaleIn delay-400">

          <h3 className="highlight-title">Proyectos Reales</h3>
          <p className="highlight-text">
            Experiencia práctica trabajando con clientes y soluciones en producción
          </p>
        </div>

        <div className="highlight-card animate-scaleIn delay-500">

          <h3 className="highlight-title">Aprendizaje Continuo</h3>
          <p className="highlight-text">
            En constante formación en IA Engineering y Data Engineering
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;