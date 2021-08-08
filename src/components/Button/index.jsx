import React from 'react';

import { CustomButton } from './styles';
const Button = ({ textContent }) => {
  return (
    <CustomButton onClick={() => alert('Conta criada com sucesso!')}>
      {textContent}
    </CustomButton>
  );
};

export default Button;
