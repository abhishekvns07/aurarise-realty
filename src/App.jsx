import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading page routes for optimal load speed and 100 Lighthouse performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));

// Fallback loader while page component chunks are fetched
const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(31, 41, 51, 0.1)',
      borderTopColor: '#1f2933',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
  </div>
);

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState('');

  const handleOpenInquiry = (propertyTitle = '') => {
    setSelectedProperty(propertyTitle);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/projects/:id/:slug" element={<PropertyDetailPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/term-of-services" element={<TermsPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="*" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <InquiryModal 
        isOpen={isInquiryOpen} 
        onOpen={handleOpenInquiry}
        onClose={handleCloseInquiry}
        defaultProperty={selectedProperty}
      />

    </div>
  );
}
