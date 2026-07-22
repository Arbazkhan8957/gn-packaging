import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Download, Search, Activity, Plus, Minus, CheckCircle, Package, Layers, Droplets, Settings, Leaf, RefreshCw, PenTool, Monitor, ThermometerSnowflake, CloudRain } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Quality.css';

const Quality = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="quality-page">
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
              Uncompromising <br/> Quality
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
              style={{ color: '#E2E8F0', marginBottom: '2.5rem', fontSize: '1.25rem' }}
            >
              Our commitment to excellence is backed by global certifications and rigorous in-house testing protocols for flawless packaging.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-buttons"
            >
              <Link to="/contact" className="btn btn-primary btn-large">
                Speak to QA Expert
              </Link>
            </motion.div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px', background: 'var(--bg-color)' }}>
              <img 
                src="images/gallery_kraft_reels_1784385058639.jpg" 
                alt="Quality Assurance" 
                style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Certifications (LTR) */}
      <section className="vmi-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/premium_box.jpg" alt="Certifications" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="vmi-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>GLOBAL STANDARDS</h4>
              <h2 className="section-title mb-4">Certifications & Compliance</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                We adhere to the strictest international manufacturing standards, ensuring that every product leaving our facility is 100% compliant with global health, safety, and environmental protection protocols.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { name: 'ISO 9001:2015', desc: 'Quality Management System certified for manufacturing excellence.' },
                  { name: 'FSC Certified', desc: 'Forest Stewardship Council certification ensuring responsible sourcing.' },
                  { name: 'CE Marked', desc: 'Compliant with European health, safety, and environmental protection.' },
                  { name: 'BRCGS Food Safety', desc: 'Global standard for food packaging and packaging materials.' }
                ].map((cert, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--primary-color)' }}>
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{cert.name}</h4>
                      <p className="text-muted" style={{ margin: 0 }}>{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process (Text Left / Image Right) */}
      <section className="engineering-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid">
            <div className="engineering-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>RIGOROUS INSPECTION</h4>
              <h2 className="section-title mb-4">Our 6-Step Testing Process</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Every production batch goes through a stringent, automated, and manual inspection process in our NABL-accredited laboratory to ensure zero defects.
              </p>
              
              <div className="process-list mt-3">
                {[
                  { step: '1', title: 'Raw Material Inspection', desc: 'Testing paper GSM, moisture content, and bursting strength.' },
                  { step: '2', title: 'Inline Print Inspection', desc: 'Automated camera systems verifying color consistency.' },
                  { step: '3', title: 'Structural Integrity', desc: 'Edge Crush Test (ECT) and Box Compression Test (BCT).' },
                  { step: '4', title: 'Environmental Testing', desc: 'Cobb tests for water absorption and humidity chambers.' },
                  { step: '5', title: 'Transit Simulation', desc: 'Vibration and drop tests conforming to ISTA standards.' },
                  { step: '6', title: 'Final Dispatch QA', desc: 'Visual inspection, counting, and palletization checks.' }
                ].map((item, i) => (
                  <div key={i} className="process-item" style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem' }}>
                    <div className="conic-container" style={{ width: '45px', height: '45px', borderRadius: '50%', padding: '2px', flexShrink: 0 }}>
                      <div style={{ background: 'var(--bg-color)', width: '100%', height: '100%', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-color)', position: 'relative', zIndex: 2 }}>
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                      <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/die_cut_mailer.jpg" alt="Lab Testing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Corrugator QA (New Added Content) (LTR) */}
      <section className="vmi-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/kraft_paper_reel.jpg" alt="Corrugated Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="vmi-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>CORRUGATED EXCELLENCE</h4>
              <h2 className="section-title mb-4">Advanced Board Manufacturing QA</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                The strength of your box starts with the board. We utilize high-precision moisture control and adhesive application techniques on our corrugator lines to prevent warping, delamination, and crushing.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Layers size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Flute Formation Precision</h4>
                    <p className="text-muted mb-0">Ensuring perfectly calibrated A, B, C, E, or F flutes for maximum compression strength.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Droplets size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Starch Adhesive Viscosity</h4>
                    <p className="text-muted mb-0">Continuous monitoring of glue viscosity to guarantee a permanent bond between liners and fluting.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Activity size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Thermal & Moisture Control</h4>
                    <p className="text-muted mb-0">Sensors regulate the hot plates to prevent board warping post-production.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Material Excellence (Text Left / Image Right) */}
      <section className="engineering-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid">
            <div className="engineering-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>SOURCING STANDARDS</h4>
              <h2 className="section-title mb-4">Raw Material Excellence</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                The foundation of any high-strength corrugated box is the quality of its kraft paper. We source only premium virgin and highly refined recycled kraft paper from top-tier mills globally.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>GSM & Bursting Factor (BF)</h4>
                    <p className="text-muted" style={{ margin: 0 }}>Every roll is tested to ensure accurate Grams per Square Meter and high bursting strength before entering production.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Moisture Content Calibration</h4>
                    <p className="text-muted" style={{ margin: 0 }}>Paper rolls are kept at an optimal 7-9% moisture level to prevent cracking during the corrugation and folding process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/quality_kraft_paper_1784384406402.jpg" alt="Premium Kraft Paper Rolls" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Automated Precision Technology (Image Left / Text Right) */}
      <section className="vmi-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/quality_automation_1784384417146.jpg" alt="Automated Die-Cutting Precision" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="vmi-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>SMART MANUFACTURING</h4>
              <h2 className="section-title mb-4">Automated Precision Technology</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Human error is minimized through our heavy investment in automated manufacturing technologies. From robotic material handling to laser-guided die-cutting, we ensure mathematical precision in every cut, fold, and glue line.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Settings size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Laser-Guided Die Cutting</h4>
                    <p className="text-muted mb-0">Achieving sub-millimeter accuracy for complex structural designs and interlocking tabs.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Award size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Inline Print Defect Detection</h4>
                    <p className="text-muted mb-0">High-speed camera systems monitor flexographic printing in real-time to catch registration and color errors instantly.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Eco-Friendly Materials (Text Left / Image Right) */}
      <section className="engineering-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid">
            <div className="engineering-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>CIRCULAR ECONOMY</h4>
              <h2 className="section-title mb-4">Sustainability & Eco-Friendly Quality</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                True quality doesn't harm the environment. We are pioneering sustainable corrugated packaging by strictly controlling the chemical composition of our adhesives and inks, ensuring 100% recyclability.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Soy-Based Eco Inks</h4>
                    <p className="text-muted" style={{ margin: 0 }}>We replaced harsh chemical solvent-based inks with vibrant, biodegradable soy and water-based alternatives.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <RefreshCw size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>100% Repulpable Glue</h4>
                    <p className="text-muted" style={{ margin: 0 }}>Our starch adhesives are fully repulpable, meaning our boxes can easily re-enter the paper recycling stream.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/quality_sustainability_1784384560031.jpg" alt="Sustainable Corrugated Packaging" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Structural Engineering QA (Image Left / Text Right) */}
      <section className="vmi-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/quality_structural_1784384572547.jpg" alt="Structural Packaging Design CAD" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="vmi-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>DESIGN INTEGRITY</h4>
              <h2 className="section-title mb-4">Structural Engineering QA</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Before mass production begins, every new box design undergoes rigorous CAD-driven structural validation to ensure it will survive the exact stresses of your specific supply chain.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <PenTool size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>Edge Crush Test (ECT) Optimization</h4>
                    <p className="text-muted mb-0">Designing the precise flute profiles necessary to guarantee top-to-bottom compression strength for pallet stacking.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ background: 'rgba(200, 150, 67, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                    <Monitor size={28} style={{ color: 'var(--primary-color)' }} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>3D Stress Simulation</h4>
                    <p className="text-muted mb-0">Virtual stress testing in CAD software predicts failure points, allowing us to reinforce the design virtually before prototyping.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate & Humidity Simulation Testing (Text Left / Image Right) */}
      <section className="engineering-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid">
            <div className="engineering-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>EXTREME CONDITIONS</h4>
              <h2 className="section-title mb-4">Climate & Humidity Simulation</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Packaging meant for global export, frozen foods, or tropical climates must withstand extreme environments. We test our corrugated boxes in environmental chambers to guarantee performance under duress.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <ThermometerSnowflake size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Cold Chain Storage Testing</h4>
                    <p className="text-muted" style={{ margin: 0 }}>Ensuring the glue bonds and paper layers do not delaminate when transitioning from freezing temperatures to room temperature.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <CloudRain size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Tropical Humidity (Cobb Testing)</h4>
                    <p className="text-muted" style={{ margin: 0 }}>Measuring the water absorption rate of the kraft paper to verify our moisture-resistant coatings perform flawlessly in high humidity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/quality_climate_1784384584083.jpg" alt="Environmental Chamber Testing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Team (RTL) */}
      <section className="engineering-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', direction: 'ltr' }}>
              <img src="images/standard_corrugated.jpg" alt="Quality Team" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="engineering-content" style={{ direction: 'ltr' }}>
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>THE EXPERTS</h4>
              <h2 className="section-title mb-4">Dedicated Quality Team</h2>
              <p className="text-muted mb-5" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our quality assurance team consists of 50+ certified engineers and inspectors working around the clock across all production shifts to maintain our pristine record.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <Search size={32} style={{ color: 'var(--primary-color)', position: 'relative', zIndex: 2 }}/>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-color)' }}>100%</h3>
                    <p className="text-muted" style={{ margin: 0, fontWeight: 500 }}>Traceability via QR Codes</p>
                  </div>
                </div>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <Activity size={32} style={{ color: 'var(--primary-color)', position: 'relative', zIndex: 2 }}/>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-color)' }}>&lt; 0.05%</h3>
                    <p className="text-muted" style={{ margin: 0, fontWeight: 500 }}>Defect Rate Achieved</p>
                  </div>
                </div>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <ShieldCheck size={32} style={{ color: 'var(--primary-color)', position: 'relative', zIndex: 2 }}/>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-color)' }}>Six Sigma</h3>
                    <p className="text-muted" style={{ margin: 0, fontWeight: 500 }}>Lean Manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Matches Industries Template exactly) */}
      <section className="product-faq section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-5">Quality Assurance FAQs</h2>
          <div className="faq-list mx-auto mt-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: 'Can you provide a Certificate of Analysis (COA) with my order?', a: 'Yes, every dispatch is accompanied by a detailed COA detailing the test results of your specific batch.' },
              { q: 'Are your food packaging materials FDA approved?', a: 'Absolutely. All primary packaging materials intended for food contact meet FDA and EU regulations.' },
              { q: 'What happens if a batch fails your quality test?', a: 'Any batch that fails to meet our strict tolerances is immediately rejected, segregated, and sent for recycling. We never dispatch sub-standard products.' }
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

      {/* Massive CTA Section (Matches Industries Template) */}
      <section className="sample-cta-section section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.15 }}>
          <img src="images/custom_size.jpg" alt="Premium Packaging CTA" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <div className="conic-container conic-card mx-auto" style={{ maxWidth: '800px', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>Need to See It to Believe It?</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Request a custom sample kit. Feel the material strength, test the moisture barriers, and examine our flawless print quality firsthand.
              </p>
              <Link to="/contact" className="btn btn-primary btn-large" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                Request Quality Sample Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Quality;
