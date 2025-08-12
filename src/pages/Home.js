// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Section */}
      <div className="container-fluid" style={{ backgroundColor: "#48AAAD" }}>
        {/* Navbar with Logo */}
        <Container>
          <Row className="align-items-center" style={{ minHeight: "50vh" }}>
            {/* Text Content */}
            <Col md={7} className="text-black text-center text-md-start p-0">
              <h1 className="fw-bold display-2 display-md-4 p-0 mt-0">
                From Curiosity to Creation
              </h1>
              <Button
                size="md"
                className="mt-2 fw-bold custom-btn"
                href="/products"
              >
                Start Building
              </Button>
            </Col>

            {/* Image */}
            <Col md={4} className="text-center mt-5 mt-md-n6">
              <img
                src="/images/stemtans.png"
                alt="STEM Kit"
                className="img-fluid"
                style={{
                  transform: "rotate(+10deg)",
                  transition: "transform 0.3s ease-in-out",
                  backgroundColor: "transparent",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-5">
        <Container>
          {/* Row 1 - Images */}
          <Row className="text-center justify-content-center mb-5">
            <Col
              xs={12}
              md={4}
              className="mb-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/stem-kit")}
            >
              <img
                src="/images/boxreact1.png"
                alt="Monthly STEM Kit"
                className="img-fluid mb-3"
                style={{ maxWidth: "150px" }}
              />
              <h3 className="fw-bold">Monthly STEM Kits</h3>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <img
                src="/images/soldering1.png"
                alt="DIY Electronics Tools"
                className="img-fluid mb-3"
                style={{ maxWidth: "150px" }}
              />
              <h3 className="fw-bold">DIY Electronics Tools</h3>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <img
                src="/images/chem1.png"
                alt="School Lab Bundles"
                className="img-fluid mb-3"
                style={{ maxWidth: "150px" }}
              />
              <h3 className="fw-bold">School Lab Bundles</h3>
            </Col>
          </Row>

          {/* Row 2 - Sub Titles / Descriptions */}
          <Row className="text-center justify-content-center">
            <Col xs={12} md={4} className="mb-3">
              <h4 className="text-muted">
                <b>Monthly STEM kits</b>
              </h4>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <h4 className="text-muted">
                <b>DIY Electronics Tools</b>
              </h4>
            </Col>
            <Col xs={12} md={4} className="mb-3">
              <h4 className="text-muted">
                <b>School Lab Bundles</b>
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
