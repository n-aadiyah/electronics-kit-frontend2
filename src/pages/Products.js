import React from "react";
import Navbar from "../components/Navbar";
const Products = () => {
  const products = [
    {
      id: 1,
      title: "Robotics Starter Kit",
      description: "Great for beginners to learn robotics and automation.",
      image: "/kit1.jpg",
    },
    {
      id: 2,
      title: "IoT Development Kit",
      description: "Includes WiFi and sensor modules to build smart devices.",
      image: "/kit2.jpg",
    },
    {
      id: 3,
      title: "Arduino Beginner Kit",
      description: "Perfect for learning the basics of Arduino programming.",
      image: "/kit3.jpg",
    },
    {
      id: 4,
      title: "Drone Assembly Kit",
      description: "Build and fly your own programmable drone.",
      image: "/kit4.jpg",
    },
    {
      id: 5,
      title: "Raspberry Pi Starter Kit",
      description: "Includes all necessary components to start with Pi.",
      image: "/kit5.jpg",
    },
  ];

  return (
    <div style={{ paddingTop: "120px", width: "100%", overflowX: "hidden" }}>
      <Navbar />

      <main className="container py-5">
        <h2 className="text-center mb-4 fw-bold">All Electronics Kits</h2>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card shadow-sm h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn custom-view-btn w-100 fw-bold">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
