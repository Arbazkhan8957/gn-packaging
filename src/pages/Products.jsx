import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Download, PackageSearch } from 'lucide-react';
import { products } from '../productsData';
import './Products.css';

const Products = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [activeFilter, setActiveFilter] = useState('All');
  
  const industries = ['All', 'Food & Beverage', 'Industrial', 'E-Commerce', 'Cosmetics'];
  
  // Deterministically assign an industry based on product ID for the dummy data
  const getIndustry = (id) => industries[(id % 4) + 1];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => getIndustry(product.id) === activeFilter);

  return (
    <div className="products-page">
      {/* Curved Hero Banner (Matches Industries Template) */}
      <section className="hero-section hero-curved" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container hero-container" style={{ position: 'relative', zIndex: 10, paddingBottom: '3rem' }}>
          <div className="hero-content" style={{ flex: '1 1 300px', color: 'white', textAlign: 'left' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-title"
              style={{ textTransform: 'uppercase', color: 'white', marginBottom: '1rem', lineHeight: '1.2' }}
            >
              Our Premium <br/> Products
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
              style={{ color: '#E2E8F0', marginBottom: '2.5rem', fontSize: '1.25rem' }}
            >
              Explore our extensive range of customizable, sustainable, and high-durability packaging solutions. Engineered specifically to protect your goods and elevate your brand's unboxing experience worldwide.
            </motion.p>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px', background: 'var(--bg-color)' }}>
              <img 
                src="/images/gen_premium_1784230480978.jpg" 
                alt="Premium GN Packaging Products" 
                style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Catalog */}
      <section className="catalog-section section-padding">
        <div className="container">
          <div className="catalog-filter glass">
            <span>Filter by Industry:</span>
            {industries.map(industry => (
              <button 
                key={industry} 
                className={`filter-btn ${activeFilter === industry ? 'active' : ''}`}
                onClick={() => setActiveFilter(industry)}
              >
                {industry}
              </button>
            ))}
          </div>

          <div className="catalog-grid">
            {filteredProducts.map((product) => (
              <motion.div key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', width: '100%' }}>
                <div className="product-item-card glass" style={{ borderRadius: '20px', height: '100%', position: 'relative', zIndex: 2 }}>
                  <div className="product-img-wrapper">
                    <img src={product.img} alt={product.title} />
                    <div className="product-hover-overlay">
                      <Link to={`/products/${product.id}`} className="btn btn-primary"><PackageSearch size={18}/> View Details</Link>
                    </div>
                  </div>
                  <div className="product-item-info">
                    <h3>{product.title}</h3>
                    <p className="product-desc">{product.desc}</p>
                    <ul className="product-feature-list">
                      {product.features.map((feature, idx) => (
                        <li key={idx}><CheckCircle2 size={16} className="feature-icon"/> {feature}</li>
                      ))}
                    </ul>
                    <div className="product-item-actions">
                      <Link to={`/products/${product.id}`} className="read-more">Technical Specs <ArrowRight size={16}/></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="capabilities-section section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-3">
            <h4 className="section-tag">Customization</h4>
            <h2 className="section-title">Endless Possibilities</h2>
            <p className="section-subtitle">We offer comprehensive customization options to ensure your packaging perfectly represents your brand.</p>
          </div>

          <div className="capabilities-grid">
            <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', width: '100%', height: '100%' }}>
              <div className="cap-card glass" style={{ borderRadius: '20px', height: '100%', position: 'relative', zIndex: 2 }}>
                <h3>Printing Options</h3>
                <p>Offset Printing, Flexography, Digital Printing, UV Coating, Screen Printing.</p>
              </div>
            </div>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', width: '100%', height: '100%' }}>
              <div className="cap-card glass" style={{ borderRadius: '20px', height: '100%', position: 'relative', zIndex: 2 }}>
                <h3>Finishing Touches</h3>
                <p>Foil Stamping, Embossing/Debossing, Matte/Gloss Lamination, Spot UV, Soft Touch.</p>
              </div>
            </div>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', width: '100%', height: '100%' }}>
              <div className="cap-card glass" style={{ borderRadius: '20px', height: '100%', position: 'relative', zIndex: 2 }}>
                <h3>Material Selection</h3>
                <p>Kraft Paper, Virgin Paperboard, Corrugated Flutes (A, B, C, E, F), Recycled PET.</p>
              </div>
            </div>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', width: '100%', height: '100%' }}>
              <div className="cap-card glass" style={{ borderRadius: '20px', height: '100%', position: 'relative', zIndex: 2 }}>
                <h3>Structural Design</h3>
                <p>Custom Inserts, Die-cut Windows, Auto-bottom, Crash-lock, Telescope Boxes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Download */}
      <section className="catalog-cta section-padding">
        <div className="container">
          <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', maxWidth: '900px', margin: '0 auto' }}>
            <div className="download-box glass text-center" style={{ borderRadius: '20px', position: 'relative', zIndex: 2, margin: 0, width: '100%' }}>
              <h2>Get Our Full Product Catalogue</h2>
              <p>Download our comprehensive 2026 product guide with detailed specifications and sizing charts.</p>
              <a href="/catalogue.pdf" download="GN_Packaging_Catalogue_2026.pdf" className="btn btn-primary btn-large mt-2" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <Download size={20} style={{ marginRight: '8px' }}/> Download PDF Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
