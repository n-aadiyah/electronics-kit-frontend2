// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Top Section */}
      <div className="container-fluid" style={{ backgroundColor: "#48AAAD" , paddingTop: "70px",paddingBottom: "40px",}}>
        <Container>
          <Row className="align-items-center" >
            {/* Text Content */}
            <Col md={5} className="text-black text-start p-0">
              <h1 className="fw-bold display-2 mb-4 mt-0">
                From Curiosity to Creation
              </h1>
              <Button
                size="lg"
                className="fw-bold custom-btn"
                href="/products"
              >
                Start Building
              </Button>
            </Col>

            {/* Image */}
            <Col md={7} className="text-center">
              <img
                src="/images/stemtans.png"
                alt="STEM Kit"
                className="img-fluid"
                style={{
                  transform: "rotate(10deg)",
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
          {/* Section Heading */}
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="fw-bold">Explore Our Kits & Tools</h2>
            </Col>
          </Row>

          {/* Row 1 - Images */}
          <Row className="text-center justify-content-center">
            <Col
              xs={12}
              md={4}
              className="mb-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/monthly-kit")}
            >
              <img
                src="/images/boxreact1.png"
                alt="Monthly STEM Kit"
                className="img-fluid mb-3"
                style={{ maxWidth: "150px" }}
              />
              <h3 className="fw-bold">Monthly STEM Kits</h3>
            </Col>

            <Col
              xs={12}
              md={4}
              className="mb-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/products")}
            >
              <img
                src="/images/soldering1.png"
                alt="DIY Electronics Tools"
                className="img-fluid mb-3"
                style={{ maxWidth: "150px" }}
              />
              <h3 className="fw-bold">DIY Electronics Tools</h3>
            </Col>

            <Col
              xs={12}
              md={4}
              className="mb-4"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/products")}
            >
              <img
                src="/images/chem1.png"
                alt="School Lab Bundles"
                className="img-fluid mb-3"
                style={{ maxWidth: "150px" }}
              />
              <h3 className="fw-bold">School Lab Bundles</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
