import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAxios } from '../../../utils/axios';

const ItemCard = styled.div`
  width: 100%;
`;

const ItemImg = styled.img`
  width: 10%;
`;

const ItemList = () => {
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
          <ItemCard key={item.id}>
            <ItemImg src={item.imageurl}></ItemImg>
            {item.id}번호
            {item.price}원
          </ItemCard>
        );
      })}
    </div>
  );
};

export default ItemList;
