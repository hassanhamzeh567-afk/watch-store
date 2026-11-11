
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {

  const { cartCount } = useContext(CartContext);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        TIME<span>ZONE</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </div>

      <Link to="/login" className="login-btn">
        Login
      </Link>

    </nav>
  );
};

export default Navbar;
