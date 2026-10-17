import { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Hash,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RotateCcw,
  FileSpreadsheet,
  Check,
  ShieldCheck,
  Info
} from 'lucide-react';
import Button from './Button';
import { submitEnquiryToSheet } from '../services/sheetService';
import { CONFIG } from '../config';

const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi / NCR',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];

const FRANCHISE_TYPES = [
  'Courier Booking Store (100-200 Sq. Ft)',
  'Parcel Delivery Center (200-300 Sq. Ft)',
  'District Dealership Hub (800-1000 Sq. Ft)'
];

export default function EnquiryForm({ title, subtitle, className = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    pincode: '',
    franchiseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  // Validate form before submission
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else {
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      if (!/^\+?[0-9]{10,12}$/.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number.';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.state) {
      newErrors.state = 'Please select your State / UT.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City / Town name is required.';
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pin code is required.';
    } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
      newErrors.pincode = 'Please enter a valid 6-digit postal PIN code.';
    }

    if (!formData.franchiseType) {
      newErrors.franchiseType = 'Please select a franchise model.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      // Scroll smoothly to first invalid field if on screen
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const el = document.getElementById(firstError);
        el?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitEnquiryToSheet(formData);
      setSubmitResult(result);
    } catch (err) {
      setSubmitResult({
        success: false,
        error: err.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      state: '',
      city: '',
      pincode: '',
      franchiseType: '',
      message: '',
    });
    setErrors({});
    setSubmitResult(null);
  };

  return (
    <div className={`enquiry-form-wrapper ${className}`}>
      <div className="enquiry-card">
        {/* Card Header */}
        <div className="enquiry-card-header">
          <div className="enquiry-header-badge">
            <FileSpreadsheet size={16} />
            <span>Franchise Application &amp; Enquiry</span>
          </div>
          <h2 className="enquiry-card-title">
            {title || 'Apply for Courier Franchise'}
          </h2>
          <p className="enquiry-card-subtitle">
            {subtitle ||
              'Fill out the form below. Your application is saved directly to our verified Google Sheet database for swift regional follow-up.'}
          </p>
        </div>

        {/* Demo Mode Notice Banner (Subtle indicator if API URL is not set yet) */}
        {!CONFIG.SHEETDB_API_URL && !submitResult?.success && (
          <div className="enquiry-setup-tip">
            <Info size={18} className="tip-icon" />
            <div className="tip-text">
              <strong>SheetDB Sync Ready:</strong> Connect your SheetDB API in{' '}
              <code>src/config.js</code> to stream responses directly into your Google Sheet.
            </div>
          </div>
        )}

        {/* Success View */}
        {submitResult && submitResult.success ? (
          <div className="enquiry-success-view">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={54} className="success-icon" />
            </div>

            <h3 className="success-title">Application Submitted Successfully!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.fullName}</strong>. Your franchise enquiry has been recorded in our database.
            </p>

            <div className="submitted-summary-box">
              <div className="summary-row">
                <span className="summary-label">Full Name:</span>
                <span className="summary-value">{formData.fullName}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Contact:</span>
                <span className="summary-value">
                  {formData.phone} | {formData.email}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Location:</span>
                <span className="summary-value">
                  {formData.city}, {formData.state} - {formData.pincode}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Franchise Type:</span>
                <span className="summary-value">{formData.franchiseType}</span>
              </div>
              {formData.message && (
                <div className="summary-row">
                  <span className="summary-label">Message:</span>
                  <span className="summary-value">{formData.message}</span>
                </div>
              )}
            </div>

            {submitResult.isDemo && (
              <div className="demo-confirmation-pill">
                <ShieldCheck size={16} />
                <span>Demo Preview: Data formatted for Google Sheet columns A-H</span>
              </div>
            )}

            <p className="success-next-steps">
              Our regional operations desk will review your details and reach out via phone or email regarding franchise availability in your area.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="primary"
                size="md"
                onClick={handleReset}
                icon={RotateCcw}
              >
                Submit Another Enquiry
              </Button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} noValidate className="enquiry-form-element">
            {/* Error Notification */}
            {submitResult && !submitResult.success && (
              <div className="form-error-banner" role="alert">
                <AlertCircle size={20} className="error-banner-icon" />
                <div>
                  <strong>Submission Error:</strong> {submitResult.error}
                  <div style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    Please check your internet connection or verify your SheetDB API configuration in <code>src/config.js</code>.
                  </div>
                </div>
              </div>
            )}

            {/* Row 1: Full Name & Phone Number */}
            <div className="form-grid-row">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name <span className="required-mark">*</span>
                </label>
                <div className="input-with-icon">
                  <User size={18} className="field-icon" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`form-input has-icon ${errors.fullName ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                  />
                </div>
                {errors.fullName && (
                  <span className="form-error-msg">{errors.fullName}</span>
                )}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="required-mark">*</span>
                </label>
                <div className="input-with-icon">
                  <Phone size={18} className="field-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    maxLength={13}
                    className={`form-input has-icon ${errors.phone ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                </div>
                {errors.phone && (
                  <span className="form-error-msg">{errors.phone}</span>
                )}
              </div>
            </div>

            {/* Row 2: Email ID & Franchise Type */}
            <div className="form-grid-row">
              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required-mark">*</span>
                </label>
                <div className="input-with-icon">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className={`form-input has-icon ${errors.email ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <span className="form-error-msg">{errors.email}</span>
                )}
              </div>

              {/* Franchise Type */}
              <div className="form-group">
                <label htmlFor="franchiseType" className="form-label">
                  Franchise Type <span className="required-mark">*</span>
                </label>
                <div className="input-with-icon">
                  <Building2 size={18} className="field-icon" />
                  <select
                    id="franchiseType"
                    name="franchiseType"
                    value={formData.franchiseType}
                    onChange={handleChange}
                    className={`form-select has-icon ${errors.franchiseType ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.franchiseType}
                  >
                    <option value="">Select franchise type</option>
                    {FRANCHISE_TYPES.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.franchiseType && (
                  <span className="form-error-msg">{errors.franchiseType}</span>
                )}
              </div>
            </div>

            {/* Row 3: State & City */}
            <div className="form-grid-row">
              {/* State */}
              <div className="form-group">
                <label htmlFor="state" className="form-label">
                  State / UT <span className="required-mark">*</span>
                </label>
                <div className="input-with-icon">
                  <MapPin size={18} className="field-icon" />
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`form-select has-icon ${errors.state ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.state}
                  >
                    <option value="">Select State / Territory</option>
                    {INDIAN_STATES.map((st, idx) => (
                      <option key={idx} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.state && (
                  <span className="form-error-msg">{errors.state}</span>
                )}
              </div>

              {/* City */}
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City / Town <span className="required-mark">*</span>
                </label>
                <div className="input-with-icon">
                  <MapPin size={18} className="field-icon" />
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai / Lucknow / Pune"
                    className={`form-input has-icon ${errors.city ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.city}
                  />
                </div>
                {errors.city && (
                  <span className="form-error-msg">{errors.city}</span>
                )}
              </div>
            </div>

            {/* Row 4: Pin Code */}
            <div className="form-grid-row single-field">
              {/* Pin Code */}
              <div className="form-group">
                <label htmlFor="pincode" className="form-label">
                  Postal Pin Code <span className="required-mark">*</span>
                </label>
                <div className="input-with-icon">
                  <Hash size={18} className="field-icon" />
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="e.g. 400001 (6 digits)"
                    maxLength={6}
                    className={`form-input has-icon ${errors.pincode ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.pincode}
                  />
                </div>
                {errors.pincode && (
                  <span className="form-error-msg">{errors.pincode}</span>
                )}
              </div>
            </div>

            {/* Row 5: Message */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Proposed Location / Message <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>(Optional)</span>
              </label>
              <div className="input-with-icon textarea-icon-wrapper">
                <MessageSquare size={18} className="field-icon textarea-icon" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Provide any details about your commercial premises, investment budget, logistics experience, or specific questions..."
                  className="form-textarea has-icon"
                />
              </div>
            </div>

            {/* Security & Verification Note */}
            <div className="form-privacy-disclaimer">
              <ShieldCheck size={16} className="disclaimer-icon" />
              <span>
                Your data is transmitted securely and written directly to our authorized SheetDB repository. No unsolicited communications or spam.
              </span>
            </div>

            {/* Submit Button */}
            <div className="form-submit-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg form-submit-btn"
                id="submit-franchise-enquiry-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="spinning" />
                    <span>Saving to Sheet DB...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Submit Franchise Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
