import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, TrendingUp, Box, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const images = [
    { id: 1, category: 'factory', src: '/images/gallery_floor_1784384899363.jpg', title: 'Factory Floor', desc: 'Our state-of-the-art automated corrugated plant.' },
    { id: 2, category: 'product', src: '/images/quality_sustainability_1784384560031.jpg', title: 'Eco-Friendly Kraft', desc: '100% repulpable and sustainable box materials.' },
    { id: 3, category: 'machine', src: '/images/quality_automation_1784384417146.jpg', title: 'Laser Die-Cutting', desc: 'Sub-millimeter precision cutting technology.' },
    { id: 4, category: 'warehouse', src: '/images/gallery_stacking_1784384876850.jpg', title: 'Distribution Hub', desc: 'Massive storage for just-in-time delivery.' },
    { id: 5, category: 'product', src: '/images/gen_premium_1784230480978.jpg', title: 'Premium Retail', desc: 'Luxury finishing for high-end brands.' },
    { id: 6, category: 'factory', src: '/images/gen_factory_1784230451806.jpg', title: 'Corrugator Line', desc: 'High-speed automated board manufacturing.' },
    { id: 7, category: 'product', src: '/images/gen_eco_1784230460993.jpg', title: 'E-Commerce Mailers', desc: 'Secure, brand-enhancing transit packaging.' },
    { id: 8, category: 'machine', src: '/images/gallery_printing_1784384864195.jpg', title: 'Flexo Printing', desc: 'Vibrant, high-speed inline color printing.' },
    { id: 9, category: 'warehouse', src: '/images/gallery_delivery_1784384887523.jpg', title: 'Global Dispatch', desc: 'Loading docks operating 24/7 for fast transit.' },
    { id: 10, category: 'factory', src: '/images/gallery_kraft_reels_1784385058639.jpg', title: 'Kraft Paper Sourcing', desc: 'Massive reels of premium raw material ready for corrugation.' },
    { id: 11, category: 'product', src: '/images/gallery_fluting_1784385068408.jpg', title: 'Precision Fluting', desc: 'Architecturally perfect corrugated waves for maximum strength.' },
    { id: 12, category: 'machine', src: '/images/gallery_stitching_1784385083657.jpg', title: 'Automated Assembly', desc: 'High-speed stitching and folding for flawless box construction.' },
    { id: 13, category: 'factory', src: '/images/gallery_testing_1784385097873.jpg', title: 'Quality Testing Lab', desc: 'Rigorous Bursting Strength and Edge Crush testing.' },
    { id: 14, category: 'product', src: '/images/quality_structural_1784384572547.jpg', title: 'CAD Prototyping', desc: '3D structural engineering and physical samples.' },
    { id: 15, category: 'warehouse', src: '/images/gen_logistics_1784230470758.jpg', title: 'Logistics Fleet', desc: 'Seamlessly transporting packaging directly to your supply chain.' },
    { id: 16, category: 'product', src: '/images/gen_hero_1784230442874.jpg', title: 'Luxury Display Cartons', desc: 'High-end retail packaging designed to captivate.' },
    { id: 17, category: 'factory', src: '/images/gen_rolls_1784230490842.jpg', title: 'Raw Material Inventory', desc: 'Endless aisles of specialized corrugated paper stock.' },
    { id: 18, category: 'machine', src: '/images/highres_1_1784301104322.jpg', title: 'Automated Conveyors', desc: 'Smart routing systems moving boxes at lightning speed.' },
    { id: 19, category: 'factory', src: '/images/quality_kraft_paper_1784384406402.jpg', title: 'Virgin Kraft Paper', desc: 'Pristine, ultra-strong virgin kraft paper inspection.' },
    { id: 20, category: 'warehouse', src: '/images/quality_climate_1784384584083.jpg', title: 'Climate Chamber', desc: 'Extreme environment testing for export packaging.' }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
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
              Media <br/> Gallery
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
              style={{ color: '#E2E8F0', marginBottom: '2.5rem', fontSize: '1.25rem' }}
            >
              Take a visual tour of our facilities, advanced machinery, and premium packaging products.
            </motion.p>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px', background: 'var(--bg-color)' }}>
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop" 
                alt="Corrugated Boxes" 
                style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section-padding">
        <div className="container">
          <div className="gallery-filters glass">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'factory' ? 'active' : ''}`} onClick={() => setFilter('factory')}>Factory</button>
            <button className={`filter-btn ${filter === 'machine' ? 'active' : ''}`} onClick={() => setFilter('machine')}>Machinery</button>
            <button className={`filter-btn ${filter === 'warehouse' ? 'active' : ''}`} onClick={() => setFilter('warehouse')}>Warehouse</button>
            <button className={`filter-btn ${filter === 'product' ? 'active' : ''}`} onClick={() => setFilter('product')}>Products</button>
          </div>

          <div className="masonry-grid">
            {filteredImages.map((img) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.id} 
                className="masonry-item conic-container conic-card"
                style={{ padding: '4px', borderRadius: '20px', marginBottom: '1.5rem', breakInside: 'avoid' }}
                onClick={() => setLightboxImg(img.src)}
              >
                <div style={{ position: 'relative', zIndex: 2, borderRadius: '16px', overflow: 'hidden' }}>
                  <img src={img.src} alt={`Gallery ${img.category}`} style={{ width: '100%', display: 'block', borderRadius: '16px' }} />
                  <div className="masonry-overlay" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', textAlign: 'center', justifyContent: 'center' }}>
                    <ZoomIn size={32} color="white" style={{ marginBottom: '0.5rem' }} />
                    <h4 style={{ color: 'white', margin: '0 0 0.25rem 0', fontSize: '1.25rem' }}>{img.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0 }}>{img.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Gallery Section */}
      <section className="engineering-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', direction: 'ltr' }}>
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop" alt="Innovation Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="engineering-content" style={{ direction: 'ltr' }}>
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>BEHIND THE LENS</h4>
              <h2 className="section-title mb-4">Innovation in Every Box</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                The images in our gallery only tell half the story. Behind every flawless corrugated box is a team of dedicated engineers, quality control specialists, and logistics experts working 24/7. We continuously invest in state-of-the-art machinery to guarantee that your brand is protected, presented beautifully, and delivered on time.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <Link to="/quality" className="btn btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: 600 }}>Explore Our Quality</Link>
                <Link to="/products" className="btn btn-outline" style={{ padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: 600 }}>View Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-padding" style={{ background: 'var(--card-bg)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Manufacturing at Scale</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
              Our automated facilities are engineered to handle incredible volume without ever compromising on microscopic quality control.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
              <div style={{ padding: '2rem', height: '100%', position: 'relative', zIndex: 2, borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Box size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--heading-color)' }}>50M+</h3>
                <p className="text-muted" style={{ fontSize: '1.1rem', margin: 0 }}>Boxes Produced Annually</p>
              </div>
            </div>
            
            <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
              <div style={{ padding: '2rem', height: '100%', position: 'relative', zIndex: 2, borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--heading-color)' }}>99.8%</h3>
                <p className="text-muted" style={{ fontSize: '1.1rem', margin: 0 }}>On-Time Delivery Rate</p>
              </div>
            </div>
            
            <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
              <div style={{ padding: '2rem', height: '100%', position: 'relative', zIndex: 2, borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--heading-color)' }}>32</h3>
                <p className="text-muted" style={{ fontSize: '1.1rem', margin: 0 }}>Countries Exported To</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <X size={32} />
          </button>
          <img src={lightboxImg} alt="Enlarged view" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
