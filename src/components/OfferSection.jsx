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
          <div className="dh-custom-offer-card">
            <p className="eyebrow" style={{ color: "var(--terracotta)", marginBottom: "8px", fontSize: "12px", letterSpacing: "2px", fontWeight: 700, textTransform: "uppercase" }}>
              OFFER
            </p>
            <h3 style={{ fontFamily: "'Grift', sans-serif", fontSize: "32px", fontWeight: 700, color: "var(--ink)", marginBottom: "25px" }}>
              We are Offering
            </h3>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "25px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--brown)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                <i className="fa-solid fa-tag"></i>
              </div>
              <div style={{ textAlign: "left" }}>
                <h4 style={{ fontFamily: "'Grift', sans-serif", fontSize: "38px", fontWeight: 700, color: "var(--brown)", margin: 0, lineHeight: 1 }}>
                  50%
                </h4>
                <p style={{ fontFamily: "'Delight', sans-serif", fontSize: "14px", fontWeight: 400, color: "var(--brown)", margin: "4px 0 0 0" }}>
                  Instant Discount
                </p>
              </div>
            </div>
            
            <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
              HURRY UP!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
