import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShoppingBag, Truck, Stethoscope, Utensils, Zap, Plus, Minus, ArrowRight, Globe, Leaf, Package, PenTool, Layers, CheckCircle, BarChart, Microscope, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Industries.css';

const Industries = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const industries = [
    {
      id: 'ecommerce',
      icon: <ShoppingBag size={32}/>,
      name: 'E-Commerce & Retail',
      img: 'images/gen_eco_1784230460993.jpg',
      desc: 'Robust, brand-enhancing packaging designed for the unboxing experience and safe transit.',
      products: ['Mailer Boxes', 'Custom Tape', 'Void Fillers']
    },
    {
      id: 'food',
      icon: <Utensils size={32}/>,
      name: 'Food & Beverage',
      img: 'images/gen_premium_1784230480978.jpg',
      desc: 'FDA-compliant, food-safe packaging with high barrier properties to preserve freshness.',
      products: ['Stand-up Pouches', 'Food Trays', 'Beverage Cartons']
    },
    {
      id: 'industrial',
      icon: <Truck size={32}/>,
      name: 'Industrial & Heavy Duty',
      img: 'images/gen_logistics_1784230470758.jpg',
      desc: 'High bursting strength corrugated boxes for automotive parts, machinery, and bulk items.',
      products: ['Heavy Duty RSC', 'Pallet Boxes', 'Custom Foam Inserts']
    },
    {
      id: 'pharma',
      icon: <Stethoscope size={32}/>,
      name: 'Pharmaceuticals',
      img: 'images/gen_factory_1784230451806.jpg',
      desc: 'Sterile, tamper-evident packaging ensuring safety and compliance with global standards.',
      products: ['Blister Card Packaging', 'Vial Boxes', 'Temperature Control']
    },
    {
      id: 'electronics',
      icon: <Zap size={32}/>,
      name: 'Electronics',
      img: 'images/gen_rolls_1784230490842.jpg',
      desc: 'Anti-static and shock-absorbent packaging to protect sensitive electronic components.',
      products: ['ESD Boxes', 'Rigid Setup Boxes', 'Molded Pulp Inserts']
    },
    {
      id: 'cosmetics',
      icon: <Briefcase size={32}/>,
      name: 'Cosmetics & Beauty',
      img: 'images/gen_hero_1784230442874.jpg',
      desc: 'Luxury packaging with premium finishes to elevate brand perception on retail shelves.',
      products: ['Folding Cartons', 'Magnetic Rigid Boxes', 'Foil Stamped Sleeves']
    }
  ];

  return (
    <div className="industries-page">
      {/* Curved Hero Banner */}
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
              Industries <br/> We Serve
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
              style={{ color: '#E2E8F0', marginBottom: '2.5rem', fontSize: '1.25rem' }}
            >
              Tailored packaging solutions engineered to meet the unique challenges of every industry.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-buttons"
            >
              <Link to="/quote" className="btn btn-primary btn-large">
                Request A Quote
              </Link>
            </motion.div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px', background: 'var(--bg-color)' }}>
              <img 
                src="images/gen_logistics_1784230470758.jpg" 
                alt="Industries Packaging Manufacturing" 
                style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview Grid */}
      <section className="industries-grid-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>GLOBAL REACH</h4>
            <h2 className="section-title">Specialized Packaging for Your Sector</h2>
          </div>
          
          <div className="products-grid">
            {industries.map((ind) => (
              <motion.div key={ind.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="conic-container conic-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', zIndex: 2, padding: '1.5rem' }}>
                  <img src={ind.img} alt={ind.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div className="highlight-accent">{ind.icon}</div>
                    <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{ind.name}</h3>
                  </div>
                  <p className="text-muted mb-4">{ind.desc}</p>
                  <div className="recommended-products mb-4">
                    <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Recommended:</strong>
                    <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)' }}>
                      {ind.products.map((p, idx) => <li key={idx} style={{ marginBottom: '0.25rem' }}>{p}</li>)}
                    </ul>
                  </div>
                  <Link to="/products" className="btn btn-outline" style={{ width: '100%' }}>View Solutions</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="industry-stats section-padding bg-alt">
        <div className="container">
          <div className="conic-container conic-card" style={{ padding: '3rem', width: '100%' }}>
            <div className="stats-grid capacity-stats" style={{ position: 'relative', zIndex: 2 }}>
              <div className="stat-banner-item text-center">
                <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>40+</h2>
                <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Countries Exported To</p>
              </div>
              <div className="stat-banner-item text-center">
                <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>85%</h2>
                <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Fortune 500 Clients</p>
              </div>
              <div className="stat-banner-item text-center">
                <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>10K+</h2>
                <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Custom Designs</p>
              </div>
              <div className="stat-banner-item text-center">
                <h2 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>0%</h2>
                <p style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Compromise on Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Compliance & Certifications */}
      <section className="compliance-section section-padding">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>CERTIFIED EXCELLENCE</h4>
          <h2 className="section-title mb-5">Industry Compliance & Certifications</h2>
          
          <div className="features-grid">
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Stethoscope size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3>FDA & BRC Approved</h3>
                <p className="text-muted">Food-grade safe manufacturing for the food & beverage sectors.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Truck size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3>UN Certified</h3>
                <p className="text-muted">Rigorous hazmat testing for industrial and heavy-duty chemicals.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Briefcase size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3>ISO 9001:2015</h3>
                <p className="text-muted">Global quality management systems for cosmetics and retail.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Zap size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3>Cleanroom Specs</h3>
                <p className="text-muted">Contamination-free environments for pharmaceutical packaging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Materials */}
      <section className="materials-section section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-5">
             <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>TAILORED SOLUTIONS</h4>
             <h2 className="section-title">Specialized Materials By Sector</h2>
          </div>
          <div className="products-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <div style={{ position: 'relative', zIndex: 2, background: 'var(--bg-color)', borderRadius: '16px', height: '100%', overflow: 'hidden' }}>
                <img src="images/gen_rolls_1784230490842.jpg" alt="Electronics Materials" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Anti-Static (ESD) Foams</h3>
                  <p className="text-muted mb-0">Crucial for the <strong>Electronics</strong> sector. Our ESD foams dissipate static charges, ensuring sensitive microchips and hardware arrive perfectly intact.</p>
                </div>
              </div>
            </div>
            
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <div style={{ position: 'relative', zIndex: 2, background: 'var(--bg-color)', borderRadius: '16px', height: '100%', overflow: 'hidden' }}>
                <img src="images/gen_premium_1784230480978.jpg" alt="Food Barrier Films" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Moisture & Oxygen Barriers</h3>
                  <p className="text-muted mb-0">Engineered for the <strong>Food & Beverage</strong> industry. Multi-layer laminate structures that dramatically extend product shelf-life and preserve flavor.</p>
                </div>
              </div>
            </div>

            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <div style={{ position: 'relative', zIndex: 2, background: 'var(--bg-color)', borderRadius: '16px', height: '100%', overflow: 'hidden' }}>
                <img src="images/gen_logistics_1784230470758.jpg" alt="Heavy Duty Corrugated" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3>Triple-Wall Corrugated</h3>
                  <p className="text-muted mb-0">The backbone of <strong>Industrial & Automotive</strong> shipping. Offers immense stacking strength and impact resistance for thousands of pounds of freight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Industry Consultation Process */}
      <section className="process-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>HOW WE WORK</h4>
            <h2 className="section-title">The Industry Consultation Process</h2>
          </div>
          
          <div className="process-grid">
            <div className="conic-container conic-card text-center" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-color)', opacity: 0.5, marginBottom: '1rem' }}>01</div>
                <h3>Sector Analysis</h3>
                <p className="text-muted">We review your industry's specific compliance, supply chain hazards, and brand objectives.</p>
              </div>
            </div>
            <div className="conic-container conic-card text-center" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-color)', opacity: 0.5, marginBottom: '1rem' }}>02</div>
                <h3>Custom Prototyping</h3>
                <p className="text-muted">Our structural engineers design structural samples using sector-specific materials.</p>
              </div>
            </div>
            <div className="conic-container conic-card text-center" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-color)', opacity: 0.5, marginBottom: '1rem' }}>03</div>
                <h3>Safety Testing</h3>
                <p className="text-muted">Drop, compression, and vibration testing tailored to your industry's transit conditions.</p>
              </div>
            </div>
            <div className="conic-container conic-card text-center" style={{ padding: '2rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-color)', opacity: 0.5, marginBottom: '1rem' }}>04</div>
                <h3>Scale Delivery</h3>
                <p className="text-muted">Mass production and reliable just-in-time delivery to your manufacturing or fulfillment centers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="case-study-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="case-study-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>FEATURED CASE STUDY</h4>
              <h2 className="section-title mb-4">Reducing Transit Damage for Electronics Giant</h2>
              <p className="mb-3" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}><strong>The Challenge:</strong> A leading electronics manufacturer was experiencing a 5% damage rate during cross-border shipping, resulting in significant financial losses and customer dissatisfaction.</p>
              <p className="mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}><strong>Our Solution:</strong> We engineered a custom double-wall corrugated box with precisely molded ESD-safe pulp inserts. This eliminated the need for plastic bubble wrap while providing superior shock absorption.</p>
              <h4 className="mb-2">The Result:</h4>
              <ul className="check-list mb-4" style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                <li>Damage rate reduced to 0.1%</li>
                <li>Packaging costs decreased by 12%</li>
                <li>Carbon footprint reduced by removing plastics</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Discuss Your Project</Link>
            </div>
            <div className="case-study-image conic-container conic-card" style={{ padding: '4px' }}>
              <img src="images/gen_rolls_1784230490842.jpg" alt="Electronics Case Study" style={{ width: '100%', height: 'auto', borderRadius: '14px', position: 'relative', zIndex: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Structural Engineering */}
      <section className="engineering-section section-padding">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', direction: 'ltr' }}>
              <img src="images/gen_factory_1784230451806.jpg" alt="CAD Packaging Design" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="engineering-content" style={{ direction: 'ltr' }}>
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>STRUCTURAL DESIGN</h4>
              <h2 className="section-title mb-4">Packaging Engineering & CAD</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                We don't just print boxes; we engineer them. Our in-house structural design team utilizes advanced CAD software to create custom die-lines, optimize material usage, and prototype drop-resistant packaging tailored to your exact product dimensions.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <PenTool size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Custom Die-Line Creation</h4>
                    <p className="text-muted mb-0">Precision-engineered dielines ensuring a perfect fold and unboxing experience.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Layers size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>3D Structural Prototyping</h4>
                    <p className="text-muted mb-0">White-sample prototyping allows you to test the physical structure before mass production.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Lab */}
      <section className="qa-section section-padding bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>QUALITY ASSURANCE</h4>
          <h2 className="section-title mb-5">State-of-the-Art Testing Laboratory</h2>
          <p className="text-muted mx-auto mb-5" style={{ fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '800px' }}>
            Our ISO-certified laboratory rigorously tests every batch of corrugated board and paper stock. We ensure your packaging can survive the harshest transit conditions without compromising structural integrity.
          </p>
          
          <div className="products-grid">
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <CheckCircle size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3>Edge Crush Test (ECT)</h3>
                <p className="text-muted">Measuring the top-to-bottom compression strength of corrugated board to guarantee stacking durability.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Box size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Mullen Burst Testing</h3>
                <p className="text-muted">Hydraulic pressure testing to determine the exact force required to rupture or puncture the packaging.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Microscope size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3>Moisture Resistance</h3>
                <p className="text-muted">Simulating high-humidity environments to ensure barriers and adhesives do not fail during oceanic transit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VMI Partnership */}
      <section className="vmi-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/gen_eco_1784230460993.jpg" alt="Vendor Managed Inventory" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="vmi-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>ENTERPRISE PARTNERSHIPS</h4>
              <h2 className="section-title mb-4">Vendor Managed Inventory (VMI)</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Running out of packaging shuts down your entire production line. With our VMI program, we manufacture your packaging in bulk to secure lower pricing, store it in our facilities, and deliver it exactly when your assembly line needs it.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary-color)' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Free up valuable warehouse space in your facility</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary-color)' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Lock in bulk pricing while taking fractional deliveries</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary-color)' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Automated stock level monitoring prevents stockouts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Logistics & Supply Chain */}
      <section className="logistics-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/gen_logistics_1784230470758.jpg" alt="Global Supply Chain" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="logistics-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>WORLDWIDE DISTRIBUTION</h4>
              <h2 className="section-title mb-4">Global Logistics & Supply Chain</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Manufacturing the perfect packaging is only half the battle. Delivering it safely, on time, and across borders is where we truly excel. We operate an expansive logistics network designed to support Just-In-Time (JIT) manufacturing schedules.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Globe size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Global Warehousing</h4>
                    <p className="text-muted mb-0">Strategically located distribution centers across 3 continents.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Truck size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>99.2% On-Time Delivery</h4>
                    <p className="text-muted mb-0">Our dedicated fleet ensures your production lines never stop.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Sustainability */}
      <section className="sustainability-section section-padding bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>ECO-COMMITMENT</h4>
          <h2 className="section-title mb-5">Sustainable Solutions By Sector</h2>
          
          <div className="products-grid">
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderColor: '#2E7D32' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Leaf size={48} style={{ color: '#2E7D32', marginBottom: '1rem' }} />
                <h3>Biodegradable E-Commerce</h3>
                <p className="text-muted">100% compostable mailers and water-activated tape that dissolve harmlessly, reducing landfill waste.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderColor: '#2E7D32' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Package size={48} style={{ color: '#2E7D32', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.4rem' }}>FSC-Certified Cosmetics</h3>
                <p className="text-muted">Luxury does not have to mean wasteful. We source pristine, recyclable paperboards for high-end retail.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderColor: '#2E7D32' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Utensils size={48} style={{ color: '#2E7D32', marginBottom: '1rem' }} />
                <h3>Recyclable Food Barriers</h3>
                <p className="text-muted">Pioneering mono-material films for the food industry that can be easily recycled without complex separation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="product-faq section-padding bg-alt">
        <div className="container">
          <h2 className="section-title text-center mb-5">Industry-Specific FAQs</h2>
          <div className="faq-list max-w-800 mx-auto mt-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'Do you have FDA-approved facilities for food packaging?', a: 'Yes, our primary facility for food and beverage packaging is FDA-compliant, BRC-certified, and maintains strict hygiene protocols.' },
              { q: 'Can you handle hazardous material (Hazmat) packaging?', a: 'Yes, we manufacture UN-certified packaging for industrial and chemical sectors.' },
              { q: 'Do you provide cold-chain packaging for pharmaceuticals?', a: 'We offer insulated shipping boxes with custom inserts for EPS foam or sustainable alternatives to maintain temperature control.' }
            ].map((faq, i) => (
              <div key={i} className={`faq-item glass ${activeFaq === i ? 'active' : ''}`} style={{ marginBottom: '1rem', borderRadius: '16px', overflow: 'hidden' }} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="faq-question" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: activeFaq === i ? 'var(--primary-color)' : 'transparent', color: activeFaq === i ? 'var(--bg-color)' : 'var(--text-color)', fontWeight: activeFaq === i ? '700' : 'normal' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'inherit' }}>{faq.q}</h3>
                  {activeFaq === i ? <Minus size={20}/> : <Plus size={20}/>}
                </div>
                {activeFaq === i && (
                  <div className="faq-answer" style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', background: 'transparent' }}>
                    <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="sample-cta-section section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.15 }}>
          <img src="images/gen_premium_1784230480978.jpg" alt="Premium Packaging CTA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <div className="conic-container conic-card mx-auto" style={{ maxWidth: '800px', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Need to See It to Believe It?</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Request a custom sample kit tailored specifically to your industry. Feel the material strength, test the moisture barriers, and examine our flawless print quality.
              </p>
              <Link to="/contact" className="btn btn-primary btn-large" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                Request Industry Sample Kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
