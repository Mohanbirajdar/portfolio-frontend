'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/data';
import { personalInfo } from '@/data';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHey, setShowHey] = useState(false);

  useEffect(() => {
    // Show "Hey!" popup on load
    const timer = setTimeout(() => setShowHey(true), 500);
    const hideTimer = setTimeout(() => setShowHey(false), 3500);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('stopscrolling');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('stopscrolling');
  };

  return (
    <>
      <header>
        <div className="cursor-inner" id="cursor-inner"></div>
        <div className="cursor-outer" id="cursor-outer"></div>

        <nav className="navbar" id="navbar">
          <div className={`hey ${showHey ? 'popup' : ''}`}>Hey!</div>
          <div className="logo" tabIndex={0} aria-label="Mohan Birajdar logo">
            <div className="logo-top">
              <img src={personalInfo.images.navAvatar} alt="animation-head" id="nav-avatar" />
            </div>
          </div>
          <div className="navbar-tabs" id="navbar-tabs">
            <ul className="navbar-tabs-ul">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`${item.id} ${activeSection === item.id ? 'activeThistab' : ''}`}
                  data-aos="fade-down"
                  data-aos-delay={100 + index * 200}
                >
                  <a href={item.href} tabIndex={0} aria-label={`${item.id} menu button`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hamburger Menu */}
      <div className="hamburger" id="hamburger" data-aos="fade">
        <div className="hamburgerbase">
          <button
            id="hamburger-button"
            onClick={toggleMobileMenu}
            tabIndex={0}
            aria-label="Menu Button"
          >
            <span className={`burger-bar ${isMobileMenuOpen ? 'hamburger-animation1' : ''}`} id="burger-bar1"></span>
            <span className={`burger-bar ${isMobileMenuOpen ? 'hamburger-animation2' : ''}`} id="burger-bar2"></span>
            <span className={`burger-bar ${isMobileMenuOpen ? 'hamburger-animation3' : ''}`} id="burger-bar3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Toggle Menu */}
      <div className={`mobiletogglemenu ${isMobileMenuOpen ? 'show-toggle-menu' : ''}`} id="mobiletogglemenu">
        <ul className="mobile-navbar-tabs-ul" id="mobile-ul">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`mobile-navbar-tabs-li ${item.id} ${activeSection === item.id ? 'activeThismobiletab' : ''}`}
              onClick={closeMobileMenu}
            >
              <a href={item.href} tabIndex={0} aria-label={`${item.id} menu button`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
