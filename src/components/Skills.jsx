import React, { useState } from 'react';

const Skills = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: 'var(--light-bg)' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-badge">My Technical Arsenal</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize to craft modern, performant, and scalable web solutions.
          </p>

          {/* Filter Badges */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm px-3 py-2 rounded-pill fw-semibold transition ${
                  selectedCategory === cat
                    ? 'btn-primary-custom text-white'
                    : 'btn-outline-custom bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="row g-4">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="skill-card">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div
                    className="skill-icon-wrapper"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color
                    }}
                  >
                    <i className={`bi ${skill.icon}`}></i>
                  </div>
                  <span className="badge bg-light text-dark border px-2 py-1 small">
                    {skill.category}
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="h5 fw-bold mb-0 text-dark">{skill.name}</h4>
                  <span className="fw-bold text-primary">{skill.level}%</span>
                </div>

                {/* Animated Bootstrap Progress Bar */}
                <div className="progress-custom mb-3">
                  <div
                    className="progress-bar-custom h-100"
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <p className="text-muted small mb-0">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
