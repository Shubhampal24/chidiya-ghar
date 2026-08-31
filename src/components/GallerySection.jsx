import { useState, useEffect } from "react";

const GALLERY_IMAGES = [
  { src: "/image/acc-1.png", alt: "Warm Light Room" },
  { src: "/image/gal-1.png", alt: "Deluxe Bedroom Suite" },
  { src: "/image/acc-2.png", alt: "Spacious Living Room" },
  { src: "/image/gal-2.png", alt: "Cozy Suite with Ambient Lights" },
  { src: "/image/acc-3.png", alt: "Modern Premium Space" },
  { src: "/image/gal-3.png", alt: "Resort Exterior & Surroundings" },
  { src: "/image/acc-4.png", alt: "Studio Haven & Desk" },
  { src: "/image/gal-4.png", alt: "Botanical Sunlit Corner" },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const cardWidth = isMobile ? 220 : isTablet ? 280 : 350;
  const cardHeight = isMobile ? 155 : isTablet ? 195 : 245;
  const step = isMobile ? 160 : isTablet ? 230 : 310;

  return (
    <div className={"et_pb_section et_pb_section_6 et_section_regular"} style={{ overflow: "hidden", padding: "40px 0 60px" }}>
      <div className={"et_pb_row et_pb_row_9 et_pb_gutters2"}>
        <div
          className={
            "et_pb_column et_pb_column_4_4 et_pb_column_18 et_pb_css_mix_blend_mode_passthrough et-last-child"
          }
        >
          <div
            className={
              "et_pb_module et_pb_text et_pb_text_9 et_pb_text_align_center et_pb_bg_layout_light"
            }
          >
            <div className={"et_pb_text_inner"}>
              <h3
                style={{
                  fontFamily: "'Grift', sans-serif",
                  fontSize: "36px",
                  fontWeight: "800",
                  color: "#000000",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                GALLERY
              </h3>
            </div>
          </div>
          <div
            className={
              "et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space"
            }
          >
            <div
              className={"et_pb_divider_internal"}
              style={{ borderTop: "3px dotted #DAB49D", width: "60px", margin: "0 auto 35px" }}
            ></div>
          </div>
        </div>
      </div>

      <div className={"dh-smile-gallery-wrapper"}>
        {/* Smile Arc Stage */}
        <div className={"dh-smile-gallery-stage"}>
          {GALLERY_IMAGES.map((item, idx) => {
            const offset = idx - activeIndex;
            const absOffset = Math.abs(offset);

            // Upright cards (NO TILT): gentle vertical curve for smile structure
            let x = offset * step;
            let y = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10 - absOffset;
            let shadow = "0 10px 25px rgba(94, 48, 35, 0.1)";

            if (offset === 0) {
              y = 12;
              scale = 1.18;
              opacity = 1;
              zIndex = 20;
              shadow = "0 22px 45px rgba(94, 48, 35, 0.25)";
            } else if (absOffset === 1) {
              y = 0;
              scale = 0.9;
              opacity = 0.85;
              zIndex = 10;
              shadow = "0 10px 25px rgba(94, 48, 35, 0.12)";
            } else if (absOffset === 2) {
              y = -10;
              scale = 0.76;
              opacity = 0.45;
              zIndex = 5;
            } else {
              y = -18;
              scale = 0.6;
              opacity = 0;
              zIndex = 1;
            }

            return (
              <div
                key={idx}
                className={`dh-smile-card ${offset === 0 ? "is-center" : ""}`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  boxShadow: shadow,
                  pointerEvents: absOffset > 2 ? "none" : "auto",
                }}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => {
                  if (absOffset === 1) setActiveIndex(idx);
                }}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>

        {/* Small Dot Circles (Hover moves images to respective side) */}
        <div className={"dh-gallery-dots"}>
          {GALLERY_IMAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`dh-gallery-dot ${activeIndex === idx ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Navigate to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
