import { useState, useEffect } from "react";
import acc1 from "../assets/image/acc-1.png";
import acc2 from "../assets/image/acc-2.png";
import acc3 from "../assets/image/acc-3.png";
import acc4 from "../assets/image/acc-4.png";
import gal1 from "../assets/image/gal-1.png";
import gal2 from "../assets/image/gal-2.png";
import gal3 from "../assets/image/gal-3.png";
import gal4 from "../assets/image/gal-4.png";

const GALLERY_IMAGES = [
  { src: acc1, alt: "Warm Light Room" },
  { src: gal1, alt: "Deluxe Bedroom Suite" },
  { src: acc2, alt: "Spacious Living Room" },
  { src: gal2, alt: "Cozy Suite with Ambient Lights" },
  { src: acc3, alt: "Modern Premium Space" },
  { src: gal3, alt: "Resort Exterior & Surroundings" },
  { src: acc4, alt: "Studio Haven & Desk" },
  { src: gal4, alt: "Botanical Sunlit Corner" },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const cardWidth = isMobile ? 220 : isTablet ? 280 : 350;
  const cardHeight = isMobile ? 155 : isTablet ? 195 : 245;
  const step = isMobile ? 180 : isTablet ? 250 : 330;

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeIndex < GALLERY_IMAGES.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

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
        <div 
          className={"dh-smile-gallery-stage"}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
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
              y = 30; // Lowest point
              scale = 1.35; // Much bigger center
              opacity = 1;
              zIndex = 20;
              shadow = "0 22px 45px rgba(94, 48, 35, 0.25)";
            } else if (absOffset === 1) {
              y = -5; // Middle point
              scale = 0.82; // Noticeably smaller adjacent
              opacity = 0.85;
              zIndex = 10;
              shadow = "0 10px 25px rgba(94, 48, 35, 0.12)";
            } else if (absOffset === 2) {
              y = -35; // Highest point
              scale = 0.65; // Much smaller outer
              opacity = 0.45;
              zIndex = 5;
            } else {
              y = -50;
              scale = 0.5;
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
