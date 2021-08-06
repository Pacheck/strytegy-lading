import styled, { css } from 'styled-components';

import PostItBackground from './assets/Grafico-Fluxo_postits.svg';

const flexProps = css`
  display: flex;
  align-items: center;
`;

export const AppContainer = styled.div``;

//Header
export const AppHeader = styled.header`
  ${flexProps}
  justify-content: space-between;
  height: 7.69rem;
`;
export const LogoWrapper = styled.div`
  ${flexProps}
  justify-content: flex-end;
  width: 16.44rem;
`;
export const ActionsWrapper = styled.div`
  ${flexProps}
  justify-content: space-between;
  width: 15.75rem;
  a {
    font-size: 18px;
    color: #3913b3;
  }
`;

//Main
export const AppBody = styled.main``;
export const MainContent = styled.section`
  background: url(${PostItBackground});
  height: 29.56rem;
`;
export const TextWrapper = styled.div`
  height: 18.44rem;
  width: 58.69rem;
  ${flexProps}
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
`;
export const MainText = styled.h1`
  width: 39.58rem;
  font-size: 3.88rem;
  color: #2f2f2f;
`;
export const SubText = styled.p`
  width: 22.13rem;
  color: #505050;
`;
export const MainActionsWrapper = styled.div``;
export const MainCore = styled.section``;

export const CoreHeader = styled.h2`
  height: 5rem;
  text-align: center;
  font-size: 2.5rem;
`;
export const CoreContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ResolutionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55rem;
`;
export const ResolutionContainer = styled.section`
  width: 55.88rem;
`;
export const HeaderText = styled.h2`
  font-size: 2.5rem;
  height: 7rem;
  color: #2f2f2f;
`;
export const ResolutionContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ResolutionContentHeader = styled.h2`
  font-size: 1.63rem;
  color: #2f2f2f;
  height: 8rem;
`;
export const ResolutionContentText = styled.p`
  color: #505050;
  height: 5rem;
`;
export const AsideResolutionButton = styled.button`
  width: 8.13rem;
  height: 3.5rem;
  border-radius: 8px;
  border: none;
  background-color: #3e51cc;
  color: #fff;
  font-size: 1.13rem;
`;
export const AsideResolutionContent = styled.aside`
  width: 15.88rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ResolutionVideoContent = styled.div`
  width: 37rem;
  height: 23.63rem;
  background-color: lightgray;
  border-radius: 10px;
`;
export const CollaborationWrapper = styled.div``;
export const CollaborationContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50rem;
`;
export const CollaborationHeader = styled.p`
  height: 10rem;
  text-align: center;
  font-size: 2.5rem;
`;
//Footer
export const AppFooter = styled.footer``;
