import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
const [items,setItems] = useState([]);
const [totalAmount,setTotalAmount] = useState(0);
    const addItemToCartHandler= item =>{
      const existingItem = items.find((obj) => obj.id === item.id);

      if (existingItem) {
        const updatedCart = items.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + Number(item.quantity),price: cartItem.price } : cartItem
        );
        setItems(updatedCart);
      } else {
        setItems([...items, { ...item}]);
      }
      // setTotalPrice(totalPrice + item.price);
    
      const updatedAmount = items.map((cartItem)=>
         totalAmount+ Number(cartItem.price)*cartItem.quantity
      )
      setTotalAmount(updatedAmount);
      //  console.log(cartContext.items);
    }

    const removeItemFromCartHandler = id =>{
        const filteredItems = items.filter((item)=> item.id !== id);
        setItems(filteredItems);
    }

    const cartContext = {
        items:items,
        totalAmount:totalAmount,
        addItem: addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
