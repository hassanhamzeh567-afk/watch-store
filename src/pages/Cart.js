
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

  const { cart, removeFromCart, total } =
    useContext(CartContext);

  return (
    <div className="cart-page">

      <h1>My Shopping Cart</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <h2>Your cart is empty!</h2>

          <p>Start shopping and find your favorite watch.</p>

          <Link to="/products" className="shop-btn">
            Continue Shopping
          </Link>
        </div>

      ) : (

        <div className="cart-content">

          <div className="cart-items">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <img
                  src={`https://images.unsplash.com/${item.image}?w=300`}
                  alt={item.name}
                />

                <div className="cart-item-info">

                  <h3>{item.name}</h3>

                  <p>Price: ${item.price}</p>

                  <p>Quantity: {item.quantity}</p>

                  <h4>
                    Subtotal: ${item.price * item.quantity}
                  </h4>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <p>Total Items: {cart.reduce(
              (sum, item) => sum + item.quantity, 0
            )}</p>

            <h3>Total: ${total}</h3>

            <button className="checkout-btn">
              Checkout
            </button>

            <Link to="/products" className="continue-link">
              Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;
