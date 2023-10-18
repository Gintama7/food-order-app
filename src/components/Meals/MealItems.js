import React from 'react';
import './MealItems.css'

const MealItems = (props) => {
  return (<section>
    <div className='meal_items'>      
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h2>${props.price}</h2>   
    </div>
    <div className='mealform'>
      <form action="">
        <div className='form_input'>
        <label htmlFor="amount">Amount</label>
        <input type="text" placeholder='1' />
        </div>        
        <button className='add_btn'>+Add</button>
      </form>
    </div>
    </section>
  )
}

export default MealItems
