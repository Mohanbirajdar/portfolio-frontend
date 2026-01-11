'use client';

import { skillCategories } from '@/data';

export default function Skills() {
  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex={0} aria-label="skills heading">
            &lt;/Skills&gt;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.category} 
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={catIndex * 100}
              style={{ '--card-index': catIndex } as React.CSSProperties}
            >
              {/* Animated gradient border */}
              <div className="skill-card-glow"></div>
              
              {/* Floating particles */}
              <div className="skill-particles">
                <span></span><span></span><span></span><span></span>
              </div>
              
              {/* Corner accent */}
              <div className="skill-card-corner"></div>
              
              <div className="skill-card-inner">
                <div className="skill-card-header">
                  <div className="skill-card-icon-wrap">
                    <span className="skill-card-icon">{category.icon}</span>
                    <div className="icon-ring"></div>
                  </div>
                  <h3 className="skill-card-title">{category.category}</h3>
                </div>
                
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill.name} 
                      className="skill-tag"
                      style={{ '--tag-delay': `${skillIndex * 0.05}s` } as React.CSSProperties}
                    >
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt=""
                          className={`skill-tag-icon ${skill.needsInvert ? 'needtobeinvert' : ''}`}
                        />
                      )}
                      <span className="skill-tag-text">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
