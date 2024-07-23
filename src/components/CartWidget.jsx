import React from 'react';
import cart from './cart.png'; 
import './CartWidget.css';

const CartWidget = () => {
  const cartItems = 0; 
  return (
    <div className="cart-widget">
      <img src={cart} alt="Carrito" className="cartIcon" />
      {cartItems > 0 && <span className="cart-notification">{cartItems}</span>}
    </div>
  );
};

export default CartWidget;