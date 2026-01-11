'use client';

import { projects } from '@/data';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All', icon: '🚀' },
  { id: 'web', label: 'Web Apps', icon: '🌐' },
  { id: 'data', label: 'Data Science', icon: '📊' },
  { id: 'iot', label: 'IoT', icon: '🔌' },
  { id: 'embedded', label: 'Embedded', icon: '💡' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex={0} aria-label="My projects">
            &lt;/Projects&gt;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span className="filter-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Project Count */}
        <div className="project-count" data-aos="fade-up">
          <span className="count-number">{filteredProjects.length}</span>
          <span className="count-label">Projects</span>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              {/* Animated Border */}
              <div className="project-card-border"></div>
              
              {/* Floating Particles */}
              <div className="project-particles">
                <span></span><span></span><span></span><span></span>
              </div>
              
              {/* Image Section */}
              <div className="project-card-image">
                <img src={project.previewImage} alt={project.title} />
                <div className="project-card-overlay">
                  <div className="project-card-links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn"
                        aria-label="View on GitHub"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn primary"
                        aria-label="View Live"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                {project.category && (
                  <span className="project-category-badge">
                    {categories.find(c => c.id === project.category)?.icon} {project.category}
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="project-card-content">
                <div className="project-card-header">
                  <h3 className="project-card-title">{project.title}</h3>
                  {project.date && <span className="project-card-date">{project.date}</span>}
                </div>

                <p className="project-card-desc">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-card-tech">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span 
                        key={i} 
                        className="project-tech-pill"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="project-tech-pill more">+{project.technologies.length - 5}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
