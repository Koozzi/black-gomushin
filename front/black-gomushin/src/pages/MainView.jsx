import React from 'react';
import styled from 'styled-components';
import adImg from '../assets/img/sample-black.jpg';
import Header from '../components/common/header';
import ItemList from '../components/MainView/Div/ItemList';
import Footer from '../components/common/footer';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const AdContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  background-color: #e3ecf1;
  height: 30%;
`;

const AD = styled.img`
  width: 40%;
  height: 60%;
`;

const Div = styled.div`
  min-height: 101vh;
`;

const MainView = () => {
  return (
    <Div>
      <Header></Header>
      <Container>
        <AdContainer>
          <AD src={adImg}></AD>
        </AdContainer>
        <ItemList></ItemList>
      </Container>
      <Footer></Footer>
    </Div>
  );
};

export default MainView;
