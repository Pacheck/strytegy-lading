import React from 'react';

import { CustomButton } from './styles';
const Button = ({ textContent, shouldTriggerAlert }) => {
  const handleClick = () => {
    !shouldTriggerAlert
      ? alert('Conta criada com sucesso!')
      : window.open('https://go.strytegy.com/signup/');
  };
  return <CustomButton onClick={handleClick}>{textContent}</CustomButton>;
};

export default Button;
