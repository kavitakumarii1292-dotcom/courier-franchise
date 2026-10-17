# CourierFranchisesEnquiry — Complete React.js Website

A modern, professional, fully responsive informational website designed for **CourierFranchisesEnquiry**. Built with React 18, Vite, React Router DOM, Lucide React, and pure CSS3 with no backend, database, or external paid service dependencies.

---

## 🚀 Live Demo & Development

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended, LTS)
- **npm** (v9.0.0 or higher)

### 2. Quick Start
Clone or open the repository directory in your terminal and execute:

```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 3. Production Build
To create an optimized, production-ready static build:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory, ready to deploy to any static host.

To preview the production bundle locally:
```bash
npm run preview
```

---

## 🎨 Design & Branding System

- **Primary Navy Blue**: `#092747` (header, primary brand text, dark sections)
- **Secondary Orange**: `#FF6900` (call-to-actions, badges, highlight accents)
- **Hover Orange**: `#E85D00` (interactive button hover states)
- **Light Grey**: `#F5F7FA` (alternating content sections, subtle backgrounds)
- **White**: `#FFFFFF` (clean card backgrounds, container surfaces)
- **Body Text**: `#333333` (accessible reading contrast)
- **Typography**: Modern sans-serif via Google Fonts (`Plus Jakarta Sans`)

---

## 📄 Website Pages & Routes

The website contains five main pages plus a custom 404 page:

1. **Home (`/`)**:
   - Hero banner with clear headline and primary/secondary CTAs.
   - Courier ecosystem visual preview card with key logistics stages.
   - Four Benefits cards (Business Opportunity, Operational Guidance, Training, Delivery Network).
   - How It Works four-step evaluation pathway.
   - Overview of core franchise operating models with "Learn More" links.
   - Why Explore With Us transparency feature grid.
   - Accessible FAQ Accordion covering 6 essential franchise questions.
   - Final Call to Action banner.

2. **Franchise (`/franchise`)**:
   - In-depth breakdown of three core operating models:
     1. *Courier Booking Centre* (Retail counter model)
     2. *Delivery Partner* (Territory logistics model)
     3. *Distribution or Delivery Hub* (Regional facility model)
   - Realistic investment considerations (premises, vehicle fleet, security deposit, staffing, working capital).
   - Structured 5-step franchise evaluation process.
   - Prominent informational disclaimer.

3. **About Us (`/about-us`)**:
   - Mission and educational purpose statement.
   - Three guiding pillars: Clarity, Accessibility, and Informed Decisions.
   - What visitors can explore across the website.
   - Commitment to transparency (no fabricated figures, false partnerships, or guaranteed approvals).

4. **Contact Us (`/contact-us`)**:
   - Clean contact form (Full Name, Email Address, Phone Number [optional], Subject, Message).
   - Client-side validation in React with inline accessible error messages.
   - **Honest frontend mailto workflow**: triggers pre-filled email draft in the visitor's mail client.
   - Visible fallback instructions and one-click email copy button for visitors without a default desktop email app.
   - **Zero fake "sent" confirmations and zero database or cookie tracking**.

5. **Privacy Policy (`/privacy-policy`)**:
   - Clear 11-section privacy policy tailored for an informational static website.
   - Explicit disclosures on frontend architecture, absence of database storage, email correspondence handling, hosting server logs, and children's privacy.

6. **404 Not Found (`*`)**:
   - Branded not-found page with quick navigation back to Home and Franchise models.

---

## ⚙️ Important Site Owner Configuration

Before deploying this website to a live domain, configure the recipient email and identity settings in `src/config.js`:

```javascript
// src/config.js

export const CONFIG = {
  // Website Identity
  SITE_NAME: 'CourierFranchisesEnquiry',
  SITE_TAGLINE: 'Informational Guide to Courier & Logistics Franchise Opportunities',
  
  // ✉️ IMPORTANT: Update with your official enquiries email address
  RECIPIENT_EMAIL: 'enquiries@courierfranchisesenquiry.com',
  
  // Canonical Site URL
  SITE_URL: 'https://courierfranchisesenquiry.com',
  
  // Mandatory Disclaimer
  DISCLAIMER_TEXT: 'CourierFranchisesEnquiry provides general informational content...',
  ...
};
```

---

## 🌐 Deployment Instructions

### Deploy to Netlify
1. Connect your repository to Netlify.
2. Build Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify will automatically detect `public/_redirects` for Single Page Application routing.

### Deploy to Vercel
1. Import the repository into Vercel.
2. Vercel automatically detects the Vite framework.
3. Build Settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. The included `vercel.json` ensures all route paths resolve cleanly to `index.html`.

---

## 📁 Directory Structure

```
courier_enquiry/
├── public/
│   ├── _redirects         # SPA redirect for Netlify
│   ├── favicon.svg        # Branded logistics SVG favicon
│   ├── robots.txt         # Search engine crawler instructions
│   └── sitemap.xml        # SEO sitemap
├── src/
│   ├── components/
│   │   ├── Button.jsx         # Reusable button with variants & icons
│   │   ├── FAQAccordion.jsx   # Accessible accordion with ARIA attributes
│   │   ├── Footer.jsx         # Shared footer with disclaimer & year
│   │   ├── Header.jsx         # Sticky header with mobile drawer
│   │   ├── ScrollToTop.jsx    # Smooth navigation scroll reset
│   │   ├── SectionTitle.jsx   # Section header with badge & title
│   │   └── SEO.jsx            # Dynamic document title & meta tags
│   ├── pages/
│   │   ├── AboutUs.jsx        # About Us page
│   │   ├── ContactUs.jsx      # Contact form with honest mailto flow
│   │   ├── Franchise.jsx      # Detailed franchise models & process
│   │   ├── Home.jsx           # Homepage with hero, benefits, & FAQs
│   │   ├── NotFound.jsx       # Custom 404 page
│   │   └── PrivacyPolicy.jsx  # 11-section privacy policy
│   ├── styles/
│   │   ├── components.css     # Component & layout styles
│   │   └── global.css         # Design tokens, reset, & utilities
│   ├── App.jsx            # React Router DOM route hierarchy
│   ├── config.js          # Central configuration & recipient email
│   └── main.jsx           # Application entry point
├── index.html             # HTML5 template with SEO & OpenGraph tags
├── package.json           # Dependencies & build scripts
├── README.md              # Project documentation
├── vercel.json            # SPA rewrite for Vercel deployment
└── vite.config.js         # Vite configuration
```

---

## 🔒 Security & Privacy Notes

- **No Backend**: This project contains no server-side runtime, reducing the attack surface to zero.
- **No Database**: No user records, passwords, or personal details are stored.
- **Frontend-Only**: Enquiries are created by the user's local email application.
- **No Paid APIs or Trackers**: Zero third-party telemetry, ads, or cookies.
