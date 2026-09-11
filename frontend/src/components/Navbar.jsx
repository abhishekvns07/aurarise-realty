import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastState = false;
    const handleScroll = () => {
      const isPast50 = window.scrollY > 50;
      if (isPast50 !== lastState) {
        lastState = isPast50;
        setIsScrolled(isPast50);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`custom-navbar ${isScrolled ? 'navbar-fixed' : ''}`}>
        <div className="container-custom navbar-container">
          <Link to="/" className="brand-link" onClick={closeMobile} aria-label="Aura Rise Realty Homepage">
            <img 
              src={logoImg} 
              alt="Aura Rise Realty Logo" 
              className="navbar-brand-logo" 
              width="160"
              height="54"
              loading="eager"
            />
          </Link>

          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li>
                <Link to="/" className={`custom-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={`custom-link ${location.pathname === '/about-us' ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className={`custom-link ${location.pathname.startsWith('/properties') || location.pathname.startsWith('/projects') ? 'active' : ''}`}>
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className={`custom-link ${location.pathname === '/contact-us' ? 'active' : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+919319393454" className="phone-btn" aria-label="Call Aura Rise Realty at +91 9319393454">
              <Phone size={16} aria-hidden="true" />
              <span>+91 9319393454</span>
            </a>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={28} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={closeMobile} aria-hidden="true" />
      )}
      <div className={`mobile-sidebar ${mobileOpen ? 'active' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <div className="sidebar-header">
          <Link to="/" className="brand-link" onClick={closeMobile} aria-label="Aura Rise Realty Homepage">
            <img 
              src={logoImg} 
              alt="Aura Rise Realty Logo" 
              className="navbar-brand-logo" 
              width="135"
              height="45"
              style={{ maxHeight: '45px' }}
              loading="eager"
            />
          </Link>
          <button className="close-btn" onClick={closeMobile} aria-label="Close menu">
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile Navigation Menu Links">
          <ul>
            <li>
              <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobile}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={`mobile-link ${location.pathname === '/about-us' ? 'active' : ''}`} onClick={closeMobile}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/properties" className={`mobile-link ${location.pathname.startsWith('/properties') || location.pathname.startsWith('/projects') ? 'active' : ''}`} onClick={closeMobile}>
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={`mobile-link ${location.pathname === '/contact-us' ? 'active' : ''}`} onClick={closeMobile}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <a href="tel:+919319393454" className="mobile-phone-btn" aria-label="Call Aura Rise Realty at +91 9319393454">
          <Phone size={18} aria-hidden="true" />
          <span>+91 9319393454</span>
        </a>
      </div>
    </>
  );
}
