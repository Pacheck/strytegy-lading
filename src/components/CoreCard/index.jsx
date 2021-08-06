import React from 'react';

import {
  CardHeader,
  CardImage,
  CardInfoWrapper,
  CardTextContent,
  Container,
} from './styles';

const Card = ({ cardImage, cardHeader, cardText }) => {
  return (
    <Container>
      <CardImage src={cardImage} alt="Card image content" />
      <CardInfoWrapper>
        <CardHeader>{cardHeader}</CardHeader>
        <CardTextContent>{cardText}</CardTextContent>
      </CardInfoWrapper>
    </Container>
  );
};

export default Card;
