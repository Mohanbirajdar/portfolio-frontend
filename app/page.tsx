'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import { Header, Footer, Hero, About, Education, Skills, Experience, Projects } from '@/components';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
    });

    // Hide preloader after load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cursor effect
    const cursorInner = document.getElementById('cursor-inner');
    const cursorOuter = document.getElementById('cursor-outer');
    const links = document.querySelectorAll('a,label,button');

    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorInner) {
        cursorInner.style.left = `${posX}px`;
        cursorInner.style.top = `${posY}px`;
      }

      if (cursorOuter) {
        cursorOuter.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: 'forwards' }
        );
      }
    };

    const addHoverListeners = () => {
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          cursorInner?.classList.add('hover');
          cursorOuter?.classList.add('hover');
        });
        link.addEventListener('mouseleave', () => {
          cursorInner?.classList.remove('hover');
          cursorOuter?.classList.remove('hover');
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    addHoverListeners();

    // Back to top button visibility
    const handleScroll = () => {
      const backToTopBtn = document.getElementById('backtotopbutton');
      if (backToTopBtn) {
        if (window.scrollY > 400) {
          backToTopBtn.style.display = 'block';
        } else {
          backToTopBtn.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Settings toggle handlers
    const settingsCheckbox = document.getElementById('switchforsetting') as HTMLInputElement;
    const visualModeCheckbox = document.getElementById('switchforvisualmode') as HTMLInputElement;
    
    const handleSettingsToggle = () => {
      document.getElementById('setting-container')?.classList.toggle('settingactivate');
      document.getElementById('visualmodetogglebuttoncontainer')?.classList.toggle('visualmodeshow');
      document.getElementById('soundtogglebuttoncontainer')?.classList.toggle('soundmodeshow');
    };

    const handleVisualModeToggle = () => {
      document.body.classList.toggle('light-mode');
      document.querySelectorAll('.needtobeinvert').forEach((el) => {
        el.classList.toggle('invertapplied');
      });
      setIsLightMode(!isLightMode);
    };

    settingsCheckbox?.addEventListener('change', handleSettingsToggle);
    visualModeCheckbox?.addEventListener('change', handleVisualModeToggle);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      settingsCheckbox?.removeEventListener('change', handleSettingsToggle);
      visualModeCheckbox?.removeEventListener('change', handleVisualModeToggle);
    };
  }, [isLightMode]);

  return (
    <>
      {/* Preloader */}
      {loading && <div id="preloader"></div>}

      <Header />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
