import React, {  useState } from 'react';
import './CartItem.css';

const CartItems = (props) => {

    // const [finalItems,setFinalItems] = useState([]);
    


  return (
    <li className='cart_items'>
      <div>
         <h3>{props.name}</h3>  
         <div className='cart_info'>    
      <span className='price'>${props.price}</span>
      <span className='quan'>x{props.quantity}</span>
      </div>
      </div>
      <div className='buttons'>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  )
}

export default CartItems
