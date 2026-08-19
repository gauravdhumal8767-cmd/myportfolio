import React from 'react';

const About = ({ personal, about }) => {
  const experiences = about?.experience || [];
  const educations = about?.education || [];
  const goals = about?.goals || [];

  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A blend of creative design thinking and modern frontend engineering principles.
          </p>
        </div>

        <div className="row g-4 mb-4">
          {/* Summary & Goals Card */}
          <div className="col-lg-5">
            <div className="about-card d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="contact-icon-box">
                    <i className="bi bi-person-lines-fill"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-0">Who I Am</h3>
                </div>
                {personal?.bioLong && <p className="text-muted mb-3">{personal.bioLong}</p>}
                {about?.intro && <p className="text-muted mb-4">{about.intro}</p>}

                <div className="d-flex flex-column gap-2 mb-4">
                  {personal?.location && (
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-geo-alt-fill text-primary"></i>
                      <span className="fw-medium text-dark">{personal.location}</span>
                    </div>
                  )}
                  {personal?.email && (
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-envelope-check-fill text-primary"></i>
                      <span className="fw-medium text-dark">{personal.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Professional Goals */}
              {goals.length > 0 && (
                <div className="mt-2 pt-3 border-top">
                  <h4 className="h5 fw-bold mb-3 d-flex align-items-center gap-2">
                    <i className="bi bi-bullseye text-primary"></i> Professional Goals
                  </h4>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {goals.map((goal, idx) => (
                      <li key={idx} className="d-flex align-items-start gap-2 text-muted small">
                        <i className="bi bi-check-circle-fill text-success mt-1"></i>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Experience & Education Timeline */}
          <div className="col-lg-7">
            <div className="row g-4">
              {/* Experience Card (renders only if experience exists) */}
              {experiences.length > 0 && (
                <div className="col-12">
                  <div className="about-card">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div className="contact-icon-box">
                        <i className="bi bi-briefcase-fill"></i>
                      </div>
                      <div>
                        <h3 className="h4 fw-bold mb-0">Work Experience</h3>
                        <small className="text-muted">My professional journey</small>
                      </div>
                    </div>

                    <div className="ps-2">
                      {experiences.map((item, idx) => (
                        <div key={idx} className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="d-flex flex-wrap justify-content-between align-items-center mb-1">
                            <h5 className="fw-bold mb-0 text-dark">{item.role}</h5>
                            <span className="badge bg-light text-primary border">{item.period}</span>
                          </div>
                          <div className="text-primary fw-semibold small mb-2">{item.company}</div>
                          <p className="text-muted small mb-0">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Education Card */}
              {educations.length > 0 && (
                <div className="col-12">
                  <div className="about-card">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div className="contact-icon-box">
                        <i className="bi bi-mortarboard-fill"></i>
                      </div>
                      <div>
                        <h3 className="h4 fw-bold mb-0">Education</h3>
                        <small className="text-muted">Academic background</small>
                      </div>
                    </div>

                    <div className="ps-2">
                      {educations.map((item, idx) => (
                        <div key={idx} className="timeline-item">
                          <div className="timeline-dot"></div>
                          <div className="d-flex flex-wrap justify-content-between align-items-center mb-1">
                            <h5 className="fw-bold mb-0 text-dark">{item.degree}</h5>
                            <span className="badge bg-light text-primary border">{item.period}</span>
                          </div>
                          <div className="text-secondary fw-semibold small mb-2">{item.institution}</div>
                          <p className="text-muted small mb-0">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
