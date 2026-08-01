import React from 'react';
import { FaBriefcase, FaRocket, FaUsers, FaCode } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';
import './Experience.css';

const Experience = () => {
  const responsibilities = [
    {
      icon: <FaCode />,
      title: "Desarrollo de Aplicaciones",
      description: "Desarrollo de aplicaciones web y móviles a la medida según necesidades del cliente"
    },
    {
      icon: <FaUsers />,
      title: "Trabajo con Clientes",
      description: "Levantamiento de requerimientos y comunicación directa con clientes reales"
    },
    {
      icon: <FaRocket />,
      title: "Despliegue en Producción",
      description: "Implementación y mantenimiento de soluciones funcionales en producción"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Experiencia Profesional</h2>
        <div className="title-underline"></div>
      </div>

      <div className="experience-content">
        <div className="experience-card animate-fadeInUp">
          <div className="experience-header">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-info">
              <h3 className="experience-position">{PERSONAL_INFO.company.role}</h3>
              <h4 className="experience-company">{PERSONAL_INFO.company.name}</h4>
              <p className="experience-date">2023 - Presente</p>
            </div>
          </div>

          <div className="experience-description">
            <p>
              Como Desarrollador fullstack en Noah Technology Solutions, lidero el desarrollo de soluciones
              tecnológicas personalizadas para clientes, desde la conceptualización hasta el
              despliegue en producción.
            </p>
          </div>

          <div className="responsibilities-grid">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="responsibility-card animate-scaleIn"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="responsibility-icon">{item.icon}</div>
                <h5 className="responsibility-title">{item.title}</h5>
                <p className="responsibility-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="experience-skills">
            <h5 className="skills-title">Logros y Metodologías:</h5>
            <ul className="skills-list">
              <li>Desarrollo de sistemas Full Stack con arquitectura frontend-backend separada</li>
              <li>Implementación de almacenamiento offline y sincronización de datos</li>
              <li>Gestion de la persistencia y modelado de datos en bases de datos relacionales (PostgreSQL / MySQL),
                optimizando consultas para asegurar la disponibilidad de la información.
              </li>
              <li>Uso de metodologías ágiles (Scrum) para la gestión e itineración de entregables, colaborando mediante
                control de versiones en Git/GitHub.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;