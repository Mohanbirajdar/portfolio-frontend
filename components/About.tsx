'use client';

import { personalInfo } from '@/data';

export default function About() {
  const openResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section className="about-section-container" id="about">
      {/* Background elements */}
      <div className="about-bg-elements">
        <div className="about-orb about-orb-1"></div>
        <div className="about-orb about-orb-2"></div>
      </div>
      
      <div className="about-section">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex={0} aria-label="About me heading">
            &lt;/AboutMe&gt;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="about-content-wrapper" data-aos="fade-up" data-aos-delay="100">
          {/* Profile Picture Side */}
          <div className="about-profile-side">
            <div className="profile-card">
              <div className="profile-card-border"></div>
              <div className="profile-card-shimmer"></div>
              <div className="profile-card-particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="profile-image-wrapper">
                <img src={personalInfo.images.profilePhoto} alt={personalInfo.name} />
                <div className="profile-image-overlay"></div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{personalInfo.name}</h3>
                <p className="profile-title">{personalInfo.tagline}</p>
                <div className="profile-status">
                  <span className="status-dot"></span>
                  <span>Available for opportunities</span>
                </div>
              </div>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">60+</span>
                  <span className="stat-label">Skills</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className="about-info-side">
            <div className="about-text-content">
              <h3 className="about-intro-title">
                <span className="title-accent">//</span> Who am I?
              </h3>
              
              <div className="about-paragraphs">
                {personalInfo.aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="about-text" style={{ '--para-delay': `${index * 0.1}s` } as React.CSSProperties}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div className="highlight-text">
                    <span className="highlight-title">Focus</span>
                    <span className="highlight-desc">Full Stack Development</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div className="highlight-text">
                    <span className="highlight-title">Passion</span>
                    <span className="highlight-desc">Building Scalable Apps</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <div className="highlight-text">
                    <span className="highlight-title">Goal</span>
                    <span className="highlight-desc">Create Impact</span>
                  </div>
                </div>
              </div>

              <div className="about-actions">
                <button className="resume-btn-new" onClick={openResume}>
                  <span className="btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </span>
                  <span className="btn-text">Download Resume</span>
                  <span className="btn-shine"></span>
                </button>
                
                <a href={`mailto:${personalInfo.email}`} className="contact-btn-new">
                  <span className="btn-text">Get in Touch</span>
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
