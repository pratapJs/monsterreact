import React from 'react';
import './CardComponent.css';

const CardComponent = (props) => {
  return (
    <div className='card-container'>
      {props.monster.name}

      <img
        alt='monster'
        width='180'
        height='180'
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />
    </div>
  );
};

export default CardComponent;
