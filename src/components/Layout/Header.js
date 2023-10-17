import React, { Fragment } from 'react';

import './Header.css';
import HeaderCartBtn from './HeaderCartBtn';

const Header = (props) => {
  return (
    <Fragment>
        <header className='header'>
            <h1> ReactMeals</h1>
           <HeaderCartBtn/>
           </header>
       
     <div className='main_image'>
        <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="" />
     </div>
    </Fragment>
  )
}

export default Header
