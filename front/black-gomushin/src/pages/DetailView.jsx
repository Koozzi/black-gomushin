import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import MessageIcon from '@material-ui/icons/Message';
import { useHistory } from 'react-router-dom';
import refresh from '../utils/refresh';
import { getAxios } from '../utils/axios';

const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemImg = styled.img`
  display: flex;
  max-height: 40vh;
  max-width: 40vh;
  padding-top: 5%;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3ecf1;
  height: 40vh;
`;

const MessageIconBox = styled(MessageIcon)`
  color: red;
  &:hover {
    cursor: pointer;
    transform: scale(3);
  }
`;

const DetailView = ({ location: { state } }) => {
  const history = useHistory();
  const [seller, setSeller] = useState('알수 없음');
  const getSellerName = async (id) => {
    const params = {
      id,
    };
    try {
      const { data } = await getAxios('/user', { ...params });
      setSeller(data.username);
    } catch (error) {
      setSeller('알수 없음');
    }
  };

  if (state) {
    const item = state.item;
    getSellerName(state.item.sell_username);
    return (
      <>
        <Header></Header>
        <DetailContainer>
          <ItemImg src={item.imageurl}></ItemImg>
          <DetailItem>
            <div>{`${item.title}`}</div>
            <div>{`${item.state}`}</div>
            <div>{`판매자 : ${seller}`}</div>
            <div>{`${item.price}원`}</div>
            <div>{`${item.content}`}</div>
            <div>{`조회수 ${item.view}`}</div>
            <div>{`사이즈 ${item.size}`}</div>
            <div>{`${item.publish_date}`}</div>
            <MessageIconBox onClick={() => history.goBack()}></MessageIconBox>
          </DetailItem>
        </DetailContainer>
        <Footer></Footer>
      </>
    );
  }
  return refresh();
};

export default DetailView;
