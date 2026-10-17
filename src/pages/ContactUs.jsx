import { useState } from 'react';
import {
  Mail,
  FileSpreadsheet,
  Copy,
  ExternalLink,
  Shield,
  Phone,
  HelpCircle,
  Database,
  CheckCircle2,
  Clock
} from 'lucide-react';
import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryForm';
import { CONFIG } from '../config';

export default function ContactUs() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFIG.RECIPIENT_EMAIL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <>
      <SEO
        title="Contact Us & Franchise Enquiry — CourierFranchisesEnquiry"
        description="Submit your courier franchise enquiry online. Direct connection to our verified Google Sheets database for prompt regional onboarding."
      />

      {/* Page Hero */}
      <section className="page-header-section" aria-labelledby="contact-hero-title">
        <div className="container">
          <div className="page-header-content">
            <span className="badge badge-white">Franchise Desk</span>
            <h1 id="contact-hero-title" className="page-header-title">
              Franchise Enquiry &amp; Contact
            </h1>
            <p className="page-header-desc">
              Have questions regarding courier franchise models, territory allocations, or initial investment? Submit your details directly to our database.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="section" aria-labelledby="form-heading">
        <div className="container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="reveal-on-scroll">
              <EnquiryForm
                title="Franchise Application & Enquiry"
                subtitle="Submit your details below. Each response is securely submitted into our live Sheet database."
              />
            </div>

            {/* Sidebar Column */}
            <div className="contact-sidebar">
              {/* Sheet Database Sync Box */}
              <div className="info-box reveal-on-scroll delay-1">
                <h3 className="info-box-title">
                  <Database size={20} style={{ color: 'var(--secondary-orange)' }} />
                  Direct Sheet DB Connection
                </h3>
                <p className="info-box-text">
                  Your enquiry is transmitted securely and organized immediately into our central Google Sheet with columns for <strong>Full Name, Contact, State, City, Pin Code,</strong> and <strong>Franchise Type</strong>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534' }}>
                    <CheckCircle2 size={16} />
                    <span>Real-time Google Sheet Row Append</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534' }}>
                    <CheckCircle2 size={16} />
                    <span>Zero spam or third-party ad sharing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#166534' }}>
                    <Clock size={16} />
                    <span>Response within 24-48 business hours</span>
                  </div>
                </div>
              </div>

              {/* Direct Email Inquiries Box */}
              <div className="info-box reveal-on-scroll delay-2">
                <h3 className="info-box-title">
                  <Mail size={20} style={{ color: 'var(--secondary-orange)' }} />
                  Direct Email Desk
                </h3>
                <p className="info-box-text">
                  Prefer direct corporate communication? You can also email our central franchise operations team directly:
                </p>

                <div className="config-highlight-box">
                  <code>{CONFIG.RECIPIENT_EMAIL}</code>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={handleCopyEmail}
                    aria-label="Copy recipient email address"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <p style={{ fontSize: '0.825rem', color: 'var(--text-light)', margin: 0 }}>
                  Please include your target city, PIN code, and proposed investment capacity for faster evaluation.
                </p>
              </div>

              {/* Privacy Guarantee Box */}
              <div className="info-box reveal-on-scroll delay-3">
                <h3 className="info-box-title">
                  <Shield size={20} style={{ color: 'var(--secondary-orange)' }} />
                  Data Privacy Protection
                </h3>
                <p className="info-box-text" style={{ margin: 0 }}>
                  We respect applicant confidentiality. All submitted contact information is utilized exclusively for courier franchise consultation and verification purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
