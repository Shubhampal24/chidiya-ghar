export default function ManagementSection() {
  return (
    <>
      <div
        className={
          "et_pb_section et_pb_section_7 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider"
        }
      >
        <div className={"et_pb_top_inside_divider et-no-transition"}></div>
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
                <div style={{ textAlign: "center", marginBottom: "50px" }}>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "42px",
                      color: "var(--ink)",
                      fontWeight: 700,
                      marginBottom: "15px",
                    }}
                  >
                    Register Account
                  </h2>
                  <p style={{ color: "var(--terracotta)", fontSize: "16px", fontWeight: 600 }}>
                    Join Chidiya Ghar for exclusive benefits and offers
                  </p>
                </div>
              </div>
            </div>

            <div
              className={"bookingWrap"}
              style={{
                maxWidth: "650px",
                margin: "0 auto",
                padding: "40px",
                borderRadius: "25px",
              }}
            >
              <form
                style={{ display: "flex", flexDirection: "column", gap: "25px" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label>First Name *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"text"} placeholder={"First Name"} required />
                    </div>
                  </div>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label>Last Name *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"text"} placeholder={"Last Name"} required />
                    </div>
                  </div>
                </div>

                <div className={"field"}>
                  <label>Email Address *</label>
                  <div className={"input"} style={{ borderRadius: "25px" }}>
                    <input type={"email"} placeholder={"Email Address"} required />
                  </div>
                </div>

                <div className={"field"}>
                  <label>Phone Number</label>
                  <div className={"input"} style={{ borderRadius: "25px" }}>
                    <input type={"tel"} placeholder={"Phone Number"} />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label>Password *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"password"} placeholder={"Password"} required />
                    </div>
                  </div>
                  <div className={"field"} style={{ flex: "1 1 200px" }}>
                    <label>Confirm Password *</label>
                    <div className={"input"} style={{ borderRadius: "25px" }}>
                      <input type={"password"} placeholder={"Confirm Password"} required />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <button
                    type={"submit"}
                    className={"diviBtnDark"}
                    style={{
                      border: "none",
                      width: "100%",
                      justifyContent: "center",
                      height: "55px",
                      fontSize: "18px",
                    }}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>

            <div
              className={
                "et_pb_module et_pb_divider et_pb_divider_1 et_pb_divider_position_ et_pb_space"
              }
            >
              <div className={"et_pb_divider_internal"}></div>
            </div>
          </div>
        </div>
        <div className={"et_pb_bottom_inside_divider et-no-transition"}></div>
      </div>
    </>
  );
}
