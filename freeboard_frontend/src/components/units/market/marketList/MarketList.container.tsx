import { useQuery } from '@apollo/client';
import router, { useRouter } from 'next/router';
import MarketListUI from './MarketList.presenter';
import { FETCH_USED_ITEMS } from './MarketList.queries';

export default function MarketList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);

  function onClickWrite(event) {
    router.push(`/market/write/${event.target.id}`);
  }
  function onClickTitle(event) {
    router.push(`/market/detail/${event.target.id}`);
  }
  return (
    <MarketListUI
      data={data}
      onClickWrite={onClickWrite}
      onClickTitle={onClickTitle}
    />
  );
}
