import React from 'react';
import './Cart.css';
import Modal from '../UI/Modal';

const Cart = () => {
    const cartItems = [{id:'c1',name:'Sushi', amount:2,price:12.99}]
  return (
    <Modal>
      <ul className='cart_items'>
        {cartItems.map((item)=>(
            <li>{item.name}</li>
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
<button className='button__alt'>Close</button>
<button>Order</button>
      </div>
    </Modal>
  )
}

export default Cart