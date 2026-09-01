import { useState } from "react";

const TESTIMONIALS = [
  {
    avatar: "/image/testimonial-1.jpg",
    quote:
      "Chidiya Ghar feels like a home away from home. The warmth of the place, the thoughtful details and the calming atmosphere made our stay truly memorable. We'll be back without a doubt.",
    name: "Priya Mehta",
    role: "Resident",
  },
  {
    avatar: "/image/testimonial-2.jpg",
    quote:
      "Our stay here was magnificent! The scenic surroundings, immaculate room cleanliness, and warm, accommodating staff made this our favorite holiday ever.",
    name: "Sarah Jenkins",
    role: "Tourist",
  },
  {
    avatar: "/image/testimonial-3.jpg",
    quote:
      "From check-in to checkout, everything was flawless. Exceptional food, peaceful ambiance, and five-star hospitality throughout our entire week.",
    name: "Michael Scott",
    role: "Tourist",
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const switchTestimonial = (direction) => {
    const next = (idx + direction + TESTIMONIALS.length) % TESTIMONIALS.length;
    setFading(true);
    setTimeout(() => {
      setIdx(next);
      setFading(false);
    }, 120);
  };

  const t = TESTIMONIALS[idx];

  return (
    <div
  className={"et_pb_section et_pb_section_8 et_section_regular"}
  style={{ backgroundColor: "#F3E9DC" }}
>
      <div className={"et_pb_row et_pb_row_13 et_pb_gutters2"}>
        <div
          className={
            "et_pb_column et_pb_column_4_4 et_pb_column_25  et_pb_css_mix_blend_mode_passthrough et-last-child"
          }
        >
          <div
            className={
              "et_pb_module et_pb_text et_pb_text_11  et_pb_text_align_center et_pb_bg_layout_light"
            }
          >
            <div className={"et_pb_text_inner"}>
              <h3
                style={{
                  fontFamily: "'Grift', sans-serif",
                  fontSize: "34px",
                  fontWeight: "700",
                  color: "#000000",
                  letterSpacing: "1px",
                  textAlign: "center",
                  marginBottom: "8px",
                }}
              >
                Testimonials
              </h3>
            </div>
          </div>
          <div
            className={
              "et_pb_module et_pb_divider et_pb_divider_2 et_pb_divider_position_ et_pb_space"
            }
          >
            <div
              className={"et_pb_divider_internal"}
              style={{ borderTop: "3px dotted #DAB49D", width: "60px", margin: "0 auto 30px" }}
            ></div>
          </div>
        </div>
      </div>
      <div className={"et_pb_row et_pb_row_14 dh-gallery-custom-arrow et_pb_gutters2"}>
        <div
          className={
            "et_pb_column et_pb_column_4_4 et_pb_column_26  et_pb_css_mix_blend_mode_passthrough et-last-child"
          }
        >
          <div
            className={"dh-custom-testimonial-box"}
            id="dh-testimonial-slider"
            style={{ opacity: fading ? 0.3 : 1 }}
          >
            <div className={"dh-testi-avatar-wrap"}>
              <img
                id="dh-testi-avatar"
                src={t.avatar}
                alt="User Avatar"
                className={"dh-testi-avatar-img"}
              />
            </div>
            <div className={"dh-testi-content-wrap"}>
              <p id="dh-testi-quote" className={"dh-testi-quote"}>
                {t.quote}
              </p>
              <div className={"dh-testi-quote-icon"}>
                <svg width="28" height="20" viewBox="0 0 24 24" fill="#DAB49D" opacity="0.7">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h2 id="dh-testi-name" className={"dh-testi-name"}>
                {t.name}
              </h2>
              <p id="dh-testi-role" className={"dh-testi-role"}>
                {t.role}
              </p>
            </div>
            <div className={"dh-testi-nav"}>
              <button
                type="button"
                className={"dh-testi-btn dh-testi-prev"}
                id="dh-testi-prev"
                aria-label="Previous Testimonial"
                onClick={() => switchTestimonial(-1)}
              >
                &#10094;
              </button>
              <button
                type="button"
                className={"dh-testi-btn dh-testi-next"}
                id="dh-testi-next"
                aria-label="Next Testimonial"
                onClick={() => switchTestimonial(1)}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
