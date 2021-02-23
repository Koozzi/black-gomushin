import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Header from '../components/common/header';
import ItemInfo from '../components/MainView/Div/ItemInfo';
import SelectStateButton from '../components/SearchView/Input/selectStateButton';
import SelectSizeButton from '../components/SearchView/Input/selectSizeButton';
import PriceInput from '../components/SearchView/Input/priceInput';
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
  const history = useHistory();
  const [itemState, setItemState] = useState('');
  const [itemSize, setItemSize] = useState('');
  const [itemMin, setItemMin] = useState(0);
  const [itemMax, setItemMax] = useState(9000000);
  const [isClick, setIsClick] = useState(false);

  const radioHandler = (e) => {
    setItemState(e.target.value);
  };

  const sizeHandler = (e) => {
    setItemSize(e.target.value);
  };

  const minHandler = (e) => {
    setItemMin(e.target.value);
  };

  const maxHandler = (e) => {
    setItemMax(e.target.value);
  };

  const allItem = useInfinite(isClick, {
    keyword: state.content,
    size: itemSize,
    state: itemState,
    minprice: itemMin,
    maxprice: itemMax,
  });
  return (
    <>
      <Header></Header>
      <FilterBox>
        <SelectStateButton valueHandler={radioHandler}></SelectStateButton>
        <SelectSizeButton valueHandler={sizeHandler}></SelectSizeButton>
        <PriceInput valueHandler={minHandler} inputLabel="최소금액"></PriceInput>
        <PriceInput valueHandler={maxHandler} inputLabel="최대금액"></PriceInput>
      </FilterBox>
      <h5>현재 검색한 내용은</h5>
      <h5>
        {state.content},{itemState},{itemSize},{itemMin},{itemMax},{String(isClick)}
      </h5>

      <button onClick={() => setIsClick(!isClick)}></button>
      {allItem.length !== 0 ? (
        allItem.map((item) => {
          return (
            <ItemCard onClick={() => history.push('/detail', { item })} key={item.id}>
              <ItemImg src={item.imageurl}></ItemImg>
              <ItemInfo info={item}></ItemInfo>
            </ItemCard>
          );
        })
      ) : (
        <div>검색결과가 없습니다.</div>
      )}
    </>
  );
};

export default SearchView;
