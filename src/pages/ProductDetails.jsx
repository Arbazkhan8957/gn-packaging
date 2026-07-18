import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Package, Ruler, ShieldCheck, Tag, Plus, Minus, Send } from 'lucide-react';
import { products } from '../productsData';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const product = products.find(p => p.id === parseInt(id));

  // Redirect if product not found
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  if (!product) return null;

  // Use the specific product's image for all mock gallery views for now
  const productImages = [
    product.img,
    product.img,
    product.img,
    product.img
  ];

  const specifications = [
    { label: 'Material', value: '100% Recyclable Kraft Paper' },
    { label: 'Flute Type', value: 'B, C, E, or BC Double Wall' },
    { label: 'Printing Options', value: 'Flexography, Litho-lamination, Digital' },
    { label: 'Box Style', value: 'Regular Slotted Container (RSC), Die-Cut' },
    { label: 'Dimensions', value: 'Fully Customizable (Min: 4x4x4" - Max: 40x40x40")' },
    { label: 'Color Options', value: 'CMYK, Pantone, Brown Kraft, White Kraft' },
    { label: 'Weight Capacity', value: 'Up to 100 lbs (Depending on flute type)' },
    { label: 'Finishing', value: 'Matte/Glossy Varnish, Moisture Resistant Coating' }
  ];

  return (
    <div className="product-details-page">
      <div className="container mt-header">
        
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Products</span> &gt; <span className="active">{product.category}</span>
        </div>

        <div className="details-grid">
          {/* Gallery Section */}
          <div className="product-gallery">
            <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', position: 'relative', width: '100%', height: 'auto', marginBottom: '1.5rem' }}>
              <div className="main-image-view glass" style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', zIndex: 2 }}>
                <img src={productImages[activeImage]} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="badge-360">360&deg; View Available</div>
              </div>
            </div>
            
            <div className="thumbnail-strip">
              {productImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`thumbnail glass ${activeImage === idx ? 'active' : ''}`}
                  onClick={() => setActiveImage(idx)}
                  style={{ borderRadius: '12px', overflow: 'hidden' }}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="product-info-panel">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-category-tag">{product.category}</p>
            <p className="product-description">{product.desc}</p>

            <div className="quick-features">
              <div className="qf-item"><ShieldCheck className="qf-icon"/> High Durability</div>
              <div className="qf-item"><Package className="qf-icon"/> Custom Fit</div>
              <div className="qf-item"><Ruler className="qf-icon"/> Any Dimension</div>
              <div className="qf-item"><Tag className="qf-icon"/> MOQ: 500</div>
            </div>

            <div className="specs-table glass">
              <h3>Technical Specifications</h3>
              <table>
                <tbody>
                  {specifications.map((spec, i) => (
                    <tr key={i}>
                      <td className="spec-label">{spec.label}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="action-buttons">
              <button className="btn btn-primary btn-large w-100" onClick={() => document.getElementById('quote-form-section')?.scrollIntoView({ behavior: 'smooth' })}>Request Quote</button>
              <a href="/specs.pdf" download={`${product.title}_Specs.pdf`} className="btn btn-outline btn-large w-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>Download Specs PDF</a>
            </div>
          </div>
        </div>

        {/* Detailed Description / Advantages */}
        <section className="detailed-info section-padding border-top">
          <div className="info-grid">
            <div>
              <h2 className="section-title">Applications & Industries</h2>
              <ul className="check-list">
                <li><CheckCircle2 className="check-icon"/> E-Commerce Shipping & Fulfillment</li>
                <li><CheckCircle2 className="check-icon"/> Electronics & Appliances</li>
                <li><CheckCircle2 className="check-icon"/> Food & Beverage Bulk Transport</li>
                <li><CheckCircle2 className="check-icon"/> Automotive Parts Packaging</li>
                <li><CheckCircle2 className="check-icon"/> Apparel & Textiles</li>
              </ul>
            </div>
            <div>
              <h2 className="section-title">Key Advantages</h2>
              <ul className="check-list">
                <li><CheckCircle2 className="check-icon"/> <strong>Cost-Effective:</strong> Best value for heavy-duty shipping.</li>
                <li><CheckCircle2 className="check-icon"/> <strong>Sustainability:</strong> Made from 80% post-consumer waste.</li>
                <li><CheckCircle2 className="check-icon"/> <strong>Brand Visibility:</strong> High-quality print surface for logos.</li>
                <li><CheckCircle2 className="check-icon"/> <strong>Protection:</strong> Cushioning flute structure prevents impact damage.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="quote-form-section" className="inquiry-section section-padding border-top bg-alt rounded-section">
          <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', maxWidth: '800px', margin: '0 auto' }}>
            <div className="inquiry-container glass" style={{ borderRadius: '20px', position: 'relative', zIndex: 2, margin: 0, width: '100%' }}>
              <div className="text-center mb-3">
                <h2 className="section-title">Request a Custom Quote</h2>
                <p className="section-subtitle">Fill out the form below and our sales engineering team will get back to you within 24 hours.</p>
              </div>
            <form className="inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Acme Corp" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Estimated Quantity (MOQ: 500)</label>
                  <input type="number" placeholder="5000" />
                </div>
                <div className="form-group">
                  <label>Required Dimensions (L x W x H)</label>
                  <input type="text" placeholder="e.g., 12x12x8 inches" />
                </div>
              </div>
              <div className="form-group">
                <label>Additional Requirements</label>
                <textarea rows="4" placeholder="Tell us about printing needs, flute preferences, etc."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-large submit-btn">
                <Send size={18}/> Send Inquiry
              </button>
            </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="product-faq section-padding">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-list max-w-800 mx-auto mt-2">
            {[
              { q: 'Can I get a physical sample before bulk ordering?', a: 'Yes, we provide pre-production prototypes. A small sampling fee applies, which is deducted from your bulk order invoice.' },
              { q: 'What is the standard lead time?', a: 'Standard corrugated boxes take 7-10 business days. Custom printed or die-cut boxes typically require 12-15 business days.' },
              { q: 'Do you offer design assistance?', a: 'Yes, our structural engineers and graphic designers can help optimize your box for both protection and visual appeal.' }
            ].map((faq, i) => (
              <div key={i} className="conic-container" style={{ borderRadius: '24px', padding: '4px', background: 'var(--bg-color)', width: '100%' }}>
                <div className={`faq-item glass ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-question">
                    <h3>{faq.q}</h3>
                    {activeFaq === i ? <Minus className="faq-icon"/> : <Plus className="faq-icon"/>}
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetails;
