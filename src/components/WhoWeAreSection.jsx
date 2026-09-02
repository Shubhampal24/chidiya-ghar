import heroImg from "../assets/image/hero-image.png";
import logoSvg from "../assets/image/Group 1171275868.svg";

export default function WhoWeAreSection() {
  return (
    <>
      <div
        id="about-us"
        className={"et_pb_section et_pb_section_1 et_section_regular who-we-are-section"}
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
          padding: "70px 0",
          backgroundColor: "#FAF7F2",
        }}
      >
        {/* Right Side: Real building photograph cleanly showcased */}
        <div
          className="who-we-are-bg"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "65%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <img
            src={heroImg}
            alt="Chidiya Ghar Building"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              display: "block",
            }}
          />
        </div>

        {/* Gradient Overlay: Solid light warm beige/cream on left, smoothly fades into clean image on right */}
        <div
          className="who-we-are-gradient"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #FAF7F2 0%, #FAF7F2 36%, rgba(250, 247, 242, 0.92) 46%, rgba(250, 247, 242, 0.45) 58%, rgba(250, 247, 242, 0) 70%, rgba(250, 247, 242, 0) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Vertical Blue-to-White Soft Fade across the top to eliminate any sharp border */}
        <div
          className="who-we-are-top-blue-fade"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "110px",
            background:
              "linear-gradient(to bottom, rgba(140, 191, 232, 0.7) 0%, rgba(140, 191, 232, 0.45) 25px, rgba(140, 191, 232, 0.18) 60px, transparent 100%)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />

        {/* 3px border blur strip directly at the seam */}
        <div
          className="who-we-are-border-blur-strip"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            pointerEvents: "none",
            zIndex: 4,
          }}
        />

        {/* Content Row: Left area hosts text content, Right area left clear for the building */}
        <div
          className={"et_pb_row et_pb_row_2 et_pb_gutters2"}
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          {/* Left Content Column */}
          <div
            className={
              "et_pb_column et_pb_column_1_2 et_pb_column_3 who-we-are-content-col et_pb_css_mix_blend_mode_passthrough"
            }
            style={{
              flex: "1 1 50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "16px 36px 16px 0",
              boxSizing: "border-box",
              maxWidth: "620px",
            }}
          >
            {/* Logo in Brown Color */}
            <div
              className={"dh-whoweare-logo"}
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "250px",
              }}
            >
              <img
                src={logoSvg}
                alt={"Chidiya Ghar"}
                style={{ width: "250px", height: "auto", display: "block" }}
              />
            </div>

            {/* Heading, Paragraph, CTA */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
              <div
                className={
                  "et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light"
                }
                style={{ marginBottom: "20px" }}
              >
                <div className={"et_pb_text_inner"}>
                  <h2
                    className={"dh-whoweare-title"}
                    style={{
                      fontFamily: "'Grift', sans-serif",
                      fontSize: "38px",
                      fontWeight: 700,
                      color: "#5E3023",
                      margin: 0,
                      lineHeight: 1.28,
                    }}
                  >
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
                  <p
                    style={{
                      fontFamily: "'Delight', sans-serif",
                      fontSize: "15.5px",
                      fontWeight: 400,
                      lineHeight: "1.75",
                      color: "#5E3023",
                      margin: 0,
                      maxWidth: "585px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {
                      'Chidiya Ghar is thoughtfully designed to bring together comfort, character and a sense of belonging. Every space is created to feel warm, welcoming and effortlessly livable. Named after the Hindi word for "Bird House," Chidiya Ghar is a home that breathes — alive with natural light, botanical details and the quiet warmth of a place designed with love.'
                    }
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div
                className={
                  "et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_left et_pb_module"
                }
                style={{ marginTop: 0, marginBottom: 0 }}
              >
                <a
                  className={"et_pb_button et_pb_button_0 et_pb_bg_layout_light"}
                  href={"#accommodations-section"}
                  data-icon={""}
                  style={{
                    fontFamily:
                      "'Delight-SemiBold', 'Delight Semi Bold', 'Delight', sans-serif",
                    fontWeight: 600,
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

          {/* Right spacer so the real building image is cleanly showcased */}
          <div
            className="who-we-are-spacer"
            style={{
              flex: "1 1 50%",
              minWidth: "260px",
            }}
          />
        </div>
      </div>
    </>
  );
}
