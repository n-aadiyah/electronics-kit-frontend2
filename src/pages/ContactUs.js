import React from "react";

const ContactUs = () => {
  return (
      <div className="container py-5 page-content">
        <h5 className="fw-bold pt-4">Contact Information</h5>
        <div className="border-top pt-4 mb-4">
          <div className="row mb-3 info-row">
            <div className="col-sm-3 info-label">Email</div>
            <div className="col-sm-9 info-value">contact@maklab.com</div>
          </div>
          <div className="row mb-3 info-row">
            <div className="col-sm-3 info-label">Phone</div>
            <div className="col-sm-9 info-value">91-123-456-789</div>
          </div>
        </div>

        <h5 className="fw-bold pt-3">Job Applications & Internships</h5>
        <p className="pt-1 section-text">
          For job applications and internship inquiries, please send your resume and cover letter to{" "}
          <strong>careers@maklab.com</strong>.
        </p>

        <h5 className="fw-bold pt-3">General Inquiries</h5>
        <form className="pt-3">
          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" placeholder="First Name" className="form-control form-control-custom custom-input" />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Last Name" className="form-control form-control-custom custom-input" />
            </div>
            <div className="col-md-6">
              <input type="email" placeholder="Email" className="form-control form-control-custom custom-input" />
            </div>
            <div className="col-md-6">
              <input type="tel" placeholder="Phone Number" className="form-control form-control-custom custom-input" />
            </div>
          </div>
          <div className="text-end mt-4">
             <button
            type="submit"
            className="btn rounded-pill mt-4 w-25"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px",
              border: "none",
            }}
          >
            Submit
          </button>
          </div>
        </form>
      </div>
  );
};

export default ContactUs;
