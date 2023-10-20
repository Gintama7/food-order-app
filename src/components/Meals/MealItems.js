import React, { useContext } from 'react';
import './MealItems.css'
import CartContext from '../../store/cart-context';
import Input from '../UI/Input';

const MealItems = (props) => {

  const crtCtx = useContext(CartContext);

  const addItemToCart =(event)=>{
      event.preventDefault();
      const quantity = Number(document.getElementById('amount_'+props.id).value);
      const obj= {id:props.id,name:props.name,description:props.desc,price:Number(props.price)};
      crtCtx.addItem({...obj,quantity:quantity});
  }

  return (<section>
    <div className='meal_items'>      
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h2>${props.price}</h2>   
    </div>
    <div className='mealform'>
      <form action="">
        <div className='form_input'>
        <Input
        label='Amount'
        input={{
          id: 'amount_' +props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
        </div>        
        <button className='add_btn' onClick={addItemToCart}>+Add</button>
      </form>
    </div>
    </section>
  )
}

export default MealItems
