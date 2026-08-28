export default function ServicesSection() {
  return (
    <>
      <div className={"et_pb_section et_pb_section_2 et_section_regular"}>
        {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t"}
        <div className={"et_pb_row et_pb_row_3 et_pb_gutters2"}>
          {"\n\t\t\t\t"}
          <div
            className={
              "et_pb_column et_pb_column_4_4 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child"
            }
          >
            {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t"}
            <div
              className={
                "et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_center et_pb_bg_layout_light"
              }
            >
              {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t"}
              <div className={"et_pb_text_inner"}>
                <p>{"Amenities"}</p>
                {"\n"}
                <h3>{"Everything You Need. Nothing You Don't."}</h3>
              </div>
              {"\n\t\t\t"}
            </div>
            {"\n\t\t\t"}
          </div>
          {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t"}
        </div>
        
        {/* Compact 4x2 Grid for 8 Amenities */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            
            {/* Item 1 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Smart-Keys-one.png"} alt={"Comfortable Rooms"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>Comfortable Rooms</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Thoughtfully appointed spaces built for everyday living.</p>
            </div>

            {/* Item 2 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Smart-Keys-one.png"} alt={"Clean Common Areas"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>Clean Common Areas</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Maintained to the highest standard, every single day.</p>
            </div>

            {/* Item 3 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Room-Service.png"} alt={"High-Speed Wi-Fi"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>High-Speed Wi-Fi</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Reliable connectivity throughout the entire building.</p>
            </div>

            {/* Item 4 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Luggage-Store.png"} alt={"24x7 Security"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>24×7 Security</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Round-the-clock safety so you can truly relax.</p>
            </div>

            {/* Item 5 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Smart-Keys-one.png"} alt={"Housekeeping"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>Housekeeping</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Regular cleaning service included in your stay.</p>
            </div>

            {/* Item 6 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Room-Service.png"} alt={"Secure Parking"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>Secure Parking</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Dedicated parking for residents and guests.</p>
            </div>

            {/* Item 7 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Luggage-Store.png"} alt={"Recreational Spaces"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>Recreational Spaces</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Lounge and social areas designed for connection.</p>
            </div>

            {/* Item 8 */}
            <div className="dh-service-card" style={{ background: "#FDFBF8", padding: "25px", borderRadius: "10px", border: "1px solid rgba(218, 180, 157, 0.3)", transition: "all 0.3s ease" }}>
              <img src={"wp-content/uploads/2022/08/Smart-Keys-one.png"} alt={"Prime Location"} style={{ height: "30px", marginBottom: "15px" }} />
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px" }}>Prime Location</h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5", margin: 0 }}>Convenient access to transport, markets and more.</p>
            </div>

          </div>
        </div>
        {"\n\t\t\t\t\n\t\t\t\t\n\t\t\t"}
      </div>
    </>
  );
}
