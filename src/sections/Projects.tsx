import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import type { Project } from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const featuredProjects = PROJECTS.filter((project: Project) => project.featured);
  const otherProjects = PROJECTS.filter((project: Project) => !project.featured);
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Proyectos</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          Aplicaciones reales desarrolladas con tecnologías modernas y desplegadas en producción
        </p>
      </div>

      {featuredProjects.length > 0 && (
        <div className="projects-featured">
          <h3 className="projects-subtitle">Proyectos Destacados</h3>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project: Project, index: number) => (
              <div
                key={project.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}

      {otherProjects.length > 0 && (
        <div className="projects-other">
          <h3 className="projects-subtitle">Otros Proyectos</h3>
          <div className="projects-grid">
            {otherProjects.map((project: Project, index: number) => (
              <div
                key={project.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="projects-cta">
        <p className="cta-text">
          ¿Quieres ver más? Visita mi perfil de GitHub
        </p>
        <a
          href="https://github.com/bryan0060"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link"
        >
          Ver todos los repositorios →
        </a>
      </div>
    </section>
  );
};

export default Projects;