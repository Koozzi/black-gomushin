import React from 'react';
import styled from 'styled-components';

const ItemInfoContainer = styled.div`
  flex: 5;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-top: 3%;
`;

const ItemState = styled.div`
  color: red;
  font: caption;
  width: 100%;
  height: 100%;
`;

const ItemTitle = styled.div`
  font: 1.2em 'Fira Sans', sans-serif;
  width: 100%;
  height: 100%;
`;

const SellerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const ItemPrice = styled.div`
  flex: 5;
  font-weight: 600;
`;

const ItemSeller = styled.div`
  flex: 1;
  height: 60%;
`;

const ItemDate = styled.div`
  font-size: x-small;
  width: 100%;
  height: 100%;
`;

const ItemInfo = ({ info }) => {
  return (
    <ItemInfoContainer>
      <ItemState>{info.state}</ItemState>
      <ItemTitle>{info.title}</ItemTitle>
      <SellerContainer>
        <ItemSeller>@{info.sell_username.username}</ItemSeller>
        <ItemPrice>{info.price}원</ItemPrice>
      </SellerContainer>
      <ItemDate>{info.publish_date}</ItemDate>
    </ItemInfoContainer>
  );
};

export default ItemInfo;
