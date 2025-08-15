import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./MonthlyKitPage.css";
const MonthlyKitPage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        fontFamily: "'Lexend', 'Noto Sans', sans-serif",
        minHeight: "100vh",
      }}
    >
     {/* Hero Section */}
<section className="container mt-5 py-5">
  <div className="row g-4 align-items-center">
    {/* Hero Image with overlay */}
    <div className="col-lg-12" >
      <div
        className="d-flex flex-column align-items-left justify-content-center text-center rounded p-4 p-lg-5"
        style={{
          minHeight: "500px",
          backgroundImage:
            'linear-gradient(rgba(29, 149, 186, 0.2), rgba(0,0,0,0.5)), url("/images/stem box.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-black fw-bold display-5 mb-3 text-start">
          STEM Explorer Series – 12-Month DIY STEM Subscription Kit
        </h1>
        <p className="text-muted fs-5 mb-4 text-start">
          Learn, Build & Innovate Every Month!
        </p>
        <p className="text-black fs-6 mb-4 text-start" style={{ maxWidth: "700px" }}>
          Maklab Innovations offers a comprehensive STEM education subscription
          box service designed for students in grades 5 to 12. Our kits focus on
          hands-on learning, fostering innovation, and building practical skills
          through engaging projects.
        </p>
         <div className="w-100 d-flex justify-content-left">
          <button
  className="btn px-4 py-2 fw-bold text-white"
  style={{ backgroundColor: "#d67215ff", border: "none" }}
>
  Subscribe Now
</button>
            </div>
      </div>
    </div>
  </div>
</section>
    {/* Features Section */}
<section className="container py-6">
  <div className="bg-light p-4 rounded shadow-sm">
    <h1 className="fw-bold fs-2 mb-3 text-center text-md-center">
      Key Features of Our 12-Month STEM Program
    </h1>
    <p className="text-muted text-center">
      Our 12-month STEM program offers a structured, hands-on learning experience designed to inspire innovation and critical thinking among students from Grades 5 to 12.
    </p>

    <div className="row g-4">
      {/* Feature 1 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start p-3 border rounded h-100">
          <i className="bi bi-box fs-1 mb-3" style={{ color: "#39b6f9ff" }}></i>
          <h4 className="text-dark fs-5 fw-bold lh-tight mb-0">
            Hands-On Learning
          </h4>
          <p className="text-muted fs-6">
            Engage with electronics, sensors, and microcontrollers through real-world DIY kits that encourage creativity and practical problem-solving.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start p-3 border rounded h-100">
          <i className="bi  bi-motherboard fs-1 mb-3" style={{ color: "#e9f32cff" }}></i>
          <h4 className="text-dark fs-5 fw-bold lh-tight mb-0">
            Monthly Theme-Based Projects
          </h4>
          <p className="text-muted fs-6">
            Explore a new theme each month—such as robotics, smart farming, AI, or automation—ensuring learning stays dynamic and engaging.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start p-3 border rounded h-100">
          <i className="bi bi-camera-reels-fill fs-1 mb-3" style={{ color: "#1d8426ff" }}></i>
          <h4 className="text-dark fs-5 fw-bold lh-tight mb-0">
            Guided Video Tutorials
          </h4>
          <p className="text-muted fs-6">
            Learn at your own pace with step-by-step expert-led video tutorials—ideal for both beginners and advanced learners.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start p-3 border rounded h-100">
          <i className="bi bi-person-gear fs-1 mb-3" style={{ color: "#e9f32cff" }}></i>
          <h4 className="text-dark fs-5 fw-bold lh-tight mb-0">
            Live Support & Mentorship
          </h4>
          <p className="text-muted fs-6">
            Participate in monthly live sessions for project demonstrations, troubleshooting, and personalized mentorship from industry experts.
          </p>
        </div>
      </div>

      {/* Feature 5 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start p-3 border rounded h-100">
          <i className="bi bi-patch-check-fill fs-1 mb-3" style={{ color: "#1d8426ff" }}></i>
          <h3 className="text-dark fs-5 fw-bold lh-tight mb-0">
            Certification & Badges
          </h3>
          <p className="text-muted fs-6">
            Receive digital certificates and collectible badges each month to recognize your achievements and track your progress.
          </p>
        </div>
      </div>

      {/* Feature 6 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start p-3 border rounded h-100">
          <i className="bi bi-calendar2 fs-1 mb-3" style={{ color: "#39b6f9ff" }}></i>
          <h3 className="text-dark fs-5 fw-bold lh-tight mb-0">
            Free Vacation Camp Access
          </h3>
          <p className="text-muted fs-6">
            Students opting for one-time payment enjoy exclusive access to a hands-on innovation camp during school holidays.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Monthly Themes Showcase */}
<section className="container-fluid px-4 pb-5 ">
  <h2 className="text-dark fs-5 fw-bold lh-tight text-center pb-3 pt-5">Monthly Themes Showcase
  </h2>
  {/* Flex row that wraps on smaller screens */}
  <div className="d-flex flex-wrap gap-4 justify-content-center">
    {/* Robotics */}
    <div className="d-flex flex-column gap-3 rounded" style={{ flex: "1 1 250px", maxWidth: "300px" }}>
      <div
        className="w-100 ratio ratio-16x9 rounded"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu7IF8eCaFvOe-W1S1RxpsJiE5lRldKtxDBPiIJLApZpZXJLteAwDqSp8UG-deIKNJd1fI6dr42RWM04ge4jWVdIa1VBSl6eFJt1gwZC4SU_hY5c5jXeuZGGwUn_Jfjd_J-mlf3SLTt_pefbdgIOGtUbL9gU95zqnL92Hktor1r7G9U6JzEN0wIs1pbm051gAw_sPOiAN_x8OixfziuAg3yu5vtCxv_hs_I7xzl3BEOqw7boQB9FynDFEulnkEIGJlu7TLuAL7gQ")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="text-dark fs-6 fw-medium text-center">Robotics</p>
    </div>
    {/* Smart Systems */}
    <div className="d-flex flex-column gap-3 rounded" style={{ flex: "1 1 250px", maxWidth: "300px" }}>
      <div
        className="w-100 ratio ratio-16x9 rounded"
        style={{
          backgroundImage:
            'url("https://ssi-master.eu/wp-content/uploads/2020/11/dreamstime_m_187968555-950x500.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="text-dark fs-6 fw-medium text-center">Smart Systems</p>
    </div>
    {/* AI & Machine Learning */}
    <div className="d-flex flex-column gap-3 rounded" style={{ flex: "1 1 250px", maxWidth: "300px" }}>
      <div
        className="w-100 ratio ratio-16x9 rounded"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/f1/9c/08/f19c089f055ec67ff6b2775bff96096f.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="text-dark fs-6 fw-medium text-center">AI & Machine Learning</p>
    </div>
    {/* IoT & Sensors */}
    <div className="d-flex flex-column gap-3 rounded" style={{ flex: "1 1 250px", maxWidth: "300px" }}>
      <div
        className="w-100 ratio ratio-16x9 rounded"
        style={{
          backgroundImage:
            'url("https://www.checkboxtechnology.com/wp-content/uploads/2020/09/1_WtdyFZNDahpaoaxMGSCXIw.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="text-dark fs-6 fw-medium text-center">IoT & Sensors</p>
    </div>
  </div>
</section>
{/* Subscription Plans */}
<section className="container pb-7">
  <div className="bg-light p-4 rounded shadow-sm">
    <h2 className="section-title text-center mb-4">Subscription Plans & Pricing</h2>
    <div className="row g-3 px-4 py-3 justify-content-center">
      
      {/* Annual Plan */}
      <div className="col-md-4">
        <div className="subscription-card h-100 p-3">
          <h5 className="fw-bold">Annual Plan</h5>
          <p className="d-flex align-items-baseline gap-1">
            <span className="display-6 fw-bold text-dark">₹9999</span>
            <span className="text-muted fw-semibold">/year</span>
          </p>
          <button className="btn-subscribe w-auto mb-3">Subscribe Now</button>
          <ul className="list-unstyled small">
            <li className="mb-2">
              <i className="bi bi-check-circle text-primary me-2"></i>
              12 Monthly Kits
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle text-primary me-2"></i>
              Access to all themes
            </li>
            <li className="mb-2">
              <i className="bi bi-check-circle text-primary me-2"></i>
              Live Online Support
            </li>
          </ul>
        </div>
      </div>

      {/* Bi-Annual Installments Plan */}
      <div className="col-md-4">
  <div className="subscription-card h-100 p-3 position-relative">
    <span className="special-offer-badge">Special Offer</span>
    <h5 className="fw-bold">Bi-Annual Installments</h5>
    <p className="d-flex align-items-baseline gap-1">
      <span className="display-6 fw-bold text-dark">₹5500</span>
      <span className="text-muted fw-semibold">x 2 installments</span>
    </p>
    <button className="btn-subscribe w-auto mb-3">Subscribe Now</button>
    <div>
      <div className="feature-item mb-2">
        <i className="bi bi-check-circle"></i>
        6 Monthly Kits (2 installments)
      </div>
      <div className="feature-item mb-2">
        <i className="bi bi-check-circle"></i>
        Access to selected themes
      </div>
      <div className="feature-item mb-2">
        <i className="bi bi-check-circle"></i>
        Community Access
      </div>
      <div className="feature-item">
        <i className="bi bi-check-circle"></i>
        Certificate & Badge
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</section>

     <section className="container text-center mt-5 pb-5">
  <h2 className="section-title mb-4">How It Works</h2>
  <div className="row g-4 justify-content-center">
    {/* Subscribe */}
    <div className="col-md d-flex flex-column align-items-center gap-3 rounded border border-light bg-white p-4">
      <div className="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
          <path d="M229.66,77.66l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,88V216a16,16,0,0,0,16,16H96a8,8,0,0,0,8-8V152h48v72a8,8,0,0,0,8,8h48a16,16,0,0,0,16-16V88A8,8,0,0,0,229.66,77.66Z"></path>
        </svg>
      </div>
      <div>
        <h2 className="text-dark fs-6 fw-bold mb-1">Subscribe</h2>
        <p className="text-secondary small mb-0">Sign up online for your chosen plan.</p>
      </div>
    </div>

    {/* Receive Your Kit */}
    <div className="col-md d-flex flex-column align-items-center gap-3 rounded border border-light bg-white p-4">
      <div className="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
          <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
        </svg>
      </div>
      <div>
        <h2 className="text-dark fs-6 fw-bold mb-1">Receive Your Kit</h2>
        <p className="text-secondary small mb-0">Delivered to your doorstep each month.</p>
      </div>
    </div>

    {/* Learn & Build */}
    <div className="col-md d-flex flex-column align-items-center gap-3 rounded border border-light bg-white p-4">
      <div className="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
          <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path>
        </svg>
      </div>
      <div>
        <h2 className="text-dark fs-6 fw-bold mb-1">Learn & Build</h2>
        <p className="text-secondary small mb-0">Follow tutorials & join live sessions.</p>
      </div>
    </div>

  </div>
</section>
{/* <!-- Testimonials Section --> */}
<h2 className="text-dark fs-5 fw-bold  px-4 pb-3 pt-5">Testimonials</h2>

<div className="bg-white p-4">
  {/* <!-- Single Testimonial --> */}
  <div className="mb-4">
    <div className="d-flex align-items-center mb-2">
      <div
        className="rounded-circle me-3"
        style={{
          width: "40px",
          height: "40px",
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvLNHr9Q4TKXH588u4pdDJQivTUJ5q6apJYOMZYb2zF3P79KA9lFkbCj0v7yczd75Hk7GdL8-9LxUxspJDUCTLwNDLRSR1UBZf6gMe06v4_6TV0fePjk0EP-99kcUvRGbqm_sBIz8c7x06ea63Uh3ZFZIgOr0OHCqZdML3gtqb-nKxJ8YY9YGRzul7Mizjk79m_afaOIOTOCiA4OwPWJINeRQp-ci5ZLSmT4XygtNIXa4mycSbX8KuDCfflj274WKXeLf80alTPw")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <p className="mb-0 fw-medium text-dark">Anya Sharma</p>
        <p className="mb-0 text-muted small">2023-08-15</p>
      </div>
    </div>
    <div className="d-flex mb-2">
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark"></i>
    </div>
    <p className="text-muted mb-0">
      The STEM Explorer Series is designed for students in grades 5 to 12, typically aged 10 to 18 years.
    </p>
  </div>

  {/* <!-- Another Testimonial --> */}
  <div className="mb-4">
    <div className="d-flex align-items-center mb-2">
      <div
        className="rounded-circle me-3"
        style={{
          width: "40px",
          height: "40px",
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvLNHr9Q4TKXH588u4pdDJQivTUJ5q6apJYOMZYb2zF3P79KA9lFkbCj0v7yczd75Hk7GdL8-9LxUxspJDUCTLwNDLRSR1UBZf6gMe06v4_6TV0fePjk0EP-99kcUvRGbqm_sBIz8c7x06ea63Uh3ZFZIgOr0OHCqZdML3gtqb-nKxJ8YY9YGRzul7Mizjk79m_afaOIOTOCiA4OwPWJINeRQp-ci5ZLSmT4XygtNIXa4mycSbX8KuDCfflj274WKXeLf80alTPw")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div>
        <p className="mb-0 fw-medium text-dark">John Doe</p>
        <p className="mb-0 text-muted small">2023-07-10</p>
      </div>
    </div>
    <div className="d-flex mb-2">
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark me-1"></i>
      <i className="bi bi-star-fill text-dark"></i>
    </div>
    <p className="text-muted mb-0">Loved the interactive sessions and project kits!</p>
  </div>
</div>
    <div className="bg-light p-4 rounded shadow-sm">
<h2 class="text-dark fs-5 fw-bold lh-tight  text-center px-4 pb-3 pt-5">FAQ</h2>
<div class="d-flex flex-column p-4 gap-3">
  {/* <!-- FAQ Item --> */}
  <details class="d-flex flex-column rounded border border-secondary bg-white px-3 py-2" open>
    <summary class="d-flex align-items-center justify-content-between gap-3 py-2">
      <p class="text-dark fs-6 fw-medium mb-0">What age group is this for?</p>
      <div class="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </div>
    </summary>
    <p class="text-secondary small mb-2">
      The STEM Explorer Series is designed for students in grades 5 to 12, typically aged 10 to 18 years.
    </p>
  </details>
  {/* <!-- FAQ Item --> */}
  <details class="d-flex flex-column rounded border border-secondary bg-white px-3 py-2">
    <summary class="d-flex align-items-center justify-content-between gap-3 py-2">
      <p class="text-dark fs-6 fw-medium mb-0">How long does delivery take?</p>
      <div class="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </div>
    </summary>
    <p class="text-secondary small mb-2">
      Delivery typically takes 5–7 business days after shipping.
    </p>
  </details>
  {/* <!-- FAQ Item --> */}
  <details class="d-flex flex-column rounded border border-secondary bg-white px-3 py-2">
    <summary class="d-flex align-items-center justify-content-between gap-3 py-2">
      <p class="text-dark fs-6 fw-medium mb-0">What if a component is missing or damaged?</p>
      <div class="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </div>
    </summary>
    <p class="text-secondary small mb-2">
      Contact our support team within 7 days, and we’ll send you replacements.
    </p>
  </details>
{/* 
  <!-- FAQ Item --> */}
  <details class="d-flex flex-column rounded border border-secondary bg-white px-3 py-2">
    <summary class="d-flex align-items-center justify-content-between gap-3 py-2">
      <p class="text-dark fs-6 fw-medium mb-0">Is online support available?</p>
      <div class="text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </div>
    </summary>
    <p class="text-secondary small mb-2">
      Yes, we offer live chat and email support during business hours.
    </p>
  </details>
</div>
</div>
<section className="container text-center my-5">
  <div
    className="p-4 rounded-3 text-white"
    style={{ backgroundColor: "#48AAAD" }}
  >
    <h2 className="fw-bold mb-3">Ready to Ignite Curiosity?</h2>
    <p className="mb-4">
      Make a one-time payment and get a free vacation camp for your child.
      Limited spots available, so don’t miss out on this amazing opportunity!
    </p>
    <div className="d-flex justify-content-center">
      <button
        className="fw-bold text-white px-5 rounded-3"
        style={{
          minWidth: "84px",
          maxWidth: "480px",
          height: "48px",
          backgroundColor: "#f48925",
          border: "none"
        }}
      >
        <span className="text-truncate">
          Start your child's Innovation Journey
        </span>
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default MonthlyKitPage;
