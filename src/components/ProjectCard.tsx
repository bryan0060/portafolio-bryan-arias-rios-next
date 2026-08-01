
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Button from './Button';
import './ProjectCard.css';

export interface Project {
  id: string | number;
  title: string;
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
  githubBackend?: string;
  apiUrl?: string;
  type: string;
  featured?: boolean;
  isFullStack?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { 
    title, 
    description, 
    technologies, 
    demo, 
    github, 
    githubBackend,
    apiUrl,
    type,
    featured,
    isFullStack 
  } = project;

  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      {featured && <div className="featured-badge">Destacado</div>}
      
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <span className="project-type">{type}</span>
      </div>

      <p className="project-description">{description}</p>

      <div className="project-technologies">
        {technologies.map((tech: string, index: number) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {demo && (
          <Button 
            variant="primary" 
            size="small"
            href={demo}
            target="_blank"
            icon={<FaExternalLinkAlt />}
          >
            Ver Demo
          </Button>
        )}
        
        {github && (
          <Button 
            variant="outline" 
            size="small"
            href={github}
            target="_blank"
            icon={<FaGithub />}
          >
            {isFullStack ? 'Frontend' : 'Código'}
          </Button>
        )}

        {githubBackend && (
          <Button 
            variant="outline" 
            size="small"
            href={githubBackend}
            target="_blank"
            icon={<FaCode />}
          >
            Backend
          </Button>
        )}
      </div>

      {apiUrl && (
        <div className="project-api">
          <span className="api-label">API:</span>
          <a href={apiUrl} target="_blank" rel="noopener noreferrer" className="api-link">
            {apiUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;