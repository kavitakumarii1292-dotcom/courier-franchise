import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Compass,
  GraduationCap,
  Network,
  Search,
  FileCheck,
  Send,
  MessageSquare,
  Store,
  Truck,
  Building2,
  FileText,
  Navigation,
  HelpCircle,
  MailCheck,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Headphones,
  MapPin,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import FAQAccordion from '../components/FAQAccordion';
import EnquiryForm from '../components/EnquiryForm';

export default function Home() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Business Opportunity',
      description:
        'Learn about courier and express logistics market structures, rising eCommerce delivery demands, and how franchise operations fit into modern supply chains.',
    },
    {
      icon: Compass,
      title: 'Operational Guidance',
      description:
        'Understand daily logistics workflows, standard pickup and delivery procedures, package sorting protocols, and typical customer service responsibilities.',
    },
    {
      icon: GraduationCap,
      title: 'Training & Support Information',
      description:
        'Discover how franchise systems typically provide operational software onboarding, route planning assistance, and staff operational manuals.',
    },
    {
      icon: Network,
      title: 'Delivery Network Opportunities',
      description:
        'Explore how local franchisees connect to nationwide or regional logistics networks, handling first-mile bookings or last-mile consumer deliveries.',
    },
  ];

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Explore the Opportunity',
      text: 'Review general courier franchise models to identify which operational setup aligns with your commercial goals, interests, and capacity.',
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Understand the Requirements',
      text: 'Assess typical space, staffing, equipment, legal licensing, and capital needs before engaging with potential courier network providers.',
    },
    {
      number: '03',
      icon: Send,
      title: 'Submit an Enquiry',
      text: 'Reach out to express your interest and ask general questions regarding business models, operational realities, and next steps.',
    },
    {
      number: '04',
      icon: MessageSquare,
      title: 'Discuss the Next Steps',
      text: 'Engage with official representatives of courier providers in your target location to verify franchise availability and terms.',
    },
  ];

  const franchiseModels = [
    {
      id: 'booking-centre',
      badge: 'Retail Footprint',
      title: 'Courier Booking Centre',
      summary:
        'A retail-oriented facility focused on over-the-counter parcel acceptance, retail weighing, booking documentation, and customer service.',
      features: [
        'Customer parcel booking & intake',
        'Weighing, labeling, and preliminary packaging',
        'Local walk-in customer support',
        'Compact commercial retail space requirement',
      ],
      franchiseType: 'Courier Booking Store (60-150 Sq. Ft)',
      link: '#enquiry',
    },
    {
      id: 'delivery-partner',
      badge: 'Route Operations',
      title: 'Delivery Partner',
      summary:
        'An operations-driven model responsible for last-mile parcel deliveries and daily order pickups across an assigned geographic pin code or zone.',
      features: [
        'Assigned territory parcel dispatches',
        'Route planning and vehicle fleet allocation',
        'Real-time delivery status updates',
        'Dedicated drivers or delivery associates',
      ],
      franchiseType: 'Parcel Delivery Center (200-500 Sq. Ft)',
      link: '#enquiry',
    },
    {
      id: 'distribution-hub',
      badge: 'Regional Logistics',
      title: 'Distribution or Delivery Hub',
      summary:
        'A larger logistics facility coordinating parcel sorting, transit transfers, and regional dispatch between local booking centres and delivery fleets.',
      features: [
        'High-volume package sorting and consolidation',
        'Hub-and-spoke transfer management',
        'Supervision of delivery teams and vehicles',
        'Warehouse or light-industrial space setup',
      ],
      franchiseType: 'District Dealership Hub (800-1500 Sq. Ft)',
      link: '#enquiry',
    },
  ];

  const whyChooseUs = [
    {
      icon: FileText,
      title: 'Clear Informational Content',
      description:
        'We break down complex logistics jargon into practical, transparent information so you can evaluate opportunities with realistic expectations.',
    },
    {
      icon: Navigation,
      title: 'Easy Navigation',
      description:
        'Our structured layout guides you seamlessly through business models, prerequisite requirements, application steps, and enquiry channels.',
    },
    {
      icon: HelpCircle,
      title: 'Helpful Franchise Information',
      description:
        'Learn about typical space, staffing, and equipment components without misleading commercial hype or unrealistic profit guarantees.',
    },
    {
      icon: MailCheck,
      title: 'Simple Enquiry Options',
      description:
        'Connect directly through a direct email workflow to ask questions or discuss information relevant to your franchise research.',
    },
  ];

  const faqs = [
    {
      id: 'what-is-courier-franchise',
      question: 'What is a courier franchise?',
      answer:
        'A courier franchise is a commercial arrangement where an individual or business partners with an established courier or logistics company to operate parcel booking, delivery, or hub services in a designated territory using the franchisor’s operational network, brand, and tracking systems.',
    },
    {
      id: 'investment-required',
      question: 'What investment may be required?',
      answer:
        'Investment requirements vary widely depending on the chosen business model (booking centre vs. full distribution hub), geographic location, premises lease costs, commercial vehicle requirements, IT hardware, and operating working capital. Specific figures are set by each courier company upon direct application.',
    },
    {
      id: 'prior-experience',
      question: 'Is prior experience necessary?',
      answer:
        'Prior logistics experience is helpful but not always strictly required for retail booking counters. However, basic business management abilities, customer service skills, and familiarity with regional geography are typically essential for operational success.',
    },
    {
      id: 'explore-opportunities',
      question: 'How can I explore available opportunities?',
      answer:
        'You can begin by reviewing our franchise guide to identify suitable models, assessing your local market demand, and submitting an enquiry to learn more. You should then contact relevant courier network providers directly to verify territory availability.',
    },
    {
      id: 'location-availability',
      question: 'Does every location have franchise availability?',
      answer:
        'No. Courier networks allocate territories based on existing coverage, parcel volume densities, and regional expansion strategies. Availability in any specific city, postal code, or sector must always be confirmed directly with the respective courier company.',
    },
    {
      id: 'contact-website-team',
      question: 'How can I contact the website team?',
      answer:
        'You can reach our team at any time using our Contact Us page. Filling out the enquiry form will open a prefilled email draft in your default email client addressed to our enquiries team.',
    },
  ];

  const handleApplyNow = (modelFranchiseType) => {
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const select = document.getElementById('franchiseType');
        if (select && modelFranchiseType) {
          select.value = modelFranchiseType;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const nameInput = document.getElementById('fullName');
        if (nameInput) {
          nameInput.focus();
        }
      }, 400);
    }
  };

  return (
    <>
      <SEO
        title="Start Your Courier Franchise Business Today"
        description="Explore courier franchise opportunities and learn about the support, planning, and requirements involved in starting your own delivery business."
      />

      {/* 1. Hero Section with Scrolling Background Banner */}
      <section className="hero-section" aria-labelledby="hero-heading">
        {/* Animated Background Scroller */}
        <div className="hero-bg-container" aria-hidden="true">
          <div className="hero-bg-scroller"></div>
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-container-content">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="badge badge-white">
                Logistics Franchise Information
              </span>
              <h1 id="hero-heading" className="hero-title">
                Start Your <span>Courier Franchise</span> Business Today!
              </h1>
              <p className="hero-description">
                Partner with verified delivery networks and grow with India&apos;s trusted express logistics ecosystem.
              </p>
              
              <div className="hero-buttons">
                <Button
                  to="/franchise"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  id="hero-explore-cta"
                >
                  Explore Franchise Opportunities
                </Button>
                <Button
                  href="#enquiry"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline-white"
                  size="lg"
                  id="hero-contact-cta"
                >
                  Apply Online
                </Button>
              </div>

              {/* Trust Badges matching promotional hero banner */}
              <div className="hero-trust-badges">
                <div className="trust-badge-item">
                  <div className="trust-badge-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="trust-badge-text">
                    <strong className="trust-badge-title">Trusted</strong>
                    <span className="trust-badge-sub">Brand</span>
                  </div>
                </div>

                <div className="trust-badge-item">
                  <div className="trust-badge-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="trust-badge-text">
                    <strong className="trust-badge-title">High</strong>
                    <span className="trust-badge-sub">Returns</span>
                  </div>
                </div>

                <div className="trust-badge-item">
                  <div className="trust-badge-icon">
                    <Headphones size={20} />
                  </div>
                  <div className="trust-badge-text">
                    <strong className="trust-badge-title">Complete</strong>
                    <span className="trust-badge-sub">Support</span>
                  </div>
                </div>

                <div className="trust-badge-item">
                  <div className="trust-badge-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="trust-badge-text">
                    <strong className="trust-badge-title">Pan India</strong>
                    <span className="trust-badge-sub">Network</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Logistics Showcase Card */}
            <div className="hero-visual-card" aria-hidden="true">
              <div className="visual-hub-badge animate-float">
                <span className="pulse-green-dot" aria-hidden="true"></span>
                <span>Courier Ecosystem Overview</span>
              </div>
              
              <div className="logistics-network-preview">
                <div className="network-step-item">
                  <div className="step-icon-box">
                    <Store size={22} />
                  </div>
                  <div className="step-info-text">
                    <div className="step-info-title">1. Booking Centres</div>
                    <p className="step-info-desc">Local parcel drop-off &amp; customer intake</p>
                  </div>
                </div>

                <div className="network-step-item">
                  <div className="step-icon-box">
                    <Truck size={22} />
                  </div>
                  <div className="step-info-text">
                    <div className="step-info-title">2. Delivery Partners</div>
                    <p className="step-info-desc">Last-mile dispatch &amp; doorstep fulfillment</p>
                  </div>
                </div>

                <div className="network-step-item">
                  <div className="step-icon-box">
                    <Building2 size={22} />
                  </div>
                  <div className="step-info-text">
                    <div className="step-info-title">3. Distribution Hubs</div>
                    <p className="step-info-desc">Regional sorting &amp; route consolidation</p>
                  </div>
                </div>
              </div>

              <div className="hero-stats-banner">
                <div>
                  <div className="hero-stat-value">3</div>
                  <div className="hero-stat-label">Core Models</div>
                </div>
                <div>
                  <div className="hero-stat-value">4</div>
                  <div className="hero-stat-label">Simple Steps</div>
                </div>
                <div>
                  <div className="hero-stat-value">100%</div>
                  <div className="hero-stat-label">Verified Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Promo Ribbon (matching promotional banner) */}
        <div className="hero-bottom-ribbon">
          <div className="container hero-ribbon-content">
            <div className="ribbon-perk">
              <div className="ribbon-perk-icon-wrap">
                <ShieldCheck size={18} />
              </div>
              <div className="ribbon-perk-text">
                <strong>Low Investment</strong>
                <span>High Profit</span>
              </div>
            </div>

            <div className="ribbon-perk">
              <div className="ribbon-perk-icon-wrap">
                <GraduationCap size={18} />
              </div>
              <div className="ribbon-perk-text">
                <strong>Training &amp;</strong>
                <span>Support</span>
              </div>
            </div>

            <div className="ribbon-perk">
              <div className="ribbon-perk-icon-wrap">
                <TrendingUp size={18} />
              </div>
              <div className="ribbon-perk-text">
                <strong>Marketing</strong>
                <span>Assistance</span>
              </div>
            </div>

            <div className="ribbon-action">
              <button
                type="button"
                className="btn-ribbon-enquire"
                onClick={() => {
                  document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Enquire Now</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="section" aria-labelledby="benefits-heading">
        <div className="container">
          <SectionTitle
            badge="Key Advantages"
            title="Benefits of Exploring Courier Franchises"
            subtitle="Gain an honest overview of how delivery businesses operate, what support structures exist, and how logistics networks are structured."
          />

          <div className="cards-grid-4">
            {benefits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className={`card reveal-on-scroll delay-${(idx % 4) + 1}`}>
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

      {/* 3. How It Works Section */}
      <section className="section section-grey" aria-labelledby="how-it-works-heading">
        <div className="container">
          <SectionTitle
            badge="Process Overview"
            title="How It Works"
            subtitle="A clear four-step pathway to guide your courier franchise evaluation and research."
          />

          <div className="steps-grid">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className={`step-card reveal-on-scroll delay-${(idx % 4) + 1}`}>
                  <span className="step-number" aria-hidden="true">{step.number}</span>
                  <div className="step-icon-wrap" aria-hidden="true">
                    <StepIcon size={22} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-text">{step.text}</p>
                </div>
              );
            })}
          </div>

          <div className="steps-notice-box reveal-on-scroll" role="note">
            <strong>Important Notice:</strong> Actual availability, territorial allocation, and qualification criteria depend entirely on the specific courier company and your target location.
          </div>
        </div>
      </section>

      {/* 4. Franchise Opportunities Section */}
      <section className="section" aria-labelledby="franchise-models-heading">
        <div className="container">
          <SectionTitle
            badge="Operating Formats"
            title="Courier Franchise Opportunities"
            subtitle="Examine the most common business formats available in the express delivery and courier logistics sector."
          />

          <div className="cards-grid-3">
            {franchiseModels.map((model, mIdx) => (
              <div key={model.id} className={`model-card reveal-on-scroll delay-${(mIdx % 3) + 1}`}>
                <div className="model-card-top">
                  <span className="model-badge">{model.badge}</span>
                  <h3 className="model-card-title">{model.title}</h3>
                  <p className="model-card-summary">{model.summary}</p>
                </div>
                <div className="model-card-body">
                  <div>
                    <h4 className="model-features-title">Typical Scope &amp; Focus:</h4>
                    <ul className="model-features-list">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="model-feature-item">
                          <CheckCircle2 size={16} className="model-feature-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="model-card-footer">
                    <Button
                      variant="primary"
                      size="md"
                      block
                      icon={ArrowRight}
                      onClick={() => handleApplyNow(model.franchiseType)}
                      id={`apply-now-${model.id}`}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="disclaimer-banner reveal-on-scroll" role="note">
            <AlertCircle size={22} className="disclaimer-banner-icon" />
            <p className="disclaimer-banner-text">
              <strong>General Business Models:</strong> These representations describe general operational models found across the logistics industry. They do not constitute formal business offers or commitments from any specific courier brand.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Why Explore With Us? */}
      <section className="section section-grey" aria-labelledby="why-explore-heading">
        <div className="container">
          <SectionTitle
            badge="Our Difference"
            title="Why Explore With Us?"
            subtitle="We provide clear, honest, and accessible informational resources to support your research into courier business opportunities."
          />

          <div className="feature-list-grid">
            {whyChooseUs.map((feat, idx) => {
              const FeatIcon = feat.icon;
              return (
                <div key={idx} className={`feature-box reveal-on-scroll delay-${(idx % 2) + 1}`}>
                  <div className="feature-icon-wrapper" aria-hidden="true">
                    <FeatIcon size={24} />
                  </div>
                  <div className="feature-content">
                    <h4>{feat.title}</h4>
                    <p>{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <SectionTitle
            badge="Frequently Asked Questions"
            title="Common Franchise Questions"
            subtitle="Find straightforward, honest answers to frequent questions regarding courier franchise opportunities."
          />

          <div className="reveal-on-scroll">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 7. Online Franchise Enquiry Form Section */}
      <section className="section section-grey" id="enquiry" aria-labelledby="enquiry-section-heading">
        <div className="container" style={{ maxWidth: '960px' }}>
          <SectionTitle
            badge="Direct Application"
            title="Online Franchise Enquiry Form"
            subtitle="Submit your details to check territory availability and receive complete franchise information. All data is saved directly to our verified Google Sheet database."
          />
          <div className="reveal-on-scroll">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="section" style={{ paddingTop: '0' }} aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner reveal-on-scroll">
            <div className="cta-banner-content">
              <span className="badge badge-white" style={{ marginBottom: '1rem' }}>
                Take the Next Step
              </span>
              <h2 id="cta-heading" className="cta-banner-title">
                Ready to Explore Courier Franchise Opportunities?
              </h2>
              <p className="cta-banner-desc">
                Get in touch with our team to ask questions, understand requirements, and receive guidance on exploring delivery franchise options.
              </p>
              <Button
                to="/contact-us"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                id="final-cta-btn"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
