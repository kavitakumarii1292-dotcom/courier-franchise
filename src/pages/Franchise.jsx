import { Link } from 'react-router-dom';
import {
  Store,
  Truck,
  Building2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  ClipboardList,
  Layers,
  MapPin,
  FileCheck2,
  PhoneCall,
  FileText
} from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

export default function Franchise() {
  const models = [
    {
      id: 'booking-centre',
      icon: Store,
      badge: 'Retail Counter Model',
      title: 'Courier Booking Centre',
      overview:
        'A retail storefront or counter dedicated to consumer and small-business package booking, walk-in inquiries, and primary parcel intake.',
      details: [
        'Customer booking, weighing, and physical parcel acceptance',
        'Direct local customer service and shipping status queries',
        'Basic document and parcel labeling with barcode scanning',
        'First-mile handoff to scheduled route pickup vehicles',
      ],
      requirementsNotes:
        'Space requirements typically range from a compact counter in a commercial market up to a full storefront. Space, equipment, and operating hours depend on the partner courier company.',
    },
    {
      id: 'delivery-partner',
      icon: Truck,
      badge: 'Territory Logistics Model',
      title: 'Delivery Partner',
      overview:
        'An operational model focused on managing last-mile deliveries and daily pickups across dedicated residential or commercial pin codes.',
      details: [
        'Organizing day-to-day route dispatches and parcel runs',
        'Customer delivery coordination, address verification, and POD (Proof of Delivery)',
        'Managing courier drivers, delivery riders, or contracted associates',
        'Maintaining delivery timeline metrics and service quality standards',
      ],
      requirementsNotes:
        'Vehicle fleet types (two-wheelers, vans, light commercial vehicles), staffing numbers, mobile equipment, and delivery performance agreements are determined by each courier network.',
    },
    {
      id: 'distribution-hub',
      icon: Building2,
      badge: 'Regional Facility Model',
      title: 'Distribution or Delivery Hub',
      overview:
        'A larger operational facility serving as the regional nexus for parcel sorting, transit transfers, and coordinating multiple delivery routes.',
      details: [
        'High-volume package intake, rapid barcode scanning, and zone sorting',
        'Transit coordination between feeder vehicles and local delivery teams',
        'Supervision of warehouse personnel, security protocols, and shift scheduling',
        'Handling returned parcels, undelivered consignments, and linehaul transfers',
      ],
      requirementsNotes:
        'Requires appropriate warehouse or commercial zoning, loading dock/unloading access, conveyor or sorting equipment, and security installations as specified by the courier brand.',
    },
  ];

  const processSteps = [
    {
      step: 'Step 1',
      icon: Layers,
      title: 'Research Available Companies',
      description:
        'Explore various national, regional, and express courier brands active in your geographic territory. Compare network footprints, reputation, and operational presence.',
    },
    {
      step: 'Step 2',
      icon: MapPin,
      title: 'Review Eligibility & Location Availability',
      description:
        'Determine whether franchisors are actively looking to expand in your specific postal codes or town, and evaluate your eligibility against their prerequisites.',
    },
    {
      step: 'Step 3',
      icon: FileCheck2,
      title: 'Understand Commercial Terms & Responsibilities',
      description:
        'Examine expected operating hours, security deposit requirements, equipment guidelines, commission or fee structures, and daily service obligations.',
    },
    {
      step: 'Step 4',
      icon: PhoneCall,
      title: 'Contact the Relevant Company Directly',
      description:
        'Submit official application forms through the respective company’s authorized franchise department or regional business development office.',
    },
    {
      step: 'Step 5',
      icon: FileText,
      title: 'Verify Terms & Documentation',
      description:
        'Carefully review franchise agreements, operational manuals, and legal documents with qualified commercial or legal advisors before making any financial commitments.',
    },
  ];

  return (
    <>
      <SEO
        title="Explore Courier Franchise Opportunities & Business Models"
        description="Detailed guide to courier booking centres, delivery partner operations, distribution hubs, requirements, and application steps."
      />

      {/* Page Hero */}
      <section className="page-header-section" aria-labelledby="franchise-hero-title">
        <div className="container">
          <div className="page-header-content">
            <span className="badge badge-white">Franchise Guide</span>
            <h1 id="franchise-hero-title" className="page-header-title">
              Explore Courier Franchise Opportunities
            </h1>
            <p className="page-header-desc">
              Understand the different operational models available in the courier and logistics sector, key requirements to consider, and the structured evaluation process before you apply.
            </p>
          </div>
        </div>
      </section>

      {/* Franchise Models Section */}
      <section className="section" aria-labelledby="models-section-title">
        <div className="container">
          <SectionTitle
            badge="Three Core Formats"
            title="Franchise Operating Models"
            subtitle="Logistics companies typically structure franchise partnerships into three distinct operational tiers based on territory scope and business functions."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {models.map((model) => {
              const IconComponent = model.icon;
              return (
                <div
                  key={model.id}
                  id={model.id}
                  className="card reveal-on-scroll"
                  style={{
                    padding: '2.5rem',
                    borderLeft: '5px solid var(--secondary-orange)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <div className="card-icon" style={{ margin: 0 }}>
                      <IconComponent size={26} />
                    </div>
                    <div>
                      <span className="badge badge-navy" style={{ marginBottom: '0.25rem' }}>
                        {model.badge}
                      </span>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-navy)' }}>
                        {model.title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ fontSize: '1.05rem', color: 'var(--body-text)', marginBottom: '1.5rem' }}>
                    {model.overview}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'var(--light-grey)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--primary-navy)', marginBottom: '0.75rem', fontWeight: '700' }}>
                        Key Operational Responsibilities:
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {model.details.map((detail, dIdx) => (
                          <li key={dIdx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--secondary-orange)', flexShrink: 0, marginTop: '0.15rem' }} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ background: '#F8FAFC', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
                      <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--primary-navy)', marginBottom: '0.75rem', fontWeight: '700' }}>
                        Space &amp; Operating Factors:
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        {model.requirementsNotes}
                      </p>
                      <div style={{ marginTop: '1rem' }}>
                        <Button
                          to="/contact-us"
                          variant="outline"
                          size="sm"
                          icon={ArrowRight}
                        >
                          Enquire About This Model
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment & Requirements Section */}
      <section className="section section-grey" aria-labelledby="investment-heading">
        <div className="container">
          <SectionTitle
            badge="Financial &amp; Practical Factors"
            title="Investment &amp; Operational Requirements"
            subtitle="Understanding how investment requirements are calculated across different courier networks."
          />

          <div style={{ maxWidth: '880px', margin: '0 auto', background: 'var(--white)', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--body-text)', marginBottom: '1.5rem' }}>
              Unlike retail franchises with standardized price menus, <strong>courier franchise capital requirements vary significantly</strong> based on several commercial parameters. Reliable figures cannot be stated without assessing the specific company, model, and locality.
            </p>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
              Primary Cost Factors to Budget For:
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', background: 'var(--light-grey)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>1. Commercial Premises</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Rental advances, deposit, lease agreements, and interior counter or storage fit-out.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--light-grey)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>2. Network Security Deposits</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Refundable security deposits or franchise fees specified by the courier network.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--light-grey)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>3. IT &amp; Hardware Tools</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Barcode scanners, weighing scales, label printers, internet, and tracking computers.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--light-grey)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>4. Transportation Assets</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Dedicated two-wheelers, delivery vans, fuel costs, and vehicle insurance policies.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--light-grey)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>5. Staffing &amp; Payroll</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Salaries for delivery personnel, counter booking executives, and parcel handlers.
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'var(--light-grey)', borderRadius: 'var(--radius-md)' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>6. Operating Working Capital</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                  Reserve funds to cover daily operations and cash flow before steady commission receipts.
                </p>
              </div>
            </div>

            <div className="disclaimer-banner" role="note" style={{ margin: 0 }}>
              <AlertTriangle size={22} className="disclaimer-banner-icon" />
              <p className="disclaimer-banner-text">
                <strong>No Fixed Financial Guarantee:</strong> We do not publish invented fixed fee amounts, minimum income promises, or guaranteed ROI projections. Every courier franchisor provides their official fee structure directly during the formal evaluation stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Application Process Section */}
      <section className="section" id="application-process" aria-labelledby="process-heading">
        <div className="container">
          <SectionTitle
            badge="Recommended Steps"
            title="The Franchise Evaluation &amp; Application Process"
            subtitle="Follow this structured 5-step approach when exploring and pursuing a courier franchise opportunity."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '850px', margin: '0 auto' }}>
            {processSteps.map((item, index) => {
              const StepIcon = item.icon;
              return (
                <div
                  key={index}
                  className="reveal-on-scroll"
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    background: 'var(--white)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem 1.75rem',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--primary-navy)',
                      color: 'var(--secondary-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <StepIcon size={22} />
                  </div>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: 'var(--secondary-orange)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {item.step}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-navy)', marginBottom: '0.4rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Disclaimer Section */}
      <section className="section section-grey" aria-labelledby="disclaimer-heading">
        <div className="container">
          <div
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              background: 'var(--white)',
              border: '2px solid #E2E8F0',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <ShieldAlert size={28} style={{ color: 'var(--secondary-orange)' }} />
              <h2 id="disclaimer-heading" style={{ fontSize: '1.5rem', color: 'var(--primary-navy)' }}>
                Important Informational Disclaimer
              </h2>
            </div>

            <p style={{ fontSize: '0.975rem', lineHeight: '1.7', color: 'var(--body-text)', marginBottom: '1rem' }}>
              <strong>CourierFranchisesEnquiry is an informational resource.</strong> We provide educational material, structural explanations, and contact facilitation for prospective courier franchisees. Unless specific authorized agency relationships are independently confirmed in writing, this website is not an official franchise allotment authority.
            </p>

            <p style={{ fontSize: '0.975rem', lineHeight: '1.7', color: 'var(--body-text)', marginBottom: '2rem' }}>
              We do not guarantee franchise allotment, territorial reservation, application approval, revenue generation, or specific business performance. All prospective operators must perform their own commercial due diligence and deal directly with authorized representatives of their selected courier company.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Button
                to="/contact-us"
                variant="primary"
                size="md"
                icon={ArrowRight}
                id="franchise-disclaimer-contact-cta"
              >
                Contact Us for General Questions
              </Button>
              <Button
                to="/about-us"
                variant="outline"
                size="md"
                id="franchise-disclaimer-about-cta"
              >
                Learn More About Our Website
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
