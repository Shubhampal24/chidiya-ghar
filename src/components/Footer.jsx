import puneLocationImg from "../assets/image/pune-location.png";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <footer
        id="site-footer"
        className="footer-wrapper"
        style={{
          background: "#7A351F",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Delight',",
          boxSizing: "border-box",
        }}
      >

        {/* =====================================================
            LARGE BACKGROUND CHIDIYA GHAR
        ====================================================== */}
        <div
          className="footer-bg-text"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%) scaleX(1.34)",
            transformOrigin: "center bottom",
            fontFamily: "'Grift'",
            fontWeight: 500,
            fontSize: "220px",
            color: "rgba(255, 255, 255, 0.13)",
            lineHeight: "0.75",
            whiteSpace: "nowrap",
            userSelect: "none",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              pointerEvents: "auto",
              transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-16px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Chidiya
          </span>

          <span
            style={{
              display: "inline-block",
              marginLeft: "18px",
              pointerEvents: "auto",
              transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-16px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ghar
          </span>
        </div>


        {/* =====================================================
            MAIN WHITE FOOTER CARD
        ====================================================== */}
        <div
          className="footer-card"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1055px",
            margin: "0 auto",
            background: "#FFFFFF",
            borderRadius: "17px",
            boxSizing: "border-box",
            boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
            display: "grid",
            columnGap: "12px",
          }}
        >

          {/* ===================================================
              COMPANY
          ==================================================== */}
          <div
            className="footer-col"
            style={{
              position: "relative",
              height: "100%",
            }}
          >
            <h3
              style={{
                margin: "0 0 22px",
                fontFamily: "'Grift'",
                fontSize: "27px",
                fontWeight: 500,
                color: "#713521",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Company
            </h3>

            {/* Our Amenities */}
            <a
              href="#services-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services-section");
              }}
              style={footerLinkStyle}
            >
              Our Amenities
            </a>

            {/* Rooms */}
            <a
              href="#accommodations-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("accommodations-section");
              }}
              style={footerLinkStyle}
            >
              Rooms
            </a>

            {/* Email */}
            <a
              href="mailto:chidiya@ghar.com"
              style={{
                ...footerLinkStyle,
                marginBottom: "0",
              }}
            >
              chidiya@ghar.com
            </a>

            {/* =================================================
                BOOK NOW
            ================================================== */}
            <div className="footer-book-btn-wrapper">
              <a
                href="#management-section"
                onClick={(e) => {
                  e.preventDefault();
                  const section =
                    document.getElementById("management-section") ||
                    document.querySelector(".et_pb_section_7");

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "84px",
                  height: "34px",
                  padding: "0 15px",
                  boxSizing: "border-box",
                  borderRadius: "50px",
                  fontFamily: "'Grift', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  background: "rgba(113, 53, 33, 0.08)",
                  backdropFilter: "blur(3px)",
                  WebkitBackdropFilter: "blur(3px)",
                  boxShadow: "inset 0 0 0 1.5px rgba(113, 53, 33, 0.45)",
                  color: "#713521",
                  textDecoration: "none",
                  lineHeight: 1,
                  transition: "all 200ms ease",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(113, 53, 33, 0.22)";
                  e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px rgba(113, 53, 33, 0.85), 0 4px 16px rgba(113, 53, 33, 0.2)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(113, 53, 33, 0.08)";
                  e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px rgba(113, 53, 33, 0.45)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book Now
              </a>
            </div>
          </div>

          {/* ===================================================
              SUPPORT
          ==================================================== */}
          <div className="footer-col">
            <h3
              style={{
                margin: "0 0 22px",
                fontFamily: "'Grift'",
                fontSize: "27px",
                fontWeight: 500,
                color: "#713521",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Support
            </h3>

            {/* FAQs */}
            <a
              href="#"
              style={footerLinkStyle}
              onClick={(e) => e.preventDefault()}
            >
              FAQs
            </a>

            {/* Contact Us */}
            <a
              href="#site-footer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("site-footer");
              }}
              style={footerLinkStyle}
            >
              Contact Us
            </a>
          </div>

          {/* ===================================================
              TRUST & LEGAL
          ==================================================== */}
          <div className="footer-col">
            <h3
              style={{
                margin: "0 0 22px",
                fontFamily: "'Grift'",
                fontSize: "27px",
                fontWeight: 500,
                color: "#713521",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                maxWidth: "170px",
              }}
            >
              Trust &amp; Legal
            </h3>

            {/* Terms */}
            <a
              href="#"
              style={footerLinkStyle}
              onClick={(e) => e.preventDefault()}
            >
              Terms &amp; Conditions
            </a>

            {/* Privacy */}
            <a
              href="#"
              style={footerLinkStyle}
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
          </div>

          {/* ===================================================
              PUNE MAP
          ==================================================== */}
          <div
            className="footer-map-container"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
            }}
          >
            <img
              src={puneLocationImg}
              alt="Pune Location"
              style={{
                width: "100%",
                maxWidth: "330px",
                height: "300px",
                objectFit: "contain",
                display: "block",
                opacity: 0.85,
              }}
            />
          </div>

          {/* ===================================================
              COPYRIGHT
          ==================================================== */}
          <div
            className="footer-copyright"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#9A6A57",
              fontFamily: "'Delight'",
              fontSize: "9px",
              fontWeight: 400,
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            2026 Chidiya Ghar. All rights reserved
          </div>

        </div>
      </footer>
    </>
  );
}


/* =========================================================
   FOOTER LINK STYLE
========================================================= */

const footerLinkStyle = {
  display: "block",

  marginBottom: "18px",

  color: "#713521",

  textDecoration: "none",

  fontFamily:
    "'Delight'",

  fontSize: "10.5px",

  fontWeight: 600,

  lineHeight: 1.2,

  transition:
    "opacity 0.2s ease, transform 0.2s ease",
};