import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Calendar, Clock, Share2, Link2, Mail, MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react';
import './BlogDetails.css';

const allPosts = [
  { id: 1, title: "The Future of Sustainable Packaging Materials", author: "Sustainability Team", date: "Oct 12, 2026", readTime: "6 min read", category: "Sustainability", coverImg: "/images/gen_eco_1784230460993.jpg" },
  { id: 2, title: "How Automation is Revolutionizing the Corrugated Industry", author: "Engineering Dept.", date: "Sep 28, 2026", readTime: "8 min read", category: "Innovation", coverImg: "/images/quality_automation_1784384417146.jpg" },
  { id: 3, title: "Understanding Bursting Strength vs. Edge Crush Test (ECT)", author: "Quality Assurance", date: "Sep 15, 2026", readTime: "5 min read", category: "Engineering", coverImg: "/images/gallery_testing_1784385097873.jpg" },
  { id: 4, title: "Optimizing Your Supply Chain with Just-In-Time Delivery", author: "Logistics Team", date: "Aug 30, 2026", readTime: "7 min read", category: "Supply Chain", coverImg: "/images/gen_logistics_1784230470758.jpg" },
  { id: 5, title: "The Ultimate Guide to Flute Profiles: A, B, C, E, and F", author: "Structural Design", date: "Aug 12, 2026", readTime: "10 min read", category: "Education", coverImg: "/images/gallery_fluting_1784385068408.jpg" },
  { id: 6, title: "Flexographic vs. Litho-Lamination Printing", author: "Marketing Dept.", date: "Jul 22, 2026", readTime: "4 min read", category: "Design", coverImg: "/images/gallery_printing_1784384864195.jpg" },
  { id: 100, title: "The Global Kraft Paper Shortage: What You Need to Know", author: "Procurement Team", date: "Oct 20, 2026", readTime: "12 min read", category: "Exclusive Report", coverImg: "/images/media__1784228735621.jpg" }
];

const BlogDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = allPosts.find(p => p.id === parseInt(id)) || allPosts[0];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="blog-details-page">
      {/* Article Header */}
      <section className="article-header section-padding">
        <div className="container">
          <Link to="/blog" className="back-link"><ArrowLeft size={16}/> Back to Blog</Link>
          <div className="article-meta mt-2">
            <span className="blog-category-badge static-badge">{post.category}</span>
            <span><User size={16}/> {post.author}</span>
            <span><Calendar size={16}/> {post.date}</span>
            <span><Clock size={16}/> {post.readTime}</span>
          </div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="article-title">{post.title}</motion.h1>
        </div>
      </section>

      {/* Cover Image */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="conic-container conic-card" style={{ padding: '4px', borderRadius: '30px' }}>
          <div className="article-cover" style={{ margin: 0, borderRadius: '26px', position: 'relative', zIndex: 2 }}>
            <img src={post.coverImg} alt="Cover" />
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <section className="article-content-section section-padding pt-0">
        <div className="container article-layout">
          
          {/* Share Sidebar (Desktop) */}
          <div className="share-sidebar hidden-mobile">
            <span>Share</span>
            <div className="share-links">
              <a href="#" className="glass"><Link2 size={20}/></a>
              <a href="#" className="glass"><Mail size={20}/></a>
            </div>
          </div>

          {/* Main Content */}
          <div className="article-body">
            <p className="lead-text">
              As we move closer to 2030, the global push for sustainability is no longer a corporate buzzword but a strict legislative requirement. In the packaging manufacturing sector, this shift is forcing unprecedented innovation in material science and production efficiency.
            </p>

            <h2>1. The Rise of Bio-Plastics</h2>
            <p>
              Traditional plastics are rapidly being replaced by Polyhydroxyalkanoates (PHA) and Polylactic Acid (PLA), which are derived from renewable biomass sources. These materials offer similar barrier properties to conventional plastics but decompose naturally without leaving harmful microplastics.
            </p>
            
            <div className="conic-container conic-card mt-4 mb-2" style={{ padding: '4px', borderRadius: '20px' }}>
              <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1200&auto=format&fit=crop" alt="Bioplastics" className="inline-image" style={{ margin: 0, borderRadius: '16px', position: 'relative', zIndex: 2 }} />
            </div>
            <span className="image-caption">Advanced bio-polymer testing in our facility.</span>

            <h2>2. Lightweighting Corrugated Boards</h2>
            <p>
              Through advanced micro-fluting (F and N flutes), manufacturers are producing corrugated boxes that use 15% less paper while offering a 10% increase in structural rigidity (Edge Crush Test). This reduces transit weight, cutting down shipping costs and carbon emissions significantly.
            </p>

            <blockquote>
              "The most sustainable package is one that does exactly what it needs to do with the absolute minimum amount of material."
            </blockquote>

            <h2>3. Circular Economy in Manufacturing</h2>
            <p>
              Zero Liquid Discharge (ZLD) systems and 100% renewable energy adoption are becoming standard. Facilities are now designed to feed their scrap waste directly back into the pulping process, creating a closed-loop manufacturing cycle.
            </p>

            {/* Share Bottom (Mobile) */}
            <div className="share-bottom visible-mobile">
              <span>Share this article:</span>
              <div className="share-links-row">
                <a href="#" className="glass"><Link2 size={20}/></a>
                <a href="#" className="glass"><Mail size={20}/></a>
              </div>
            </div>

            <hr className="article-divider" />

            {/* Comments UI */}
            <div className="comments-section">
              <h3><MessageSquare size={24}/> Comments (2)</h3>
              
              <div className="conic-container conic-card mb-4" style={{ padding: '4px', borderRadius: '24px' }}>
                <div className="comment" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2 }}>
                  <div className="comment-avatar">M</div>
                  <div className="comment-body">
                    <h4>Mark Stevenson <span>• Oct 16, 2025</span></h4>
                    <p>Great read. We've been looking into PHA alternatives for our food packaging lines. The barrier properties have improved massively over the last few years.</p>
                  </div>
                </div>
              </div>
              
              <div className="conic-container conic-card mb-4" style={{ padding: '4px', borderRadius: '24px' }}>
                <div className="comment" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2 }}>
                  <div className="comment-avatar">A</div>
                  <div className="comment-body">
                    <h4>Anna Lopez <span>• Oct 18, 2025</span></h4>
                    <p>Are you currently offering N-flute boxes for retail display packaging?</p>
                  </div>
                </div>
              </div>

              <div className="conic-container conic-card mt-5" style={{ padding: '4px', borderRadius: '24px' }}>
                <div className="leave-comment" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2 }}>
                  <h4>Leave a Comment</h4>
                  <form>
                    <div className="form-group">
                      <textarea rows="4" placeholder="Join the discussion..."></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Post Comment</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="related-articles section-padding bg-alt">
        <div className="container">
          <h2 className="section-title text-center mb-3">Related Articles</h2>
          <div className="related-grid">
            {allPosts.filter(p => p.id !== post.id && p.id !== 100).slice(0, 2).map(item => (
              <div key={item.id} className="conic-container conic-card" style={{ padding: '4px', borderRadius: '24px' }}>
                <div className="related-card" style={{ background: 'var(--card-bg)', borderRadius: '20px', position: 'relative', zIndex: 2, height: '100%', margin: 0 }}>
                  <img src={item.coverImg} alt={item.title} style={{ borderRadius: '20px 20px 0 0' }} />
                  <div className="related-info">
                    <h3><Link to={`/blog/${item.id}`}>{item.title}</Link></h3>
                    <Link to={`/blog/${item.id}`} className="read-more mt-2">Read <ArrowRight size={16}/></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
