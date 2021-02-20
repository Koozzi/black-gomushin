import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Header from '../components/common/header';
import ItemInfo from '../components/MainView/Div/ItemInfo';
import RadioButton from '../components/SearchView/Input/radioButton';
import SelectButton from '../components/SearchView/Input/selectButton';
import useInfinite from '../hooks/useInfinite';

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

const FilterBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10%;
  padding-bottom: 20%;
  height: 150px;
`;

const SearchView = ({ location: { state } }) => {
  // keyword : 검색내용
  // size : 270, ... (5단위)
  // state : (sale, progress, sold)
  // minprice, maxprice
  const [itemState, setItemState] = useState('');
  const [itemSize, setItemSize] = useState('');

  const radioHandler = (e) => {
    setItemState(e.target.value);
  };

  const sizeHandler = (e) => {
    setItemSize(e.target.value);
  };

  const history = useHistory();
  const allItem = useInfinite({ keyword: state.content, size: 280, state: itemState });

  return (
    <>
      <Header></Header>
      <FilterBox>
        <RadioButton valueHandler={radioHandler}></RadioButton>
        <SelectButton valueHandler={sizeHandler}></SelectButton>
      </FilterBox>
      <h5>현재 검색한 내용은</h5>
      <h5>
        {state.content},{itemState},{itemSize}
      </h5>
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
    </>
  );
};

export default SearchView;
