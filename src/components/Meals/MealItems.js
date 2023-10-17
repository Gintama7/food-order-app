import React from 'react';
import './MealItems.css'

const MealItems = (props) => {
  return (
    <div className='meal_items'>      
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h2>${props.price}</h2>   
    </div>
  )
}

export default MealItems
