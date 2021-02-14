import React from 'react';
import styled from 'styled-components';

const ItemCard = styled.div`
  width: 100%;
`;

const ItemImg = styled.img`
  width: 10%;
`;

const ItemList = (props) => {
  return (
    <div>
      {props.children.map((item) => {
        return (
          <ItemCard key={item.id}>
            <ItemImg src={item.image_url}></ItemImg>
            {item.title}
            {item.price}원
          </ItemCard>
        );
      })}
    </div>
  );
};

export default ItemList;
