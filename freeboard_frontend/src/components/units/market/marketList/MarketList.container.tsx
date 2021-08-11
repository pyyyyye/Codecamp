import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import MarketListUI from './MarketList.presenter';
import { FETCH_USED_ITEMS } from './MarketList.queries';

export default function MarketList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);

  function onClickWrite() {
    router.push('/market/write');
  }
  function onClickTitle(event) {
    router.push(`/market/detail/${event.target.id}`);
    console.log(event.target.id);
  }

  return (
    <MarketListUI
      data={data}
      onClickWrite={onClickWrite}
      onClickTitle={onClickTitle}
    />
  );
}
