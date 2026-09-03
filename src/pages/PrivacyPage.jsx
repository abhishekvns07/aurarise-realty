import React from 'react';
import PageBanner from '../components/PageBanner';

export default function PrivacyPage() {
  return (
    <>
      <PageBanner 
        title="Privacy Policy" 
        subtitle="Privacy Policy"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&fm=webp"
      />

      <section className="legal-page-section">
        <div className="container-custom">
          <div className="legal-content-wrapper">
            <div className="legal-meta-date">Effective Date: April 1, 2026</div>

            <div className="legal-block">
              <p>
                At Aura Rise Realty, we value your privacy and are committed to protecting your personal data. This Privacy Policy details how we collect, use, disclose, and secure your information when you interact with our real estate platform.
              </p>
            </div>

            <div className="legal-block">
              <h3>1. Information We Collect</h3>
              <p>We collect personal details that you willingly submit to us through our online ecosystem (such as contact page forms and instant inquiry modules):</p>
              <ul>
                <li><strong>Identity Data:</strong> Full Name.</li>
                <li><strong>Contact Data:</strong> Telephone/Phone Number, Email Address.</li>
                <li><strong>Inquiry Specifications:</strong> Specific message logs, keywords, or preferences regarding property choices (e.g., Luxury 4 BHK + Study configurations, investment scales, etc.).</li>
                <li><strong>Technical Logs:</strong> Tracking indicators, including your IP address and browsing patterns, to enhance site responsiveness.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h3>2. How We Use Your Information</h3>
              <p>Your data is used to streamline your real estate journey and maintain ethical business operations:</p>
              <ul>
                <li>To process your real estate requests and initiate callback consultations.</li>
                <li>To share curated, verified project updates matching your targeted geographic choices (Delhi, Noida, Gurugram).</li>
                <li>To verify communication validity and prevent malicious bot submissions.</li>
                <li>To optimize platform UI/UX parameters based on diagnostic analytical telemetry.</li>
              </ul>
            </div>

            <div className="legal-block">
              <h3>3. Data Protection and Security</h3>
              <p>
                We implement high-grade structural security protocols to ensure your data stays protected against unauthorized access, loss, or alteration. Access to your personal coordinates is strictly limited to authorized consulting specialists who require the information to process your real estate requests.
              </p>
            </div>

            <div className="legal-block">
              <h3>4. Third-Party Sharing Policies</h3>
              <p>
                Aura Rise Realty follows strict ethical guidelines and does not sell or lease your personal information to third-party marketing companies. We only share relevant details with verified developers or financial institutions when explicitly authorized by you to advance your property purchase, booking, or loan evaluation process.
              </p>
            </div>

            <div className="legal-block">
              <h3>5. Cookies and Tracking Technologies</h3>
              <p>
                Our platform uses cookies and tracking technologies to store micro-interaction states, remember your input layouts, and evaluate marketing performance. You can disable cookies through your browser settings, though doing so might affect some platform functionalities.
              </p>
            </div>

            <div className="legal-block">
              <h3>6. Your Rights</h3>
              <p>
                You retain the right to check your data records, request corrections to your information, or ask for your contact coordinates to be deleted from our marketing database. To execute these updates, contact us directly at <code>aurariserealty@gmail.com</code>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
