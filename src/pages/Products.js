
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const watches = [
    {
      id: 1,
      name: "Classic Silver",
      price: 120,
      description: "Elegant silver watch for everyday use.",
      image: "photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      name: "Golden Luxury",
      price: 250,
      description: "A premium golden design.",
      image: "photo-1524592094714-0f0654e20314"
    },
    {
      id: 3,
      name: "Modern Black",
      price: 180,
      description: "A stylish black watch.",
      image: "photo-1524805444758-089113d48a6d"
    },
    {
      id: 4,
      name: "Sport Edition",
      price: 150,
      description: "Perfect for an active lifestyle.",
      image: "photo-1508685096489-7aacd43bd3b1"
    },
    {
      id: 5,
      name: "Elegant Brown",
      price: 200,
      description: "Classic design with a brown strap.",
      image: "photo-1434056886845-dac89ffe9b56"
    },
    {
      id: 6,
      name: "Silver Premium",
      price: 300,
      description: "Luxury style with a modern touch.",
      image: "photo-1547996160-81dfa63595aa"
    }
  ];

  const handleBuyNow = (watch) => {
    addToCart(watch);
    navigate("/cart");
  };

  return (
    <div className="products-page">

      <div className="page-heading">
        <h1>Our Collection</h1>
        <p>Find the perfect watch for your style.</p>
      </div>

      <div className="product-grid">

        {watches.map((watch) => (
          <div className="product-card" key={watch.id}>

            <img
              src={`https://images.unsplash.com/${watch.image}?w=600`}
              alt={watch.name}
            />

            <div className="product-info">

              <h3>{watch.name}</h3>

              <p>{watch.description}</p>

              <h4>${watch.price}</h4>

              <button
                className="buy-btn"
                onClick={() => handleBuyNow(watch)}
              >
                Buy Now
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Products;
