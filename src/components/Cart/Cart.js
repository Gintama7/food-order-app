import React, { useContext, useState } from 'react';
import './Cart.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCxt= useContext(CartContext);
    const cartItems = cartCxt.items;

  return (
    <Modal showHandler={props.showHandler}>
      <ul className='cart_items'>
        {cartItems.map((item)=>(
            <li>{item.name} {item.price}</li>
        ))}
      </ul>
      <div className='total'>
        <span>
            Total Amount
        </span>
        <span>
            35.62
        </span>
      </div>
      <div className='actions'>
<button className='button__alt' onClick={props.showHandler}>Close</button>
<button>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
