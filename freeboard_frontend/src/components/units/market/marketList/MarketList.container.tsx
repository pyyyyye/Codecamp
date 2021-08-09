import router from 'next/router';
import MarketListUI from './MarketList.presenter';

function onClickWrite(event) {
  router.push('../../../../../market/write');
}

export default function MarketList() {
  return <MarketListUI onClickWrite={onClickWrite} />;
}
