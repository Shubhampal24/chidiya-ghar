export default function Footer() {
  return (
    <footer id="site-footer" className="dh-footer">
      <div className="dh-footer-body">
        <div className="dh-footer-inner">

          {/* Column 1 — Brand */}
          <div className="dh-footer-col dh-footer-brand">
            <div className="dh-footer-logo-wrap">
              <img
                src="/image/Group 1171275868.svg"
                alt="Chidiya Ghar"
                className="dh-footer-logo-img"
              />
            </div>
            <p className="dh-footer-tagline">
              A home where birds, nature, art and belonging come together.
              <br />
              <em>Warm. Artistic. Botanical. Indian. Premium.</em>
            </p>
            <div className="dh-footer-socials">
              <a href="#" className="dh-social-pill" title="Facebook" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="dh-social-pill" title="Instagram" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="dh-social-pill" title="YouTube" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Accommodation */}
          <div className="dh-footer-col">
            <h4 className="dh-footer-col-title">Accommodation</h4>
            <ul className="dh-footer-links">
  <li><a href="#accommodations-section">Rooms</a></li>
  <li><a href="#accommodations-section">Villas</a></li>
  <li><a href="#accommodations-section">Suites</a></li>
</ul>
          </div>

          {/* Column 3 — Quick Access */}
          <div className="dh-footer-col">
            <h4 className="dh-footer-col-title">Quick Access</h4>
            <ul className="dh-footer-links">
  <li><a href="#">Home</a></li>
  <li><a href="#about-us">About Us</a></li>
  <li><a href="#services-section">Services</a></li>
  <li><a href="#site-footer">Contact Us</a></li>
</ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="dh-footer-col">
            <h4 className="dh-footer-col-title">Get In Touch</h4>
            <ul className="dh-footer-contact-list">
              <li>
                <span className="dh-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <a href="https://maps.app.goo.gl/tBjRrGUtpsLffTFr5" target="_blank" rel="noopener noreferrer">
                  Flat 202, Anjaneya Apartments, Near Mamta Chowk, Balewadi High Street, Pune 411045
                </a>
              </li>
              <li>
                <span className="dh-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>+1 5432167890 &middot; +1 6789054321</span>
              </li>
              <li>
                <span className="dh-contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="dh-footer-hr" />

        <div className="dh-footer-bottom">
          <p className="dh-footer-copy">&copy; Chidiya Ghar. All Rights Reserved.</p>
          <div className="dh-footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="dh-footer-dot" />
            <a href="#">Terms of Service</a>
          </div>
          <p className="dh-footer-credit">Designed by TechTech</p>
        </div>
      </div>
    </footer>
  );
}
