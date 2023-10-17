
import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Summary from './components/Layout/Summary';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header/>
      <Summary/>
      <Meals/>
    </Fragment>
  );
}

export default App;
