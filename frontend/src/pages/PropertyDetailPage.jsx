import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { propertiesData as fallbackProperties } from '../data/propertiesData';
import { fetchPropertyBySlug, submitInquiry } from '../services/api';
import { 
  MapPin, CheckSquare, Building, Home, Layers, Calendar, ShieldCheck, 
  Waves, TreePine, Coffee, Dumbbell, Utensils, Car, GraduationCap, 
  HeartPulse, ChevronRight, Phone, Mail, Send, Maximize2, X, Sparkles
} from 'lucide-react';

export default function PropertyDetailPage({ onOpenInquiry }) {
  const { id, slug } = useParams();
  
  const getInitialProperty = () => {
    return fallbackProperties.find(p => p.id === Number(id) || p.slug === slug) || fallbackProperties[0];
  };

  const [property, setProperty] = useState(getInitialProperty);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadProperty() {
      try {
        if (slug) {
          const data = await fetchPropertyBySlug(slug);
          if (data) {
            setProperty(data);
            return;
          }
        }
        setProperty(getInitialProperty());
      } catch (err) {
        setProperty(getInitialProperty());
      }
    }
    loadProperty();
  }, [id, slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setIsSubmitting(true);
    const payload = {
      ...formState,
      property: property?.title || 'General Property Inquiry',
      subject: `Private Consultation for ${property?.title || 'Property'}`
    };

    try {
      await submitInquiry(payload);
      fetch('https://formspree.io/f/xwvdlgoo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
      
      alert(`✅ Thank you! Our property specialist for ${property?.title || 'this project'} will contact you shortly.`);
      setFormState({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('❌ Submission error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Specification snapshot items
  const specItems = [
    { label: 'DEVELOPER PARTNER', val: property.title.includes('ACE') ? 'ACE Group' : property.title.includes('Smartworld') ? 'Smartworld & Elie Saab' : property.title.includes('Experion') ? 'Experion Developers (FDI)' : 'Aura Rise Partner', icon: Home },
    { label: 'TOTAL LANDPRINT', val: property.projectArea || property.specs?.projectArea || '15 Acres (Low-Density)', icon: Layers },
    { label: 'TOWER CONFIGURATION', val: property.unitTypes || property.specs?.unitTypes || '11 Iconic Towers', icon: Building },
    { label: 'ELEVATION HEIGHT', val: property.possession || property.specs?.possession || 'G+21 to G+25 Storeys', icon: Calendar },
    { label: 'EXCLUSIVE PLOTS', val: property.totalUnits || property.specs?.totalUnits || 'Approx 900 Units Only', icon: Sparkles },
    { label: 'AUTHORIZED RERA AGENT', val: 'PRM/KA/RERA/003073', icon: ShieldCheck }
  ];

  // Highlights list
  const highlightsList = property.features && property.features.length > 0 
    ? property.features 
    : [
        'Bespoke massive 15-Acre low-density land parcel conceptualized for high-end sustainable community living.',
        'A sovereign layout pattern featuring 11 elegantly spaced towers keeping vast visual horizons pristine.',
        'Engineered with an extraordinary 80% dedicated green landscape layout providing natural urban escape environments.',
        'Equipped with state-of-the-art multilevel club zones matching global hospitality standards.',
        'Vast layouts perfectly optimizing ventilation and structural configuration blueprints for smart ambient lighting.'
      ];

  // Amenities list
  const amenitiesList = [
    { title: 'Sports & Basketball Arena', icon: Dumbbell },
    { title: 'Expansive Central Greens', icon: TreePine },
    { title: 'Resort-Style Pool & Deck', icon: Waves },
    { title: 'Sophisticated Coffee Lounge', icon: Coffee },
    { title: 'Multi-tier Modern Gymnasium', icon: Dumbbell },
    { title: 'Artisanal Dining Concept', icon: Utensils },
    { title: '5-Tier Perimeter Security', icon: ShieldCheck },
    { title: 'Managed Subterranean Parking', icon: Car }
  ];

  const galleryImages = property.gallery && property.gallery.length > 0 
    ? property.gallery 
    : [property.image];

  return (
    <>
      <PageBanner 
        title={property.title} 
        subtitle={property.title}
        image={property.image}
      />

      <section style={{ background: '#f8fafc', padding: '60px 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', alignItems: 'start' }}>
            
            {/* Left Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Main Image Gallery Container */}
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                <div 
                  style={{ position: 'relative', cursor: 'pointer', borderRadius: '16px', overflow: 'hidden', height: '420px', marginBottom: '16px' }}
                  onClick={() => setLightboxImg(property.image)}
                >
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(15,23,42,0.8)', color: '#fff', padding: '8px 16px', borderRadius: '50px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)' }}>
                    <Maximize2 size={14} />
                    <span>Expand Gallery</span>
                  </div>
                  <span style={{ position: 'absolute', top: '16px', left: '16px', background: '#d97706', color: '#fff', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {property.tag || 'Ultra Luxury'}
                  </span>
                </div>

                {/* Sub Gallery Thumbnails */}
                {galleryImages.length > 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(galleryImages.length, 3)}, 1fr)`, gap: '12px' }}>
                    {galleryImages.slice(0, 3).map((img, idx) => (
                      <div 
                        key={idx} 
                        style={{ height: '100px', borderRadius: '12px', overflow: 'hidden', cursor: 'pointer', border: '2px solid #e2e8f0' }}
                        onClick={() => setLightboxImg(img)}
                      >
                        <img src={img} alt={`Gallery ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 1. Project Specification Snapshot */}
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Building size={24} style={{ color: '#d97706' }} />
                  <span>Project Specification Snapshot</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  {specItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ background: '#ffffff', padding: '12px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', color: '#d97706' }}>
                          <IconComponent size={22} />
                        </div>
                        <div>
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.5px', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                            {item.label}
                          </span>
                          <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                            {item.val}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Architectural & Community Highlights */}
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={24} style={{ color: '#d97706' }} />
                  <span>Architectural & Community Highlights</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {highlightsList.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <CheckSquare size={20} style={{ color: '#d97706', flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ margin: 0, fontSize: '15px', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Curated Lifestyle Amenities */}
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Waves size={24} style={{ color: '#d97706' }} />
                  <span>Curated Lifestyle Amenities</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                  {amenitiesList.map((amenity, idx) => {
                    const IconComp = amenity.icon;
                    return (
                      <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '14px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                        <IconComp size={18} style={{ color: '#d97706', flexShrink: 0 }} />
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b' }}>
                          {amenity.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Infrastructure & Location Connectivity */}
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={24} style={{ color: '#d97706' }} />
                  <span>Infrastructure & Location Connectivity</span>
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Education category */}
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ChevronRight size={18} style={{ color: '#d97706' }} />
                      <span>Elite Educational Infrastructure</span>
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569', paddingBottom: '8px', borderBottom: '1px dashed #e2e8f0' }}>
                        <span>Knowledge Park Institutional Core III</span>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>10 Mins</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569', paddingBottom: '8px', borderBottom: '1px dashed #e2e8f0' }}>
                        <span>Amity University Campus & GL Bajaj Corporate Hubs</span>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>15 Mins</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569' }}>
                        <span>Galgotias & Bennett Premium Research Academies</span>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>20 Mins</span>
                      </div>
                    </div>
                  </div>

                  {/* Health category */}
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <ChevronRight size={18} style={{ color: '#d97706' }} />
                      <span>Corporate Health Networks</span>
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569', paddingBottom: '8px', borderBottom: '1px dashed #e2e8f0' }}>
                        <span>Yatharth Super Speciality Clinic & Felix Care Facilities</span>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>15 Mins</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#475569' }}>
                        <span>Max Care Network & Medanta Institutional Base</span>
                        <span style={{ fontWeight: 700, color: '#0f172a' }}>20 – 30 Mins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#ffffff', borderRadius: '24px', padding: '32px 24px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  EXCLUSIVE BRANDED LIVING
                </span>

                <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a', marginBottom: '12px' }}>
                  {property.price || property.specs?.price || 'Price on Request'}
                </h3>

                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
                  Private configuration terms, bespoke layout portfolios, and tailored payment schemes are reserved exclusively for discerning owners.
                </p>

                <div style={{ height: '1px', background: '#e2e8f0', margin: '20px 0' }} />

                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
                  REQUEST PRIVATE CONSULTATION
                </h4>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input 
                    type="text" 
                    placeholder="Your Full Name *" 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    required 
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none' }}
                  />
                  <textarea 
                    rows={3} 
                    placeholder="Specific Requirements or Preferred Time for Consultation..." 
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{ background: '#f8fafc', border: '1px solid #cbd5e1', padding: '12px 14px', borderRadius: '10px', fontSize: '14px', outline: 'none', resize: 'none' }}
                  />
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ background: '#d97706', color: '#ffffff', border: 'none', padding: '14px', borderRadius: '10px', fontSize: '14px', fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px', transition: 'background 0.2s ease' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Private Consultation'}
                  </button>
                </form>

                <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.5, marginTop: '16px' }}>
                  *Official architectural catalog blueprints, configuration inventory sheets, and exclusive access terms will be transmitted privately via verified communication channels.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Side Button: Inquire Now */}
      {onOpenInquiry && (
        <button 
          onClick={() => onOpenInquiry(property.title)}
          style={{
            position: 'fixed',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'right bottom',
            background: '#0f172a',
            color: '#ffffff',
            border: 'none',
            padding: '10px 20px',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            fontWeight: 800,
            fontSize: '13px',
            letterSpacing: '1px',
            cursor: 'pointer',
            zIndex: 999,
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          Inquire Now
        </button>
      )}

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}
          onClick={() => setLightboxImg(null)}
        >
          <button 
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            onClick={() => setLightboxImg(null)}
          >
            <X size={32} />
          </button>
          <img src={lightboxImg} alt="Enlarged preview" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '12px' }} />
        </div>
      )}
    </>
  );
}
