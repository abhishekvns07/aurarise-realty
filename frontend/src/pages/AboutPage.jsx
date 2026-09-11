import React from 'react';
import PageBanner from '../components/PageBanner';
import { CheckCircle2, Target, Eye, Award, Shield, Compass } from 'lucide-react';

export default function AboutPage() {
  const areasOfWork = [
    'Residential Development',
    'Property Advisory',
    'Plot & Investment Guidance',
    'Redevelopment Opportunities',
    'Real Estate Strategy'
  ];

  const missionPoints = [
    'To provide transparent, reliable, and professional real estate services',
    'To help clients make informed and profitable property decisions',
    'To build long-lasting relationships based on trust and integrity',
    'To offer end-to-end real estate solutions across residential, commercial, industrial, and investment segments',
    'To continuously adapt to market trends and deliver value-oriented results'
  ];

  return (
    <>
      <PageBanner 
        title="About us" 
        subtitle="About Us"
        image="/images/img_1486406146926-c627a92ad1ab.webp"
      />

      {/* Who We Are */}
      <section className="about-section">
        <div className="container-custom">
          <span className="section-badge">Who We Are</span>
          <h2 className="section-title" style={{ marginBottom: '30px' }}>Aura Rise Realty</h2>

          <div className="about-grid">
            <div className="about-text-content">
              <p>
                Aura Rise Realty is a well-established and trusted real estate consultancy based in Noida, offering comprehensive property solutions across key real estate markets including Delhi, Noida, and Gurugram (Gurgaon). With a strong commitment to integrity, transparency, and client satisfaction, we have positioned ourselves as a dependable name in the real estate industry.
              </p>
              <p>
                We specialize in a diverse range of property segments such as residential properties, commercial properties, industrial properties, investment properties, open plots, land parcels, and upcoming developments. Whether our clients are end-users looking for their dream home or investors seeking high-return opportunities, we provide tailored solutions that align with their goals and budgets.
              </p>
            </div>

            <div className="about-image-wrapper">
              <img 
                src="/images/img_1486406146926-c627a92ad1ab.webp" 
                alt="Aura Rise Corporate Office Exterior" 
                className="about-img"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
              />
            </div>
          </div>

          <div className="about-highlights-grid">
            <div className="highlight-box">
              <div className="highlight-num">7+</div>
              <h3 className="highlight-title">Years Experience</h3>
              <p className="highlight-desc">
                Hands-on performance and deep insights into local and national property market trends.
              </p>
            </div>

            <div className="highlight-box">
              <div className="highlight-num">100%</div>
              <h3 className="highlight-title">Ethical Practices</h3>
              <p className="highlight-desc">
                Building a strong corporate reputation for reliability, absolute transparency, and clean legal parameters.
              </p>
            </div>

            <div className="highlight-box">
              <div className="highlight-num">Tailored</div>
              <h3 className="highlight-title">Value Creation</h3>
              <p className="highlight-desc">
                Matching end-users and investors to custom-fit commercial, residential, or land parcel segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder-section" style={{ background: 'var(--light)' }}>
        <div className="container-custom">
          <div className="founder-grid" style={{ marginBottom: '60px' }}>
            <div className="founder-img-wrapper">
              <img 
                src="/images/img_1560250097-0b93528c311a.webp" 
                alt="Shubham Mehta - Founder & CEO" 
                className="founder-img"
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
              <span className="section-badge">Leadership & Vision</span>
              <h2 className="section-title" style={{ marginBottom: '4px' }}>Shubham Mehta</h2>
              <p style={{ fontWeight: 600, color: 'var(--secondary)', marginBottom: '16px' }}>
                Founder & CEO, Aura Rise Realty
              </p>

              <blockquote className="founder-quote-box">
                "I started Aura Rise Realty with a simple belief that real estate should be built on trust, not just transactions."
              </blockquote>

              <div style={{ color: 'var(--text)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '14px' }}>
                  <strong>With over 10 years of experience in the real estate industry</strong>, I've had the opportunity to work closely with homebuyers, investors, and landowners across Delhi NCR understanding what they actually need, not just what looks good on paper. That experience shaped the way we work at Aura Rise Realty today: transparent, practical, and focused on long-term value rather than quick sales.
                </p>
                <p style={{ marginBottom: '14px' }}>
                  Our work spans residential development, property advisory, plot and investment guidance, and redevelopment opportunities. But beyond the projects, what matters most to me is the relationship we build with every client because real estate isn't just about property, it's about people's future.
                </p>
                <p style={{ marginBottom: 0 }}>
                  As Aura Rise Realty continues to grow, my focus remains the same: deliver quality, stay transparent, and help people make property decisions they can trust for years to come.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '30px' }}>
            <div className="meta-card">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Compass size={24} style={{ color: 'var(--primary)' }} />
                <span>Areas of Work</span>
              </h3>
              <ul className="areas-list">
                {areasOfWork.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} style={{ color: '#b45309' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="meta-card">
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Eye size={24} style={{ color: 'var(--primary)' }} />
                <span>Vision & Approach</span>
              </h3>
              <p style={{ color: 'var(--text)', marginBottom: '14px' }}>
                Aura Rise Realty's vision is to shape a better residential landscape in Delhi NCR through thoughtfully planned projects and informed property decisions. Shubham Mehta believes real estate success comes from trust and consistency, not just projects and that focus continues to guide Aura Rise Realty as it grows.
              </p>
              <p style={{ color: 'var(--text)', margin: 0 }}>
                With over a decade in real estate, Shubham Mehta has built Aura Rise Realty around quality construction, practical investment insight, and transparent transactions helping homebuyers and investors turn property into long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container-custom">
          <div className="mv-grid-container">
            <div className="mv-pane">
              <span className="mv-badge">Our Outlook</span>
              <h3 className="mv-title">Our Vision</h3>
              <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '1.05rem' }}>
                To become a leading and most trusted real estate consultancy in India, recognized for ethical practices, customer satisfaction, and innovative property solutions, while creating long-term value for clients, investors, and communities.
              </p>
            </div>

            <div className="mv-pane">
              <span className="mv-badge">Our Purpose</span>
              <h3 className="mv-title">Our Mission</h3>
              <ul className="mission-list">
                {missionPoints.map((item, idx) => (
                  <li key={idx} className="mission-item">
                    <span className="mission-index">{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
