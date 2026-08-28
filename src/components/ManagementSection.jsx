export default function ManagementSection() {
  return (
    <>
      <div
        className={
          "et_pb_section et_pb_section_7 et_pb_with_background et_section_regular"
        }
        style={{ padding: "40px 0" }}
      >
        <div className={"et_pb_row et_pb_row_11 et_pb_gutters2"}>
          <div
            className={
              "et_pb_column et_pb_column_4_4 et_pb_column_20  et_pb_css_mix_blend_mode_passthrough et-last-child"
            }
          >
            <div
              className={
                "et_pb_module et_pb_text et_pb_text_10  et_pb_text_align_left et_pb_bg_layout_light"
              }
            >
              <div className={"et_pb_text_inner"}>
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "38px",
                      color: "var(--ink)",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    Register Account
                  </h2>
                  <p style={{ color: "var(--terracotta)", fontSize: "15px", fontWeight: 600, margin: 0 }}>
                    Join Chidiya Ghar for exclusive benefits and offers
                  </p>
                </div>
              </div>
            </div>

            <div
              className={"bookingWrap"}
              style={{
                maxWidth: "620px",
                margin: "0 auto",
                padding: "30px 35px",
                borderRadius: "25px",
              }}
            >
              <form
                style={{ display: "flex", flexDirection: "column", gap: "18px" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label style={{ textAlign: "center", display: "block" }}>First Name *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"text"} placeholder={"First Name"} style={{ textAlign: "center" }} required />
                    </div>
                  </div>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label style={{ textAlign: "center", display: "block" }}>Last Name *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"text"} placeholder={"Last Name"} style={{ textAlign: "center" }} required />
                    </div>
                  </div>
                </div>

                <div className={"field"}>
                  <label style={{ textAlign: "center", display: "block" }}>Email Address *</label>
                  <div className={"input"} style={{ borderRadius: "25px" }}>
                    <input type={"email"} placeholder={"Email Address"} style={{ textAlign: "center" }} required />
                  </div>
                </div>

                <div className={"field"}>
                  <label style={{ textAlign: "center", display: "block" }}>Phone Number</label>
                  <div className={"input"} style={{ borderRadius: "25px" }}>
                    <input type={"tel"} placeholder={"Phone Number"} style={{ textAlign: "center" }} />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label style={{ textAlign: "center", display: "block" }}>Password *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"password"} placeholder={"Password"} style={{ textAlign: "center" }} required />
                    </div>
                  </div>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label style={{ textAlign: "center", display: "block" }}>Confirm Password *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"password"} placeholder={"Confirm Password"} style={{ textAlign: "center" }} required />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "12px", textAlign: "center" }}>
                  <button
                    type={"submit"}
                    className={"diviBtnDark"}
                    style={{
                      border: "none",
                      width: "100%",
                      justifyContent: "center",
                      height: "48px",
                      fontSize: "17px",
                    }}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
