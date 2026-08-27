import { useState } from "react";

const GALLERY_PAGES = [
  ["image/acc-1.png", "image/acc-2.png", "image/gal-1.png"],
  ["image/gal-2.png", "image/gal-3.png", "image/gal-4.png"],
  ["image/gal-5.png", "image/acc-3.png", "image/acc-4.png"],
  ["image/acc-5.png", "image/acc-1.png", "image/gal-1.png"],
];

export default function GallerySection() {
  const [page, setPage] = useState(0);
  const [fading, setFading] = useState(false);

  const goToPage = (target) => {
    let next = page;
    if (target === "next") {
      next = (page + 1) % GALLERY_PAGES.length;
    } else {
      const p = parseInt(target, 10) - 1;
      if (!isNaN(p) && p >= 0 && p < GALLERY_PAGES.length) next = p;
    }
    setFading(true);
    setTimeout(() => {
      setPage(next);
      setFading(false);
    }, 100);
  };

  const images = GALLERY_PAGES[page];
  const imgStyle = { opacity: fading ? 0.2 : 1 };

  return (
    <div className={"et_pb_section et_pb_section_6 et_section_regular"}>
      <div className={"et_pb_row et_pb_row_9 et_pb_gutters2"}>
        <div
          className={
            "et_pb_column et_pb_column_4_4 et_pb_column_18  et_pb_css_mix_blend_mode_passthrough et-last-child"
          }
        >
          <div
            className={
              "et_pb_module et_pb_text et_pb_text_9  et_pb_text_align_center et_pb_bg_layout_light"
            }
          >
            <div className={"et_pb_text_inner"}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "34px",
                  fontWeight: "700",
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
              style={{ borderTop: "3px dotted #DAB49D", width: "60px", margin: "0 auto 30px" }}
            ></div>
          </div>
        </div>
      </div>
      <div className={"et_pb_row et_pb_row_10 et_pb_gutters2"}>
        <div
          className={
            "et_pb_column et_pb_column_4_4 et_pb_column_19  et_pb_css_mix_blend_mode_passthrough et-last-child"
          }
        >
          <div className={"dh-interactive-gallery"} id={"hotel-gallery"}>
            <div className={"dh-gallery-grid"}>
              <div className={"dh-gallery-item"}>
                <img id="gal-img-0" src={images[0]} alt="Gallery Image 1" style={imgStyle} />
              </div>
              <div className={"dh-gallery-item"}>
                <img id="gal-img-1" src={images[1]} alt="Gallery Image 2" style={imgStyle} />
              </div>
              <div className={"dh-gallery-item"}>
                <img id="gal-img-2" src={images[2]} alt="Gallery Image 3" style={imgStyle} />
              </div>
            </div>
            <div className={"dh-gallery-pagination"}>
              <button
                type="button"
                className={page === 0 ? "dh-page-btn active" : "dh-page-btn"}
                data-page="1"
                onClick={() => goToPage("1")}
              >
                1
              </button>
              <button
                type="button"
                className={page === 1 ? "dh-page-btn active" : "dh-page-btn"}
                data-page="2"
                onClick={() => goToPage("2")}
              >
                2
              </button>
              <button
                type="button"
                className={page === 2 ? "dh-page-btn active" : "dh-page-btn"}
                data-page="3"
                onClick={() => goToPage("3")}
              >
                3
              </button>
              <button
                type="button"
                className={page === 3 ? "dh-page-btn active" : "dh-page-btn"}
                data-page="4"
                onClick={() => goToPage("4")}
              >
                4
              </button>
              <button
                type="button"
                className={"dh-page-btn"}
                data-page="next"
                onClick={() => goToPage("next")}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
