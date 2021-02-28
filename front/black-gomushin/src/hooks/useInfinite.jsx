import { useState, useEffect } from 'react';
import { getAxios } from '../utils/axios';

const useInfinite = (isClick = true, newParams = {}) => {
  const [allItem, setAllItem] = useState([]);
  const [offset, setOffset] = useState(0);
  const getItems = async (isStart) => {
    const params = {
      offset,
      limit: 5,
    };
    try {
      const { data } = await getAxios('/search', { ...params, ...newParams });
      if (isStart) {
        setAllItem([...data]);
        setOffset(offset + 5);
        // Issue
        // setOffset(5)로 지정시 중복값을 불러 내는 오류 발생
        // setOffset(offset + 5)로 지정시 offset이 초기화되지 않는 문제 발생
      } else {
        setAllItem([...allItem, ...data]);
        setOffset((offset) => offset + 5);
      }
    } catch (error) {
      setAllItem([]);
      setOffset(0);
    }
  };

  const checkScroll = () => {
    const {
      documentElement: { scrollTop, clientHeight, scrollHeight },
    } = document;
    if (scrollTop + clientHeight === scrollHeight) {
      getItems(false);
    }
  };

  useEffect(() => {
    console.log('hihi', offset);
    getItems(true);
  }, [isClick]);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  });
  return allItem;
};

export default useInfinite;
