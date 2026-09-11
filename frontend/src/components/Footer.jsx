import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export default function Footer() {
  return (
    <footer className="custom-footer" aria-label="Site Footer">
      <div className="container-custom">
        <div className="footer-top-bar">
          <div className="footer-brand-title">
            <Link to="/" aria-label="Aura Rise Realty Homepage">
              <img 
                src={logoImg} 
                alt="Aura Rise Realty Official Logo" 
                width="160"
                height="55"
                loading="lazy"
                style={{ maxHeight: '55px', background: '#fff', padding: '6px 14px', borderRadius: '12px' }} 
              />
            </Link>
          </div>

          <div className="footer-social-wrap">
            <span className="social-label">Follow Us:</span>
            <a 
              href="https://www.facebook.com/people/AuraRise-Realty/61591032106513/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              aria-label="Visit Aura Rise Realty on Facebook"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
            <a 
              href="https://www.instagram.com/aurariserealty" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              aria-label="Visit Aura Rise Realty on Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h3 className="footer-title">About Aura Rise Realty</h3>
            <p className="footer-about-text">
              Aura Rise Realty is a premier real estate consultancy in Delhi NCR. We specialize in luxury residential developments, high-yielding commercial assets, land advisory, and strategic real estate investments across Delhi, Noida, and Gurugram.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about-us" className="footer-link">About Us</Link></li>
              <li><Link to="/properties" className="footer-link">Properties</Link></li>
              <li><Link to="/contact-us" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links-list">
              <li><Link to="/term-of-services" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', gap: '10px', flexShrink: 0, alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: '#fbbf24', flexShrink: 0, marginTop: '4px' }} aria-hidden="true" />
                <span>Tower C -1208, Bhutani Alphathum, Sector 90, Noida</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} style={{ color: '#fbbf24', flexShrink: 0 }} aria-hidden="true" />
                <a href="mailto:aurariserealty@gmail.com" className="footer-link" aria-label="Email us at aurariserealty@gmail.com">aurariserealty@gmail.com</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} style={{ color: '#fbbf24', flexShrink: 0 }} aria-hidden="true" />
                <a href="tel:+919319393454" className="footer-link" aria-label="Call us at +91 9319393454">+91 9319393454</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Aura Rise Realty. All Rights Reserved. Crafted with ❤️ for Luxury & Trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
