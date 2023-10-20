import React, { useState, useCallback } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [btnTitle,setBtnTitle] = useState('Change Descending Order');
  const [sortOrder,setSortOrder] = useState(true);

  const changeBtnHandler =useCallback(()=>{
    setSortOrder(!sortOrder);
     if(btnTitle =='Change Descending Order')
     {
      setBtnTitle('Change Ascending Order');
      
     }
     else if(btnTitle =='Change Ascending Order'){
      setBtnTitle('Change Descending Order')
     }

  },[btnTitle])

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  return (
    <div className='app'>
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} sorting={sortOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeBtnHandler}>{btnTitle}</Button>
    </div>
  );
}

export default App;
