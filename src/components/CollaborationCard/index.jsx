import React from 'react';

import BackwardCard from '../../assets/Textura-Ciano.png';

import {
  BackwardPostIt,
  Container,
  FrontalImageWrapper,
  FrontalPostIt,
} from './styles';
const Card = ({ headerText, image, internalImage, bodyText }) => {
  return (
    <Container>
      <FrontalImageWrapper>
        <FrontalPostIt bgImage={image}>
          <img src={internalImage} alt="Texture postit" />
        </FrontalPostIt>
        <p>{bodyText}</p>
      </FrontalImageWrapper>
      <BackwardPostIt bgImage={BackwardCard}>
        <p>{headerText}</p>
      </BackwardPostIt>
    </Container>
  );
};

export default Card;
