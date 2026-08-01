import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaGlobe } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Bryan Arias Ríos</h3>
            <p className="footer-description">
              Full Stack Developer Junior apasionado por crear soluciones digitales innovadoras.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#experience">Experiencia</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>


          <div className="footer-section">
            <h4 className="footer-subtitle">Sígueme</h4>
            <div className="footer-social">
              <a 
                href={PERSONAL_INFO.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={PERSONAL_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Bryan Arias Ríos. Todos los derechos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;