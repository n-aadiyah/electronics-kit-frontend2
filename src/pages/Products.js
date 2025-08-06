// src/pages/Products.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import CategoryTabs from "../components/CategoryTabs";
import "./CategoryTabs.css";
const BASE_URL = process.env.REACT_APP_API_URL;

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${BASE_URL}/api/products`, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Add this
          },
        });

        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ paddingTop: "120px", width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <main className="container py-5">
        <h2 className="text-center mb-4 fw-bold">All Electronics Kits</h2>

        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {loading ? (
          <div className="text-center py-5 text-muted">Loading products...</div>
        ) : (
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <div className="card shadow-sm h-100">
              <img
  src={product.image} // 👈 Use the full URL directly
  className="card-img-top"
  alt={product.title || product.name}
  style={{ height: "200px", objectFit: "cover" }}
  onError={(e) => {
    e.target.onerror = null; // prevent infinite loop
    e.target.src = "/images/no-image.jpg"; // 👈 fallback from public/images/
  }}
/>
                    <div className="card-body">
                      <h5 className="card-title">{product.title || product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <button
                        className="btn custom-view-btn w-100 fw-bold"
                        onClick={() => navigate(`/product/${product._id}`)}
                      >
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
        )}
      </main>
    </div>
  );
};

export default Products;
