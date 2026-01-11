'use client';

import { experiences } from '@/data';
import { useEffect, useState } from 'react';

export default function Experience() {
  return (
    <section className="experience-section-container" id="experience">
      <div className="experience-section">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex={0} aria-label="Experience heading">
            &lt;/Experience&gt;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  exp: typeof experiences[0];
  index: number;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`experience-card-wrapper ${isEven ? 'left' : 'right'}`}
      data-aos={isEven ? "fade-right" : "fade-left"}
      data-aos-delay={index * 150}
    >
      {/* Timeline node */}
      <div className="timeline-node">
        <div className="timeline-node-inner"></div>
        <div className="timeline-node-ring"></div>
        <div className="timeline-node-pulse"></div>
      </div>

      <div className="experience-card">
        {/* Animated gradient border */}
        <div className="card-border-glow"></div>
        
        {/* Floating particles */}
        <div className="card-particles">
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        {/* Card content */}
        <div className="experience-card-inner">
          <div className="experience-header">
            <div className="experience-title-section">
              <h3 className="experience-title">{exp.title}</h3>
              <a 
                href={exp.companyUrl || '#'} 
                className="experience-company"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="company-icon">🏢</span>
                {exp.company}
              </a>
            </div>
            <div className="experience-meta">
              {exp.type && (
                <span className="experience-type">
                  <span className="type-dot"></span>
                  {exp.type}
                </span>
              )}
              <span className="experience-period">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                {exp.period}
              </span>
            </div>
          </div>

          <div className="experience-location">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{exp.location}</span>
          </div>

          <ul className="experience-description">
            {exp.description.map((item, i) => (
              <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>{item}</li>
            ))}
          </ul>

          {exp.technologies && exp.technologies.length > 0 && (
            <div className="experience-technologies">
              <h4>
                <span className="tech-icon">⚡</span>
                Technologies
              </h4>
              <div className="tech-tags">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="tech-tag"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {exp.projects && exp.projects.length > 0 && (
            <div className="experience-projects">
              <h4>
                <span className="project-icon">🚀</span>
                Key Projects
              </h4>
              <div className="project-links">
                {exp.projects.map((project, i) => (
                  <a 
                    key={i} 
                    href={project.url || '#'} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="project-link-bg"></span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    <span>{project.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
