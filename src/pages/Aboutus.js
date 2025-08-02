import React from 'react';

const Aboutus = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{ fontFamily: 'Inter, Noto Sans, sans-serif', backgroundColor: '#fff', color: '#111518' }}
    >
      
      {/* Main content */}
      <main className="flex-grow-1 container py-5">
        <section className="text-center mb-5">
          <h2 className="fw-bold mb-3">Our Specialization</h2>
          <p>
            We specialize in creating user-centric designs that are both aesthetically pleasing and highly functional.
            Our team of experienced designers and developers work collaboratively to bring your vision to life, ensuring
            every detail aligns with your brand identity and business goals.
          </p>
        </section> 

        <section className="text-center mb-5">
          <h2 className="fw-bold mb-3">Our Products</h2>
          <p>
            Our product suite includes a range of design solutions tailored to meet the diverse needs of our clients.
            From web and mobile app design to branding and marketing materials, we offer comprehensive services that
            cover every aspect of your design requirements.
          </p>
        </section>
   <section className="text-center mb-5">
  <h2 className="fw-bold mb-3">Company Details</h2>
  <div className="border-top pt-3">
    <div className="d-flex  mb-2">
      <span className="text-secondary fw-normal me-2">Contact:</span>
      <span>contact@maklab.com</span>
    </div>
    <div className="border-top pt-3">
    <div className="d-flex ">
      <span className="text-secondary fw-normal me-2">Address:</span>
      <span>technopark, tvm</span>
    </div>
  </div>
  </div>
</section>

        {/* Social Media */}
        <div className="text-center mb-3 text-secondary">Follow us on social media</div>
        <div className="d-flex justify-content-center gap-4">
          <div className="text-center">
            <div className="bg-light rounded-circle p-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
              </svg>
            </div>
            <p className="fw-medium">Facebook</p>
          </div>
          <div className="text-center">
            <div className="bg-light rounded-circle p-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
              </svg>
            </div>
            <p className="fw-medium">Instagram</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aboutus;
