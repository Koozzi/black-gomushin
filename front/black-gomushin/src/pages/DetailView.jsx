import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  background-color: #e3ecf1;
  height: 30%;
`;

const DetailView = ({ location: { state } }) => {
  const item = state.item;
  console.log(item.title);
  return (
    <>
      <Header></Header>
      <DetailContainer>
        <DetailItem>
          <div>{`${item.title}`}</div>
        </DetailItem>
      </DetailContainer>
      <Footer></Footer>
    </>
  );
};

export default DetailView;
