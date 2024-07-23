import React from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css';
import { CartContext } from './context/CartContext';
import { useContext } from 'react';

const CheckOut = ({ cart = [], clearCart }) => {
  const {setCartCount} = useContext(CartContext)
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleClearCart = () => {
    setCartCount(0)
    clearCart();

  };

  return (
    <div className="checkOut-container">
      <h2>Resumen del Pedido</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="checkOutDetails">
          <ul className="checkOutList">
            {console.log(cart)}
            {cart.map((product) => (
              
              <li key={product.id} className="checkOutItem">
                <img src={product.img} alt={product.name} className="checkOutImage" />
                <div className="checkOutInfo">
                  <h3 className="checkOutName">{product.name}</h3>
                  <p className="checkOutDescription">{product.description}</p>
                  <p className="checkOutPrice">${product.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkOutFinal">
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={handleClearCart} className="clearCartButton">Vaciar carrito</button>
            <button className="checkOutButton">Pagar</button>
          </div>
        </div>
      )}
      <Link to="/" className="home">Inicio</Link>
    </div>
  );
};

export default CheckOut;
