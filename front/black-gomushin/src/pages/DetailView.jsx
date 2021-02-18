import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import MessageIcon from '@material-ui/icons/Message';
import { useHistory } from 'react-router-dom';
import refresh from '../utils/refresh';

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
  if (state) {
    const item = state.item;
    return (
      <>
        <Header></Header>
        <DetailContainer>
          <ItemImg src={item.imageurl}></ItemImg>
          <DetailItem>
            <div>{`${item.title}`}</div>
            <div>{`${item.state}`}</div>
            <div>{`${item.price}원`}</div>
            <div>{`${item.content}`}</div>
            <div>{`판매자${item.sell_username}`}</div>
            <div>{`조회수 ${item.view}`}</div>
            <div>{`사이즈 ${item.size}`}</div>
            <div>{`${item.publish_date}`}</div>
            <MessageIconBox onClick={() => history.push('/')}></MessageIconBox>
          </DetailItem>
        </DetailContainer>
        <Footer></Footer>
      </>
    );
  }
  return refresh();
};

export default DetailView;
