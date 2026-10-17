/**
 * CourierFranchisesEnquiry - Configuration
 * 
 * IMPORTANT FOR WEBSITE OWNER:
 * Before publishing your website, review and update the recipient email address below.
 * This address is used when visitors click "Send Enquiry" on the Contact Us page,
 * which opens a prefilled mailto draft in their email client.
 */

export const CONFIG = {
  // Website Identity
  SITE_NAME: 'CourierFranchisesEnquiry',
  SITE_TAGLINE: 'Informational Guide to Courier & Logistics Franchise Opportunities',
  
  // Recipient Email for Contact Enquiries
  // Reads from .env (VITE_RECIPIENT_EMAIL) if available
  RECIPIENT_EMAIL: import.meta.env.VITE_RECIPIENT_EMAIL || 'enquiries@courierfranchisesenquiry.com',

  // Google Sheet / SheetDB API Endpoint
  // Reads from .env (VITE_SHEETDB_API_URL) if available, or fallback below
  // 1. Visit https://sheetdb.io and create an API using your Google Sheet URL
  // 2. Paste the generated API endpoint in .env as VITE_SHEETDB_API_URL or below
  SHEETDB_API_URL: import.meta.env.VITE_SHEETDB_API_URL || 'https://sheetdb.io/api/v1/ledu85huy06bg',

  // Reference Google Sheet URL (for admin reference):
  GOOGLE_SHEET_URL:
    import.meta.env.VITE_GOOGLE_SHEET_URL ||
    'https://docs.google.com/spreadsheets/d/1Ok8M7Ihy07gnlJF4XgpxvhWKRTXKP-sljujzwktfr6lls/edit?pli=1&gid=0#gid=0',
  
  // Canonical Site URL
  SITE_URL: 'https://courierfranchisesenquiry.com',
  
  // Mandatory Informational Disclaimer
  DISCLAIMER_TEXT:
    'CourierFranchisesEnquiry provides general informational content about courier franchise opportunities. Availability, costs, eligibility, and commercial terms must be verified with the relevant company.',
  
  // Navigation Links
  NAV_LINKS: [
    { label: 'Home', path: '/' },
    { label: 'Franchise', path: '/franchise' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
  ],
  
  // Footer Links
  FOOTER_LINKS: {
    quickLinks: [
      { label: 'Home', path: '/' },
      { label: 'Franchise Opportunities', path: '/franchise' },
      { label: 'About Us', path: '/about-us' },
      { label: 'Contact Us', path: '/contact-us' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
    ],
    franchiseModels: [
      { label: 'Courier Booking Centre', path: '/franchise#booking-centre' },
      { label: 'Delivery Partner Model', path: '/franchise#delivery-partner' },
      { label: 'Distribution & Delivery Hub', path: '/franchise#distribution-hub' },
      { label: 'Application Process', path: '/franchise#application-process' },
    ],
  },
};
