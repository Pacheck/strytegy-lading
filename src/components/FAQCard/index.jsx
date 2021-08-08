import React, { useState } from 'react';
import { Container, Sign, ContentWrapper, HeaderText, SubText } from './styles';

const Card = ({ headerText, subText }) => {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  return (
    <Container onClick={handleClick} isFocused={showText}>
      {showText ? <Sign isFocused={showText}>-</Sign> : <Sign>+</Sign>}
      <ContentWrapper>
        <HeaderText isFocused={showText}>{headerText}</HeaderText>
        {showText && <SubText>{subText}</SubText>}
      </ContentWrapper>
    </Container>
  );
};

export default Card;
