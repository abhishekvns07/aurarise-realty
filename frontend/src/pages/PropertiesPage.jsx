import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { MapPin, Search, Filter, Loader2, RefreshCw, ArrowRight } from 'lucide-react';
import { propertiesData as fallbackProperties } from '../data/propertiesData';
import { fetchProperties } from '../services/api';

export default function PropertiesPage({ onOpenInquiry }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  useEffect(() => {
    async function loadProperties() {
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
    loadProperties();
  }, []);

  const cities = ['All', ...new Set(properties.map(p => p.city).filter(Boolean))];
  const tags = ['All', ...new Set(properties.map(p => p.tag).filter(Boolean))];

  const filteredProperties = properties.filter(prop => {
    const matchesSearch = searchQuery === '' || 
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prop.description && prop.description.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCity = selectedCity === 'All' || (prop.city && prop.city.toLowerCase() === selectedCity.toLowerCase());
    const matchesTag = selectedTag === 'All' || (prop.tag && prop.tag.toLowerCase() === selectedTag.toLowerCase());

    return matchesSearch && matchesCity && matchesTag;
  });

  return (
    <>
      <PageBanner 
        title="Our Properties" 
        subtitle="Properties"
        image="/images/img_1545324418-cc1a3fa10c00.webp"
      />

      <section className="featured-projects-section">
        <div className="container-custom">
          <div className="section-header-center">
            <span className="section-badge">Exclusive Listings</span>
            <h2 className="projects-title">Explore All Properties</h2>
            <p className="projects-subtitle">
              Discover high-value residential luxury homes, branded residences, and prime commercial investments across Noida, Gurugram, and Delhi NCR.
            </p>
          </div>

          {/* Dynamic Interactive Search & Filter Bar */}
          <div style={{
            background: '#ffffff',
            padding: '20px 24px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            marginBottom: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #f1f5f9'
          }}>
            <div style={{ flex: '1 1 280px', display: 'flex', alignItems: 'center', background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <Search size={20} style={{ color: '#94a3b8', marginRight: '10px' }} />
              <input 
                type="text" 
                placeholder="Search location, property title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', width: '100%', fontSize: '15px', color: '#1e293b' }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={18} style={{ color: '#d97706' }} />
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>City:</span>
                <select 
                  value={selectedCity} 
                  onChange={(e) => setSelectedCity(e.target.value)}
                  style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '10px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none', color: '#1e293b', cursor: 'pointer' }}
                >
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>Category:</span>
                <select 
                  value={selectedTag} 
                  onChange={(e) => setSelectedTag(e.target.value)}
                  style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '10px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none', color: '#1e293b', cursor: 'pointer' }}
                >
                  {tags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>

              {(searchQuery || selectedCity !== 'All' || selectedTag !== 'All') && (
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCity('All'); setSelectedTag('All'); }}
                  style={{ background: '#fee2e2', color: '#ef4444', border: 'none', padding: '10px 14px', borderRadius: '10px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <RefreshCw size={14} /> Reset
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Loader2 className="animate-spin text-amber-500 mb-3" size={40} style={{ color: '#d97706', animation: 'spin 1s linear infinite' }} />
              <p style={{ color: '#64748b', fontWeight: 500 }}>Connecting to PostgreSQL Database...</p>
            </div>
          ) : filteredProperties.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#f8fafc', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
              <h3 style={{ fontSize: '20px', color: '#334155', marginBottom: '8px' }}>No properties match your filter</h3>
              <p style={{ color: '#64748b' }}>Try adjusting your search criteria or resetting filters.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCity('All'); setSelectedTag('All'); }}
                style={{ marginTop: '16px', background: '#d97706', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}
              >
                Show All Properties
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProperties.map(prop => (
                <div key={prop.id} className="project-card">
                  <div className="project-image-wrapper">
                    <span className="project-tag">{prop.tag}</span>
                    <img src={prop.image} alt={prop.title} className="project-img" loading="lazy" decoding="async" referrerPolicy="no-referrer" crossOrigin="anonymous" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-card-title">{prop.title}</h3>
                    <div className="project-location">
                      <MapPin size={16} className="location-icon" />
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
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
