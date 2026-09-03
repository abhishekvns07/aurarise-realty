import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { MapPin } from 'lucide-react';
import { propertiesData } from '../data/propertiesData';

export default function PropertiesPage() {
  return (
    <>
      <PageBanner 
        title="Our Properties" 
        subtitle="Properties"
        image="/unsplash-img/photo-1545324418-cc1a3fa10c00?w=1600&fm=webp"
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

          <div className="projects-grid">
            {propertiesData.map(prop => (
              <div key={prop.id} className="project-card">
                <div className="project-image-wrapper">
                  <span className="project-tag">{prop.tag}</span>
                  <img src={prop.image} alt={prop.title} className="project-img" loading="lazy" decoding="async" referrerpolicy="no-referrer" crossorigin="anonymous" />
                </div>
                <div className="project-content">
                  <h3 className="project-card-title">{prop.title}</h3>
                  <div className="project-location">
                    <MapPin size={16} className="location-icon" />
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
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
