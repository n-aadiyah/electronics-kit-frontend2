import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import Navbar from "../components/Navbar";
const Products = () => {
  const navigate = useNavigate(); // ✅ initialize navigate
  const products = [
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

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    
    <div style={{ paddingTop: "120px", width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <main className="container py-5">
        <h2 className="text-center mb-4 fw-bold">All Electronics Kits</h2>

        {/* Category Tabs */}
   <div className="d-flex justify-content-center border-bottom mb-4">
  <ul className=" nav nav-tabs">
    {categories.map((cat) => (
      <li className="nav-item" key={cat}>
        <button
          className={`nav-link ${selectedCategory === cat ? "active" : ""}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      </li>
    ))}
  </ul>
  </div>
        {/* Product List */}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                   <button className="btn custom-view-btn w-100 fw-bold" onClick={() => navigate(`/product/${product.id}`)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted">No products found.</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
