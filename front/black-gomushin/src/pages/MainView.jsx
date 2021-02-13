import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import adImg from '../assets/img/sample-black.jpg';
import Header from '../components/common/header';
import { getAxios } from '../utils/axios';
import ItemList from '../components/MainView/Div/ItemList';

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
  height: 100%;
`;

const AD = styled.img`
  width: 40%;
  height: 60%;
`;

const MainView = () => {
  const [data, setData] = useState([]);
  const getItems = async () => {
    const result = await getAxios('items/');
    setData(result.data);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <Header></Header>
      <Container>
        <AdContainer>
          <AD src={adImg}></AD>
        </AdContainer>
        <ItemList>{data}</ItemList>
      </Container>
    </>
  );
};

export default MainView;
