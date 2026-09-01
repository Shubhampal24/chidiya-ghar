export default function WhoWeAreSection() {
  return (
    <>
      <div
        className={"et_pb_section et_pb_section_1 et_section_regular"}
        style={{
          background: "linear-gradient(to bottom, #FDFBF8 0%, rgba(253, 251, 248, 0.94) 60px, rgba(253, 251, 248, 0.94) 100%), url('/image/acc-2.png') center/cover no-repeat",
          padding: "58px 0",
        }}
      >
        {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t"}
        <div className={"et_pb_row et_pb_row_2 et_pb_gutters2"} style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap" }}>
          {"\n\t\t\t\t"}
          <div
            className={
              "et_pb_column et_pb_column_1_2 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough"
            }
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t"}
            <div className={"et_pb_module et_pb_image et_pb_image_0"} style={{ width: "100%", maxWidth: "500px" }}>
              {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t"}
              <span className={"et_pb_image_wrap "}>
                <img
                  loading={"lazy"}
                  decoding={"async"}
                  width={"700"}
                  height={"700"}
                  src={"/image/rrr.png"}
                  alt={""}
                  title={""}
                  className={"wp-image-520"}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </span>
              {"\n\t\t\t"}
            </div>
            {"\n\t\t\t"}
          </div>
          <div
            className={
              "et_pb_column et_pb_column_1_2 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough et-last-child"
            }
            style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "16px 0 16px 24px", boxSizing: "border-box" }}
          >
            {/* 1. Black Guide: Logo in Brown Color (Large & Exact Centered) */}
            <div className={"dh-whoweare-logo"} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", width: "250px" }}>
              <img
                src={"/image/Group 1171275868.svg"}
                alt={"Chidiya Ghar"}
                style={{ width: "250px", height: "auto", display: "block" }}
              />
              {/* <img
                src={"/image/NESTING PROFESSIONALS.svg"}
                alt={"Nesting Professionals"}
                style={{
                  width: "205px",
                  display: "block",
                  marginTop: "8px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              /> */}
            </div>

            {/* 2, 3 & 4. Red Guide (Heading) + Blue Guide (Content) + Orange Guide (Button) */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: "50px" }}>
              <div
                className={
                  "et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light"
                }
                style={{ marginBottom: "20px" }}
              >
                <div className={"et_pb_text_inner"}>
                  <h2 className={"dh-whoweare-title"} style={{ fontFamily: "'Grift', sans-serif", fontSize: "38px", fontWeight: 700, color: "#5E3023", margin: 0, lineHeight: 1.28 }}>
                    {"A Home With Character"}
                  </h2>
                </div>
              </div>

              <div
                className={
                  "et_pb_module et_pb_text et_pb_text_desc et_pb_text_align_left et_pb_bg_layout_light"
                }
                style={{ marginBottom: "35px" }}
              >
                <div className={"et_pb_text_inner"}>
                  <p style={{
                    fontFamily: "'Delight', sans-serif",
                    fontSize: "15.5px",
                    fontWeight: 400,
                    lineHeight: "1.75",
                    color: "#5E3023",
                    margin: 0,
                    maxWidth: "585px",
                    letterSpacing: "0.05em",
                  }}>
                    {"Chidiya Ghar is thoughtfully designed to bring together comfort, character and a sense of belonging. Every space is created to feel warm, welcoming and effortlessly livable. Named after the Hindi word for \"Bird House,\" Chidiya Ghar is a home that breathes — alive with natural light, botanical details and the quiet warmth of a place designed with love."}
                  </p>
                </div>
              </div>

              {/* 4. Orange Guide: CTA Button with Delight Extra bold font */}
              <div
                className={
                  "et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_module"
                }
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <a
                  className={"et_pb_button et_pb_button_0 et_pb_bg_layout_light"}
                  href={"#"}
                  data-icon={""}
                  style={{
                    fontFamily: "'Delight', 'Delight Semi Bold', sans-serif !important",
                    fontWeight: "600 !important",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "13px 36px",
                    fontSize: "15px",
                  }}
                >
                  {"Discover Our Spaces"}
                </a>
              </div>
            </div>
          </div>
          {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t"}
        </div>
        {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t"}
      </div>
    </>
  );
}
