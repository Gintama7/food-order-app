import React, { useContext, useState } from 'react';
import './Cart.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCxt= useContext(CartContext);
    const cartItems = cartCxt.items;
    const totalAmount = cartCxt.totalAmount;

    const cardItemHandler=(item)=>{
      const cartItem= {...item,quantity:1};
      // cartCxt.addItem(cartItem);
    }

    const removeItemHandler=(id)=>{
       cartCxt.removeItem(id);
    }

  return (
    <Modal showHandler={props.showHandler}>
      <ul className='cart_items'>
        {cartItems.map((item)=>(
            <CartItem 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            quantity={item.quantity} 
            amount={totalAmount} 
            onAdd={cardItemHandler(item)}
            onRemove={()=>removeItemHandler(item.id)}
            />
        ))}
      </ul>
      <div className='total'>
        <span>
            Total Amount
        </span>
        <span>
            {totalAmount}
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
