import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">Featured Work</span>
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            A selection of recent projects demonstrating my abilities in UI engineering, state management, and responsive design.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-6">
              <div className="project-card">
                {/* Project Image / Mockup Placeholder */}
                <div
                  className="project-img-wrapper"
                  style={{ background: project.imageGradient }}
                >
                  <div className="project-mockup-content p-3 text-center">
                    {/* Simulated browser window bar */}
                    <div className="d-flex align-items-center gap-1 mb-2 w-100 px-1 opacity-75">
                      <span className="rounded-circle bg-white" style={{ width: 8, height: 8 }}></span>
                      <span className="rounded-circle bg-white" style={{ width: 8, height: 8 }}></span>
                      <span className="rounded-circle bg-white" style={{ width: 8, height: 8 }}></span>
                    </div>
                    <i className="bi bi-laptop fs-1 mb-1"></i>
                    <span className="fw-bold small">{project.title.split(' - ')[0]}</span>
                    <small className="opacity-75">{project.tagline}</small>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="project-overlay">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light btn-sm rounded-pill px-3 fw-semibold shadow"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-sm rounded-pill px-3 fw-semibold shadow"
                    >
                      <i className="bi bi-github me-1"></i> Code
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                  <div>
                    {/* Tech Badges */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="badge-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="h5 fw-bold text-dark mb-2">{project.title}</h3>
                    <p className="text-muted small mb-4">{project.description}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 pt-3 border-top">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary-custom btn-sm flex-fill"
                    >
                      <i className="bi bi-play-circle-fill"></i> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-custom btn-sm flex-fill"
                    >
                      <i className="bi bi-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
