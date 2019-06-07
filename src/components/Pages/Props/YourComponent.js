import React from 'react';
import { YourChildComponent } from './YourChildComponent';

export const YourComponent = () => {

  const list = [
    'apple',
    'orange',
    'banana',
  ];


  const onItemClick = (item) => {
    console.log(`${item} was clicked!`);
  }

  return (
    <YourChildComponent items = {list} onClick={onItemClick}/>
  );
};
