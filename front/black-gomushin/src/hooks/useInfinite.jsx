import { useState, useEffect } from 'react';
import { getAxios } from '../utils/axios';

const useInfinite = (newParams = {}) => {
  const [allItem, setAllItem] = useState([]);
  const [offset, setOffset] = useState(0);

  const getItems = async () => {
    const params = {
      offset,
      limit: 5,
    };
    const { data } = await getAxios('/search', { ...params, ...newParams });
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
  return allItem;
};

export default useInfinite;
