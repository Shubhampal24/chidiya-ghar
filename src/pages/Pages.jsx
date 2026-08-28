import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function PageShell({ title, children }) {
  return (
    <div id="page-container">
      <div id="et-boc" className="et-boc">
        <Header />
        <div id="et-main-area">
          <div id="main-content">
            <div style={{ minHeight: '60vh', padding: '80px max(24px, calc((100% - 1200px) / 2))' }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', color: 'var(--dark-brown)', marginBottom: '20px' }}>{title}</h1>
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
  return (
    <PageShell title="My Account">
      <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7 }}>Manage your bookings, preferences and account details here.</p>
    </PageShell>
  );
}
