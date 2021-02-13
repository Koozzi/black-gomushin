import React from 'react';
import styled from 'styled-components';
import adImg from '../assets/img/sample-black.jpg';
import Header from '../components/common/header';

const MainView = () => {
  const Container = styled.div`
    display: flex;
    width: 100%;
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
    <>
      <Header></Header>
      <Container>
        <AdContainer>
          <AD src={adImg}></AD>
        </AdContainer>
      </Container>
    </>
  );
};

export default MainView;
