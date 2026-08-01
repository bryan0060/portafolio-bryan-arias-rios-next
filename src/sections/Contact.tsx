import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Contacto</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente o una oportunidad laboral? ¡Conectemos!
        </p>
      </div>

      <div className="contact-content-centered">
        <div className="contact-info-main">
          <div className="info-card-large">
            <h3 className="info-title">Hablemos</h3>
            <p className="info-description">
              Estoy disponible para oportunidades laborales, proyectos freelance o 
              simplemente para conversar sobre desarrollo de software y tecnología.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4 className="contact-label">Ubicación</h4>
                  <p className="contact-value">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4 className="contact-label">Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-value contact-link">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-text">
                  <h4 className="contact-label">WhatsApp</h4>
                  <a 
                    href="https://wa.link/kgnvhq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-value contact-link"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

            <div className="social-links">
              <h4 className="social-title">Encuéntrame en:</h4>
              <div className="social-buttons-large">
                <a 
                  href={PERSONAL_INFO.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button-large"
                  aria-label="GitHub"
                >
                  <FaGithub />
                  <div className="social-info">
                    <span className="social-name">GitHub</span>
                    <span className="social-username">@bryan0060</span>
                  </div>
                </a>
                <a 
                  href={PERSONAL_INFO.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button-large"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                  <div className="social-info">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-username">Bryan Arias Ríos</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;