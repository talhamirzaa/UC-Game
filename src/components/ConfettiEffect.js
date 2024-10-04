// ConfettiEffect.js
import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = ({ width, height }) => {
  return (
    <Confetti 
      style={{marginTop:'7vh'}}
      width={width}
      height={height}
      numberOfPieces={350} // Adjust the number of confetti pieces as needed
      recycle={false} // Prevents the confetti from recycling
    />
  );
};

export default ConfettiEffect;
