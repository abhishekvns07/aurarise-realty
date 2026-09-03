import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { propertiesData } from '../data/propertiesData';
import { MapPin, CheckCircle, ShieldCheck, Building2, Phone, Mail, Navigation, Plane, Train, Car, X, Maximize2 } from 'lucide-react';

export default function PropertyDetailPage({ onOpenInquiry }) {
  const { id, slug } = useParams();
  const property = propertiesData.find(p => p.id === Number(id) || p.slug === slug) || propertiesData[0];

  const [activeTab, setActiveTab] = useState('overview');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setIsSubmitting(true);
    const payload = {
      ...formState,
      property: property.title,
      subject: `Inquiry for ${property.title}`
    };

    try {
      const res1 = fetch('https://formspree.io/f/xwvdlgoo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const res2 = fetch('https://script.google.com/macros/s/AKfycbzoKMVE_QJobK9tO8eg8FR0hEP1wVBTlNs5e4R1muEqXsTRJRH8ic69OFXxUYzLfDrO_Q/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      await Promise.allSettled([res1, res2]);
      alert(`✅ Thank you! Our property specialist for ${property.title} will contact you shortly.`);
      setFormState({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('❌ Submission error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const connectivityItems = [
    { name: 'Jewar International Airport', dist: '25 Mins Drive', icon: Plane },
    { name: 'Expressway / Highway Corridor', dist: '2 Mins Drive', icon: Car },
    { name: 'Metro Railway Station', dist: '5 Mins Walk', icon: Train },
    { name: 'Commercial Hub / Cyber Park', dist: '10 Mins Drive', icon: Building2 }
  ];

  return (
    <>
      <PageBanner 
        title={property.title} 
        subtitle={property.title}
        image={property.image}
      />

      <section className="property-detail-section">
        <div className="container-custom">
          <div className="property-detail-grid">
            {/* Left Content */}
            <div>
              {/* Interactive Dynamic Gallery Grid */}
              <div className="gallery-grid">
                <div 
                  style={{ position: 'relative', cursor: 'pointer' }}
                  onClick={() => setLightboxImg(property.image)}
                >
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="gallery-img gallery-main-img" 
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    background: 'rgba(31, 41, 51, 0.75)',
                    color: '#fff',
                    padding: '8px 14px',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    <Maximize2 size={14} />
                    <span>Expand</span>
                  </div>
                </div>

                {property.gallery && property.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => setLightboxImg(img)}
                  >
                    <img src={img} alt={`${property.title} preview ${idx+1}`} className="gallery-img" referrerPolicy="no-referrer" crossOrigin="anonymous" />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '30px' }}>
                <span className="project-tag" style={{ position: 'static', display: 'inline-block', marginBottom: '16px' }}>
                  {property.tag}
                </span>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>{property.title}</h2>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', fontSize: '1.05rem', fontWeight: 500 }}>
                  <MapPin size={18} style={{ color: 'var(--primary)' }} />
                  <span>{property.location}</span>
                </p>
              </div>

              <div style={{ background: 'var(--light)', padding: '24px', borderRadius: '18px', marginBottom: '35px', borderLeft: '4px solid var(--primary)' }}>
                <h4 style={{ color: '#b45309', margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>
                  Highlights: {property.highlight}
                </h4>
              </div>

              {/* Interactive Detail Tabs */}
              <div className="detail-tabs-nav">
                <button 
                  className={`detail-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  <Building2 size={16} />
                  <span>Overview</span>
                </button>
                <button 
                  className={`detail-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specs')}
                >
                  <CheckCircle size={16} />
                  <span>Specifications</span>
                </button>
                <button 
                  className={`detail-tab-btn ${activeTab === 'amenities' ? 'active' : ''}`}
                  onClick={() => setActiveTab('amenities')}
                >
                  <ShieldCheck size={16} />
                  <span>Amenities</span>
                </button>
                <button 
                  className={`detail-tab-btn ${activeTab === 'connectivity' ? 'active' : ''}`}
                  onClick={() => setActiveTab('connectivity')}
                >
                  <Navigation size={16} />
                  <span>Location & Connectivity</span>
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <div>
                  <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>Project Overview</h3>
                    <p style={{ color: 'var(--text)', lineHeight: 1.85, fontSize: '1.05rem' }}>
                      {property.description}
                    </p>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>Key Advantage Bulletins</h3>
                    <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                      {property.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', fontSize: '1.05rem' }}>
                          <CheckCircle size={20} style={{ color: '#b45309', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2: Specifications */}
              {activeTab === 'specs' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Project Specifications Table</h3>
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>Price Scale</td>
                        <td style={{ fontWeight: 700, color: 'var(--primary)' }}>{property.specs.price}</td>
                      </tr>
                      <tr>
                        <td>Rate per Sq.Ft.</td>
                        <td>{property.specs.rate}</td>
                      </tr>
                      <tr>
                        <td>Unit Configurations</td>
                        <td>{property.specs.unitTypes}</td>
                      </tr>
                      <tr>
                        <td>Total Project Footprint</td>
                        <td>{property.specs.projectArea}</td>
                      </tr>
                      <tr>
                        <td>Total Density / Units</td>
                        <td>{property.specs.totalUnits}</td>
                      </tr>
                      <tr>
                        <td>Possession Timeline</td>
                        <td>{property.specs.possession}</td>
                      </tr>
                      <tr>
                        <td>RERA & Construction Status</td>
                        <td>
                          <span style={{ background: '#dcfce7', color: '#15803d', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                            {property.specs.status}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tab 3: Amenities */}
              {activeTab === 'amenities' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Luxury Lifestyle Amenities</h3>
                  <div className="amenities-grid-display">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="amenity-chip">
                        <ShieldCheck size={18} style={{ color: 'var(--primary)' }} />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Location & Connectivity */}
              {activeTab === 'connectivity' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Location & Transport Connectivity</h3>
                  <p style={{ color: 'var(--text)', marginBottom: '20px' }}>
                    Situated in {property.location}, offering quick access to major highways, airports, top international schools, and premium medical centers.
                  </p>

                  <div className="connectivity-grid">
                    {connectivityItems.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div key={idx} className="connectivity-chip">
                          <div className="conn-icon">
                            <IconComp size={20} />
                          </div>
                          <div>
                            <div className="conn-name">{item.name}</div>
                            <div className="conn-dist">{item.dist}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Inquiry Form */}
            <div>
              <div className="sidebar-inquiry-box">
                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--heading)' }}>
                  Interested in {property.title}?
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '24px' }}>
                  Fill out the form below to receive exclusive floor plans, pricing sheets, and site visit arrangements.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label htmlFor="pd-name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--heading)', marginBottom: '4px', display: 'block' }}>Your Name *</label>
                    <input
                      id="pd-name"
                      aria-label="Your Full Name"
                      type="text"
                      required
                      placeholder="Full Name"
                      className="form-input-custom"
                      value={formState.name}
                      onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="pd-phone" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--heading)', marginBottom: '4px', display: 'block' }}>Phone Number *</label>
                    <input
                      id="pd-phone"
                      aria-label="Phone Number"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      className="form-input-custom"
                      value={formState.phone}
                      onChange={e => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="pd-email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--heading)', marginBottom: '4px', display: 'block' }}>Email Address</label>
                    <input
                      id="pd-email"
                      aria-label="Email Address"
                      type="email"
                      placeholder="Email Address"
                      className="form-input-custom"
                      value={formState.email}
                      onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label htmlFor="pd-message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--heading)', marginBottom: '4px', display: 'block' }}>Message / Queries</label>
                    <textarea
                      id="pd-message"
                      aria-label="Message or Queries"
                      placeholder={`I would like to inquire about ${property.title}...`}
                      className="form-input-custom textarea-custom"
                      style={{ minHeight: '90px' }}
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-custom"
                    style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Sending Request...' : 'Schedule Site Visit'}
                  </button>
                </form>

                <div style={{ borderTop: '1px solid var(--border)', marginTop: '24px', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="tel:+919319393454" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem' }}>
                    <Phone size={16} />
                    <span>Direct Call: +91 9319393454</span>
                  </a>
                  <a href="mailto:aurariserealty@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--secondary)', fontSize: '0.9rem' }}>
                    <Mail size={16} />
                    <span>aurariserealty@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Lightbox Modal */}
      {lightboxImg && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <button 
            onClick={() => setLightboxImg(null)}
            style={{
              position: 'absolute',
              top: '25px',
              right: '25px',
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: '#fff',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>
          <img 
            src={lightboxImg} 
            alt="Expanded property view" 
            style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '16px', objectFit: 'contain' }}
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
          />
        </div>
      )}
    </>
  );
}
