
import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Summary from './components/Layout/Summary';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showModal,setShowModal] = useState(false);
  const showCartHandler=()=>{
    setShowModal(true);
  }
  const hideCartHandler =()=>{
    setShowModal(false);
  }
  return (
    <CartProvider>   
      { showModal && <Cart showHandler={hideCartHandler}/>}  
      <Header showHandler={showCartHandler}/>     
      <Summary/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
