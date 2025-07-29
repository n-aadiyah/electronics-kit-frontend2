import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
// Commenting out unused components for now
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Checkout from "./pages/Checkout";
 import Products from "./pages/Products";
 import Navbar from "./components/Navbar";
 import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
