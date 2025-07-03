// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <div>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
