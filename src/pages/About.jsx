import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Shield, TrendingUp, Trophy, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="about-page">
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
              About <br/> GN Packaging
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
              style={{ color: '#E2E8F0', marginBottom: '2.5rem', fontSize: '1.25rem' }}
            >
              We are a leading packaging manufacturing company committed to delivering high-quality, innovative, and sustainable packaging solutions. For over two decades, we have been the silent force protecting and elevating the world's most trusted brands.
            </motion.p>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
            <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', width: '100%', maxWidth: '500px', background: 'var(--bg-color)' }}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
                alt="GN Packaging Warehouse" 
                style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Founder Message */}
      <section className="story-section section-padding">
        <div className="container">
          <div className="story-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="story-content">
              <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>OUR STORY</h4>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Legacy of Quality and Manufacturing Excellence</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Founded with a visionary goal to revolutionize the packaging industry, **GN Packaging** has grown from a local corrugated box supplier into a premier, global manufacturing powerhouse. Our entire journey is defined by a relentless pursuit of excellence, continuous investment in state-of-the-art automated manufacturing facilities, and a deep, strategic understanding of our clients' supply chain needs.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.1rem' }}>
                From high-strength industrial shipping cartons to vibrant, custom-printed retail pouches, we engineer tailored solutions that do more than just protect your products. We create packaging that reduces transit damage, optimizes logistics costs, and elevates your brand identity across highly competitive sectors.
              </p>
              
              <div className="chairman-msg conic-container conic-card" style={{ padding: '2.5rem', borderLeft: '6px solid var(--primary-light)', marginTop: '2rem' }}>
                <h3 style={{ position: 'relative', zIndex: 2, marginBottom: '1.25rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>Founder's Message</h3>
                <blockquote style={{ fontStyle: 'italic', color: 'var(--text-muted)', position: 'relative', zIndex: 2, lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  "Packaging is the very first physical touchpoint a customer has with your brand. It speaks before the product does. At GN Packaging, our mission is to ensure that every single touchpoint is flawless, environmentally sustainable, and truly unforgettable."
                </blockquote>
                <div className="chairman-profile" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>GN</div>
                  <div>
                    <h4 style={{ color: 'var(--text-color)', margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>Gaurav Narang</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--primary-light)', fontWeight: 600 }}>Founder & Chairman</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', width: '100%', background: 'var(--bg-color)' }}>
                <img src="images/gen_logistics_1784230470758.jpg" alt="Factory Conveyor Line" style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }} />
              </div>
              <div className="conic-container conic-card" style={{ padding: '2rem', textAlign: 'center', borderRadius: '20px' }}>
                <span style={{ position: 'relative', zIndex: 2, display: 'block', fontSize: '3.5rem', fontWeight: 800, color: 'var(--primary-light)', lineHeight: 1, marginBottom: '0.5rem' }}>15+</span>
                <span style={{ position: 'relative', zIndex: 2, fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-color)' }}>Years of Manufacturing Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Separated with proven images */}
      <section className="vision-mission section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-3">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>OUR PURPOSE</h4>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Mission & Vision</h2>
          </div>
          
          <div style={{ display: 'grid', gap: '5rem' }}>
            {/* Mission Row */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div className="vm-card conic-container conic-card" style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                <div className="vm-icon" style={{ display: 'inline-flex', padding: '1.25rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-light)', marginBottom: '1.5rem', position: 'relative', zIndex: 2, width: 'fit-content' }}><Target size={40} /></div>
                <h3 style={{ position: 'relative', zIndex: 2, marginBottom: '0.5rem', fontSize: '2rem', color: 'var(--text-color)' }}>Our Mission</h3>
                <h4 style={{ position: 'relative', zIndex: 2, color: 'var(--primary-color)', fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 700 }}>"Deliver Quality Packaging Solutions."</h4>
                <p style={{ position: 'relative', zIndex: 2, color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  To relentlessly engineer, design, and manufacture highly durable, cost-effective, and customized packaging solutions that ensure the absolute safety of our clients' products during transit. We are dedicated to maintaining the highest standards of operational excellence, rigorous quality testing, and on-time delivery.
                </p>
              </div>
              <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', width: '100%', background: 'var(--bg-color)', height: '100%' }}>
                <img src="images/gen_premium_1784230480978.jpg" alt="Fragile Delivery Box" style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }} />
              </div>
            </motion.div>

            {/* Vision Row */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', width: '100%', background: 'var(--bg-color)', height: '100%', order: -1 }}>
                <img src="images/gen_eco_1784230460993.jpg" alt="Eco Friendly Packing Peanuts" style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }} />
              </div>
              <div className="vm-card conic-container conic-card" style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                <div className="vm-icon" style={{ display: 'inline-flex', padding: '1.25rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-light)', marginBottom: '1.5rem', position: 'relative', zIndex: 2, width: 'fit-content' }}><Lightbulb size={40} /></div>
                <h3 style={{ position: 'relative', zIndex: 2, marginBottom: '0.5rem', fontSize: '2rem', color: 'var(--text-color)' }}>Our Vision</h3>
                <h4 style={{ position: 'relative', zIndex: 2, color: 'var(--primary-color)', fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: 700 }}>"To be a Global Leader in Packaging."</h4>
                <p style={{ position: 'relative', zIndex: 2, color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  To become the undisputed global benchmark and industry pioneer in sustainable, eco-friendly packaging manufacturing by the end of this decade. We aim to drive the entire logistics and manufacturing industry towards a circular economy by innovating biodegradable materials and achieving zero-waste production.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values section-padding">
        <div className="container">
          <div className="text-center mb-3">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>WHY CUSTOMERS CHOOSE US</h4>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Our Core Values</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem', lineHeight: 1.7 }}>These four foundational pillars guide every decision we make on the factory floor and in our corporate offices.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'stretch' }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { icon: <Trophy size={32}/>, title: 'Quality', desc: 'Every box undergoes rigorous testing for burst strength.' },
                { icon: <Shield size={32}/>, title: 'Integrity', desc: 'Absolute transparency. We do exactly what we say we will do.' },
                { icon: <TrendingUp size={32}/>, title: 'Innovation', desc: 'We invest in cutting-edge automation for smarter solutions.' },
                { icon: <Users size={32}/>, title: 'Focus', desc: 'Deep customization, rapid prototyping, flexible MOQs.' }
              ].map((value, i) => (
                <motion.div key={i} variants={fadeIn} className="value-card conic-container conic-card" style={{ padding: '2rem 1.5rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="value-icon" style={{ color: 'var(--primary-light)', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>{value.icon}</div>
                  <h3 style={{ position: 'relative', zIndex: 2, marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>{value.title}</h3>
                  <p style={{ position: 'relative', zIndex: 2, color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, flexGrow: 1 }}>{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="conic-container" style={{ borderRadius: '24px', padding: '6px', width: '100%', background: 'var(--bg-color)', height: '100%' }}>
                <img src="images/gen_eco_1784230460993.jpg" alt="Open Box with Bubble Wrap" style={{ width: '100%', height: 'auto', borderRadius: '18px', display: 'block', position: 'relative', zIndex: 2 }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline & Achievements */}
      <section className="timeline-section section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-3">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>OUR JOURNEY</h4>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Milestones & Achievements</h2>
          </div>
          <div className="timeline">
            {[
              { year: '2008', title: 'Company Founded', desc: 'GN Packaging started operations with a single, highly efficient corrugated box manufacturing line, serving local retail businesses.' },
              { year: '2012', title: 'Quality Certification (ISO)', desc: 'Achieved strict ISO 9001:2015 certification for our rigorous in-house testing laboratories and quality management systems.' },
              { year: '2016', title: 'Product Line Expansion', desc: 'Expanded our manufacturing capabilities by importing state-of-the-art machinery to produce custom-printed pouches, duplex boxes, and food-grade packaging.' },
              { year: '2020', title: 'Eco-Friendly Initiative', desc: 'Launched our Green Packaging line, introducing fully sustainable, FSC-certified recyclable materials to help brands reduce their carbon footprint.' },
              { year: '2024', title: 'Global Manufacturing Reach', desc: 'Surpassed a massive 10,000+ Metric Tons (MT) Monthly Production Capacity, serving over 500+ happy enterprise clients worldwide.' }
            ].map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" style={{ position: 'absolute', left: '12px', top: 0, width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary-light)', border: '4px solid var(--bg-color)' }}></div>
                <div className="timeline-content conic-container conic-card" style={{ padding: '2rem', borderRadius: '16px' }}>
                  <span className="timeline-year" style={{ position: 'relative', zIndex: 2, display: 'inline-block', padding: '0.4rem 1rem', background: 'var(--primary-color)', color: 'white', borderRadius: '999px', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>{item.year}</span>
                  <h3 style={{ position: 'relative', zIndex: 2, marginBottom: '0.75rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>{item.title}</h3>
                  <p style={{ position: 'relative', zIndex: 2, color: 'var(--text-muted)', margin: 0, fontSize: '1.1rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Manufacturing Facility */}
      <section className="factory-preview section-padding">
        <div className="container">
          <div className="text-center mb-3">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>INFRASTRUCTURE</h4>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>State-of-the-Art Manufacturing Facility</h2>
            <p className="section-subtitle" style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '1rem auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Our massive, globally compliant manufacturing units are equipped with the latest automation technology, high-speed printing presses, and advanced quality testing laboratories.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              "Heavy-duty Corrugation Machines",
              "High-Speed Flexo & Offset Printing",
              "Automated Die-Cutting & Gluing",
              "In-house Quality Testing Labs",
              "10,000+ MT Monthly Capacity",
              "Spacious Warehousing & Logistics"
            ].map((feature, idx) => (
              <div key={idx} className="conic-container conic-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '12px' }}>
                <CheckCircle size={24} style={{ color: 'var(--primary-light)', position: 'relative', zIndex: 2 }} />
                <span style={{ position: 'relative', zIndex: 2, fontWeight: 600, color: 'var(--text-color)' }}>{feature}</span>
              </div>
            ))}
          </div>

          <div className="factory-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="conic-container" style={{ borderRadius: '16px', padding: '6px', background: 'var(--bg-color)', height: '100%' }}>
              <img src="images/gen_hero_1784230442874.jpg" alt="Stacked Cardboard Boxes" style={{ width: '100%', height: 'auto', borderRadius: '12px', position: 'relative', zIndex: 2, display: 'block' }} />
            </div>
            <div className="conic-container" style={{ borderRadius: '16px', padding: '6px', background: 'var(--bg-color)', height: '100%' }}>
              <img src="images/gen_rolls_1784230490842.jpg" alt="Cardboard Rolls and Materials" style={{ width: '100%', height: 'auto', borderRadius: '12px', position: 'relative', zIndex: 2, display: 'block' }} />
            </div>
            <div className="conic-container" style={{ borderRadius: '16px', padding: '6px', background: 'var(--bg-color)', height: '100%' }}>
              <img src="images/gen_logistics_1784230470758.jpg" alt="Loading Shipping Container" style={{ width: '100%', height: 'auto', borderRadius: '12px', position: 'relative', zIndex: 2, display: 'block' }} />
            </div>
          </div>
          <div className="text-center mt-3">
             <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', padding: '1rem 2.5rem', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}>
                Get a Virtual Tour <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
             </Link>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="team-section section-padding bg-alt">
        <div className="container">
          <div className="text-center mb-3">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>THE EXPERTS BEHIND THE BOX</h4>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Meet Our Leadership Team</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '1rem auto 0', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Our team consists of industry veterans, packaging engineers, and supply chain experts who work tirelessly to optimize your packaging operations.
            </p>
          </div>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
            {[
              { 
                name: 'Sarah Jenkins', 
                role: 'Head of Manufacturing', 
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
                bio: 'Sarah leads our factory operations with 15 years of experience in scaling corrugated box production and implementing advanced automation workflows.'
              },
              { 
                name: 'Michael Chen', 
                role: 'Director of R&D and Sustainability', 
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
                bio: 'Michael pioneers our eco-friendly initiatives, researching biodegradable materials and designing structurally stronger boxes that use 20% less paper.'
              },
              { 
                name: 'Elena Rodriguez', 
                role: 'Chief Quality Officer', 
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
                bio: 'Elena oversees our in-house testing laboratories, ensuring every single batch passes strict burst strength and crush resistance certifications.'
              },
              { 
                name: 'David Smith', 
                role: 'VP of Global Enterprise Sales', 
                img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
                bio: 'David works directly with our FMCG and E-commerce clients to build tailored, cost-effective logistics supply chains and reduce transit damage.'
              }
            ].map((member, i) => (
              <div key={i} className="team-card conic-container conic-card" style={{ padding: '6px', textAlign: 'center', background: 'var(--bg-color)' }}>
                <img src={member.img} alt={member.name} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '12px 12px 0 0', position: 'relative', zIndex: 2, display: 'block' }} />
                <div className="team-info" style={{ padding: '1.5rem 1.25rem', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3 style={{ marginBottom: '0.25rem', fontSize: '1.3rem', color: 'var(--text-color)' }}>{member.name}</h3>
                  <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600, margin: '0 0 1rem 0' }}>{member.role}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, borderTop: '1px solid var(--card-border)', paddingTop: '1rem' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
