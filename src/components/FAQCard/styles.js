import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    from {
        opacity: 0;
        margin-top: -20px;
    },
    to {
        opacity: 1;
        margin-top: initial;
    }
`;

export const Container = styled.div`
  display: flex;
  margin: 2rem;
`;
export const Sign = styled.span`
  font-size: 1.5rem;
  color: #49c5e3;
  padding-right: 0.63rem;
  ${({ isFocused }) => isFocused && 'font-size: 2.5rem;'}
`;
export const ContentWrapper = styled.section``;
export const HeaderText = styled.h4`
  transition: all 0.2s ease-in-out;
  ${({ isFocused }) =>
    isFocused
      ? 'color: #3E51CC; font-size: 2rem;'
      : 'color: #2F2F2F; font-size: 1.5rem'}
`;
export const SubText = styled.p`
  animation: ${fade} 0.6s ease;
  color: #505050;
  font-weight: 300;
`;
