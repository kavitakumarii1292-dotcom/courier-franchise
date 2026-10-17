import { Link } from 'react-router-dom';
import { ShieldCheck, AlertCircle, Mail, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { CONFIG } from '../config';

export default function PrivacyPolicy() {
  const lastUpdated = 'October 2026';

  return (
    <>
      <SEO
        title="Privacy Policy — Transparent Data Practices"
        description="Read the privacy policy of CourierFranchisesEnquiry. Learn about our frontend-only architecture, zero database storage, and email communications."
      />

      {/* Page Hero */}
      <section className="page-header-section" aria-labelledby="privacy-hero-title">
        <div className="container">
          <div className="page-header-content">
            <span className="badge badge-white">Legal &amp; Privacy</span>
            <h1 id="privacy-hero-title" className="page-header-title">
              Privacy Policy
            </h1>
            <p className="page-header-desc">
              Transparency regarding how information is handled when you visit CourierFranchisesEnquiry or reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section" aria-labelledby="policy-document">
        <div className="container">
          <div className="legal-card" id="policy-document">
            {/* Owner Configuration Note */}
            <div
              style={{
                backgroundColor: '#FEF3C7',
                border: '1px solid #FCD34D',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginBottom: '2.5rem',
              }}
              role="note"
            >
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <AlertCircle size={22} style={{ color: '#D97706', flexShrink: 0, marginTop: '0.15rem' }} />
                <div style={{ fontSize: '0.875rem', color: '#92400E', lineHeight: '1.6' }}>
                  <strong>Notice to Website Administrator / Owner:</strong> Review and verify the contact email address (<code>{CONFIG.RECIPIENT_EMAIL}</code>) and your designated legal entity details prior to live public production deployment.
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
              <strong>Effective Date:</strong> {lastUpdated}
            </p>

            {/* 1. Introduction */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 1</span>
              <h2>1. Introduction</h2>
              <p>
                Welcome to <strong>{CONFIG.SITE_NAME}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). This website is an independent informational platform intended to help visitors explore courier and express logistics franchise opportunities.
              </p>
              <p>
                We value your privacy and believe in clear, honest disclosures. This Privacy Policy describes how technical and communicative information is handled when you access our website or contact us.
              </p>
            </article>

            {/* 2. Information Entered into Contact Forms */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 2</span>
              <h2>2. Information Entered into Contact Forms</h2>
              <p>
                When you fill out the contact form on our website, you may provide details such as your full name, email address, optional telephone number, subject, and enquiry message.
              </p>
              <p>
                This form is powered entirely on the frontend. When you submit the form, our website does not send the data to a private database or backend server. Instead, it generates a pre-formatted <code>mailto:</code> link that transfers the information into your own email software (such as Apple Mail, Microsoft Outlook, or your browser’s default webmail provider).
              </p>
            </article>

            {/* 3. How Information May Be Used via Email */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 3</span>
              <h2>3. How Information Is Handled When You Contact Us by Email</h2>
              <p>
                If you choose to transmit your email to our designated contact address (<code>{CONFIG.RECIPIENT_EMAIL}</code>), we will receive the information you included in your email.
              </p>
              <p>
                We use this information exclusively to:
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: '#4A5568', fontSize: '0.95rem' }}>
                <li>Read and understand your questions or franchise enquiry.</li>
                <li>Respond directly to your email with relevant informational guidance.</li>
                <li>Maintain a normal email correspondence history as necessary for customer support.</li>
              </ul>
            </article>

            {/* 4. No Database Storage by This Website */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 4</span>
              <h2>4. No Database Storage by This Website</h2>
              <p>
                <strong>{CONFIG.SITE_NAME} does not maintain an application database.</strong> We do not operate MySQL, PostgreSQL, MongoDB, Supabase, Firebase, or any cloud user database.
              </p>
              <p>
                We do not save your contact form submissions to browser local storage (<code>localStorage</code>), session storage (<code>sessionStorage</code>), or persistent tracking cookies.
              </p>
            </article>

            {/* 5. No Sale or Commercial Rental of Personal Information */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 5</span>
              <h2>5. No Sale of Personal Information</h2>
              <p>
                We do not sell, rent, trade, or monetize your contact details, email addresses, or phone numbers to third-party marketing brokers, advertisers, or lead generators.
              </p>
            </article>

            {/* 6. Cookies and Analytics */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 6</span>
              <h2>6. Cookies and Technical Analytics</h2>
              <p>
                Our core website does not use tracking cookies or advertising pixels by default.
              </p>
              <p>
                However, please note that when this website is hosted on modern cloud deployment platforms (such as Vercel, Netlify, Cloudflare, or GitHub Pages), the hosting provider may automatically log standard technical data in server logs (such as your IP address, browser user-agent, operating system, and request timestamps) for network security, DDoS mitigation, and server performance diagnostics.
              </p>
            </article>

            {/* 7. External Website Links */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 7</span>
              <h2>7. External Website Links</h2>
              <p>
                Our website may include links to third-party websites, such as official courier company homepages or logistics industry resources. We have no control over the privacy practices, content, or cookie policies of those external websites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </article>

            {/* 8. Data Security Limitations */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 8</span>
              <h2>8. Data Security &amp; Transmission Limitations</h2>
              <p>
                While we design our frontend interface to operate securely without storing user records, no electronic transmission over the Internet or email system is guaranteed to be 100% impenetrable. We advise visitors not to include highly confidential personal credentials (such as passwords, bank account numbers, or national identity card scans) in standard email enquiries.
              </p>
            </article>

            {/* 9. Children's Privacy */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 9</span>
              <h2>9. Children’s Privacy</h2>
              <p>
                {CONFIG.SITE_NAME} is intended for adults seeking commercial franchise information and business opportunities. We do not knowingly collect personal information from individuals under 18 years of age.
              </p>
            </article>

            {/* 10. Policy Updates */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 10</span>
              <h2>10. Updates to This Privacy Policy</h2>
              <p>
                We may revise this Privacy Policy periodically to reflect changes in our informational offerings or technical infrastructure. Any changes will be posted on this page with an updated &ldquo;Effective Date&rdquo;.
              </p>
            </article>

            {/* 11. Contact Information */}
            <article className="legal-section">
              <span className="legal-badge-pill">Section 11</span>
              <h2>11. Privacy Contact Information</h2>
              <p>
                If you have questions, comments, or concerns regarding this Privacy Policy or how your email communications are handled, you can reach out directly to:
              </p>
              <div
                style={{
                  background: 'var(--light-grey)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  marginTop: '1rem',
                }}
              >
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: '700', color: 'var(--primary-navy)' }}>
                  {CONFIG.SITE_NAME} Privacy Inquiries
                </p>
                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-muted)' }}>
                  Email:{' '}
                  <a href={`mailto:${CONFIG.RECIPIENT_EMAIL}`} style={{ color: 'var(--secondary-orange)', fontWeight: '600' }}>
                    {CONFIG.RECIPIENT_EMAIL}
                  </a>
                </p>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)' }}>
                  (Website administrators: Please update this email in <code>src/config.js</code> if you use a dedicated privacy address).
                </p>
              </div>
            </article>

            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Button to="/" variant="navy" size="md">
                Return to Homepage
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
