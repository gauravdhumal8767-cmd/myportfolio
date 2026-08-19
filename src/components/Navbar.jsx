import React, { useState, useEffect } from 'react';

const Navbar = ({ personal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const initials = personal?.name
    ? personal.name.trim().split(/\s+/).map((n) => n[0]).join('').toUpperCase()
    : 'P';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsNavCollapsed(true);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div className="container">
        {/* Brand Logo & Name */}
        <a
          className="navbar-brand-custom"
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <div className="brand-icon-box">
            <span>{initials}</span>
          </div>
          <span>{personal?.name || 'Portfolio'}</span>
        </a>

        {/* Responsive Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none p-2"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <i className={`bi ${isNavCollapsed ? 'bi-list' : 'bi-x-lg'} fs-3 text-dark`}></i>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            !isNavCollapsed ? 'show' : ''
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-1 my-3 my-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link nav-link-custom ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href="#contact"
                className="btn btn-primary-custom btn-sm py-2 px-3 text-white"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                <i className="bi bi-send-fill me-1"></i> Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
