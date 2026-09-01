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
    <footer
      id="site-footer"
      style={{
        background: "#7A351F",

        /* INCREASED SECTION HEIGHT */
        padding: "28px 30px 0",

        position: "relative",
        overflow: "hidden",

        fontFamily: "'Delight',",

        /* Bigger footer */
        minHeight: "500px",

        boxSizing: "border-box",
      }}
    >

      {/* =====================================================
          LARGE BACKGROUND CHIDIYA GHAR
      ====================================================== */}
   <div
  style={{
    position: "absolute",
    left: "50%",
    bottom: "-22px",

    transform: "translateX(-50%) scaleX(1.15)",
    transformOrigin: "center bottom",

    fontFamily: "'Grift', sans-serif",
    fontSize: "205px",
    fontWeight: 500,

    color: "rgba(255,255,255,0.13)",

    lineHeight: "0.82",
    whiteSpace: "nowrap",

    pointerEvents: "none",
    userSelect: "none",
    zIndex: 0,
  }}
>
  Chidiya Ghar
</div>


      {/* =====================================================
          MAIN WHITE FOOTER CARD
      ====================================================== */}
      <div
        style={{
          position: "relative",

          zIndex: 2,

          /* Wider card */
          width: "100%",

          maxWidth: "1055px",

          /* Taller card */
          height: "310px",

          /* Move card upward */
          margin: "0 auto",

          background: "#FFFFFF",

          borderRadius: "17px",

          /* Slightly more internal spacing */
          padding: "48px 68px 25px",

          boxSizing: "border-box",

          boxShadow:
            "0 10px 28px rgba(0,0,0,0.12)",

          display: "grid",

          gridTemplateColumns:
            "180px 150px 205px 1fr",

          columnGap: "12px",
        }}
      >

        {/* ===================================================
            COMPANY
        ==================================================== */}
        <div
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
          <div
            style={{
              position: "absolute",

              left: "0",

              /* Keep button inside card */
              bottom: "30px",
            }}
          >
            <a
              href="#management-section"
              onClick={(e) => {
                e.preventDefault();

                const section =
                  document.getElementById(
                    "management-section"
                  ) ||
                  document.querySelector(
                    ".et_pb_section_7"
                  );

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

                borderRadius: "20px",

                background: "#DCC9BF",

                color: "#713521",

                textDecoration: "none",

                fontFamily:
                  "'Delight',",

                fontSize: "11px",

                fontWeight: 600,

                lineHeight: 1,

                boxShadow:
                  "0 7px 15px rgba(80,45,30,0.18)",

                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease",
              }}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px)";

                e.currentTarget.style.boxShadow =
                  "0 9px 18px rgba(80,45,30,0.24)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.boxShadow =
                  "0 7px 15px rgba(80,45,30,0.18)";
              }}
            >
              Book Now
            </a>
          </div>
        </div>


        {/* ===================================================
            SUPPORT
        ==================================================== */}
        <div>
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
            onClick={(e) =>
              e.preventDefault()
            }
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
        <div>
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
            onClick={(e) =>
              e.preventDefault()
            }
          >
            Terms &amp; Conditions
          </a>


          {/* Privacy */}
          <a
            href="#"
            style={footerLinkStyle}
            onClick={(e) =>
              e.preventDefault()
            }
          >
            Privacy Policy
          </a>
        </div>


        {/* ===================================================
            PUNE MAP
        ==================================================== */}
        <div
          style={{
            position: "relative",

            /* Larger map area */
            height: "285px",

            /* Move map upward */
            marginTop: "-30px",

            /* Give map more room on right */
            marginRight: "-25px",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            overflow: "visible",
          }}
        >
          <img
            src="/image/pune-location.png"
            alt="Pune Location"
            style={{
              /* Bigger map */
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
          style={{
            position: "absolute",

            left: "50%",

            bottom: "25px",

            transform:
              "translateX(-50%)",

            color: "#9A6A57",

            fontFamily:
              "'Delight'",

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