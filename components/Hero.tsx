'use client';

import { personalInfo } from '@/data';

// Helper component for animated text
const AnimatedText = ({ text }: { text: string }) => (
  <>
    {text.split('').map((char, index) => (
      char === ' ' ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <p key={index} className="jello">{char}</p>
      )
    ))}
  </>
);

export default function Hero() {
  const openResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section className="landing-page-container" id="home">
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-particles">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="hero-particle" style={{ '--i': i } as React.CSSProperties}></span>
          ))}
        </div>
      </div>
      
      <div className="blob"></div>

      <div className="text-content">
        <article id="hello-friend" data-aos="fade-up" data-aos-delay="0">
          <span className="greeting-bracket">&lt;</span>
          <AnimatedText text="Namaste();" />
          &nbsp;
          <AnimatedText text="I'm" />
          <span className="greeting-bracket">/&gt;</span>
        </article>
        
        <article id="name" data-aos="fade-up" data-aos-delay="200">
          <div className="name-glow"></div>
          <AnimatedText text="MOHAN BIRAJDAR." />
        </article>

        <article id="work" data-aos="fade-up" data-aos-delay="400">
          {personalInfo.tagline.split(' ').map((word, index) => (
            <div key={index}>
              {word.split('').map((char, charIndex) => (
                <p key={charIndex} className="jello">{char}</p>
              ))}
            </div>
          ))}
        </article>

        <div className="info-para-wrapper" data-aos="fade-up" data-aos-delay="600">
          <div className="info-para-line"></div>
          <p id="info-para">
            {personalInfo.description}
          </p>
        </div>

        <div className="contact-btn-div" data-aos="fade-up" data-aos-delay="800">
          <a href={`mailto:${personalInfo.email}`} tabIndex={-1}>
            <button className="letsTalkBtn">
              <span className="btn-particles">
                <span></span><span></span><span></span>
              </span>
              <p className="letsTalkBtn-text">Let&apos;s Talk!</p>
              <span className="letsTalkBtn-BG"></span>
            </button>
          </a>

          <div className="setting-container" id="setting-container">
            <input type="checkbox" id="switchforsetting" />
            <label htmlFor="switchforsetting" className="needtobeinvert" id="labelforsetting" tabIndex={0} aria-label="settings for sound and appearance"></label>

            <div className="visualmodetogglebuttoncontainer" id="visualmodetogglebuttoncontainer">
              <input type="checkbox" id="switchforvisualmode" />
              <label htmlFor="switchforvisualmode" id="labelforvisualmode" tabIndex={0} aria-label="switch appearance"></label>
            </div>

            <div className="soundtogglebuttoncontainer" id="soundtogglebuttoncontainer">
              <input type="checkbox" id="switchforsound" />
              <label htmlFor="switchforsound" id="labelforsound" tabIndex={0} aria-label="switch sound" className="needtobeinvert"></label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
