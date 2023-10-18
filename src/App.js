
import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Summary from './components/Layout/Summary';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <Summary/>
      <Meals/>
    </Fragment>
  );
}

export default App;
