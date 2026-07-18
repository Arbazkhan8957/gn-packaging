import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, User, BookOpen, TrendingUp, Award, Zap, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [visibleArticles, setVisibleArticles] = useState(3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const categories = [
    { name: "Structural Engineering", icon: <Award size={24} />, count: "24 Articles" },
    { name: "Supply Chain & Logistics", icon: <TrendingUp size={24} />, count: "18 Articles" },
    { name: "Sustainable Materials", icon: <Zap size={24} />, count: "32 Articles" },
    { name: "Printing Technologies", icon: <BookOpen size={24} />, count: "15 Articles" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Packaging Materials",
      excerpt: "As consumer demand for eco-friendly products rises, discover how we are pioneering the use of 100% post-consumer recycled kraft paper and biodegradable adhesives in our latest manufacturing processes.",
      date: "Oct 12, 2026",
      author: "Sustainability Team",
      category: "Sustainability",
      img: "images/gen_eco_1784230460993.jpg",
      direction: "ltr"
    },
    {
      id: 2,
      title: "How Automation is Revolutionizing the Corrugated Industry",
      excerpt: "Step inside our state-of-the-art facility to see how advanced robotics, automated conveyors, and smart routing systems are increasing our production speed while maintaining microscopic quality control.",
      date: "Sep 28, 2026",
      author: "Engineering Dept.",
      category: "Innovation",
      img: "images/quality_automation_1784384417146.jpg",
      direction: "rtl"
    },
    {
      id: 3,
      title: "Understanding Bursting Strength vs. Edge Crush Test (ECT)",
      excerpt: "When designing custom packaging for heavy-duty export, which metric matters more? We break down the science behind structural integrity and how our testing labs ensure your products arrive safely.",
      date: "Sep 15, 2026",
      author: "Quality Assurance",
      category: "Engineering",
      img: "images/gallery_testing_1784385097873.jpg",
      direction: "ltr"
    },
    {
      id: 4,
      title: "Optimizing Your Supply Chain with Just-In-Time Delivery",
      excerpt: "Learn how our integrated logistics fleet and Vendor Managed Inventory (VMI) solutions can reduce your warehousing costs and keep your assembly lines running without interruption.",
      date: "Aug 30, 2026",
      author: "Logistics Team",
      category: "Supply Chain",
      img: "images/gen_logistics_1784230470758.jpg",
      direction: "rtl"
    },
    {
      id: 5,
      title: "The Ultimate Guide to Flute Profiles: A, B, C, E, and F",
      excerpt: "Not all cardboard is created equal. We explore the structural differences between various flute sizes and how to select the perfect profile for premium retail display versus heavy industrial transit.",
      date: "Aug 12, 2026",
      author: "Structural Design",
      category: "Education",
      img: "images/gallery_fluting_1784385068408.jpg",
      direction: "ltr"
    },
    {
      id: 6,
      title: "Flexographic vs. Litho-Lamination Printing",
      excerpt: "Your packaging is your brand's first physical touchpoint. We compare modern high-definition flexo printing against premium litho-lamination to help you maximize your marketing ROI.",
      date: "Jul 22, 2026",
      author: "Marketing Dept.",
      category: "Design",
      img: "images/gallery_printing_1784384864195.jpg",
      direction: "rtl"
    }
  ];

  const authors = [
    { name: "Dr. Elena Rostova", role: "Head of Material Science", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
    { name: "Marcus Chen", role: "Logistics Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { name: "Sarah Jenkins", role: "Lead Structural Designer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" }
  ];

  return (
    <div className="page-transition">
      
      {/* Hero Section - Split Layout */}
      <section className="hero-curved" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="about-grid" style={{ alignItems: 'center' }}>
            
            {/* Left: Text Content */}
            <div className="hero-content" style={{ paddingRight: '2rem' }}>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', color: 'white', marginBottom: '1.5rem', fontWeight: 600, letterSpacing: '1px' }}>
                  THE PACKAGING HUB
                </span>
              </motion.div>
              
              <motion.h1 
                initial="hidden" animate="visible" variants={fadeIn}
                className="display-4 text-white mb-4"
                style={{ fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: 1.2 }}
              >
                Industry Insights & Innovation
              </motion.h1>
              
              <motion.p 
                initial="hidden" animate="visible" variants={fadeIn}
                className="lead text-white mb-5"
                style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.8 }}
              >
                Dive deep into expert articles, company news, and the latest manufacturing advancements shaping the future of global corrugated packaging.
              </motion.p>
              
              <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ display: 'flex', gap: '1rem' }}>
                <a href="#articles" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem' }}>
                  Read Articles
                </a>
                <a href="#subscribe" className="btn btn-outline text-white" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem', borderColor: 'rgba(255,255,255,0.5)' }}>
                  Subscribe
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
                  src="images/gallery_testing_1784385097873.jpg" 
                  alt="Packaging Insights" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                  <h4 style={{ color: 'white', margin: 0, fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>State-of-the-art Testing Labs</h4>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section className="section-padding" style={{ background: 'var(--bg-color)', marginTop: '-50px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="conic-container conic-card"
                style={{ padding: '4px', borderRadius: '24px', cursor: 'pointer', transition: 'transform 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', position: 'relative', zIndex: 2 }}>
                  <div style={{ color: 'var(--primary-color)' }}>{cat.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{cat.name}</h3>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>{cat.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight (Editor's Pick) */}
      <section className="section-padding" style={{ background: 'var(--card-bg)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>EDITOR'S PICK</h4>
            <h2 className="section-title">Must-Read Insight</h2>
          </div>
          
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', minHeight: '400px', borderRadius: '20px' }}>
              <img src="images/media__1784228735621.jpg" alt="Paper Mill Partner" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} />
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 3, background: 'var(--btn-gradient)', color: 'white', padding: '0.5rem 1rem', borderRadius: '99px', fontWeight: 600, fontSize: '0.85rem' }}>
                Exclusive Report
              </div>
            </div>
            
            <div className="engineering-content" style={{ padding: '2rem 0' }}>
              <h2 className="section-title mb-4" style={{ fontSize: '2.5rem' }}>The Global Kraft Paper Shortage: What You Need to Know</h2>
              <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                With global supply chains tightening and raw material costs fluctuating, securing high-quality virgin kraft paper has never been more critical. We sit down with our procurement directors to discuss how long-term mill partnerships and vertical integration are shielding our clients from market volatility.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img src={authors[0].img} alt={authors[0].name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1rem' }}>{authors[0].name}</h4>
                  <p className="text-muted" style={{ margin: 0, fontSize: '0.85rem' }}>{authors[0].role}</p>
                </div>
                <Link to="/blog/1" className="btn btn-outline" style={{ marginLeft: 'auto', padding: '0.6rem 1.5rem', borderRadius: '50px', fontSize: '0.9rem' }}>Read Report</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section id="articles" className="blog-posts-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="section-subtitle highlight-accent" style={{margin: '0 0 0.5rem 0', fontWeight: 700, letterSpacing: '2px'}}>KNOWLEDGE BASE</h4>
            <h2 className="section-title">Latest Articles</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {blogPosts.slice(0, visibleArticles).map((post) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="about-grid" 
                style={{ direction: post.direction, alignItems: 'center' }}
              >
                {/* Image Side */}
                <div className="conic-container conic-card" style={{ padding: '4px', height: '100%', minHeight: '400px', direction: 'ltr', borderRadius: '20px' }}>
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', position: 'relative', zIndex: 2 }} 
                  />
                  <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 3, background: 'var(--btn-gradient)', color: 'white', padding: '0.5rem 1rem', borderRadius: '99px', fontWeight: 600, fontSize: '0.85rem', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                    {post.category}
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="engineering-content" style={{ direction: 'ltr', padding: '2rem 0' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)', fontSize: '0.95rem', fontWeight: 600 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={18} /> {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <User size={18} /> {post.author}
                    </span>
                  </div>
                  
                  <h2 className="section-title mb-4" style={{ fontSize: '2.5rem', lineHeight: 1.2 }}>{post.title}</h2>
                  <p className="text-muted mb-5" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                    {post.excerpt}
                  </p>
                  
                  <div>
                    <Link to={`/blog/${post.id}`} className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 600, fontSize: '1.1rem' }}>
                      Read Full Article <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {visibleArticles < blogPosts.length && (
            <div className="text-center mt-5 pt-5">
              <button 
                className="btn btn-outline" 
                onClick={() => setVisibleArticles(prev => prev + 3)}
                style={{ padding: '1rem 3rem', borderRadius: '50px', fontSize: '1.1rem' }}
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Authors Section */}
      <section className="section-padding" style={{ background: 'var(--card-bg)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Meet Our Experts</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>Insights and articles authored directly by our seasoned industry veterans.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {authors.map((author, idx) => (
              <div key={idx} className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '20px', textAlign: 'center', height: '100%', position: 'relative', zIndex: 2 }}>
                  <img src={author.img} alt={author.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem auto', border: '4px solid rgba(255,255,255,0.1)' }} />
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{author.name}</h3>
                  <p style={{ color: 'var(--primary-color)', fontWeight: 600, margin: '0 0 1.5rem 0' }}>{author.role}</p>
                  <a href="#articles" style={{ color: 'var(--text-color)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>View All Posts <ArrowRight size={16} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="subscribe" className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '30px' }}>
            <div style={{ background: 'var(--card-bg)', padding: '5rem 2rem', borderRadius: '26px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <Mail size={48} style={{ color: 'var(--primary-color)', margin: '0 auto 1.5rem auto' }} />
              <h2 className="section-title mb-3" style={{ fontSize: '3rem' }}>Join the Mailing List</h2>
              <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '600px', fontSize: '1.2rem' }}>Subscribe to our newsletter for the latest insights, innovations, and news in the packaging industry delivered straight to your inbox.</p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <input type="email" placeholder="Enter your business email" style={{ padding: '1.2rem 2rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white', width: '100%', maxWidth: '400px', outline: 'none', fontSize: '1.1rem' }} />
                <button className="btn btn-primary" style={{ padding: '1.2rem 3rem', borderRadius: '50px', fontSize: '1.1rem' }}>Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
