import React from 'react';
import UnifiedHeaderHero from '../components/UnifiedHeaderHero.jsx';
import Footer from '../components/Footer.jsx';

function PageShell({ title, children }) {
  return (
    <div id="page-container">
      <div id="et-boc" className="et-boc">
        <UnifiedHeaderHero isHomePage={false} title={title} />
        <div id="et-main-area">
          <div id="main-content">
            <div style={{ minHeight: '60vh', padding: '80px max(24px, calc((100% - 1200px) / 2))' }}>
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export function AccommodationsPage() {
  return (
    <PageShell title="Accommodations">
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Explore our range of premium accommodations designed for the ultimate comfort and luxury experience.</p>
    </PageShell>
  );
}

export function AboutUsPage() {
  return (
    <PageShell title="About Us">
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Learn more about Chidiya Ghar and our commitment to providing you with the finest hospitality experience.</p>
    </PageShell>
  );
}

export function BlogPage() {
  return (
    <PageShell title="Blog">
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Stay updated with our latest news, tips, and stories from around the resort.</p>
    </PageShell>
  );
}

export function ContactUsPage() {
  return (
    <PageShell title="Contact Us">
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Get in touch with us. We are always happy to hear from you.</p>
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Tel: +1 5432167890 | Email: info@chidiyaghar.com</p>
    </PageShell>
  );
}

export function SearchResultsPage() {
  return (
    <PageShell title="Search Results">
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Your search results will appear here.</p>
    </PageShell>
  );
}

export function OurServicesPage() {
  return (
    <PageShell title="Our Services">
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Discover the wide range of premium services we offer to make your stay exceptional.</p>
    </PageShell>
  );
}

export function MyAccountPage() {
  const [mode, setMode] = React.useState('register');
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    roomType: 'Cozy Room (280–320 sq ft)',
    specialRequests: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell title="My Account">
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Mode Switcher Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '30px' }}>
          <button
            type="button"
            onClick={() => { setMode('register'); setSubmitted(false); }}
            style={{
              padding: '10px 24px',
              borderRadius: '25px',
              border: mode === 'register' ? '2px solid #5E3023' : '1px solid #DAB49D',
              background: mode === 'register' ? '#5E3023' : '#FDFBF8',
              color: mode === 'register' ? '#F3E9DC' : '#5E3023',
              fontFamily: "'Grift', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Create Account
          </button>
          <button
            type="button"
            onClick={() => { setMode('login'); setSubmitted(false); }}
            style={{
              padding: '10px 24px',
              borderRadius: '25px',
              border: mode === 'login' ? '2px solid #5E3023' : '1px solid #DAB49D',
              background: mode === 'login' ? '#5E3023' : '#FDFBF8',
              color: mode === 'login' ? '#F3E9DC' : '#5E3023',
              fontFamily: "'Grift', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Sign In
          </button>
        </div>

        {/* Form Container Card */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(218, 180, 157, 0.6)',
            borderRadius: '25px',
            padding: '36px 32px',
            boxShadow: '0 12px 36px rgba(94, 48, 35, 0.08)',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ fontSize: '42px', marginBottom: '15px' }}>🌿</div>
              <h3 style={{ fontFamily: "'Grift', sans-serif", fontSize: '26px', color: '#5E3023', marginBottom: '10px' }}>
                Welcome to Chidiya Ghar, {formData.firstName || 'Guest'}!
              </h3>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 20px' }}>
                Your account registration was successful. You can now manage your bookings, preferences, and special requests anytime.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  background: '#5E3023',
                  color: '#F3E9DC',
                  padding: '10px 28px',
                  borderRadius: '25px',
                  border: 'none',
                  fontSize: '15px',
                  cursor: 'pointer',
                }}
              >
                Back to Account Form
              </button>
            </div>
          ) : mode === 'register' ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Row 1: First Name & Last Name */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                    First Name <span style={{ color: '#C08552' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="e.g. John"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '25px',
                      border: '1px solid #DAB49D',
                      background: '#FDFBF8',
                      fontSize: '14px',
                      color: '#333',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                    Last Name <span style={{ color: '#C08552' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="e.g. Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '25px',
                      border: '1px solid #DAB49D',
                      background: '#FDFBF8',
                      fontSize: '14px',
                      color: '#333',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                    Email Address <span style={{ color: '#C08552' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '25px',
                      border: '1px solid #DAB49D',
                      background: '#FDFBF8',
                      fontSize: '14px',
                      color: '#333',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                    Phone Number <span style={{ color: '#C08552' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +1 543 216 7890"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '25px',
                      border: '1px solid #DAB49D',
                      background: '#FDFBF8',
                      fontSize: '14px',
                      color: '#333',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Row 3: Password & Confirm Password */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                    Password <span style={{ color: '#C08552' }}>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Minimum 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '25px',
                      border: '1px solid #DAB49D',
                      background: '#FDFBF8',
                      fontSize: '14px',
                      color: '#333',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                    Confirm Password <span style={{ color: '#C08552' }}>*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 18px',
                      borderRadius: '25px',
                      border: '1px solid #DAB49D',
                      background: '#FDFBF8',
                      fontSize: '14px',
                      color: '#333',
                      boxSizing: 'border-box',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Row 4: Preferred Accommodation Type */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                  Preferred Accommodation Type
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    height: '48px',
                    padding: '0 18px',
                    borderRadius: '25px',
                    border: '1px solid #DAB49D',
                    background: '#FDFBF8',
                    fontSize: '14px',
                    color: '#5E3023',
                    boxSizing: 'border-box',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Cozy Room (280–320 sq ft)">Cozy Room (280–320 sq ft)</option>
                  <option value="Modern Space (380–440 sq ft)">Modern Space (380–440 sq ft)</option>
                  <option value="Premium Suite (520–600 sq ft)">Premium Suite (520–600 sq ft)</option>
                  <option value="Studio Haven (460–520 sq ft)">Studio Haven (460–520 sq ft)</option>
                </select>
              </div>

              {/* Row 5: Special Requests / Preferences */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                  Special Requests / Preferences (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  rows={4}
                  placeholder="Tell us about any dietary preferences, high-floor preference, or arrival details..."
                  value={formData.specialRequests}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '20px',
                    border: '1px solid #DAB49D',
                    background: '#FDFBF8',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  height: '50px',
                  background: '#5E3023',
                  color: '#F3E9DC',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '17px',
                  fontWeight: 600,
                  fontFamily: "'Grift', sans-serif",
                  cursor: 'pointer',
                  marginTop: '10px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 18px rgba(94, 48, 35, 0.25)',
                }}
              >
                Create Account
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                  Email Address <span style={{ color: '#C08552' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john.doe@example.com"
                  style={{
                    width: '100%',
                    height: '48px',
                    padding: '0 18px',
                    borderRadius: '25px',
                    border: '1px solid #DAB49D',
                    background: '#FDFBF8',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#5E3023', marginBottom: '8px' }}>
                  Password <span style={{ color: '#C08552' }}>*</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    height: '48px',
                    padding: '0 18px',
                    borderRadius: '25px',
                    border: '1px solid #DAB49D',
                    background: '#FDFBF8',
                    fontSize: '14px',
                    color: '#333',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  height: '50px',
                  background: '#5E3023',
                  color: '#F3E9DC',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '17px',
                  fontWeight: 600,
                  fontFamily: "'Grift', sans-serif",
                  cursor: 'pointer',
                  marginTop: '10px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 18px rgba(94, 48, 35, 0.25)',
                }}
              >
                Sign In
              </button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}
