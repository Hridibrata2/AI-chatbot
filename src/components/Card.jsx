import React from 'react';
import './Card.css';

const Card = ({ icon, header, text }) => {
  return (
    <div className='card'>
      <div className='icon'>{icon}</div>
      <h3 className='card_header'>{header}</h3>
      <p className='card_text'>{text}</p>
    </div>
  );
};

export default Card;