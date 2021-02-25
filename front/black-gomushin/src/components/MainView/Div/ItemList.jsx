import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ItemInfo from './ItemInfo';
import useInfinite from '../../../hooks/useInfinite';

const ItemCard = styled.div`
  display: flex;
  width: 80%;
  margin: 3% 10%;
  height: 300px;
  background-color: #e3ecf1;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #f5eeed;
  }
`;

const ItemImg = styled.img`
  flex: 2;
`;

const ItemList = () => {
  const history = useHistory();
  const allItem = useInfinite();

  return (
    <div>
      {allItem.map((item) => {
        return (
          <ItemCard onClick={() => history.push('/detail', { item })} key={item.id}>
            <ItemImg src={item.imageurl}></ItemImg>
            <ItemInfo info={item}></ItemInfo>
          </ItemCard>
        );
      })}
    </div>
  );
};

export default ItemList;
