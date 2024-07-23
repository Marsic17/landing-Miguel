import cart from './cart.png'
import React from 'react';

const CartWidget =() => {
    const cartItems = 0;
    return (
        <div className='cartIcon'>
            <img src={cart} alt="cart-widget" className='cart-img'/>
            {cartItems > 0 && <span className="cart-push">{cartItems}</span>}
        </div>
    )
}

export default CartWidget