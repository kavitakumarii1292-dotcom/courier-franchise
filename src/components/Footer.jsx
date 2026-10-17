import { Link } from 'react-router-dom';
import { Package, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <Package size={22} className="footer-brand-icon" />
              <span>Courier<span>Franchises</span>Enquiry</span>
            </div>
            <p className="footer-about-text">
              An independent informational resource dedicated to helping aspiring entrepreneurs understand courier franchise models, general operational requirements, and enquiry processes.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {CONFIG.FOOTER_LINKS.quickLinks.map(link => (
                <li key={link.path} className="footer-link-item">
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Franchise Information Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Franchise Models</h4>
            <ul className="footer-links-list">
              {CONFIG.FOOTER_LINKS.franchiseModels.map(link => (
                <li key={link.label} className="footer-link-item">
                  <Link to={link.path} className="footer-link">
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Informational Disclaimer Box */}
        <div className="footer-disclaimer-card" role="note" aria-label="Informational Disclaimer">
          <p>
            <strong>Informational Disclaimer:</strong> {CONFIG.DISCLAIMER_TEXT}
          </p>
        </div>

        {/* Footer Bottom Row */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {CONFIG.SITE_NAME}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link to="/contact-us" className="footer-bottom-link">
              Contact &amp; Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
