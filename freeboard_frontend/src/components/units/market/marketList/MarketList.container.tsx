import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MarketListUI from './MarketList.presenter';
import { FETCH_USED_ITEMS } from './MarketList.queries';

export default function MarketList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);
  const [aaa, setAaa] = useState([]);

  function onClickWrite() {
    router.push('/market/write');
  }

  const onClickTitle = (basketData: any) => () => {
    console.log(basketData);
    router.push(`/market/detail/${basketData._id}`);

    const baskets = JSON.parse(localStorage.getItem('baskets') || '[]');
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) return;
    baskets.push(basketData);
    setAaa(baskets);
    localStorage.setItem('baskets', JSON.stringify(baskets));
  };

  useEffect(() => {
    const SideProps = JSON.parse(localStorage.getItem('baskets') || '[]');
    setAaa(SideProps);
  }, []);

  return (
    <MarketListUI
      data={data}
      onClickWrite={onClickWrite}
      onClickTitle={onClickTitle}
      aaa={aaa}
    />
  );
}
