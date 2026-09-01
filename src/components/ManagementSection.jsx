import { useState } from "react";

export default function ManagementSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    dateFrom: "",
    dateTill: "",
    totalRooms: "1 Room",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      address: "",
      dateFrom: "",
      dateTill: "",
      totalRooms: "1 Room",
      requirements: "",
    });
    setSubmitted(false);
  };

  const inputStyle = {
    width: "100%",
    height: "48px",
    borderRadius: "20px",
    border: "1px solid var(--tan)",
    background: "var(--white)",
    padding: "0 18px",
    fontSize: "14px",
    color: "var(--ink)",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--dark-brown)",
    marginBottom: "6px",
    letterSpacing: "0.02em",
  };

  return (
    <>
      <div
        className={
          "et_pb_section et_pb_section_7 et_pb_with_background et_section_regular"
        }
        style={{ padding: "50px 0" }}
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
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <h2
                    style={{
                      fontFamily: "'Grift', sans-serif",
                      fontSize: "38px",
                      color: "var(--ink)",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    Enquiry Form
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Delight', sans-serif",
                      color: "var(--terracotta)",
                      fontSize: "15px",
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    Fill out the form below to enquire about your stay and requirements
                  </p>
                </div>
              </div>
            </div>

            <div
              className={"bookingWrap"}
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                padding: "36px 36px",
                borderRadius: "25px",
                boxShadow: "0 10px 40px rgba(94, 48, 35, 0.12)",
                background: "var(--cream)",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    background: "var(--white)",
                    borderRadius: "20px",
                    border: "1px solid var(--tan)",
                  }}
                >
                  <div style={{ fontSize: "46px", marginBottom: "12px" }}>🌿</div>
                  <h3
                    style={{
                      fontFamily: "'Grift', sans-serif",
                      fontSize: "26px",
                      color: "var(--dark-brown)",
                      marginBottom: "10px",
                    }}
                  >
                    Enquiry Submitted Successfully!
                  </h3>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      maxWidth: "520px",
                      margin: "0 auto 20px",
                    }}
                  >
                    Thank you, <strong style={{ color: "var(--dark-brown)" }}>{formData.firstName} {formData.lastName}</strong>. We have received your enquiry for <strong style={{ color: "var(--dark-brown)" }}>{formData.totalRooms}</strong> from <strong style={{ color: "var(--dark-brown)" }}>{formData.dateFrom}</strong> till <strong style={{ color: "var(--dark-brown)" }}>{formData.dateTill}</strong>.
                    Our team will contact you shortly at <strong>{formData.mobileNumber}</strong> or <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className={"diviBtnDark"}
                    style={{
                      border: "none",
                      padding: "12px 32px",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  style={{ display: "flex", flexDirection: "column", gap: "18px" }}
                  onSubmit={handleSubmit}
                >
                  {/* First Name & Last Name */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "18px",
                    }}
                  >
                    <div className={"field"}>
                      <label style={labelStyle}>
                        First Name <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div className={"field"}>
                      <label style={labelStyle}>
                        Last Name <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile Number & Email Address */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "18px",
                    }}
                  >
                    <div className={"field"}>
                      <label style={labelStyle}>
                        Mobile Number <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div className={"field"}>
                      <label style={labelStyle}>
                        Email Address <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Visitor Address */}
                  <div className={"field"}>
                    <label style={labelStyle}>
                      Visitor Address <span style={{ color: "var(--terracotta)" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your complete address / city"
                      value={formData.address}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </div>

                  {/* Date From, Date Till & Total Room */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                      gap: "18px",
                    }}
                  >
                    <div className={"field"}>
                      <label style={labelStyle}>
                        Date From <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <input
                        type="date"
                        name="dateFrom"
                        value={formData.dateFrom}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div className={"field"}>
                      <label style={labelStyle}>
                        Date Till <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <input
                        type="date"
                        name="dateTill"
                        value={formData.dateTill}
                        min={formData.dateFrom || undefined}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div className={"field"}>
                      <label style={labelStyle}>
                        Total Room <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <select
                        name="totalRooms"
                        value={formData.totalRooms}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          cursor: "pointer",
                        }}
                        required
                      >
                        <option value="1 Room">1 Room</option>
                        <option value="2 Rooms">2 Rooms</option>
                        <option value="3 Rooms">3 Rooms</option>
                        <option value="4 Rooms">4 Rooms</option>
                        <option value="5+ Rooms">5+ Rooms</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirement Section */}
                  <div className={"field"}>
                    <label style={labelStyle}>
                      Requirement Section
                    </label>
                    <textarea
                      name="requirements"
                      rows={4}
                      placeholder="Specify any special requirements, preferences, extra beds, arrival time, or queries..."
                      value={formData.requirements}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        minHeight: "100px",
                        borderRadius: "20px",
                        border: "1px solid var(--tan)",
                        background: "var(--white)",
                        padding: "14px 18px",
                        fontSize: "14px",
                        color: "var(--ink)",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ marginTop: "10px", textAlign: "center" }}>
                    <button
                      type={"submit"}
                      className={"diviBtnDark"}
                      style={{
                        border: "none",
                        width: "100%",
                        justifyContent: "center",
                        height: "50px",
                        fontSize: "16px",
                        letterSpacing: "0.05em",
                        cursor: "pointer",
                      }}
                    >
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
