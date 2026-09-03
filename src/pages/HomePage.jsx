import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, Award, Users, TrendingUp, Building, Home, Briefcase, Landmark, Star } from 'lucide-react';
import { propertiesData, citiesData, testimonialsData } from '../data/propertiesData';
import EmiCalculator from '../components/EmiCalculator';

const flipPhrases = ['Dream Home.', 'Perfect Property.', 'Ideal Investment.'];

const HeroFlipText = React.memo(function HeroFlipText() {
  const [flipIndex, setFlipIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlipIndex(prev => (prev + 1) % flipPhrases.length);
      setAnimKey(prev => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="flip-text-container">
      <span key={animKey} className="flip-text-animated">
        {flipPhrases[flipIndex]}
      </span>
    </span>
  );
});

export default function HomePage({ onOpenInquiry }) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container-custom hero-container">
          <span className="hero-badge">AURARISE REALTY</span>
          <h1 className="hero-title">
            Find Your <HeroFlipText />
          </h1>
          <p className="hero-desc">
            Your trusted real estate consultancy in Delhi NCR. We help you find the perfect property across Delhi, Noida and Gurugram, Let's make your property dreams come true!
          </p>

          <div className="hero-cta-group">
            <Link to="/properties" className="btn-hero-primary" aria-label="Explore Properties Catalog">
              Explore Properties
            </Link>
            <Link to="/contact-us" className="btn-hero-secondary" aria-label="Contact Us Page">
              Contact Us
            </Link>
          </div>

          {/* Hero Stats Ticker */}
          <div className="hero-stats-ticker">
            <div className="ticker-item">
              <span className="ticker-num">₹500 Cr+</span>
              <span className="ticker-label">Properties Sold</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-num">500+</span>
              <span className="ticker-label">Happy Families</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-num">100%</span>
              <span className="ticker-label">RERA Compliant</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-num">10+ Yrs</span>
              <span className="ticker-label">Market Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="section-badge">Handpicked Collections</span>
            <h2 className="projects-title">Featured Luxury Properties</h2>
            <p className="projects-subtitle">
              Explore our exclusive developments across prime corridors of Delhi, Noida, and Gurugram.
            </p>
          </div>

          <div className="projects-grid">
            {propertiesData.map(prop => (
              <div key={prop.id} className="project-card">
                <div className="project-image-wrapper">
                  <span className="project-tag">{prop.tag}</span>
                  <img 
                    src={prop.image} 
                    alt={`${prop.title} - ${prop.location}`} 
                    className="project-img" 
                    width="340"
                    height="250"
                    loading="lazy" 
                    decoding="async"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-card-title">{prop.title}</h3>
                  <div className="project-location">
                    <MapPin size={16} className="location-icon" aria-hidden="true" />
                    <span>{prop.location}</span>
                  </div>

                  <div className="project-divider"></div>

                  <p className="project-item-highlight">{prop.highlight}</p>

                  <ul className="property-features-list">
                    {prop.features.map((feat, idx) => (
                      <li key={idx} className="property-feature-li">
                        <span className="feature-dot-marker"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/projects/${prop.id}/${prop.slug}`} 
                    className="btn-card-details"
                    aria-label={`Know more about ${prop.title}`}
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Built On Trust, Driven By Excellence</h2>
            <p className="projects-subtitle">
              At Aura Rise Realty, we simplify real estate decisions with complete transparency and deep industry expertise.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon-box">
                <TrendingUp size={32} aria-hidden="true" />
              </div>
              <h3 className="card-title">Deep Market Insights</h3>
              <p className="card-text">
                Over a decade of hands-on experience tracking micro-market trends across Delhi NCR to ensure maximum capital growth.
              </p>
            </div>

            <div className="benefit-card">
              <div className="icon-box">
                <ShieldCheck size={32} aria-hidden="true" />
              </div>
              <h3 className="card-title">100% Ethical & Legal</h3>
              <p className="card-text">
                Complete transparency, RERA compliance, clean legal due diligence, and absolute clarity on pricing and payment plans.
              </p>
            </div>

            <div className="benefit-card">
              <div className="icon-box">
                <Users size={32} aria-hidden="true" />
              </div>
              <h3 className="card-title">Tailored Consultation</h3>
              <p className="card-text">
                Personalized end-to-end guidance tailored precisely to your family's residential needs or your investment horizon.
              </p>
            </div>

            <div className="benefit-card">
              <div className="icon-box">
                <Award size={32} aria-hidden="true" />
              </div>
              <h3 className="card-title">Exclusive Developer Access</h3>
              <p className="card-text">
                Priority access to pre-launch pricing, luxury inventories, and exclusive payment schemes with top Tier-1 developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container-custom">
          <div className="services-grid-container">
            <div className="services-editorial-left">
              <span className="services-badge">Our Services</span>
              <h2 className="services-title">Comprehensive Real Estate Solutions</h2>
              <p className="services-intro-text">
                Whether you are buying your first home, expanding a corporate office, or acquiring high-return land parcels, we provide end-to-end advisory services tailored for you.
              </p>

              <div className="services-stats-row">
                <div className="stat-item">
                  <span className="stat-num-bold" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--heading)', display: 'block' }}>10+</span>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <span className="stat-num-bold" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--heading)', display: 'block' }}>500+</span>
                  <p>Happy Families</p>
                </div>
                <div className="stat-item">
                  <span className="stat-num-bold" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--heading)', display: 'block' }}>50+</span>
                  <p>Tier-1 Developers</p>
                </div>
              </div>
            </div>

            <div className="services-cards-right">
              <div className="service-card">
                <div className="service-icon-wrap">
                  <Home size={32} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Residential Development</h3>
                <p className="service-card-desc">
                  Ultra-luxury high-rises, gated villas, independent builder floors, and premium penthouses in Delhi NCR.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon-wrap">
                  <Building size={32} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Commercial & Retail</h3>
                <p className="service-card-desc">
                  High-street retail shops, food courts, office spaces, and pre-leased commercial assets with high rental yields.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon-wrap">
                  <Landmark size={32} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Plot & Land Advisory</h3>
                <p className="service-card-desc">
                  Authority plots, Yamuna Expressway land parcels, and strategic land acquisition for long-term wealth creation.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon-wrap">
                  <Briefcase size={32} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Investment Strategy</h3>
                <p className="service-card-desc">
                  Data-backed ROI analysis, capital appreciation forecasts, portfolio diversification, and exit planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Cities Section */}
      <section className="explore-cities-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="cities-badge">Prime Locations</span>
            <h2 className="cities-title">Explore Properties By City</h2>
          </div>

          <div className="cities-bento-grid">
            {citiesData.map((city, idx) => (
              <Link key={idx} to="/properties" className={`city-card ${city.gridClass}`} aria-label={`Explore properties in ${city.name}`}>
                <div className="city-img-wrapper">
                  <img 
                    src={city.image} 
                    alt={`Real estate properties in ${city.name}`} 
                    className="city-img" 
                    width="400"
                    height="360"
                    loading="lazy" 
                    decoding="async"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <div className="city-info-overlay">
                    <h3 className="city-name">{city.name}</h3>
                    <span className="city-count">{city.count}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote Section */}
      <section className="about-founder-section">
        <div className="container-custom">
          <div className="founder-grid">
            <div className="founder-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=70&auto=format&fit=crop&fm=webp" 
                alt="Shubham Mehta - Founder & CEO, Aura Rise Realty" 
                className="founder-img"
                width="500"
                height="500"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
              <div className="founder-badge">
                <span className="exp-num">10+</span>
                <span className="exp-label">Years of Expertise</span>
              </div>
            </div>

            <div>
              <span className="section-badge">Leadership & Vision</span>
              <h2 className="section-title" style={{ marginBottom: '8px' }}>Shubham Mehta</h2>
              <p style={{ fontWeight: 600, color: 'var(--secondary)', marginBottom: '16px' }}>
                Founder & CEO, Aura Rise Realty
              </p>

              <blockquote className="founder-quote-box">
                "I started Aura Rise Realty with a simple belief that real estate should be built on trust, not just transactions."
              </blockquote>

              <p style={{ color: 'var(--text)', marginBottom: '20px' }}>
                With over 10 years of experience in the real estate industry, Shubham Mehta has worked closely with homebuyers, NRIs, and investors across Delhi NCR. That experience shapes how Aura Rise Realty operates today: transparent, practical, and focused on long-term value.
              </p>

              <Link to="/about-us" className="btn-primary-custom" aria-label="Learn more about Aura Rise Realty leadership">
                <span>Learn More About Us</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Home Loan EMI Calculator Section */}
      <EmiCalculator onOpenInquiry={onOpenInquiry} />

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="section-badge">Client Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((test, idx) => (
              <div key={idx} className="testimonial-card">
                <div style={{ display: 'flex', gap: '4px', color: '#fbbf24', marginBottom: '16px' }} role="img" aria-label="5 out of 5 stars rating">
                  <Star size={16} fill="#fbbf24" aria-hidden="true" />
                  <Star size={16} fill="#fbbf24" aria-hidden="true" />
                  <Star size={16} fill="#fbbf24" aria-hidden="true" />
                  <Star size={16} fill="#fbbf24" aria-hidden="true" />
                  <Star size={16} fill="#fbbf24" aria-hidden="true" />
                </div>
                <p className="testimonial-text">"{test.text}"</p>
                <div className="client-profile">
                  <div className="client-avatar-frame">
                    <img 
                      src={test.avatar} 
                      alt={`Client review avatar for ${test.name}`} 
                      className="client-img" 
                      width="52"
                      height="52"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div>
                    <h3 className="client-name">{test.name}</h3>
                    <p className="client-role">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
