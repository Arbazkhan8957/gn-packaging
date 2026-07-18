import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Droplets, Ruler, Maximize, Play, ShieldAlert, Activity, Scissors, Cpu, Zap, Sun, Recycle, Truck, Thermometer, Printer, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Infrastructure.css';

const Infrastructure = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'images/gen_factory_1784230451806.jpg',
      title: '500,000 Sq. Ft. of Manufacturing Power',
      desc: 'Handling over 10,000 tons of kraft paper inventory.'
    },
    {
      image: 'images/gen_rolls_1784230490842.jpg',
      title: 'BHS High-Speed Corrugators',
      desc: 'Producing A, B, C, E, and F flutes at 350 meters per minute.'
    },
    {
      image: 'images/gen_premium_1784230480978.jpg',
      title: '8-Color HD Flexo Printing',
      desc: 'Flawless graphic fidelity for retail-ready packaging.'
    },
    {
      image: 'images/gen_logistics_1784230470758.jpg',
      title: 'High-Volume Dispatch',
      desc: 'Automated loading docks dispatching 100+ truckloads daily.'
    },
    {
      image: 'images/gen_eco_1784230460993.jpg',
      title: '100% Sustainable Practices',
      desc: 'Utilizing eco-friendly adhesives and zero-waste water treatment.'
    },
    {
      image: 'images/gen_hero_1784230442874.jpg',
      title: 'Precision Die-Cutting',
      desc: 'Rotary and flatbed die-cutters ensuring millimeter-perfect creases.'
    },
    {
      image: 'images/highres_1.jpg',
      title: 'Automated Palletizing',
      desc: 'Inline robotic arms flawlessly stack finished cartons for transit.'
    },
    {
      image: 'images/media__1784144365412.png',
      title: 'Rigorous Quality Control',
      desc: 'In-house lab performing ECT, BCT, and moisture analysis on every batch.'
    },
    {
      image: 'images/media__1784144984928.png',
      title: 'Custom R&D Prototyping',
      desc: 'Kongsberg CAD cutters bringing your packaging ideas to life instantly.'
    },
    {
      image: 'images/media__1784223119917.jpg',
      title: 'End-to-End Enterprise Packaging',
      desc: 'Your trusted partner for all corrugated and customized packaging needs.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);


  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="infrastructure-page">
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
              500,000 Sq. Ft. <br/> Manufacturing Excellence
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
              style={{ color: '#E2E8F0', marginBottom: '2.5rem', fontSize: '1.25rem' }}
            >
              High-speed European corrugators, automated robotic die-cutting, and massive warehouse scale designed for Fortune 500 volume.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-buttons"
            >
              <Link to="/quote" className="btn btn-primary btn-large">
                Request Facility Tour
              </Link>
            </motion.div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px', background: 'var(--bg-color)' }}>
              <img 
                src="images/gen_eco_1784230460993.jpg" 
                alt="Sustainable Packaging Infrastructure" 
                style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Overview */}
      <section className="capacity-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/gen_rolls_1784230490842.jpg" alt="Machines in factory" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="capacity-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>PRODUCTION CAPACITY</h4>
              <h2 className="section-title mb-4">Built for Massive Scale</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our facilities are equipped with the latest high-speed European corrugators, multi-color flexo printers, and automated die-cutting machines, enabling us to handle massive volume without compromising on quality.
              </p>
              
              <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', margin: 0 }}>500M+</h3>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Boxes Annually</p>
                  </div>
                </div>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', margin: 0 }}>200M+</h3>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Pouches Annually</p>
                  </div>
                </div>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', margin: 0 }}>50+</h3>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Production Lines</p>
                  </div>
                </div>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', margin: 0 }}>24/7</h3>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Material Warehousing */}
      <section className="raw-material-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/gen_rolls_1784230490842.jpg" alt="Raw Material Warehousing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="raw-material-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>SUPPLY CHAIN STABILITY</h4>
              <h2 className="section-title mb-4">Climate-Controlled Warehousing</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                We maintain an inventory of over 10,000 tons of virgin and recycled kraft paper. Our massive warehousing facility is fully climate-controlled to ensure precise moisture levels, preventing paper warping before it ever reaches the corrugators.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Thermometer size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Constant 50% relative humidity control</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <ShieldAlert size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Advanced fire-suppression rack systems</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Zap size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Buffer stock for supply chain shocks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tooling & Die-Making */}
      <section className="tooling-section section-padding">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', direction: 'ltr' }}>
              <img src="images/gen_factory_1784230451806.jpg" alt="Steel Rule Die Making" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="tooling-content" style={{ direction: 'ltr' }}>
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>PRECISION ENGINEERING</h4>
              <h2 className="section-title mb-4">In-House Tooling & Die-Making</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Unlike competitors who outsource their structural templates, we operate a dedicated, state-of-the-art tooling facility. From CAD design to laser-cutting the wooden rotary die-boards, we control 100% of the accuracy.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Scissors size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Laser-cut flat and rotary steel-rule dies</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Sub-millimeter cutting tolerances</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Zap size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Rapid prototyping in 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery & Technology */}
      <section className="machinery-section section-padding">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>TECHNOLOGY</h4>
          <h2 className="section-title mb-5">Advanced Machinery</h2>
          <p className="text-muted max-w-800 mx-auto mb-5" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            We invest heavily in the latest packaging technology to ensure efficiency, precision, and zero-defect output.
          </p>

          <div className="products-grid">
            {[
              { icon: <Settings size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}/>, title: 'BHS Corrugators', desc: 'High-speed corrugation lines capable of producing A, B, C, E, and F flute profiles at 350 meters per minute.' },
              { icon: <Droplets size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}/>, title: 'BOBST Flexo Printers', desc: '8-color high-definition flexo printing machines with inline die-cutting and folding capabilities.' },
              { icon: <Maximize size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}/>, title: 'Automated Folder Gluers', desc: 'High-precision gluing lines capable of processing up to 100,000 cartons per hour.' },
              { icon: <Ruler size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}/>, title: 'Heidelberg Offset', desc: 'Premium offset printing presses for luxury packaging, offering spot UV and foil stamping.' }
            ].map((machine, i) => (
              <div key={i} className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {machine.icon}
                  <h3 style={{ fontSize: '1.4rem' }}>{machine.title}</h3>
                  <p className="text-muted mb-0">{machine.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Printing */}
      <section className="printing-section section-padding bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>GRAPHIC EXCELLENCE</h4>
          <h2 className="section-title mb-5">High-End Printing Infrastructure</h2>
          <p className="text-muted max-w-800 mx-auto mb-5" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Whether you need simple flexo barcodes or photo-realistic cosmetics packaging, our printing infrastructure delivers uncompromised graphic fidelity.
          </p>

          <div className="features-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', background: 'var(--bg-color)' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Printer size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.4rem' }}>8-Color HD Flexo</h3>
                <p className="text-muted mb-0">High-speed rotary flexographic printers capable of applying up to 8 colors simultaneously in a single pass, perfect for bulk retail-ready packaging.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', background: 'var(--bg-color)' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Maximize size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Litho-Laminating</h3>
                <p className="text-muted mb-0">We combine the strength of corrugated board with the photo-quality resolution of offset printing by laminating pre-printed top sheets directly onto the flutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Factory Automation */}
      <section className="automation-section section-padding bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>INDUSTRY 4.0</h4>
          <h2 className="section-title mb-5">Smart Factory Automation</h2>
          <p className="text-muted max-w-800 mx-auto mb-5" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Our infrastructure is fully integrated with automated robotics, drastically reducing human error and exponentially increasing production velocity.
          </p>

          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Truck size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Automated Guided Vehicles (AGVs)</h3>
                <p className="text-muted mb-0">Autonomous forklifts and AGVs transport multi-ton paper rolls from the warehouse directly to the corrugators without human intervention.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Cpu size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Robotic Palletizers</h3>
                <p className="text-muted mb-0">Inline robotic arms flawlessly stack thousands of finished cartons onto pallets every hour, ensuring perfectly squared and stable loads for transit.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Settings size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Real-Time Quality Sensors</h3>
                <p className="text-muted mb-0">Optical sensors monitor the print and glue lines at 350 meters per minute, automatically ejecting any defective box instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Testing Lab */}
      <section className="lab-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', direction: 'ltr' }}>
              <img src="images/gen_premium_1784230480978.jpg" alt="Testing Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="lab-content" style={{ direction: 'ltr' }}>
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>QUALITY CONTROL</h4>
              <h2 className="section-title mb-4">In-House Testing Laboratory</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                To guarantee the structural integrity of our packaging, we operate a fully equipped testing laboratory. Every batch undergoes rigorous quality assurance tests before dispatch.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Edge Crush Test (ECT) & Box Compression Test (BCT)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Bursting Strength Test</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Moisture & Humidity Resistance Analysis</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Cobb Test (Water Absorption)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Drop & Vibration Simulation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Prototyping */}
      <section className="rnd-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%' }}>
              <img src="images/gen_factory_1784230451806.jpg" alt="R&D Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="rnd-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>INNOVATION</h4>
              <h2 className="section-title mb-4">R&D & Prototyping Center</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our dedicated R&D center allows structural engineers to design, cut, and physically test packaging concepts before committing to mass production, saving you time and tooling costs.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Box size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Kongsberg CAD Sample Cutters</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Ruler size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>White-sample unprinted structural testing</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Maximize size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Pallet optimization software</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Dispatch Bays */}
      <section className="dispatch-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', direction: 'ltr' }}>
              <img src="images/gen_logistics_1784230470758.jpg" alt="Dispatch Bays" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <div className="dispatch-content" style={{ direction: 'ltr' }}>
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>FULFILLMENT</h4>
              <h2 className="section-title mb-4">High-Volume Logistics Bays</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Manufacturing the boxes is only half the battle. Our facility features massive dispatch infrastructure to ensure your packaging leaves our warehouse and reaches your assembly line exactly on time.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Truck size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>50+ automated loading docks</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Maximize size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>High-density vertical racking systems</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Activity size={20} style={{ color: 'var(--primary-color)', minWidth: '20px' }} />
                  <span style={{ fontSize: '1.1rem', color: 'var(--text-color)' }}>Dispatching 100+ truckloads daily</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Virtual Tour */}
      <section className="tour-section section-padding">
        <div className="container text-center">
          <div className="conic-container mx-auto" style={{ maxWidth: '1000px', borderRadius: '24px', padding: '6px' }}>
            <div className="video-container" style={{ position: 'relative', zIndex: 2, borderRadius: '18px', overflow: 'hidden', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                >
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '3rem 2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 800, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                    >
                      {slides[currentSlide].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      style={{ color: 'var(--primary-color)', fontSize: '1.25rem', fontWeight: 600, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                    >
                      {slides[currentSlide].desc}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Indicators */}
              <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
                {slides.map((_, i) => (
                  <div key={i} style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', overflow: 'hidden' }}>
                    {i === currentSlide && (
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: '100%' }} 
                        transition={{ duration: 5, ease: 'linear' }}
                        style={{ height: '100%', background: 'var(--primary-color)' }}
                      />
                    )}
                    {i < currentSlide && (
                      <div style={{ width: '100%', height: '100%', background: 'var(--primary-color)' }} />
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Safety & Environment */}
      <section className="safety-section section-padding bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>COMPLIANCE</h4>
          <h2 className="section-title mb-5">Safety & Environmental Standards</h2>
          
          <div className="features-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <ShieldAlert size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Worker Safety First</h3>
                <p className="text-muted mb-0">Our facilities are OHSAS 18001 certified. We enforce strict safety protocols, regular training, and automated material handling to minimize human risk.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Droplets size={48} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Effluent Treatment</h3>
                <p className="text-muted mb-0">Zero Liquid Discharge (ZLD) facility. We treat and reuse 100% of our industrial wastewater, ensuring zero harmful runoff into the environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Infrastructure */}
      <section className="sustainability-infra-section section-padding">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>GREEN ARCHITECTURE</h4>
          <h2 className="section-title mb-5">Sustainable Facility Infrastructure</h2>
          
          <div className="features-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', background: 'var(--bg-alt)' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Sun size={48} style={{ color: '#10B981', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Solar Roof Arrays</h3>
                <p className="text-muted mb-0">Our 500,000 sq ft facility roof is covered in high-efficiency solar panels, generating over 40% of the electricity required to run our heavy machinery.</p>
              </div>
            </div>
            <div className="conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', background: 'var(--bg-alt)' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Recycle size={48} style={{ color: '#10B981', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.4rem' }}>Pneumatic Scrap Baling</h3>
                <p className="text-muted mb-0">100% of corrugated off-cuts are immediately vacuum-sucked from the machines through ceiling pipes, automatically baled, and shipped directly back to paper mills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Gallery */}
      <section className="infra-gallery section-padding">
        <div className="container text-center">
          <h2 className="section-title mb-5">Infrastructure Gallery</h2>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {[
              'images/gen_factory_1784230451806.jpg', 
              'images/gen_logistics_1784230470758.jpg', 
              'images/gen_rolls_1784230490842.jpg', 
              'images/gen_eco_1784230460993.jpg', 
              'images/gen_premium_1784230480978.jpg', 
              'images/gen_hero_1784230442874.jpg'
            ].map((src, i) => (
              <div key={i} className="conic-container conic-card" style={{ padding: '4px', height: '250px' }}>
                <img src={src} className="rounded-image" alt={`Gallery ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Infrastructure;
