import React from 'react';
import './CardList.css';

import CardComponent from '../card/CardComponent';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => (
        <CardComponent key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
