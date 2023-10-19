import React, { useContext } from 'react';
import './HeaderCartBtn.css';
import CartIcon from '../Cart/CartIcon';
import './HeaderCartBtn.css';
import CartContext from '../../store/cart-context';

const HeaderCartBtn = (props) => {

  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber,item) =>{
  //   return curNumber + item.amount;
  // },0)

  let quantity=0;

  cartCtx.items.forEach((item)=>{
    quantity= quantity + Number(item.quantity);
  })

  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className='badge'>
            {/* {numberOfCartItems} */}
            {quantity}
        </span>
    </button>
  )
}

export default HeaderCartBtn
