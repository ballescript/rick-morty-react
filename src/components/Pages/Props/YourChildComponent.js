import React from 'react';

export const YourChildComponent = ({items, onClick}) => {
  return (
    <div>
      <ul>
        {
          items.map(item => {
            return <li key={item} onClick={() => onClick(item)}>{item}</li>
          })
        }
      </ul>
    </div>
    )
  
};
