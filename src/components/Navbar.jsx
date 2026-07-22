import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package, Menu, X, Sun, Moon, Phone, Mail, FileText, Clock, Home, Info, Box, Factory, Building, Award, Image as ImageIcon, BookOpen, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={13} color="#3B82F6" /> },
    { name: 'About Us', path: '/about', icon: <Info size={13} color="#10B981" /> },
    { name: 'Products', path: '/products', icon: <Box size={13} color="#F59E0B" /> },
    { name: 'Industries', path: '/industries', icon: <Factory size={13} color="#6366F1" /> },
    { name: 'Infrastructure', path: '/infrastructure', icon: <Building size={13} color="#8B5CF6" /> },
    { name: 'Quality', path: '/quality', icon: <Award size={13} color="#EC4899" /> },
    { name: 'Gallery', path: '/gallery', icon: <ImageIcon size={13} color="#14B8A6" /> },
    { name: 'Blogs', path: '/blog', icon: <BookOpen size={13} color="#F43F5E" /> },
    { name: 'Contact', path: '/contact', icon: <PhoneCall size={13} color="#0EA5E9" /> }
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        
        {/* Brand Logo */}
        <Link to="/" className="nav-brand">
          <img src="images/logo.jpg" alt="GN Packaging" style={{ height: '65px', width: '65px', objectFit: 'cover', borderRadius: '50%' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <a href="tel:+919324760876" className="btn-call desktop-only" style={{ textDecoration: 'none' }}>
            <Phone size={16} /> Call
          </a>
          <Link to="/quote" className="btn-quote desktop-only" style={{ textDecoration: 'none' }}>
            <FileText size={16} /> Get Quote
          </Link>
          
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      <div className={`mobile-menu glass ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <Link to="/quote" className="btn btn-primary w-100 mt-2">Get Quote</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
