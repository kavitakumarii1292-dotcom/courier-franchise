import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Package, Menu, X, ArrowRight, ChevronRight, Mail } from 'lucide-react';
import { CONFIG } from '../config';
import Button from './Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="CourierFranchisesEnquiry Home">
          <div className="brand-icon-wrapper" aria-hidden="true">
            <Package size={22} strokeWidth={2.2} />
          </div>
          <div className="brand-name">
            <span className="brand-name-main">
              Courier<span>Franchises</span>Enquiry
            </span>
            <span className="brand-name-sub">Logistics &amp; Franchise Guide</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-links-list">
            {CONFIG.NAV_LINKS.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? 'active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header-actions">
            <Button
              to="/contact-us"
              variant="primary"
              size="md"
              icon={ArrowRight}
              id="header-enquire-btn"
            >
              Enquire Now
            </Button>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          id="mobile-nav-toggle-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="mobile-nav-content"
          onClick={e => e.stopPropagation()}
        >
          <div className="mobile-nav-header">
            <div className="mobile-nav-title">Menu Navigation</div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {CONFIG.NAV_LINKS.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} className="mobile-nav-chevron" />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer-info">
            <div className="mobile-nav-contact-item">
              <Mail size={16} />
              <span>{CONFIG.RECIPIENT_EMAIL}</span>
            </div>
          </div>

          <div className="mobile-nav-cta">
            <Button
              to="/contact-us"
              variant="primary"
              size="lg"
              block
              icon={ArrowRight}
              onClick={() => setMobileMenuOpen(false)}
              id="mobile-enquire-cta-btn"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
