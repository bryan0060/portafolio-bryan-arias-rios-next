"use client";
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAVIGATION } from '../data/constants';
import './Navbar.css';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="logo-text">Bryan</span>
          <span className="logo-accent">Arias</span>
          <span className='logo-accent'>Rios</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {NAVIGATION.links.map((link: { name: string; href: string }, index: number) => (
            <Link
              key={index}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80}
              className="navbar-link"
              activeClass="active"
              spy={true}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;