import puneLocationImg from "../assets/image/pune-location.png";

const mapPins = [
  {
    id: "chidiya-ghar",
    name: "Chidiya Ghar",
    top: "37%",
    left: "33%",
    width: 28,
    height: 37,
    delay: "0s",
    url: "https://maps.app.goo.gl/jNRpAnTTi5yhA3KH9?g_st=ic",
    isPrimary: true,
    color: "#713520",
  },
  {
    id: "balewadi-stadium",
    name: "Balewadi Stadium",
    top: "31%",
    left: "29%",
    width: 21,
    height: 27,
    delay: "0.25s",
    url: "https://www.google.com/maps/search/?api=1&query=Balewadi+Stadium+Pune",
    isPrimary: false,
    color: "#DAB49D",
  },
  {
    id: "balewadi-high-street",
    name: "Balewadi High Street",
    top: "41%",
    left: "37%",
    width: 21,
    height: 27,
    delay: "0.5s",
    url: "https://www.google.com/maps/search/?api=1&query=Balewadi+High+Street+Pune",
    isPrimary: false,
    color: "#DAB49D",
  },
  {
    id: "it-hub",
    name: "IT Hub",
    top: "51%",
    left: "50%",
    width: 23,
    height: 30,
    delay: "0.35s",
    url: "https://www.google.com/maps/search/?api=1&query=Hinjawadi+IT+Park+Pune",
    isPrimary: false,
    color: "#DAB49D",
  },
];

// Exact silhouette contour path extracted from the transparent alpha boundary of pune-location.png
// Scaled precisely to 345x285 box (matching objectFit: contain)
const PUNE_MAP_SILHOUETTE_PATH =
  "M 145.06 0.82 L 147.52 0.82 L 152.44 4.91 L 158.17 4.09 L 159.81 5.73 L 159.81 7.37 L 163.08 9.01 L 163.9 11.47 L 166.36 13.92 L 166.36 16.38 L 167.18 17.2 L 166.36 18.02 L 170.45 23.75 L 175.37 21.29 L 179.46 24.57 L 181.92 24.57 L 182.74 23.75 L 184.38 24.57 L 185.19 25.39 L 185.19 27.84 L 184.38 28.66 L 187.65 31.12 L 189.29 33.58 L 189.29 35.22 L 190.11 36.03 L 193.38 36.03 L 193.38 40.13 L 192.56 40.95 L 192.56 45.86 L 191.75 47.5 L 195.02 49.96 L 195.02 50.78 L 191.75 54.87 L 196.66 60.6 L 196.66 63.06 L 195.84 63.88 L 196.66 70.43 L 193.38 75.34 L 193.38 77.8 L 195.84 80.26 L 199.12 79.44 L 200.75 81.08 L 200.75 85.17 L 204.85 88.45 L 207.31 88.45 L 211.4 85.17 L 216.31 83.53 L 215.5 86.81 L 218.77 90.09 L 217.13 93.36 L 219.59 95.0 L 219.59 96.64 L 217.13 99.09 L 217.95 99.91 L 215.5 100.73 L 213.86 102.37 L 213.04 104.83 L 214.68 106.47 L 214.68 108.1 L 213.86 108.1 L 212.22 110.56 L 208.12 113.84 L 208.94 114.66 L 212.22 114.66 L 215.5 111.38 L 223.69 115.47 L 225.32 112.2 L 223.69 110.56 L 223.69 106.47 L 222.87 105.65 L 225.32 102.37 L 224.5 99.91 L 225.32 97.46 L 227.78 95.82 L 230.24 95.82 L 232.69 98.28 L 235.97 98.28 L 237.61 97.46 L 240.88 92.54 L 240.06 90.91 L 243.34 89.27 L 245.8 83.53 L 248.25 81.9 L 249.89 81.9 L 251.53 79.44 L 255.62 79.44 L 258.08 81.9 L 262.18 81.08 L 263.81 78.62 L 263.81 76.16 L 261.36 74.53 L 260.54 72.07 L 263.0 68.79 L 262.18 65.52 L 263.0 63.88 L 264.63 64.7 L 268.73 64.7 L 269.55 66.34 L 269.55 70.43 L 271.19 72.07 L 273.64 72.89 L 274.46 76.16 L 276.1 77.8 L 273.64 79.44 L 272.82 81.9 L 273.64 83.53 L 276.1 84.35 L 276.1 86.81 L 277.74 88.45 L 280.19 90.09 L 282.65 90.09 L 283.47 90.91 L 282.65 93.36 L 284.29 95.0 L 287.56 95.0 L 288.38 94.18 L 292.48 97.46 L 290.84 98.28 L 289.2 99.91 L 289.2 101.55 L 286.75 103.19 L 288.38 105.65 L 284.29 108.92 L 283.47 111.38 L 281.01 111.38 L 280.19 112.2 L 279.38 114.66 L 280.19 115.47 L 279.38 116.29 L 283.47 119.57 L 283.47 122.84 L 284.29 123.66 L 290.02 123.66 L 291.66 124.48 L 291.66 130.22 L 292.48 131.03 L 296.57 131.03 L 299.85 129.4 L 300.67 127.76 L 303.94 125.3 L 307.22 126.12 L 306.4 128.58 L 308.86 129.4 L 308.04 131.85 L 306.4 133.49 L 307.22 136.77 L 303.94 136.77 L 303.12 137.59 L 303.12 140.86 L 304.76 142.5 L 305.58 141.68 L 306.4 142.5 L 305.58 144.96 L 307.22 148.23 L 307.22 151.51 L 303.94 151.51 L 302.31 153.15 L 302.31 154.78 L 300.67 154.78 L 298.21 156.42 L 299.03 158.06 L 295.75 160.52 L 296.57 162.97 L 294.94 164.61 L 297.39 167.07 L 300.67 166.25 L 302.31 167.89 L 301.49 169.53 L 303.12 170.34 L 303.94 172.8 L 306.4 171.98 L 308.86 172.8 L 312.13 171.98 L 313.77 176.08 L 320.32 178.53 L 317.05 181.81 L 316.23 185.09 L 314.59 185.91 L 309.68 185.09 L 307.22 186.72 L 306.4 187.54 L 307.22 188.36 L 306.4 189.18 L 306.4 191.64 L 304.76 193.28 L 304.76 196.55 L 303.94 198.19 L 300.67 200.65 L 297.39 200.65 L 294.94 203.1 L 294.94 204.74 L 291.66 207.2 L 289.2 208.02 L 288.38 207.2 L 285.93 207.2 L 284.29 206.38 L 285.11 202.28 L 282.65 199.83 L 281.01 199.01 L 280.19 199.83 L 276.1 199.83 L 275.28 199.01 L 274.46 199.83 L 272.0 197.37 L 268.73 198.19 L 267.91 199.83 L 266.27 199.83 L 265.45 201.47 L 260.54 203.1 L 258.9 204.74 L 258.08 203.92 L 254.81 207.2 L 255.62 208.02 L 255.62 210.47 L 258.9 212.93 L 259.72 214.57 L 258.08 217.84 L 258.9 219.48 L 262.18 221.94 L 262.18 223.58 L 258.9 226.85 L 254.81 227.67 L 252.35 229.31 L 251.53 229.31 L 250.71 226.85 L 249.07 225.22 L 247.44 226.85 L 247.44 226.03 L 245.8 225.22 L 244.98 227.67 L 242.52 229.31 L 242.52 230.95 L 244.98 233.41 L 245.8 239.14 L 243.34 239.14 L 242.52 238.32 L 240.88 239.96 L 234.33 240.78 L 232.69 242.41 L 231.06 242.41 L 230.24 243.23 L 231.06 244.05 L 229.42 248.15 L 225.32 244.87 L 222.87 244.87 L 222.05 244.05 L 217.13 246.51 L 215.5 244.05 L 215.5 240.78 L 216.31 239.96 L 215.5 237.5 L 213.86 237.5 L 212.22 239.14 L 209.76 237.5 L 207.31 237.5 L 204.03 239.96 L 203.21 242.41 L 195.02 242.41 L 193.38 244.05 L 193.38 246.51 L 190.93 248.15 L 193.38 253.06 L 191.75 256.34 L 192.56 257.16 L 192.56 261.25 L 190.93 262.89 L 186.83 264.53 L 186.83 267.8 L 185.19 270.26 L 187.65 273.53 L 184.38 277.63 L 184.38 279.27 L 180.28 284.18 L 178.64 282.54 L 175.37 282.54 L 173.73 283.36 L 170.45 280.91 L 168.81 280.91 L 168.0 280.09 L 168.0 277.63 L 169.63 276.81 L 168.0 275.17 L 162.26 275.99 L 159.81 274.35 L 158.17 271.08 L 159.81 270.26 L 161.44 267.8 L 158.17 265.34 L 159.81 262.89 L 159.81 260.43 L 158.17 258.79 L 151.62 258.79 L 150.8 259.61 L 145.88 258.79 L 146.7 256.34 L 144.25 254.7 L 143.43 252.24 L 145.06 248.15 L 144.25 246.51 L 141.79 244.87 L 140.97 241.59 L 144.25 239.14 L 143.43 235.86 L 145.06 235.04 L 143.43 231.77 L 148.34 227.67 L 149.98 224.4 L 149.98 221.94 L 152.44 219.48 L 149.16 217.03 L 141.79 217.03 L 140.97 216.21 L 138.51 216.21 L 133.6 218.66 L 136.06 221.12 L 132.78 226.03 L 136.06 230.13 L 135.24 230.95 L 135.24 234.22 L 127.87 239.96 L 125.41 239.14 L 124.59 237.5 L 125.41 236.68 L 120.5 233.41 L 119.68 231.77 L 113.12 231.77 L 110.67 235.04 L 109.03 235.04 L 107.39 233.41 L 109.03 229.31 L 107.39 227.67 L 107.39 225.22 L 105.75 224.4 L 105.75 221.94 L 106.57 221.12 L 101.66 217.84 L 98.38 220.3 L 99.2 221.12 L 97.56 224.4 L 94.29 226.03 L 94.29 228.49 L 91.83 231.77 L 90.19 231.77 L 88.56 229.31 L 86.1 228.49 L 84.46 230.13 L 82.82 230.13 L 82.0 232.59 L 80.37 234.22 L 76.27 234.22 L 75.45 235.04 L 74.63 234.22 L 67.26 240.78 L 65.62 239.96 L 64.81 240.78 L 61.53 236.68 L 60.71 237.5 L 57.44 237.5 L 54.16 235.86 L 54.98 235.04 L 54.16 232.59 L 55.8 230.95 L 54.98 229.31 L 51.7 226.85 L 51.7 224.4 L 54.16 222.76 L 59.07 224.4 L 64.81 224.4 L 65.62 223.58 L 63.99 220.3 L 62.35 219.48 L 60.71 214.57 L 63.99 212.93 L 63.17 212.11 L 63.99 209.66 L 63.99 204.74 L 64.81 203.92 L 68.08 205.56 L 70.54 204.74 L 69.72 201.47 L 66.44 197.37 L 67.26 196.55 L 61.53 190.0 L 61.53 187.54 L 62.35 186.72 L 61.53 185.09 L 58.25 182.63 L 59.07 181.81 L 57.44 179.35 L 59.89 177.72 L 62.35 180.17 L 63.99 180.17 L 67.26 182.63 L 73.81 181.81 L 76.27 183.45 L 77.09 182.63 L 77.91 183.45 L 80.37 182.63 L 82.0 180.17 L 85.28 177.72 L 91.01 177.72 L 91.83 178.53 L 92.65 177.72 L 94.29 178.53 L 97.56 175.26 L 95.93 172.8 L 97.56 171.16 L 97.56 167.89 L 95.93 167.07 L 95.11 167.89 L 92.65 167.89 L 90.19 169.53 L 86.1 169.53 L 85.28 170.34 L 82.0 169.53 L 80.37 171.16 L 80.37 172.8 L 77.91 174.44 L 75.45 174.44 L 72.18 170.34 L 73.81 168.71 L 73.0 162.97 L 74.63 161.34 L 79.55 162.16 L 82.82 158.88 L 82.0 157.24 L 78.73 157.24 L 77.91 156.42 L 77.09 152.33 L 79.55 149.87 L 84.46 149.05 L 86.1 147.41 L 86.92 141.68 L 91.01 139.22 L 89.38 136.77 L 86.1 136.77 L 85.28 134.31 L 82.0 132.67 L 82.0 130.22 L 79.55 127.76 L 77.09 128.58 L 73.81 128.58 L 72.18 127.76 L 69.72 130.22 L 69.72 132.67 L 68.9 133.49 L 59.07 130.22 L 59.07 126.12 L 62.35 123.66 L 63.17 124.48 L 64.81 123.66 L 66.44 121.21 L 66.44 119.57 L 63.99 118.75 L 62.35 117.11 L 63.17 116.29 L 62.35 115.47 L 63.17 114.66 L 62.35 110.56 L 63.99 106.47 L 63.17 104.83 L 63.99 104.01 L 65.62 104.83 L 67.26 104.01 L 66.44 102.37 L 66.44 99.09 L 67.26 98.28 L 66.44 94.18 L 63.99 92.54 L 62.35 95.0 L 51.7 95.0 L 46.79 99.09 L 45.15 97.46 L 45.15 95.82 L 42.69 95.0 L 43.51 94.18 L 41.87 92.54 L 37.78 93.36 L 34.5 91.72 L 33.69 90.09 L 34.5 87.63 L 39.42 82.72 L 45.15 79.44 L 47.61 79.44 L 49.25 81.9 L 48.43 82.72 L 50.06 84.35 L 53.34 83.53 L 56.62 85.17 L 59.07 82.72 L 59.07 80.26 L 63.17 78.62 L 64.81 79.44 L 63.99 80.26 L 64.81 84.35 L 66.44 85.99 L 70.54 85.99 L 73.81 84.35 L 73.81 81.9 L 80.37 81.08 L 82.0 78.62 L 82.0 76.16 L 86.92 74.53 L 90.19 72.07 L 88.56 70.43 L 89.38 69.61 L 84.46 65.52 L 77.91 66.34 L 76.27 69.61 L 73.81 69.61 L 73.0 70.43 L 71.36 69.61 L 67.26 69.61 L 63.17 72.07 L 61.53 69.61 L 63.17 66.34 L 61.53 64.7 L 59.07 63.88 L 56.62 65.52 L 54.16 63.88 L 54.98 63.06 L 52.52 59.78 L 53.34 57.33 L 52.52 54.05 L 57.44 52.41 L 63.99 52.41 L 64.81 49.96 L 66.44 48.32 L 65.62 46.68 L 69.72 44.22 L 72.18 45.86 L 73.0 45.04 L 75.45 45.86 L 77.91 45.04 L 80.37 41.77 L 86.92 41.77 L 88.56 39.31 L 88.56 36.85 L 87.74 36.03 L 90.19 32.76 L 87.74 29.48 L 89.38 27.84 L 88.56 27.03 L 91.83 25.39 L 96.75 24.57 L 100.84 21.29 L 102.48 23.75 L 102.48 26.21 L 101.66 27.03 L 102.48 28.66 L 104.12 28.66 L 106.57 30.3 L 107.39 27.84 L 109.03 26.21 L 109.85 27.84 L 112.31 28.66 L 113.12 30.3 L 115.58 29.48 L 118.86 31.12 L 119.68 31.94 L 118.04 34.4 L 119.68 36.03 L 119.68 39.31 L 120.5 40.13 L 122.95 40.13 L 122.95 41.77 L 124.59 44.22 L 127.05 42.59 L 127.87 40.13 L 129.5 40.95 L 132.78 37.67 L 135.24 40.95 L 134.42 41.77 L 134.42 45.86 L 136.88 47.5 L 140.15 43.41 L 139.33 42.59 L 140.15 40.95 L 139.33 40.13 L 140.97 40.13 L 142.61 38.49 L 141.79 37.67 L 141.79 34.4 L 139.33 33.58 L 138.51 31.94 L 138.51 30.3 L 140.15 29.48 L 139.33 27.03 L 137.69 25.39 L 139.33 22.11 L 139.33 17.2 L 134.42 15.56 L 132.78 13.92 L 133.6 12.28 L 132.78 10.65 L 133.6 9.83 L 133.6 7.37 L 135.24 5.73 L 139.33 6.55 L 140.15 5.73 L 139.33 4.09 L 140.97 2.46 L 143.43 1.64 L 144.25 2.46 L 145.06 0.82 Z";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <footer
        id="site-footer"
        className="footer-wrapper"
        style={{
          background: "#7A351F",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Delight',",
          boxSizing: "border-box",
        }}
      >

        {/* =====================================================
            LARGE BACKGROUND CHIDIYA GHAR
        ====================================================== */}
        <div
          className="footer-bg-text"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%) scaleX(1.34)",
            transformOrigin: "center bottom",
            fontFamily: "'Grift'",
            fontWeight: 500,
            fontSize: "200px",
            color: "rgba(255, 255, 255, 0.13)",
            lineHeight: "0.75",
            whiteSpace: "nowrap",
            userSelect: "none",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              display: "inline-block",
              pointerEvents: "auto",
              transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-16px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Chidiya
          </span>

          <span
            style={{
              display: "inline-block",
              marginLeft: "18px",
              pointerEvents: "auto",
              transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-16px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ghar
          </span>
        </div>


        {/* =====================================================
            MAIN WHITE FOOTER CARD
        ====================================================== */}
        <div
          className="footer-card"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1055px",
            margin: "-7px auto",
            background: "#FFFFFF",
            borderRadius: "20px",
            boxSizing: "border-box",
            boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
            display: "grid",
            columnGap: "12px",
          }}
        >

          {/* ===================================================
              COMPANY
          ==================================================== */}
          <div
            className="footer-col"
            style={{
              position: "relative",
              height: "100%",
            }}
          >
            <h3
              style={{
                margin: "0 0 22px",
                fontFamily: "'Grift'",
                fontSize: "27px",
                fontWeight: 500,
                color: "#713521",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Company
            </h3>

            {/* Our Amenities */}
            <a
              href="#services-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services-section");
              }}
              style={footerLinkStyle}
            >
              Our Amenities
            </a>

            {/* Rooms */}
            <a
              href="#accommodations-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("accommodations-section");
              }}
              style={footerLinkStyle}
            >
              Rooms
            </a>

            {/* Email */}
            <a
              href="mailto:chidiya@ghar.com"
              style={{
                ...footerLinkStyle,
                marginBottom: "0",
              }}
            >
              chidiya@ghar.com
            </a>

            {/* =================================================
                BOOK NOW
            ================================================== */}
            <div className="footer-book-btn-wrapper">
              <a
                href="#management-section"
                onClick={(e) => {
                  e.preventDefault();
                  const section =
                    document.getElementById("management-section") ||
                    document.querySelector(".et_pb_section_7");

                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "84px",
                  height: "34px",
                  padding: "0 15px",
                  boxSizing: "border-box",
                  borderRadius: "50px",
                  fontFamily: "'Grift', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  background: "rgba(113, 53, 33, 0.08)",
                  backdropFilter: "blur(3px)",
                  WebkitBackdropFilter: "blur(3px)",
                  boxShadow: "inset 0 0 0 1.5px rgba(113, 53, 33, 0.45)",
                  color: "#713521",
                  textDecoration: "none",
                  lineHeight: 1,
                  transition: "all 200ms ease",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(113, 53, 33, 0.22)";
                  e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px rgba(113, 53, 33, 0.85), 0 4px 16px rgba(113, 53, 33, 0.2)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(113, 53, 33, 0.08)";
                  e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px rgba(113, 53, 33, 0.45)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book Now
              </a>
            </div>
          </div>

          {/* ===================================================
              SUPPORT
          ==================================================== */}
          <div className="footer-col">
            <h3
              style={{
                margin: "0 0 22px",
                fontFamily: "'Grift'",
                fontSize: "27px",
                fontWeight: 500,
                color: "#713521",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Support
            </h3>

            {/* FAQs */}
            <a
              href="#"
              style={footerLinkStyle}
              onClick={(e) => e.preventDefault()}
            >
              FAQs
            </a>

            {/* Contact Us */}
            <a
              href="#site-footer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("site-footer");
              }}
              style={footerLinkStyle}
            >
              Contact Us
            </a>
          </div>

          {/* ===================================================
              TRUST & LEGAL
          ==================================================== */}
          <div className="footer-col">
            <h3
              style={{
                margin: "0 0 22px",
                fontFamily: "'Grift'",
                fontSize: "27px",
                fontWeight: 500,
                color: "#713521",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                maxWidth: "170px",
              }}
            >
              Trust &amp; Legal
            </h3>

            {/* Terms */}
            <a
              href="#"
              style={footerLinkStyle}
              onClick={(e) => e.preventDefault()}
            >
              Terms &amp; Conditions
            </a>

            {/* Privacy */}
            <a
              href="#"
              style={footerLinkStyle}
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>
          </div>

          {/* ===================================================
              PUNE MAP
          ==================================================== */}
          <div
            className="footer-map-container footer-map-gemini-wrap"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
              cursor: "default",
            }}
          >
            {/* Map image — never changes color or opacity */}
            <img
              src={puneLocationImg}
              alt="Pune Location"
              className="footer-map-img"
              style={{
                width: "100%",
                maxWidth: "345px",
                height: "285px",
                objectFit: "contain",
                display: "block",
                opacity: 1,
                position: "relative",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />

            {/* SVG overlay — traveling border segment on map cutout silhouette */}
            <svg
              className="footer-map-border-svg"
              viewBox="0 0 345 285"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 3,
                overflow: "visible",
              }}
            >
              {/* Permanent subtle base outline on exact map contour (10-15% opacity) */}
              <path
                className="pune-contour-base"
                d={PUNE_MAP_SILHOUETTE_PATH}
              />

              {/* Primary clockwise ring */}
              <path
                className="pune-contour-traveler pune-contour-cw"
                pathLength="1000"
                d={PUNE_MAP_SILHOUETTE_PATH}
              />

              {/* Counter-clockwise ring traveling in opposite direction on hover */}
              <path
                className="pune-contour-traveler pune-contour-ccw"
                pathLength="1000"
                d={PUNE_MAP_SILHOUETTE_PATH}
              />

              {/* Tertiary accented wave for multi-ring ripple effect on hover */}
              <path
                className="pune-contour-traveler pune-contour-wave2"
                pathLength="1000"
                d={PUNE_MAP_SILHOUETTE_PATH}
              />
            </svg>

            {/* Map Pins — Chidiya Ghar, surrounding landmarks, and central IT Hub */}
            {mapPins.map((pin) => (
              <a
                key={pin.id}
                href={pin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-pin"
                title={pin.name}
                aria-label={pin.name}
                style={{
                  position: "absolute",
                  top: pin.top,
                  left: pin.left,
                  transform: "translate(-50%, -100%)",
                  zIndex: pin.isPrimary ? 5 : 4,
                  cursor: "pointer",
                  padding: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  animationDelay: pin.delay,
                }}
              >
                {/* Hover Tooltip Label */}
                <span className="footer-pin-tooltip">
                  {pin.name}
                </span>

                <svg
                  width={pin.width}
                  height={pin.height}
                  viewBox="0 0 28 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter: "drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.35))",
                    display: "block",
                  }}
                >
                  <path
                    d="M13 3C7.48322 3 3 7.5709 3 13.1953C3 15.0984 3.51678 16.9506 4.50006 18.5479L12.3221 31.5987C12.4556 31.8196 12.6556 31.9556 12.8889 31.9896C13.2055 32.0405 13.5557 31.9046 13.7389 31.5818L21.5834 18.4119C22.5166 16.8487 23 15.0305 23 13.1953C23 7.5709 18.5168 3 13 3ZM13 18.293C10.2001 18.293 8 15.982 8 13.1953C8 10.3915 10.2499 8.09766 13 8.09766C15.7501 8.09766 18 10.3915 18 13.1953C18 15.965 15.8333 18.293 13 18.293Z"
                    fill={pin.color || "#713520"}
                    stroke={pin.isPrimary ? "none" : "#895737"}
                    strokeWidth={pin.isPrimary ? 0 : 0.6}
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* ===================================================
              COPYRIGHT
          ==================================================== */}
          <div
            className="footer-copyright"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#9A6A57",
              fontFamily: "'Delight'",
              fontSize: "9px",
              fontWeight: 400,
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            2026 Chidiya Ghar. All rights reserved
          </div>

        </div>
      </footer>
    </>
  );
}


/* =========================================================
   FOOTER LINK STYLE
========================================================= */

const footerLinkStyle = {
  display: "block",

  marginBottom: "18px",

  color: "#713521",

  textDecoration: "none",

  fontFamily:
    "'Delight'",

  fontSize: "10.5px",

  fontWeight: 600,

  lineHeight: 1.2,

  transition:
    "opacity 0.2s ease, transform 0.2s ease",
};