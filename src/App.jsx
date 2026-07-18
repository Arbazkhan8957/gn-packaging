import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { PhoneCall, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Industries from './pages/Industries'
import Infrastructure from './pages/Infrastructure'
import Quality from './pages/Quality'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import GetQuote from './pages/GetQuote'
import Contact from './pages/Contact'
import './index.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme ? savedTheme : 'light';
  });
  const [showWaMenu, setShowWaMenu] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      
      // WhatsApp Global Intercept (Only for links without pre-filled text)
      if (href && href.startsWith('https://wa.me/') && !href.includes('text=')) {
        e.preventDefault();
        
        let userIntent = "I would like to inquire about your packaging solutions and get a custom quote.";
        const path = window.location.pathname;

        if (path.includes('/products')) {
          userIntent = "I am interested in purchasing your corrugated boxes and packaging materials. Please provide a bulk quote.";
        } else if (path.includes('/blog') || path.includes('/industries')) {
          userIntent = "I was reading about your packaging expertise on your website and would like to get some technical information for my business.";
        }
        
        const prefilledText = encodeURIComponent(`Hello GN Packaging! ${userIntent}`);
        window.open(`${href}?text=${prefilledText}`, '_blank');
      }
      
      // Phone Call Global Intercept (Text-to-Speech)
      if (href && href.startsWith('tel:')) {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          
          let speechText = "Welcome to G N Packaging! We provide strong packaging for stronger business. Please wait while we connect your call.";
          const path = window.location.pathname;
          
          if (path.includes('/products')) {
            speechText = "Welcome to G N Packaging! Connecting you to our sales team for product pricing and bulk orders.";
          } else if (path.includes('/blog') || path.includes('/industries')) {
            speechText = "Welcome to G N Packaging! Connecting you to our technical experts for packaging information.";
          }
          
          const msg = new SpeechSynthesisUtterance(speechText);
          msg.lang = 'en-IN'; 
          msg.rate = 1.0;
          msg.pitch = 1.1;
          
          window.speechSynthesis.speak(msg);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Global Floating Contact Icons */}
        <div className="floating-contacts">
          
          {showWaMenu && (
            <div className="wa-popup glass" style={{ position: 'absolute', bottom: '140px', right: '0', background: 'var(--card-bg)', padding: '1rem', borderRadius: '16px', width: '250px', display: 'flex', flexDirection: 'column', gap: '0.8rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>How can we help you?</h4>
              <a href="https://wa.me/919224622911?text=Hello GN Packaging! I am interested in purchasing your packaging materials and would like a quote." target="_blank" rel="noreferrer" onClick={() => setShowWaMenu(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.9rem', padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }}>
                🛍️ I want to Buy (Sales)
              </a>
              <a href="https://wa.me/919224622911?text=Hello GN Packaging! I am looking for some information and expert advice regarding packaging solutions." target="_blank" rel="noreferrer" onClick={() => setShowWaMenu(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.9rem', padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }}>
                📚 I need Information
              </a>
            </div>
          )}

          <button onClick={() => setShowWaMenu(!showWaMenu)} className="float-btn whatsapp" title="Chat on WhatsApp" style={{ border: 'none', cursor: 'pointer' }}>
            <MessageCircle size={28} />
          </button>
          
          <a href="tel:+919224622911" className="float-btn phone" title="Call Us">
            <PhoneCall size={28} />
          </a>
        </div>
      </div>
    </Router>
  )
}

export default App
