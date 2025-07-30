import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const dummyProducts = [
  {
    id: 1,
    title: "Robotics Starter Kit",
    description: "Great for beginners to learn robotics and automation.",
    image: "/kit1.jpg",
    category: "Robotics",
  },
  {
    id: 2,
    title: "IoT Development Kit",
    description: "Includes WiFi and sensor modules to build smart devices.",
    image: "/kit2.jpg",
    category: "IoT",
  },
  {
    id: 3,
    title: "Arduino Beginner Kit",
    description: "Perfect for learning the basics of Arduino programming.",
    image: "/kit3.jpg",
    category: "Robotics",
  },
  {
    id: 4,
    title: "Drone Assembly Kit",
    description: "Build and fly your own programmable drone.",
    image: "/kit4.jpg",
    category: "Others",
  },
  {
    id: 5,
    title: "Raspberry Pi Starter Kit",
    description: "Includes all necessary components to start with Pi.",
    image: "/kit5.jpg",
    category: "IoT",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-5">
        <h3 className="text-center">Product not found</h3>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "120px" }}>
      <Navbar />
      <div className="container py-5">
        <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-muted mb-2">Category: {product.category}</p>
            <p>{product.description}</p>
            <button className="btn btn-primary mt-3 fw-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
