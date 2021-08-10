import withAuth from '../../../src/components/commons/hoc/withAuth';
import MarketList from '../../../src/components/units/market/marketList/MarketList.container';

function MarketListPage() {
  return <MarketList />;
}

export default withAuth(MarketListPage);
