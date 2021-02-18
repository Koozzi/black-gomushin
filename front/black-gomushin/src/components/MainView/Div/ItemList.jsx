import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { getAxios } from '../../../utils/axios';
import ItemInfo from './ItemInfo';

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
  const [allItem, setAllItem] = useState([]);
  const [offset, setOffset] = useState(0);

  const getItems = async () => {
    const params = {
      offset,
      limit: 5,
    };
    const { data } = await getAxios('/items', params);
    setAllItem([...allItem, ...data]);
    setOffset(offset + 5);
  };

  const checkScroll = () => {
    const {
      documentElement: { scrollTop, clientHeight, scrollHeight },
    } = document;
    if (scrollTop + clientHeight === scrollHeight) {
      getItems();
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });

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
