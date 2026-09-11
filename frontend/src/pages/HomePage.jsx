import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, Award, Users, TrendingUp, Building, Home, Briefcase, Landmark, Star, Loader2 } from 'lucide-react';
import { propertiesData as fallbackProperties, citiesData, testimonialsData } from '../data/propertiesData';
import { fetchProperties } from '../services/api';
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
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchProperties();
        if (data && data.length > 0) {
          setProperties(data);
        } else {
          setProperties(fallbackProperties);
        }
      } catch (err) {
        setProperties(fallbackProperties);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);
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
            <span className="section-badge">Exclusive Real Estate Portfolio</span>
            <h2 className="projects-title">Exclusive Real Estate Portfolio</h2>
            <p className="projects-subtitle">
              Explore handpicked luxury residences and premium investments across Noida and Gurugram.
            </p>
          </div>

          <div className="projects-grid">
            {loading ? (
              <div className="col-span-full text-center py-12 flex flex-col items-center justify-center">
                <Loader2 className="animate-spin text-amber-500 mb-3" size={36} />
                <p className="text-gray-400 font-medium">Fetching real-time properties from database...</p>
              </div>
            ) : (
              properties.slice(0, 3).map(prop => (
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

                    <ul className="property-features-list" style={{ listStyle: 'none', padding: 0, margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {prop.features?.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#475569' }}>
                          <span style={{ color: '#10b981', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', border: '1.5px solid #10b981', flexShrink: 0, marginTop: '2px', fontSize: '11px', fontWeight: 900 }}>✓</span>
                          <span style={{ lineHeight: 1.5 }}>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '16px' }}>
                      <Link 
                        to={`/projects/${prop.id}/${prop.slug}`} 
                        style={{
                          background: '#374151',
                          color: '#ffffff',
                          borderRadius: '50px',
                          padding: '12px 28px',
                          fontSize: '15px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          width: '85%',
                          margin: '0 auto',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease'
                        }}
                        aria-label={`Know more about ${prop.title}`}
                      >
                        <span>Know More</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Centered View All Pill Button */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link 
              to="/properties" 
              style={{
                background: '#1f2937',
                color: '#ffffff',
                borderRadius: '50px',
                padding: '14px 40px',
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 6px 20px rgba(31, 41, 55, 0.25)',
                transition: 'transform 0.2s ease, background 0.2s ease'
              }}
            >
              <span>View All</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container-custom">
          <div className="services-grid-container">
            <div className="services-editorial-left">
              <span className="services-badge">OUR SERVICES</span>
              <h2 className="services-title">What We Do?</h2>
              <p className="services-intro-text">
                We transform traditional property transactions into simplified luxury experiences, guiding you through every step of your real estate journey across prime locations.
              </p>

              <div className="services-stats-row">
                <div className="stat-item">
                  <span className="stat-num-bold" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--heading)', display: 'block' }}>7+</span>
                  <p style={{ fontWeight: 600, color: '#6b7280' }}>YEARS ACTIVE</p>
                </div>
                <div className="stat-item">
                  <span className="stat-num-bold" style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--heading)', display: 'block' }}>2K+</span>
                  <p style={{ fontWeight: 600, color: '#6b7280' }}>PROPERTIES SOLD</p>
                </div>
              </div>
            </div>

            <div className="services-cards-right">
              <div className="service-card">
                <div className="service-icon-wrap">
                  <Home size={32} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Buy A New Home</h3>
                <p className="service-card-desc">
                  Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.
                </p>
                <Link to="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f2937', fontWeight: 700, fontSize: '14px', textDecoration: 'none', marginTop: '12px' }}>
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="service-card">
                <div className="service-icon-wrap">
                  <Building size={32} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Sell A Home</h3>
                <p className="service-card-desc">
                  Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.
                </p>
                <Link to="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f2937', fontWeight: 700, fontSize: '14px', textDecoration: 'none', marginTop: '12px' }}>
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="service-card">
                <div className="service-icon-wrap">
                  <Briefcase size={32} aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Investment Projects</h3>
                <p className="service-card-desc">
                  Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.
                </p>
                <Link to="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f2937', fontWeight: 700, fontSize: '14px', textDecoration: 'none', marginTop: '12px' }}>
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="section-badge">OUR BENEFITS</span>
            <h2 className="section-title">Why Choose Aura Rise Realty</h2>
            <p className="projects-subtitle">
              With 7+ years of expertise and deep knowledge of real estate markets across Delhi, Noida, Gurugram, and Yamuna Expressway, we deliver trusted property solutions tailored to your needs.
            </p>
          </div>

          <div className="benefits-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="benefit-card">
              <div className="icon-box">
                <TrendingUp size={32} aria-hidden="true" />
              </div>
              <h3 className="card-title">Proven Expertise</h3>
              <p className="card-text">
                7+ years of industry experience, deep market insights, and proven strategies to help you navigate NCR real estate.
              </p>
            </div>

            <div className="benefit-card">
              <div className="icon-box">
                <Users size={32} aria-hidden="true" />
              </div>
              <h3 className="card-title">Customized Solutions</h3>
              <p className="card-text">
                Tailored property solutions across residential, commercial, industrial, and investment segments for maximum ROI.
              </p>
            </div>

            <div className="benefit-card">
              <div className="icon-box">
                <ShieldCheck size={32} aria-hidden="true" />
              </div>
              <h3 className="card-title">Transparent Partnerships</h3>
              <p className="card-text">
                Complete transparency, ethical business practices, and legally sound transactions with clear pricing structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Vision Section */}
      <section className="about-founder-section">
        <div className="container-custom">
          <div className="founder-grid">
            <div className="founder-img-wrapper">
              <img 
                src="/images/img_1560250097-0b93528c311a.webp" 
                alt="Shubham Mehta - Founder & CEO, Aurarise Realty" 
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
                <span className="exp-label">Years of Real Estate Expertise</span>
              </div>
            </div>

            <div>
              <span className="section-badge">LEADERSHIP & VISION</span>
              <h2 className="section-title" style={{ marginBottom: '4px' }}>Shubham Mehta</h2>
              <p style={{ fontWeight: 600, color: 'var(--secondary)', marginBottom: '16px' }}>
                Founder & CEO, Aurarise Realty
              </p>

              <blockquote className="founder-quote-box">
                "I started Aurarise Realty with a simple belief that real estate should be built on trust, not just transactions."
              </blockquote>

              <p style={{ color: 'var(--text)', marginBottom: '20px' }}>
                With over 10 years of experience in the real estate industry, Shubham Mehta has worked closely with homebuyers, NRIs, and investors across Delhi NCR. That experience shapes how Aura Rise Realty operates today: transparent, practical, and focused on long-term value.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Residential Development', 'Property Advisory', 'Plot & Investment Guidance', 'Redevelopment Opportunities', 'Real Estate Strategy'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600, color: '#334155' }}>
                    <span style={{ color: '#10b981', fontWeight: 900 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about-us" className="btn-primary-custom" aria-label="Learn more about Aura Rise Realty leadership">
                <span>Learn More About Us</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Cities Section */}
      <section className="explore-cities-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="cities-badge">EXPLORE CITIES</span>
            <h2 className="cities-title">Our Location For You</h2>
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

      {/* Interactive Home Loan EMI Calculator Section */}
      <EmiCalculator onOpenInquiry={onOpenInquiry} />

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="section-badge">OUR TESTIMONIALS</span>
            <h2 className="section-title">What Our Clients Say ?</h2>
          </div>

          <div className="testimonials-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {testimonialsData.map((test, idx) => (
              <div 
                key={idx} 
                className="testimonial-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '36px 30px 28px 30px',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ position: 'absolute', top: '16px', right: '24px', fontSize: '4rem', fontFamily: 'serif', color: 'rgba(31, 41, 55, 0.08)', lineHeight: 1, pointerEvents: 'none' }}>
                  “
                </div>

                <p style={{ fontStyle: 'italic', color: '#334155', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                  "{test.text}"
                </p>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: 'auto' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                    {test.name}
                  </h3>
                  <p style={{ textTransform: 'uppercase', fontSize: '0.78rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.05em', margin: 0 }}>
                    {test.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1', cursor: 'pointer' }}></span>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1', cursor: 'pointer' }}></span>
            <span style={{ width: '24px', height: '8px', borderRadius: '10px', background: '#1f2937', cursor: 'pointer' }}></span>
          </div>
        </div>
      </section>
    </>
  );
}
