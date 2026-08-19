import React from 'react';

const Hero = ({ personal, stats }) => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statistics = stats || [];
  const avatarSrc = personal?.avatar || './public/profile.jpeg';

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Column: Hero Intro & Actions */}
          <div className="col-lg-7 text-center text-lg-start">
            {personal?.availability && (
              <div className="d-inline-flex align-items-center gap-2 badge-soft-primary mb-3">
                <span className="spinner-grow spinner-grow-sm text-primary" role="status" aria-hidden="true"></span>
                <span>{personal.availability}</span>
              </div>
            )}

            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-gradient">{personal?.name || 'Developer'}</span>
            </h1>

            <h2 className="h3 fw-semibold text-secondary mb-3">
              {personal?.role || 'Frontend Developer'}
            </h2>

            <p className="lead text-muted mb-4 pe-lg-4">
              {personal?.bioShort}
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
              <a
                href="#projects"
                className="btn-primary-custom"
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                <i className="bi bi-grid-3x3-gap-fill"></i> View Projects
              </a>
              <a
                href="#contact"
                className="btn-outline-custom"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <i className="bi bi-envelope-fill"></i> Contact Me
              </a>
            </div>

            {/* Quick stats */}
            {statistics.length > 0 && (
              <div className="row g-3">
                {statistics.map((stat, index) => (
                  <div key={index} className="col-6 col-sm-4">
                    <div className="hero-stats-card">
                      <h3 className="h4 fw-bold text-primary mb-0">{stat.value}</h3>
                      <small className="text-muted fw-medium">{stat.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Profile Photo Display */}
          <div className="col-lg-5 text-center">
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-outer">
                <div className="hero-avatar-inner">
                  {avatarSrc ? (
                    <img
                      src={avatarSrc}
                      alt={personal?.name || 'Profile'}
                      className="hero-avatar-img"
                      onError={(e) => {
                        if (!e.target.dataset.fallback) {
                          e.target.dataset.fallback = '1';
                          e.target.src = 'public/profile.jpeg';
                        } else if (e.target.dataset.fallback === '1') {
                          e.target.dataset.fallback = '2';
                          e.target.src = '/profile.jpeg';
                        } else {
                          e.target.style.display = 'none';
                          const placeholder = e.target.parentElement.querySelector('.hero-avatar-placeholder');
                          if (placeholder) placeholder.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div
                    className="hero-avatar-placeholder"
                    style={{ display: avatarSrc ? 'none' : 'flex' }}
                  >
                    <i className="bi bi-person-fill display-1 text-primary opacity-75"></i>
                    <span className="small text-muted fw-bold mt-2">{personal?.name || 'Profile'}</span>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badges */}
              <div className="hero-floating-badge hero-floating-badge-1">
                <i className="bi bi-code-slash fs-4 text-info"></i>
                <div className="text-start">
                  <div className="fw-bold">React.js</div>
                  <small className="text-muted">Component Architecture</small>
                </div>
              </div>

              <div className="hero-floating-badge hero-floating-badge-2">
                <i className="bi bi-bootstrap-fill fs-4 text-primary"></i>
                <div className="text-start">
                  <div className="fw-bold">Bootstrap 5</div>
                  <small className="text-muted">Responsive UI</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
