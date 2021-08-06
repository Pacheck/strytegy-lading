import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 10px 0px;
  height: 51.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FrontalImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
  margin-left: 2rem;
  p {
    width: 13.69rem;
    height: 12rem;
    margin-left: 0.5rem;
  }
`;
export const FrontalPostIt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${(props) => (props.bgImage ? props.bgImage : '')});
  background-repeat: no-repeat;
  width: 17.13rem;
  height: 16rem;

  img {
    width: 80%;
  }
`;

export const BackwardPostIt = styled.div`
  background: url(${(props) => (props.bgImage ? props.bgImage : '')});
  background-repeat: no-repeat;
  width: 15.69rem;
  height: 14.69rem;
  position: absolute;
  top: 0;
  z-index: -100;
  font-size: 1.75rem;

  p {
    width: 90%;
    margin: 1rem 1rem;
    font-weight: 600;
  }
`;
