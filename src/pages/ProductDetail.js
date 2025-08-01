import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import CartModal from "../components/CartModal";
import "bootstrap/dist/js/bootstrap.bundle.min";

const dummyProducts = [
  {
    id: 1,
    title: "Robotics Starter Kit",
    description: "Great for beginners to learn robotics and automation.",
    image: "/kit1.jpg",
    category: "Robotics",
    rating: 4.5,
    reviews: 120,
    price: 1999,
  },
  {
    id: 2,
    title: "IoT Development Kit",
    description: "Includes WiFi and sensor modules to build smart devices.",
    image: "/kit2.jpg",
    category: "IoT",
    rating: 4.0,
    reviews: 90,
    price: 2499,
  },
  {
    id: 3,
    title: "Arduino Beginner Kit",
    description: "Perfect for learning the basics of Arduino programming.",
    image: "/kit3.jpg",
    category: "Robotics",
    rating: 4.2,
    reviews: 75,
    price: 1499,
  },
  {
    id: 4,
    title: "Drone Assembly Kit",
    description: "Build and fly your own programmable drone.",
    image: "/kit4.jpg",
    category: "Others",
    rating: 3.8,
    reviews: 60,
    price: 3999,
  },
  {
    id: 5,
    title: "Raspberry Pi Starter Kit",
    description: "Includes all necessary components to start with Pi.",
    image: "/kit5.jpg",
    category: "IoT",
    rating: 4.7,
    reviews: 130,
    price: 2999,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [lastAddedProductTitle, setLastAddedProductTitle] = useState("");
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setLastAddedProductTitle(product.title);
    setShowModal(true); // show modal after adding to cart
  };

  if (!product) {
    return (
      <div className="container py-5">
        <h3 className="text-center">Product not found</h3>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "100px" }}>
      <Navbar />
      <div className="container py-4">
        <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted">Category: {product.category}</p>

            <h4 className="text-success">₹{product.price}</h4>

            <div className="d-flex align-items-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill={i <= Math.floor(product.rating) ? "#ffc107" : "#e4e5e9"}
                  className="me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.63.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
              <span className="ms-2 text-muted">{product.reviews} reviews</span>
            </div>

            <p className="my-3">{product.description}</p>

            <div className="mb-4 d-flex align-items-center gap-3 bg-light px-3 py-2 rounded justify-content-between">
              <p className="mb-0 flex-grow-1 text-dark">Quantity</p>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-light rounded-circle border"
                  style={{ width: "32px", height: "32px" }}
                  onClick={decreaseQty}
                >
                  –
                </button>
                <input
                  type="number"
                  className="form-control text-center border-0 bg-transparent p-0"
                  value={quantity}
                  readOnly
                  style={{
                    width: "40px",
                    boxShadow: "none",
                    pointerEvents: "none",
                  }}
                />
                <button
                  className="btn btn-sm btn-light rounded-circle border"
                  style={{ width: "32px", height: "32px" }}
                  onClick={increaseQty}
                >
                  +
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-center mb-4">
              <div className="w-100 px-3" style={{ maxWidth: "600px" }}>
                <div className="d-flex flex-column gap-3">
                  <button
                    className="btn btn-danger w-100 fw-bold py-2"
 style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "0.70rem",
                  fontSize: "1.0rem",
                }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="btn w-100 fw-bold py-2"
                    style={{
                  backgroundColor: "#f4f0f0",
                  color: "#181111",
                  borderRadius: "0.70rem",
                }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            <div style={{ maxWidth: "400px" }}>
              {[5, 4, 3, 2, 1].map((star, index) => {
                const percent = [40, 30, 15, 5, 10][index];
                return (
                  <div key={star} className="d-flex align-items-center mb-2">
                    <span className="me-2 text-dark" style={{ width: "20px" }}>
                      {star}
                    </span>
                    <div
                      className="progress flex-grow-1 me-2"
                      style={{ height: "6px", backgroundColor: "#e5dcdc" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${percent}%`, backgroundColor: "#181111" }}
                      ></div>
                    </div>
                    <span className="text-muted" style={{ width: "40px" }}>
                      {percent}%
                    </span>
                  </div>
                );
              })}

              <h2 className="text-dark fw-bold fs-4 px-1 pt-4 pb-3">Product Information</h2>
              <div className="px-1 pb-4">
                <div className="row border-top py-3">
                  <div className="col-4 text-secondary small">Brand</div>
                  <div className="col-8 text-dark small">Generic</div>
                </div>
                <div className="row border-top py-3">
                  <div className="col-4 text-secondary small">Warranty</div>
                  <div className="col-8 text-dark small">6 months</div>
                </div>
                <div className="row border-top py-3">
                  <div className="col-4 text-secondary small">Shipping</div>
                  <div className="col-8 text-dark small">Free Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* ✅ Cart Modal */}
      <CartModal show={showModal} onHide={() => setShowModal(false)}
       lastAddedProductTitle={lastAddedProductTitle} />
          </div>
        </div>
  );
};
export default ProductDetail;

