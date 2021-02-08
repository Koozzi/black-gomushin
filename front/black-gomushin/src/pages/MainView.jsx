import React from 'react';
import styled from 'styled-components';
import adImg from '../assets/img/sample-black.jpg';

const MainView = () => {
  const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: cloumn;
    justify-content: center;
  `;

  const AdContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
    background-color: #e3ecf1;
    height: 100%;
  `;

  const AD = styled.img`
    width: 40%;
    height: 60%;
  `;

  return (
    <Container>
      <AdContainer>
        <AD src={adImg}></AD>
      </AdContainer>
    </Container>
  );
};

export default MainView;
