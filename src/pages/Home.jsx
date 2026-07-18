import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Truck, Leaf, ShieldCheck, Box, Award, Settings, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function Home() {
  return (
    <div>
      {/* Hero Section */}
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
              Custom Packaging <br/> Solutions For Your Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
              style={{ color: '#E2E8F0', marginBottom: '2.5rem', fontSize: '1.25rem' }}
            >
              High Quality | Customizable | Sustainable
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-buttons"
            >
              <Link to="/quote" className="btn btn-primary btn-large">
                GET QUOTE
              </Link>
            </motion.div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px', background: 'var(--bg-color)' }}>
              <img 
                src="/images/gen_hero_1784230442874.jpg" 
                alt="Cardboard Boxes" 
                style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Floating Over Hero) */}
      <section className="stats-section" style={{ marginTop: '-80px', position: 'relative', zIndex: '10' }}>
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="conic-container conic-pill-dark"
            style={{ boxShadow: '0 20px 40px rgba(15, 37, 72, 0.12)' }}
          >
            <div className="stats-grid" style={{ padding: '2rem 3rem' }}>
            {[
              { label: 'Premium Quality', value: '15+', icon: <Award /> },
              { label: 'Custom Solutions', value: '250+', icon: <ThumbsUp /> },
              { label: 'Eco Friendly', value: '120+', icon: <Package /> },
              { label: 'Fast Delivery', value: '25+', icon: <Box /> },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="stat-card" style={{ flexDirection: 'column', textAlign: 'center', gap: '0.5rem' }}>
                <div className="stat-icon" style={{ background: 'transparent', color: 'var(--secondary-color)', width: 'auto', height: 'auto', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{ zIndex: 2 }}>
                  <h3 className="stat-value" style={{ color: 'white', fontSize: '2rem', fontFamily: 'Inter, sans-serif', fontWeight: '700' }}>{stat.value}</h3>
                  <p className="stat-label" style={{ color: '#A0AABF', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="intro-section section-padding bg-alt">
        <div className="container">
          <div className="about-grid" style={{ direction: 'rtl' }}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-image-wrapper"
              style={{ direction: 'ltr' }}
            >
              <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', width: '100%' }}>
                <img
                  src="/images/gen_factory_1784230451806.jpg" 
                  alt="Corporate Office" 
                  className="about-img-main"
                  style={{ borderRadius: '20px', display: 'block', position: 'relative', zIndex: 2, width: '100%', height: 'auto' }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-content"
              style={{ direction: 'ltr' }}
            >
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Who We Are</h4>
              <h2 className="section-title">Company Introduction</h2>
              <p className="section-subtitle" style={{margin: '0 0 1.5rem 0', maxWidth: '100%', color: 'var(--text-muted)'}}>
                GN Packaging is a premier manufacturer of high-quality corrugated boxes, customized cartons, and eco-friendly packaging solutions. Founded with a vision to revolutionize the packaging industry, we have consistently delivered excellence to businesses worldwide.
              </p>
              <p className="section-subtitle" style={{margin: '0 0 2rem 0', maxWidth: '100%', color: 'var(--text-muted)'}}>
                Our mission is to provide robust, reliable, and sustainable packaging that not only protects your products but also enhances your brand identity in the competitive market.
              </p>
              <Link to="/about" className="btn btn-outline">Read Our Full Story <ArrowRight size={20}/></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section (Why Choose Us) */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-image-wrapper"
            >
              <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', width: '100%' }}>
                <img
                  src="/images/gen_factory_1784230451806.jpg" 
                  alt="Production Line" 
                  className="about-img-main"
                  style={{ borderRadius: '20px', display: 'block', position: 'relative', zIndex: 2, width: '100%', height: 'auto' }}
                />
              </div>
              <div className="about-img-float conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'absolute', bottom: '-20px', right: '-20px', boxShadow: '0 15px 30px rgba(15, 37, 72, 0.2)' }}>
                <ShieldCheck size={40} style={{ color: 'var(--secondary-color)', zIndex: '2' }} />
                <div style={{ zIndex: '2' }}>
                  <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.2rem' }}>ISO 9001:2015</h4>
                  <p style={{ color: '#E2E8F0', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Certified Quality</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-content"
            >
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Why Choose Us</h4>
              <h2 className="section-title">Manufacturing Excellence & Innovation</h2>
              <p className="section-subtitle" style={{margin: '0 0 2rem 0', maxWidth: '100%'}}>
                With state-of-the-art facilities and a relentless commitment to quality, we provide packaging solutions that don't just protect your product—they elevate your brand.
              </p>
              
              <ul className="features-grid" style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { icon: <Settings size={28}/>, title: 'Advanced', text: 'Automated Machinery' },
                  { icon: <ThumbsUp size={28}/>, title: 'Rigorous', text: 'Quality Assurance' },
                  { icon: <Leaf size={28}/>, title: 'Eco-Friendly', text: 'Sustainable Options' },
                  { icon: <ShieldCheck size={28}/>, title: 'Certified', text: 'Industry Standards' }
                ].map((item, i) => (
                  <li key={i} className="conic-container conic-card" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <div className="highlight-accent" style={{ zIndex: 2 }}>{item.icon}</div>
                    <div style={{ zIndex: 2 }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-color)', display: 'block' }}>{item.title}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <Link to="/about" className="btn btn-primary">Learn More About Us <ArrowRight size={20}/></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capacity */}
      <section className="capacity-section section-padding text-center bg-alt">
        <div className="container">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Our Scale</h4>
          <h2 className="section-title mb-4">Manufacturing Capacity</h2>
          
          <div className="about-grid mt-4" style={{ textAlign: 'left' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-content"
            >
              <p className="section-subtitle" style={{margin: '0 0 2rem 0', maxWidth: '100%'}}>
                We operate one of the largest and most technologically advanced packaging facilities in the region, capable of fulfilling massive bulk orders without compromising on quality or lead time.
              </p>
              <div className="stats-grid capacity-stats" style={{ gap: '1.5rem' }}>
                <div className="stat-card conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <h3 className="stat-value" style={{ fontSize: '2rem', position: 'relative', zIndex: 2 }}>10,000+</h3>
                  <p className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Metric Tons / Month</p>
                </div>
                <div className="stat-card conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <h3 className="stat-value" style={{ fontSize: '2rem', position: 'relative', zIndex: 2 }}>200,000</h3>
                  <p className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Sq. Ft. Facility</p>
                </div>
                <div className="stat-card conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <h3 className="stat-value" style={{ fontSize: '2rem', position: 'relative', zIndex: 2 }}>24/7</h3>
                  <p className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Production Line</p>
                </div>
                <div className="stat-card conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                  <h3 className="stat-value" style={{ fontSize: '2rem', position: 'relative', zIndex: 2 }}>50+</h3>
                  <p className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Delivery Vehicles</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-image-wrapper"
            >
              <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', height: '100%' }}>
                <img
                  src="/images/gen_rolls_1784230490842.jpg" 
                  alt="Large Manufacturing Facility" 
                  className="about-img-main"
                  style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block', position: 'relative', zIndex: 2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>What We Make</h4>
            <h2 className="section-title">Our Key Products</h2>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="products-grid"
          >
            {[
              {
                title: 'Corrugated Boxes',
                desc: 'Heavy-duty shipping cartons for all industries.',
                img: '/images/gen_hero_1784230442874.jpg'
              },
              {
                title: 'Custom Printed Cartons',
                desc: 'High-quality offset and flexo printing.',
                img: '/images/gen_premium_1784230480978.jpg'
              },
              {
                title: 'Eco-Friendly Mailers',
                desc: '100% recyclable e-commerce solutions.',
                img: '/images/gen_eco_1784230460993.jpg'
              }
            ].map((product, i) => (
              <motion.div key={i} variants={fadeIn} className="product-card conic-container conic-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={product.img} alt={product.title} style={{ position: 'relative', zIndex: 2, borderRadius: '12px', width: '100%', height: 'auto' }} />
                <h3 style={{ position: 'relative', zIndex: 2 }}>{product.title}</h3>
                <p className="text-muted mb-4 mt-2" style={{ position: 'relative', zIndex: 2 }}>{product.desc}</p>
                <Link to="/products" className="text-gradient" style={{fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2}}>
                  View Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-4">
             <Link to="/products" className="btn btn-outline btn-large">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-padding text-center">
        <div className="container">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>How We Work</h4>
          <h2 className="section-title mb-4">Our Manufacturing Process</h2>
          <div className="process-grid mt-4">
            {[
              { step: '01', title: 'Consultation & Design', desc: 'Understanding requirements and creating structural designs.' },
              { step: '02', title: 'Raw Material Sourcing', desc: 'Procuring high-grade Kraft paper and boards.' },
              { step: '03', title: 'Printing & Production', desc: 'High-speed automated manufacturing lines.' },
              { step: '04', title: 'Quality Assurance', desc: 'Rigorous testing for strength, color, and durability.' }
            ].map((proc, i) => (
              <div key={i} className="process-step conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="step-number" style={{ color: 'var(--secondary-color)', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>{proc.step}</div>
                <h3 style={{ position: 'relative', zIndex: 2 }}>{proc.title}</h3>
                <p className="text-muted mt-2" style={{ position: 'relative', zIndex: 2 }}>{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section section-padding-large bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Our Valued Clients</h4>
          <h2 className="section-title">Brands We Work With</h2>
          <div className="clients-grid mt-4">
            <div className="client-logo conic-container conic-card" style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', letterSpacing: '-1px', color: 'var(--text-color)', opacity: 0.8, position: 'relative', zIndex: 2 }}>Amazon</span>
            </div>
            <div className="client-logo conic-container conic-card" style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-color)', opacity: 0.8, position: 'relative', zIndex: 2 }}>Nestlé</span>
            </div>
            <div className="client-logo conic-container conic-card" style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{ fontSize: '1.75rem', fontWeight: '900', letterSpacing: '-1.5px', color: 'var(--text-color)', opacity: 0.8, position: 'relative', zIndex: 2 }}>FedEx</span>
            </div>
            <div className="client-logo conic-container conic-card" style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{ fontSize: '1.75rem', fontWeight: '600', letterSpacing: '2px', color: 'var(--text-color)', opacity: 0.8, position: 'relative', zIndex: 2 }}>TCS</span>
            </div>
            <div className="client-logo conic-container conic-card" style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.5px', color: 'var(--text-color)', opacity: 0.8, position: 'relative', zIndex: 2 }}>Google</span>
            </div>
            <div className="client-logo conic-container conic-card" style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-color)', opacity: 0.8, position: 'relative', zIndex: 2 }}>Cisco</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section section-padding">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-image-wrapper"
            >
              <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', width: '100%' }}>
                <img
                  src="/images/gen_eco_1784230460993.jpg" 
                  alt="Eco Friendly Packaging" 
                  className="about-img-main"
                  style={{ borderRadius: '20px', display: 'block', position: 'relative', zIndex: 2, width: '100%', height: 'auto' }}
                />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-content"
            >
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Our Commitment</h4>
              <h2 className="section-title">Sustainability & Eco-Friendly Initiatives</h2>
              <p className="section-subtitle" style={{margin: '0 0 2rem 0', maxWidth: '100%', color: 'var(--text-muted)'}}>
                We believe in protecting the planet as much as we protect your products. Our green manufacturing processes ensure a minimal carbon footprint.
              </p>
              <ul style={{ marginBottom: '2rem' }}>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                  <div className="highlight-accent"><Leaf size={24}/></div>
                  <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>100% Recyclable Materials</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                  <div className="highlight-accent"><Leaf size={24}/></div>
                  <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>FSC-Certified Paper Sourcing</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                  <div className="highlight-accent"><Leaf size={24}/></div>
                  <span style={{ fontSize: '1.125rem', fontWeight: '500' }}>Zero-Waste Manufacturing Process</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="industries-section section-padding bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Versatility</h4>
          <h2 className="section-title mb-4">Industries We Serve</h2>
          <div className="products-grid mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {[
              { name: 'Food & Beverage', img: '/images/gen_eco_1784230460993.jpg' },
              { name: 'E-Commerce', img: '/images/gen_hero_1784230442874.jpg' },
              { name: 'Pharmaceuticals', img: '/images/gen_factory_1784230451806.jpg' },
              { name: 'Electronics', img: '/images/gen_premium_1784230480978.jpg' }
            ].map((industry, i) => (
              <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="product-card conic-container conic-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
                <img src={industry.img} alt={industry.name} style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '1rem', position: 'relative', zIndex: 2 }} />
                <h3 style={{ fontSize: '1.25rem', position: 'relative', zIndex: 2 }}>{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Client Success</h4>
          <h2 className="section-title mb-4">What Our Partners Say</h2>
          <div className="stats-grid mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            {[
              { name: 'Sarah Jenkins', role: 'Logistics Director, Amazon', text: '"GN Packaging completely transformed our supply chain. Their corrugated boxes are incredibly durable and their delivery is always on time."' },
              { name: 'Michael Chen', role: 'Operations Manager, Nestle', text: '"We needed a sustainable packaging solution that didn\'t compromise on strength. GN Packaging delivered exactly what we needed at a great price point."' },
              { name: 'Priya Sharma', role: 'CEO, FreshFoods', text: '"The custom printed cartons they produced for our new product line are stunning. The colors are vibrant and the structural integrity is perfect."' }
            ].map((testi, i) => (
              <div key={i} className="testimonial-card conic-container conic-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--secondary-color)', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>{testi.text}</p>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h4 style={{ margin: '0 0 0.2rem 0' }}>{testi.name}</h4>
                  <p style={{ margin: '0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-4">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Got Questions?</h4>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid mt-4" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'What is your Minimum Order Quantity (MOQ)?', a: 'Our standard MOQ is 1,000 units for standard corrugated boxes, and 5,000 units for fully custom printed cartons. However, we can discuss pilot runs for new clients.' },
              { q: 'Do you offer custom structural packaging design?', a: 'Yes! We have an in-house team of structural engineers who can design packaging specifically tailored to protect and showcase your unique product.' },
              { q: 'What are your standard manufacturing lead times?', a: 'For repeat orders, our lead time is typically 7-10 business days. For new custom orders requiring new dies or printing plates, expect 14-21 days from proof approval.' },
              { q: 'Are your packaging materials eco-friendly?', a: 'Absolutely. Over 90% of our corrugated materials are made from recycled content, and we offer FSC-certified virgin kraft options as well.' }
            ].map((faq, i) => (
              <div key={i} className="conic-container conic-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2 }}>
                  <div style={{ color: 'var(--secondary-color)' }}>•</div> {faq.q}
                </h3>
                <p style={{ color: 'var(--text-muted)', margin: '0', paddingLeft: '1.5rem', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Global Logistics Section */}
      <section className="logistics-section section-padding">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>Global Reach</h4>
              <h2 className="section-title">Seamless Logistics & Delivery</h2>
              <p className="section-subtitle" style={{margin: '0 0 2rem 0', maxWidth: '100%'}}>
                Our massive distribution network ensures that your custom packaging arrives exactly when you need it, anywhere in the world. We operate over 500,000 sq ft of warehousing space.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', position: 'relative', zIndex: 2 }}>99.8%</h3>
                  <p style={{ color: 'var(--text-muted)', position: 'relative', zIndex: 2 }}>On-Time Delivery Rate</p>
                </div>
                <div className="conic-container conic-card" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)', position: 'relative', zIndex: 2 }}>50+</h3>
                  <p style={{ color: 'var(--text-muted)', position: 'relative', zIndex: 2 }}>Countries Served</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="conic-container" style={{ borderRadius: '24px', padding: '4px', width: '100%', boxShadow: '0 20px 40px rgba(15,37,72,0.1)' }}>
                <img src="/images/gen_logistics_1784230470758.jpg" alt="Logistics Network" style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block', position: 'relative', zIndex: 2 }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Process Flow Section */}
      <section className="process-section section-padding bg-alt">
        <div className="container text-center">
          <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0'}}>How It Works</h4>
          <h2 className="section-title mb-4">Our End-to-End Process</h2>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {[
              { num: '01', title: 'Consultation & Design', desc: 'Our engineers design the perfect structural fit for your product.' },
              { num: '02', title: 'Prototyping', desc: 'We create 3D mockups and physical samples for your approval.' },
              { num: '03', title: 'Mass Manufacturing', desc: 'High-speed automated production with rigorous QC checks.' },
              { num: '04', title: 'Global Delivery', desc: 'Secure palletizing and on-time shipment to your facilities.' }
            ].map((step, i) => (
              <div key={i} className="process-step conic-container conic-card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ zIndex: '2', position: 'relative' }}>
                  <h3 style={{ fontSize: '3rem', color: 'var(--secondary-color)', opacity: '0.5', marginBottom: '1rem' }}>{step.num}</h3>
                  <h4 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Certifications Section */}
      <section className="certs-section section-padding">
        <div className="container text-center">
          <h2 className="section-title mb-4">Certified Excellence</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {['ISO 9001:2015', 'FSC Certified', 'FDA Compliant', 'Eco-Safe'].map((cert, i) => (
              <div key={i} className="conic-container conic-pill" style={{ padding: '1.5rem 3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                <ShieldCheck style={{ color: 'var(--secondary-color)', position: 'relative', zIndex: 2 }} /> 
                <span style={{ position: 'relative', zIndex: 2 }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding-large" style={{ backgroundImage: 'url(/images/gen_premium_1784230480978.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--bg-color)', opacity: 0.9, zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-card conic-container conic-card text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem' }}>
            <h2 className="section-title" style={{position: 'relative', zIndex: 2}}>Ready to Elevate Your Packaging?</h2>
            <p className="section-subtitle mx-auto" style={{position: 'relative', zIndex: 2}}>Get a custom quote today and see how our manufacturing excellence can benefit your brand.</p>
            <div className="cta-buttons" style={{ position: 'relative', zIndex: 2 }}>
              <Link to="/quote" className="btn btn-primary btn-large">Get Custom Quote</Link>
              <button className="btn btn-outline btn-large">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
