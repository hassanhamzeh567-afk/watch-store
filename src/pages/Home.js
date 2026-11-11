
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <p className="subtitle">TIMELESS ELEGANCE</p>

          <h1>
            Discover Your
            <br />
            Perfect Watch
          </h1>

          <p>
            Explore our exclusive collection of luxury
            watches designed for every moment.
          </p>

          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
            alt="Luxury watch"
          />
        </div>
      </section>

      <section className="features">
        <h2>Why Choose TimeZone?</h2>

        <div className="feature-list">
          <div>
            <h3>Quality</h3>
            <p>Premium watches made with attention to detail.</p>
          </div>

          <div>
            <h3>Style</h3>
            <p>Modern and classic designs for everyone.</p>
          </div>

          <div>
            <h3>Trust</h3>
            <p>A shopping experience you can rely on.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
