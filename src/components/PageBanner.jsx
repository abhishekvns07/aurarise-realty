import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({ title, subtitle, image }) {
  const currentText = subtitle || title;

  return (
    <section 
      className="page-header-section" 
      style={{ backgroundImage: `url('${image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&fm=webp'}')` }}
    >
      <div className="page-header-overlay"></div>
      <div className="container-custom page-header-container">
        <div className="page-header-panel">
          <h1 className="page-header-title">{title}</h1>
          <nav aria-label="breadcrumb">
            <ul className="custom-breadcrumb">
              <li>
                <Link to="/" className="breadcrumb-item-link">Home</Link>
              </li>
              <li style={{ opacity: 0.5 }}>/</li>
              <li>
                <span className="breadcrumb-item-current">{currentText}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
