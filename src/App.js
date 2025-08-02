import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import AuthPage from './pages/AuthPage';
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import ViewCartPage from "./pages/ViewCartPage";
import CartPage from "./pages/CartPage";
import CartModal from "./components/CartModal";
import CheckoutPage from "./pages/CheckoutPage";
import Aboutus from "./pages/Aboutus";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleShowCartModal = () => setShowCartModal(true);
  const handleHideCartModal = () => setShowCartModal(false);

  return (
    <CartProvider>
      <Router>
        <div className="app-container d-flex flex-column min-vh-100">
          <Navbar onShowCart={handleShowCartModal} />
          <CartModal show={showCartModal} onHide={handleHideCartModal} />
          <div
            className="content-wrap flex-grow-1"
            style={{ paddingTop: "90px", paddingBottom: "60px" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/product/:id"
                element={<ProductDetail onAddToCart={handleShowCartModal} />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/viewcart" element={<ViewCartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<Aboutus />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
