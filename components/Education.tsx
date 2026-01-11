'use client';

import { education, educationHeading } from '@/data/education';

export default function Education() {
  return (
    <section className="education-section-container" id="education">
      <div className="education-section">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="section-heading-article" tabIndex={0} aria-label="Education heading">
            &lt;/{educationHeading}&gt;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="education-timeline" data-aos="fade-up">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="education-card-left">
                <div className="education-duration">{edu.duration}</div>
                <div className="education-score">
                  {edu.scoreType === 'CGPA' ? `CGPA : ${edu.score}` : `Marks : ${edu.score}`}
                </div>
              </div>
              
              <div className="education-card-middle">
                <div className="timeline-dot"></div>
                {index < education.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="education-card-right">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                {edu.specialization && (
                  <span className="education-specialization">{edu.specialization}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
