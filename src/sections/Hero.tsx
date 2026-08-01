"use client";
import React from 'react';
import { Link } from 'react-scroll';
import { FaDownload, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import Button from '../components/Button';
import { PERSONAL_INFO, HERO_TEXT } from '../data/constants';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text animate-fadeInLeft">
            <p className="hero-greeting">{HERO_TEXT.greeting}</p>
            <h1 className="hero-name">{PERSONAL_INFO.name}</h1>
            <h2 className="hero-role">{PERSONAL_INFO.role}</h2>
            <p className="hero-tagline">{HERO_TEXT.tagline}</p>
            <p className="hero-description">{HERO_TEXT.description}</p>
            
            <div className="hero-buttons">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <Button variant="primary" size="large" icon={<FaArrowRight />}>
                  Ver Proyectos
                </Button>
              </Link>
              
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button variant="secondary" size="large" icon={<FaEnvelope />}>
                  Contactarme
                </Button>
              </Link>
              

            </div>
          </div>

          <div className="hero-image animate-fadeInRight">
            <div className="image-wrapper">
              <div className="image-glow"></div>
                <img 
                  src="/profile.jpeg" 
                  alt={PERSONAL_INFO.name}
                  className="profile-image"
                />
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <Link to="about" smooth={true} duration={500} offset={-80}>
            <div className="scroll-indicator">
              <span className="scroll-text">Scroll</span>
              <div className="scroll-arrow"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;