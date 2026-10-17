import { Link } from 'react-router-dom';
import {
  Compass,
  Eye,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Mail,
  Network
} from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

export default function AboutUs() {
  const approaches = [
    {
      icon: Eye,
      title: 'Clarity Over Complexity',
      description:
        'The parcel delivery ecosystem is filled with technical terminology such as linehauls, last-mile hubs, booking margins, and territorial zoning. We explain these concepts in simple, transparent language.',
    },
    {
      icon: Compass,
      title: 'Accessible & Actionable Information',
      description:
        'We believe anyone interested in logistics entrepreneurship should have open access to foundational operational structures before investing capital or signing commitments.',
    },
    {
      icon: ShieldCheck,
      title: 'Informed Decision-Making',
      description:
        'Starting a business involves real financial commitment and operational responsibilities. We encourage prospective partners to carefully evaluate terms, verify details, and assess personal suitability.',
    },
  ];

  const exploreItems = [
    {
      icon: BookOpen,
      title: 'Common Courier Franchise Models',
      description:
        'Understand how retail booking counters, delivery contractor operations, and distribution hubs differ in scope, staffing, premises, and daily workflows.',
    },
    {
      icon: Network,
      title: 'Operating Logistics Mechanisms',
      description:
        'Learn how parcels move through modern courier networks from customer drop-off to regional dispatch, sorting, and final customer doorstep delivery.',
    },
    {
      icon: HelpCircle,
      title: 'Practical Questions to Ask Franchisors',
      description:
        'Discover the key operational questions you should prepare when speaking with official business development teams of courier companies.',
    },
    {
      icon: Mail,
      title: 'Direct Enquiry Facilitation',
      description:
        'Connect directly with our team if you have general questions or want to discuss the information outlined across our platform.',
    },
  ];

  return (
    <>
      <SEO
        title="About CourierFranchisesEnquiry — Informational Guide & Purpose"
        description="Learn about the informational purpose, mission, and transparent approach of CourierFranchisesEnquiry in helping prospective courier franchisees."
      />

      {/* Page Hero */}
      <section className="page-header-section" aria-labelledby="about-hero-title">
        <div className="container">
          <div className="page-header-content">
            <span className="badge badge-white">About Our Resource</span>
            <h1 id="about-hero-title" className="page-header-title">
              About CourierFranchisesEnquiry
            </h1>
            <p className="page-header-desc">
              An independent, informational website created to guide aspiring entrepreneurs through the fundamentals of courier and express logistics franchise opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose & Mission Section */}
      <section className="section" aria-labelledby="mission-title">
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <SectionTitle
              badge="Our Purpose"
              title="Why CourierFranchisesEnquiry Exists"
              subtitle="Helping you make well-informed decisions when researching courier delivery businesses."
            />

            <div style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--body-text)' }}>
              <p>
                The courier and express logistics industry is experiencing rapid growth, fueled by ecommerce adoption, business-to-business commerce, and quick-delivery consumer demand. For individuals seeking to enter this sector, courier franchise models offer a proven pathway to collaborate with established networks.
              </p>
              <p>
                However, prospective franchisees often encounter fragmented information, unrealistic profit promises, or ambiguous requirements. <strong>CourierFranchisesEnquiry</strong> was established as an objective informational resource to cut through the noise.
              </p>
              <p>
                Our primary goal is to help visitors understand the realistic expectations, operational obligations, space and vehicle factors, and evaluation procedures involved in running a courier franchise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section section-grey" aria-labelledby="approach-title">
        <div className="container">
          <SectionTitle
            badge="Guiding Principles"
            title="Our Approach: Clarity, Accessibility &amp; Diligence"
            subtitle="The three pillars that guide all educational content published on CourierFranchisesEnquiry."
          />

          <div className="cards-grid-3">
            {approaches.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={`card reveal-on-scroll delay-${(idx % 3) + 1}`}>
                  <div className="card-icon" aria-hidden="true">
                    <IconComp size={24} />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Can Explore */}
      <section className="section" aria-labelledby="explore-title">
        <div className="container">
          <SectionTitle
            badge="Content Overview"
            title="What You Can Explore On This Website"
            subtitle="Explore our structured modules to gain a comprehensive understanding of the delivery industry."
          />

          <div className="feature-list-grid">
            {exploreItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className={`feature-box reveal-on-scroll delay-${(idx % 2) + 1}`}>
                  <div className="feature-icon-wrapper" aria-hidden="true">
                    <ItemIcon size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment to Transparency */}
      <section className="section section-grey" aria-labelledby="transparency-title">
        <div className="container">
          <div
            className="reveal-on-scroll"
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <ShieldCheck size={28} style={{ color: 'var(--secondary-orange)' }} />
              <h2 id="transparency-title" style={{ fontSize: '1.5rem', color: 'var(--primary-navy)' }}>
                Our Commitment to Transparency
              </h2>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--body-text)', marginBottom: '1.25rem' }}>
              We believe in honest, grounded communication. To maintain strict integrity:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              <li style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--secondary-orange)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong>No Fabricated Statistics:</strong> We do not publish invented earnings figures, fake client counts, or fabricated corporate histories.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--secondary-orange)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong>No False Partnerships:</strong> We do not impersonate courier networks or claim exclusive affiliations unless verified through written authorisation.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--secondary-orange)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span>
                  <strong>No Guaranteed Approvals:</strong> We clearly communicate that franchise approvals, territories, and commercial contracts remain strictly at the discretion of individual courier companies.
                </span>
              </li>
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
              <Button to="/franchise" variant="primary" size="md" icon={ArrowRight}>
                Explore Franchise Models
              </Button>
              <Button to="/contact-us" variant="outline" size="md">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
