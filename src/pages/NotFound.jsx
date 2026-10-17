import { Link } from 'react-router-dom';
import { PackageX, Home, Compass, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you requested could not be found. Explore courier franchise opportunities on CourierFranchisesEnquiry."
      />

      <section
        className="section"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '600px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--orange-light)',
              color: 'var(--secondary-orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
            }}
          >
            <PackageX size={42} strokeWidth={1.8} />
          </div>

          <span className="badge badge-orange" style={{ marginBottom: '1rem' }}>
            Error 404
          </span>

          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary-navy)' }}>
            Page Not Found
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            The parcel route you are looking for does not exist or has been relocated. You can navigate back to our homepage or explore available franchise opportunities.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Back to Home
            </Button>
            <Button to="/franchise" variant="outline" size="md" icon={Compass} iconPosition="left">
              Explore Franchise Models
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
