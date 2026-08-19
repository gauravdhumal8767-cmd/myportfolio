import React from 'react';

const Footer = ({ personal }) => {
  const currentYear = new Date().getFullYear();
  const initials = personal?.name
    ? personal.name.trim().split(/\s+/).map((n) => n[0]).join('').toUpperCase()
    : 'P';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = personal?.socialLinks || {};

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row align-items-center gy-4 justify-content-between pb-4 border-bottom border-secondary border-opacity-25">
          {/* Brand & Tagline */}
          <div className="col-md-5 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
              <div className="brand-icon-box" style={{ width: 32, height: 32, fontSize: '0.9rem' }}>
                <span>{initials}</span>
              </div>
              <h4 className="text-white fw-bold mb-0">{personal?.name || 'Portfolio'}</h4>
            </div>
            <p className="small text-muted mb-0">
              Building responsive, high-performance web applications with modern technologies.
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-2">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Twitter / X"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              )}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row align-items-center gy-3 pt-4">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-muted mb-0">
              &copy; {currentYear} {personal?.name || 'Portfolio'}. All rights reserved. Crafted with React.js & Bootstrap 5.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              type="button"
            >
              Back to Top <i className="bi bi-arrow-up-short fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
