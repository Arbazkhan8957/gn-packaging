import React from 'react';
import { Link } from 'react-router-dom';
import { Package, MapPin, Phone, Mail, ArrowRight, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-alt" style={{ paddingTop: '4rem', paddingBottom: '0', background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Footer Top - Floating Call to Action */}
      <div className="container" style={{ position: 'relative', zIndex: 3, marginBottom: '-50px' }}>
        <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
          <div style={{ background: 'var(--card-bg)', borderRadius: '20px', padding: '3rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>Ready to Upgrade Your Packaging?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', margin: 0 }}>Get a custom quote within 24 hours from our engineering team.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', borderRadius: '50px', fontWeight: 600 }}>Get Started</Link>
              <a href="https://wa.me/919224622911" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', borderRadius: '50px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={{ background: '#0f172a', color: 'rgba(255,255,255,0.9)', paddingTop: '100px', paddingBottom: '4rem', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 -10px 40px rgba(0,0,0,0.1)' }}>
        <div className="container">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            
            <div className="footer-col brand-col">
              <Link to="/" className="nav-brand mb-3" style={{ display: 'inline-block' }}>
                <img src="/images/logo.jpg" alt="GN Packaging" style={{ height: '70px', width: '70px', objectFit: 'cover', background: 'white', padding: '4px', borderRadius: '50%', border: '2px solid var(--primary-light)' }} />
              </Link>
              <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '1rem' }}>GN Packaging</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Premium corrugated and customized packaging solutions for modern industries. Delivering quality, sustainability, and innovation in every box.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <FileText size={20} style={{ color: 'var(--primary-light)' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>GSTIN NUMBER</div>
                  <div style={{ color: '#ffffff', fontWeight: 600, letterSpacing: '1px' }}>27BOQPN7845K1Z3</div>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1.5rem', position: 'relative', paddingBottom: '10px' }}>
                Quick Links
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: 'var(--primary-light)', borderRadius: '2px' }}></div>
              </h3>
              <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}><ArrowRight size={14} style={{ color: 'var(--primary-light)' }}/> About Us</Link></li>
                <li><Link to="/products" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}><ArrowRight size={14} style={{ color: 'var(--primary-light)' }}/> Products</Link></li>
                <li><Link to="/industries" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}><ArrowRight size={14} style={{ color: 'var(--primary-light)' }}/> Industries We Serve</Link></li>
                <li><Link to="/infrastructure" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}><ArrowRight size={14} style={{ color: 'var(--primary-light)' }}/> Infrastructure</Link></li>
                <li><Link to="/quality" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}><ArrowRight size={14} style={{ color: 'var(--primary-light)' }}/> Quality & Certifications</Link></li>
                <li><Link to="/gallery" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}><ArrowRight size={14} style={{ color: 'var(--primary-light)' }}/> Gallery</Link></li>
                <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}><ArrowRight size={14} style={{ color: 'var(--primary-light)' }}/> Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1.5rem', position: 'relative', paddingBottom: '10px' }}>
                Contact Info
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: 'var(--primary-light)', borderRadius: '2px' }}></div>
              </h3>
              <ul className="footer-contact" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <MapPin size={22} style={{ color: 'var(--primary-light)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Gala no. 18/A Rahisunnisha Estate, Near Jangleshwar Mandir Ghatkopar ( W ), Mumbai- 400084</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                  <a href="tel:+919224622911" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+91 9224622911</a>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                  <a href="tel:+919699362465" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+91 9699362465</a>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <MessageCircle size={20} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                  <a href="https://wa.me/919224622911" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>WhatsApp: +91 9224622911</a>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Mail size={20} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                  <a href="mailto:gnpackaging786@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>gnpackaging786@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="footer-col newsletter-col">
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '1.5rem', position: 'relative', paddingBottom: '10px' }}>
                Newsletter
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '3px', background: 'var(--primary-light)', borderRadius: '2px' }}></div>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: 1.6 }}>Subscribe to our newsletter for the latest packaging trends, eco-friendly materials, and exclusive offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Email Address" required />
                <button type="submit" className="btn btn-primary"><CheckCircle size={20}/></button>
              </form>
            </div>

          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
            <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} GN Packaging. All rights reserved.</p>
            <div className="footer-bottom-links" style={{ display: 'flex', gap: '1.5rem' }}>
              <Link to="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy Policy</Link>
              <Link to="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}>Terms of Service</Link>
              <Link to="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}>Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
