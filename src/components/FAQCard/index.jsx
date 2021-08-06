import React, { useState } from 'react';
import { Container, SubText } from './styles';

const Card = ({ headerText, subText }) => {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  return (
    <Container onClick={handleClick}>
      <span>+</span>
      <p>{headerText}</p>
      {showText && <SubText>{subText}</SubText>}
    </Container>
  );
};

export default Card;
