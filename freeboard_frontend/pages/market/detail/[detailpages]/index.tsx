import MarketDetail from '../../../../src/components/units/market/marketDetail/MarketDetail.container';
import CommentList from '../../../../src/components/units/marketComment1/commenList/CommentList.container';
import CommentWrite from '../../../../src/components/units/marketComment1/commentWrite/CommentWrite.container';

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}
