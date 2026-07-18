import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle, Plus, Minus, FileText, ArrowRight } from 'lucide-react';
import './GetQuote.css';

const GetQuote = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="quote-page">
      {/* Hero Section - Split Layout */}
      <section className="hero-curved" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left: Text Content */}
            <div className="hero-content" style={{ paddingRight: '2rem' }}>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: 'white', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '1px' }}>
                  REQUEST A PROPOSAL
                </span>
              </motion.div>
              
              <motion.h1 
                initial="hidden" animate="visible" variants={fadeIn}
                className="display-4 text-white mb-4"
                style={{ fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: 1.2 }}
              >
                Custom Packaging Quotes in 24 Hours
              </motion.h1>
              
              <motion.p 
                initial="hidden" animate="visible" variants={fadeIn}
                className="lead text-white mb-5"
                style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.8 }}
              >
                Provide us with your packaging requirements, and our engineering team will get back to you with a competitive proposal tailored to your specific brand needs.
              </motion.p>
              
              <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ display: 'flex', gap: '1rem' }}>
                <a href="#quote-form" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem' }}>
                  Start Request <ArrowRight size={20} style={{ marginLeft: '10px' }}/>
                </a>
              </motion.div>
            </div>
            
            {/* Right: Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="conic-container conic-card" 
              style={{ padding: '4px', height: '100%', minHeight: '450px', borderRadius: '20px' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', zIndex: 2 }}>
                <img 
                  src="images/quality_structural_1784384572547.jpg" 
                  alt="Custom Packaging Design" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <h4 style={{ color: 'white', margin: 0, fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Engineering Your Brand</h4>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="quote-section section-padding" style={{ background: 'var(--bg-color)', position: 'relative', marginTop: '-50px', zIndex: 3 }}>
        <div className="container">
          <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <div className="quote-container" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, padding: '3rem' }}>
              {isSubmitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="success-message text-center" style={{ padding: '4rem 0' }}>
                <CheckCircle size={80} className="text-primary mx-auto mb-4" />
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Quote Request Submitted!</h2>
                <p className="text-muted" style={{ fontSize: '1.1rem' }}>Thank you. Our sales and engineering team has received your request and will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                
                {/* Company Details */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Company & Contact Details</h3>
                </div>
                
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Full Name *</label>
                    <input type="text" required placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Company Name *</label>
                    <input type="text" required placeholder="Acme Corp" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Email Address *</label>
                    <input type="email" required placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Phone Number *</label>
                    <input type="tel" required placeholder="+91 9224622911" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Country</label>
                    <input type="text" placeholder="e.g., India" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>State / Province</label>
                    <input type="text" placeholder="e.g., Maharashtra" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>City</label>
                    <input type="text" placeholder="e.g., Mumbai" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                </div>

                {/* Product Requirements */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Packaging Requirements</h3>
                </div>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Product Category *</label>
                    <select required style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s', outline: 'none' }}>
                      <option value="">Select a Category</option>
                      <option value="corrugated">Corrugated Boxes</option>
                      <option value="honeycomb">Honeycomb Boards</option>
                      <option value="sheets">Corrugated Sheets</option>
                      <option value="eco">Eco-Friendly Containers</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Estimated Quantity *</label>
                    <input type="number" required min="1000" placeholder="Minimum 1000" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Expected Delivery Date</label>
                    <input type="date" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Printing Requirements</label>
                    <select style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s', outline: 'none' }}>
                      <option value="none">No Printing (Plain)</option>
                      <option value="1color">1-Color Flexo</option>
                      <option value="fullcolor">Full Color (CMYK)</option>
                      <option value="premium">Premium (Spot UV, Foil)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '3rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-color)' }}>Detailed Specifications & Requirements</label>
                  <textarea rows="5" placeholder="Please describe dimensions, material preferences, flute types, or any specific challenges you're facing..." style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', transition: 'border-color 0.3s', resize: 'vertical', fontFamily: 'inherit' }}></textarea>
                </div>

                {/* File Upload */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Attachments</h3>
                </div>
                <div className="file-upload-area" style={{ border: '2px dashed var(--primary-light)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', background: 'var(--bg-color)', cursor: 'pointer', transition: 'all 0.3s' }}>
                  <input type="file" id="file-upload" multiple className="hidden-input" style={{ display: 'none' }} />
                  <label htmlFor="file-upload" className="upload-label" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <UploadCloud size={50} className="mb-2 text-primary" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Click to upload or drag & drop files here</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Supported formats: PDF, AI, PSD, JPG, PNG (Max 25MB)</p>
                  </label>
                </div>

                <div className="form-submit" style={{ marginTop: '3rem', textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem', borderRadius: '50px', width: '100%', maxWidth: '400px' }}>
                    Submit Request
                  </button>
                  <p className="privacy-note text-muted text-center mt-3" style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                    Your data is secure. We do not share your information with third parties.
                  </p>
                </div>

              </form>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="quote-faq section-padding bg-alt">
        <div className="container">
          <h2 className="section-title text-center mb-5">Quote & Ordering FAQs</h2>
          <div className="faq-list max-w-800 mx-auto mt-2" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: 'How long does it take to receive a quote?', a: 'Standard requests are usually answered within 24 hours. Complex custom engineering requests may take up to 48 hours.' },
              { q: 'Do you charge for structural design services?', a: 'Structural design is included free of charge for confirmed bulk orders. If you only require design services, a consulting fee applies.' },
              { q: 'What payment terms do you offer?', a: 'For new clients, we require 50% advance and 50% before dispatch. We offer Net 30/60 terms for established corporate accounts.' }
            ].map((faq, i) => (
              <div key={i} className="conic-container conic-card" style={{ padding: '2px', borderRadius: '16px' }}>
                <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{ background: 'var(--card-bg)', borderRadius: '14px', padding: '1.5rem 2rem', cursor: 'pointer', position: 'relative', zIndex: 2, transition: 'all 0.3s' }}>
                  <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', paddingRight: '2rem' }}>{faq.q}</h3>
                    {activeFaq === i ? <Minus className="text-primary" /> : <Plus className="text-primary" />}
                  </div>
                  {activeFaq === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="faq-answer" style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
