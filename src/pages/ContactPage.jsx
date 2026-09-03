import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      email: formData.emailAddress,
      phone: formData.phoneNumber,
      subject: formData.subject || 'Aura Rise Realty Contact Form',
      message: formData.message
    };

    try {
      const res1 = fetch('https://formspree.io/f/xaqgerpp', {
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

      const [r1] = await Promise.allSettled([res1, res2]);
      alert('✅ Message sent successfully! Our team will get back to you shortly.');
      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission Error:', err);
      alert('❌ Network Error! Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner 
        title="Contact Our Experts" 
        subtitle="Contact Us"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&fm=webp"
      />

      <section className="contact-section">
        <div className="container-custom">
          <div className="contact-split-grid">
            <div className="contact-form-block">
              <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Drop Us A Line</h2>
              <p className="contact-form-desc">
                Reach Aura Rise Realty for property guidance across Gurugram, Greater Noida, Indirapuram, Noida, and Yamuna Expressway. We respond quickly to calls and emails.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-row-dual">
                  <div className="form-field-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="form-input-custom"
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="emailAddress">Email Address *</label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      className="form-input-custom"
                      placeholder="Email address"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row-dual">
                  <div className="form-field-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-input-custom"
                      placeholder="Your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input-custom"
                      placeholder="Enter Keyword / Property"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input-custom textarea-custom"
                    placeholder="Tell us what property segment or project you're interested in..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-custom"
                  style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="contact-info-panel">
              <h3>Contact Us</h3>

              <div className="info-segment-item">
                <h4>Address:</h4>
                <p>
                  Tower C -1208,<br />
                  Bhutani Alphathum,<br />
                  Sector 90, Noida
                </p>
              </div>

              <div className="info-segment-item">
                <h4>Email:</h4>
                <p>
                  <a href="mailto:aurariserealty@gmail.com">aurariserealty@gmail.com</a>
                </p>
              </div>

              <div className="info-segment-item">
                <h4>Phone:</h4>
                <p>
                  <a href="tel:+919319393454">+91 9319393454</a>
                </p>
              </div>

              <div className="info-segment-item">
                <h4>Follow Us:</h4>
                <div className="info-social-row">
                  <a 
                    href="https://www.facebook.com/people/AuraRise-Realty/61591032106513/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="contact-social-btn" 
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/aurariserealty" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="contact-social-btn" 
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
