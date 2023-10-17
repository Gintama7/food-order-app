import React from 'react';
import './HeaderCartBtn.css';
import CartIcon from '../Cart/CartIcon';
import './HeaderCartBtn.css';

const HeaderCartBtn = (props) => {
  return (
    <button className='button'>
        <span className='icon'>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className='badge'>
            3
        </span>
    </button>
  )
}

export default HeaderCartBtn
