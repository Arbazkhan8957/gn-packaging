import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Users, Briefcase, Plus, Minus, FileText } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="contact-page">
      {/* Hero Section - Split Layout */}
      <section className="hero-curved" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left: Text Content */}
            <div className="hero-content" style={{ paddingRight: '2rem' }}>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: 'white', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '1px' }}>
                  GET IN TOUCH
                </span>
              </motion.div>
              
              <motion.h1 
                initial="hidden" animate="visible" variants={fadeIn}
                className="display-4 text-white mb-4"
                style={{ fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: 1.2 }}
              >
                Let's Build Stronger Packaging Together
              </motion.h1>
              
              <motion.p 
                initial="hidden" animate="visible" variants={fadeIn}
                className="lead text-white mb-5"
                style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.8 }}
              >
                Whether you need bulk corrugated boxes, custom designer packaging, or heavy-duty export materials, GN Packaging is ready to engineer the perfect solution for your business.
              </motion.p>
              
              <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contact-form" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem' }}>
                  Get a Quote
                </a>
                <a href="#locations" className="btn btn-outline text-white" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.5)' }}>
                  Visit Factory
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
                  src="/images/quality_automation_1784384417146.jpg" 
                  alt="GN Packaging Factory" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <h4 style={{ color: 'white', margin: 0, fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Global Manufacturing HQ</h4>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Bulk & Custom Orders Banner */}
      <section className="bulk-orders-section section-padding" style={{ background: 'var(--card-bg)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
            <div style={{ background: 'var(--bg-color)', borderRadius: '20px', padding: '3rem', position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              <div style={{ flex: '1 1 500px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Looking for Bulk or Custom Orders?</h2>
                <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: 0 }}>
                  We specialize in high-volume manufacturing of corrugated sheets, honeycomb boards, and custom-punched boxes. Partner with us for vendor-managed inventory and just-in-time delivery for your supply chain.
                </p>
              </div>
              <div>
                <a href="tel:+919224622911" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={20} /> Speak to Sales Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-main section-padding">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Details */}
            <div className="contact-info-panel">
              <h4 className="section-tag">Get In Touch</h4>
              <h2 className="section-title">We're Ready to Help</h2>
              <p className="mb-4 text-muted">Whether you have a question about our manufacturing capabilities, pricing, or need technical support, our team is ready to answer all your questions.</p>

              <div className="info-list">
                
                <div className="conic-container conic-card mb-4" style={{ padding: '4px', borderRadius: '24px' }}>
                  <div className="info-item" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, margin: 0, height: '100%' }}>
                    <div className="info-icon" style={{ background: 'transparent' }}><MapPin size={24} style={{ color: 'var(--primary-color)' }}/></div>
                    <div>
                      <h4>Global Headquarters</h4>
                      <p>Gala no. 18/A Rahisunnisha Estate,<br/>Near Jangleshwar Mandir Ghatkopar ( W ),<br/>Mumbai- 400084</p>
                    </div>
                  </div>
                </div>

                <div className="conic-container conic-card mb-4" style={{ padding: '4px', borderRadius: '24px' }}>
                  <div className="info-item" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, margin: 0, height: '100%' }}>
                    <div className="info-icon" style={{ background: 'transparent' }}><Phone size={24} style={{ color: 'var(--primary-color)' }}/></div>
                    <div>
                      <h4>Call & WhatsApp</h4>
                      <p>Firoz Khan: +91 9224622911<br/>Moinuddin Khan: +91 9699362465</p>
                    </div>
                  </div>
                </div>

                <div className="conic-container conic-card mb-4" style={{ padding: '4px', borderRadius: '24px' }}>
                  <div className="info-item" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, margin: 0, height: '100%' }}>
                    <div className="info-icon" style={{ background: 'transparent' }}><Mail size={24} style={{ color: 'var(--primary-color)' }}/></div>
                    <div>
                      <h4>Email Us</h4>
                      <p>gnpackaging786@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="conic-container conic-card mb-4" style={{ padding: '4px', borderRadius: '24px' }}>
                  <div className="info-item" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, margin: 0, height: '100%' }}>
                    <div className="info-icon" style={{ background: 'transparent' }}><FileText size={24} style={{ color: 'var(--primary-color)' }}/></div>
                    <div>
                      <h4>Business Registration</h4>
                      <p>GSTIN: 27AOKPK4980P1Z2</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="conic-container conic-card" style={{ padding: '4px', borderRadius: '28px', height: 'fit-content' }}>
              <div className="contact-form-panel" style={{ background: 'var(--card-bg)', borderRadius: '24px', position: 'relative', zIndex: 2, padding: '2.5rem' }}>
                <h3 className="mb-4">Send us a Message</h3>
                <form>
                  <div className="form-group mb-3">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                    <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} />
                  </div>
                  <div className="form-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                      <input type="email" placeholder="john@example.com" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Phone</label>
                      <input type="tel" placeholder="+91 90000 00000" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }} />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Subject</label>
                    <select required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
                      <option value="">Select a Subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group mb-4">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                    <textarea rows="5" placeholder="How can we help you?" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'var(--text-color)', resize: 'vertical' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-large w-100" style={{ padding: '1rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <Send size={18}/> Send Message
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Direct Department Contacts</h2>
          </div>
          <div className="dept-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
              <div className="dept-card text-center" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, padding: '2.5rem', height: '100%' }}>
                <Briefcase size={40} className="dept-icon mb-3" style={{ color: 'var(--primary-color)', margin: '0 auto' }} />
                <h3 className="mb-2">Sales & Quotes</h3>
                <p className="mb-3 text-muted">For new inquiries, pricing, and bulk order discounts.</p>
                <a href="mailto:gnpackaging786@gmail.com" style={{ color: 'var(--text-color)', fontWeight: 600, display: 'block' }}>gnpackaging786@gmail.com</a>
                <p className="mt-2 text-muted">Firoz Khan</p>
              </div>
            </div>

            <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
              <div className="dept-card text-center" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, padding: '2.5rem', height: '100%' }}>
                <Users size={40} className="dept-icon mb-3" style={{ color: 'var(--primary-color)', margin: '0 auto' }} />
                <h3 className="mb-2">Customer Support</h3>
                <p className="mb-3 text-muted">For existing orders, tracking, and post-sales service.</p>
                <a href="mailto:gnpackaging786@gmail.com" style={{ color: 'var(--text-color)', fontWeight: 600, display: 'block' }}>gnpackaging786@gmail.com</a>
                <p className="mt-2 text-muted">Moinuddin Khan</p>
              </div>
            </div>

            <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
              <div className="dept-card text-center" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, padding: '2.5rem', height: '100%' }}>
                <MessageCircle size={40} className="dept-icon mb-3" style={{ color: 'var(--primary-color)', margin: '0 auto' }} />
                <h3 className="mb-2">Media & Press</h3>
                <p className="mb-3 text-muted">For media inquiries, press kits, and PR related matters.</p>
                <a href="mailto:gnpackaging786@gmail.com" style={{ color: 'var(--text-color)', fontWeight: 600, display: 'block' }}>gnpackaging786@gmail.com</a>
                <p className="mt-2 text-muted">General Inquiry</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="locations" className="map-section section-padding">
        <div className="container">
          <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '30px' }}>
            <div className="map-container" style={{ background: 'var(--card-bg)', borderRadius: '26px', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Office Location Map" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
              <div className="map-overlay" style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'var(--card-bg)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', maxWidth: '400px' }}>
                <h3 className="mb-2">Visit Our Office</h3>
                <p className="text-muted mb-3">Gala no. 18/A Rahisunnisha Estate,<br/>Near Jangleshwar Mandir Ghatkopar ( W ),<br/>Mumbai- 400084</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-block' }}>Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="contact-faq section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-5">Common Questions</h2>
          <div className="faq-list mx-auto" style={{ maxWidth: '800px' }}>
            {[
              { q: 'Can I visit the manufacturing facility?', a: 'Yes, we welcome clients for factory tours. Please contact Firoz Khan or Moinuddin Khan to schedule a visit to our Ghatkopar facility.' },
              { q: 'Do you supply used and new boxes?', a: 'Yes, we are dealers in all kinds of New & Old Corrugated Boxes, Imported Boxes, Paper rolls, Sheets & Packing materials.' },
              { q: 'What are your operating hours?', a: 'We are open Monday to Saturday from 8:00 AM to 8:00 PM. We are closed on Sundays.' }
            ].map((faq, i) => (
              <div key={i} className="conic-container conic-card mb-3" style={{ padding: '4px', borderRadius: '20px' }}>
                <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} style={{ background: 'var(--card-bg)', borderRadius: '16px', position: 'relative', zIndex: 2, padding: '1.5rem', cursor: 'pointer' }} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{faq.q}</h3>
                    {activeFaq === i ? <Minus style={{ color: 'var(--primary-color)' }}/> : <Plus style={{ color: 'var(--primary-color)' }}/>}
                  </div>
                  {activeFaq === i && (
                    <div className="faq-answer" style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </div>
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

export default Contact;
