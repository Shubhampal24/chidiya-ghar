export default function OfferSection() {
  return (
    <>
      <div
        className={
          "et_pb_section et_pb_section_5 et_pb_section_parallax et_pb_with_background et_section_regular"
        }
      >
        <span className={"et_parallax_bg_wrap"}>
          <span
            className={"et_parallax_bg et_pb_parallax_css"}
            style={{ backgroundImage: "url('/ChatGPT Image Aug 31, 2026, 09_52_21 AM.png')" }}
          ></span>
        </span>
        
        <div className="dh-custom-offer-wrapper">
          <div
            className="dh-custom-offer-card"
            style={{
              background: "rgba(243, 233, 220, 0.45)",
backdropFilter: "none",
WebkitBackdropFilter: "none",
              boxShadow: "inset 0 0 0 1.5px rgba(255, 255, 255, 0.75), 0 12px 36px rgba(94, 48, 35, 0.16)",
              border: "none",
              borderRadius: "20px",
              padding: "32px 36px",
              textAlign: "center",
            }}
          >
            <p
              className="eyebrow"
              style={{
                color: "#895737",
                marginBottom: "8px",
                fontSize: "12px",
                letterSpacing: "3px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              OFFER
            </p>
            <h3
              style={{
                fontFamily: "'Grift', sans-serif",
                fontSize: "30px",
                fontWeight: 700,
                color: "#5E3023",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              We are Offering
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              {/* Icon bubble — frosted ring */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(137, 87, 55, 0.14)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  boxShadow: "inset 0 0 0 1.5px rgba(137, 87, 55, 0.50)",
                  color: "#5E3023",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                <i className="fa-solid fa-tag"></i>
              </div>
              <div style={{ textAlign: "left" }}>
                <h4
                  style={{
                    fontFamily: "'Grift', sans-serif",
                    fontSize: "44px",
                    fontWeight: 700,
                    color: "#5E3023",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  50%
                </h4>
                <p
                  style={{
                    fontFamily: "'Delight', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#895737",
                    margin: "5px 0 0 0",
                    letterSpacing: "0.04em",
                  }}
                >
                  Instant Discount
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#5E3023",
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                margin: 0,
                opacity: 0.85,
              }}
            >
              HURRY UP!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
