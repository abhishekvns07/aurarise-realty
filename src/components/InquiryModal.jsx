import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { propertiesData } from '../data/propertiesData';

export default function InquiryModal({ isOpen, onOpen, onClose, defaultProperty = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: defaultProperty
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);



  useEffect(() => {
    if (defaultProperty) {
      setFormData(prev => ({ ...prev, property: defaultProperty }));
    }
  }, [defaultProperty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let isValid = true;
    let errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name = 'Name must be at least 3 characters.';
      isValid = false;
    }
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      errs.phone = 'Enter a valid 10-digit phone number.';
      isValid = false;
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address.';
      isValid = false;
    }
    if (!formData.property) {
      errs.property = 'Please select a property.';
      isValid = false;
    }
    setErrors(errs);
    return isValid;
  };

  const handleModalClose = () => {
    setHasDismissed(true);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      property: formData.property,
      subject: 'Instant Property Inquiry'
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
      alert('✅ Thank you! Our property consultants will contact you shortly.');
      setFormData({ name: '', phone: '', email: '', property: '' });
      handleModalClose();
    } catch (err) {
      console.error(err);
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalStyles = {
    backdrop: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(31, 41, 51, 0.55)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'all' : 'none',
      transition: 'opacity 0.4s ease',
      padding: '20px'
    },
    popupWrapper: {
      width: '100%',
      maxWidth: '440px',
      background: '#ffffff',
      border: '1px solid var(--border)',
      borderRadius: '28px',
      padding: '40px 35px',
      boxShadow: '0 30px 60px rgba(17, 24, 39, 0.2)',
      position: 'relative',
      transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(15px)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    },
    closeBtn: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'var(--light)',
      border: '1px solid var(--border)',
      color: 'var(--heading)',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'var(--transition)'
    },
    sideWidgetBtn: {
      position: 'fixed',
      right: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'var(--primary)',
      color: '#fff',
      padding: '16px 12px',
      border: 'none',
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px',
      cursor: 'pointer',
      boxShadow: '-4px 10px 30px rgba(0, 0, 0, 0.18)',
      zIndex: 9999,
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      fontSize: '0.85rem',
      fontWeight: '600',
      letterSpacing: '0.05em',
      display: !isOpen ? 'block' : 'none',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <>
      <button 
        className="side-inquire-btn"
        style={{ display: !isOpen ? 'block' : 'none' }}
        onClick={() => onOpen('')}
      >
        Inquire Now
      </button>

      {isOpen && (
        <div style={modalStyles.backdrop} onClick={handleModalClose}>
          <div style={modalStyles.popupWrapper} onClick={e => e.stopPropagation()}>
          <button 
            style={modalStyles.closeBtn}
            onClick={handleModalClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div style={{ marginBottom: '24px', paddingRight: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--heading)', fontWeight: '700', marginBottom: '8px' }}>
              Instant Property Inquiry
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text)', margin: 0 }}>
              Leave your details and our expert real estate consultants will contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} noValidate>
            <div>
              <input
                id="inquiry-name"
                aria-label="Full Name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input-custom"
                style={{ borderColor: errors.name ? '#dc2626' : 'var(--border)' }}
              />
              {errors.name && <span style={{ color: '#dc2626', fontSize: '0.75rem', paddingLeft: '16px' }}>{errors.name}</span>}
            </div>

            <div>
              <input
                id="inquiry-phone"
                aria-label="Phone Number"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input-custom"
                style={{ borderColor: errors.phone ? '#dc2626' : 'var(--border)' }}
              />
              {errors.phone && <span style={{ color: '#dc2626', fontSize: '0.75rem', paddingLeft: '16px' }}>{errors.phone}</span>}
            </div>

            <div>
              <input
                id="inquiry-email"
                aria-label="Email Address"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="form-input-custom"
                style={{ borderColor: errors.email ? '#dc2626' : 'var(--border)' }}
              />
              {errors.email && <span style={{ color: '#dc2626', fontSize: '0.75rem', paddingLeft: '16px' }}>{errors.email}</span>}
            </div>

            <div style={{ position: 'relative' }}>
              <select
                id="inquiry-property-select"
                aria-label="Select Property Interested In"
                name="property"
                value={formData.property}
                onChange={handleChange}
                className="form-input-custom"
                style={{ 
                  borderColor: errors.property ? '#dc2626' : 'var(--border)',
                  appearance: 'none',
                  WebkitAppearance: 'none'
                }}
              >
                <option value="" disabled hidden>Select Property</option>
                {propertiesData.map(p => (
                  <option key={p.id} value={p.title}>
                    {p.title} ({p.location})
                  </option>
                ))}
              </select>
              <ChevronDown size={20} style={{ position: 'absolute', right: '20px', top: '16px', color: 'var(--text)', pointerEvents: 'none' }} />
              {errors.property && <span style={{ color: '#dc2626', fontSize: '0.75rem', paddingLeft: '16px' }}>{errors.property}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary-custom"
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Submitting...' : 'Request Callback'}
            </button>
          </form>
        </div>
      </div>
      )}
    </>
  );
}
