import React from 'react';
import PageBanner from '../components/PageBanner';

export default function TermsPage() {
  return (
    <>
      <PageBanner 
        title="Terms Of Service" 
        subtitle="Terms Of Service"
        image="/unsplash-img/photo-1451187580459-43490279c0fa?w=1600&fm=webp"
      />

      <section className="legal-page-section">
        <div className="container-custom">
          <div className="legal-content-wrapper">
            <div className="legal-meta-date">Effective Date: April 1, 2026</div>

            <div className="legal-block">
              <p>
                Welcome to Aura Rise Realty. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
              </p>
            </div>

            <div className="legal-block">
              <h3>1. Acceptance of Terms</h3>
              <p>
                By using the platform or consulting with Aura Rise Realty, you acknowledge that you have read, understood, and agree to be legally bound by these terms. If you do not agree, you must immediately discontinue use of our website and services.
              </p>
            </div>

            <div className="legal-block">
              <h3>2. Scope of Services</h3>
              <p>
                Aura Rise Realty operates as a premier real estate consultancy. We provide information, listing updates, marketing insights, and consulting assistance regarding residential properties, commercial spaces, industrial sectors, investment opportunities, open plots, and land parcels across Delhi, Noida, Gurugram, and the Yamuna Expressway.
              </p>
              <ul>
                <li>All materials provided on this platform are for informational purposes only.</li>
                <li>We do not guarantee that specific properties displayed will remain available indefinitely.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h3>3. User Obligations and Accurate Information</h3>
              <p>
                When using our contact forms, instant inquiry popups, or directly interacting with our team, you agree to provide true, accurate, current, and complete details (such as your Name, Phone Number, and Email Address). Providing fraudulent or misleading data may result in termination of your access to our consultancy services.
              </p>
            </div>

            <div className="legal-block">
              <h3>4. Property Pricing and Information Accuracy</h3>
              <p>While we strive to maintain absolute transparency and real-time precision:</p>
              <ul>
                <li>Pricing parameters, including baseline indicators like ₹10,000 PSF or specific crores valuations, are subject to change based on developer mandates and real estate market adjustments.</li>
                <li>Launch dates, payment structures (e.g., 20/80 or 25% booking plans), and site dimensions are explicitly verified through RERA frameworks wherever applicable, but ultimate transactions are dependent on official builder-buyer agreements.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h3>5. Intellectual Property</h3>
              <p>
                All content present on this website—including but not limited to text, design templates, layouts, the "AURARISE" logo, images, and custom code modules—is the exclusive property of Aura Rise Realty or its design partners. Unauthorized reproduction, modification, or distribution is strictly prohibited.
              </p>
            </div>

            <div className="legal-block">
              <h3>6. Limitation of Liability</h3>
              <p>
                Aura Rise Realty and its consultants shall not be held liable for any indirect, incidental, or consequential damages resulting from investment choices, variations in real estate markets, or reliance on layout descriptions before signed legal contracts are finalized with properties.
              </p>
            </div>

            <div className="legal-block">
              <h3>7. Governing Law</h3>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be handled exclusively in the courts of Noida/Delhi NCR.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
