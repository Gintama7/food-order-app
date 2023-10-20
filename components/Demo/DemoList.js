import React from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => { 
  
    const sortedList = props.sorting===true ? props.items.sort((a, b) => a - b): props.items.sort((a, b) => b - a);
  console.log('demolist running');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
