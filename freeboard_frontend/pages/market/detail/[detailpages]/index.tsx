import MarketDetail from '../../../../src/components/units/market/marketDetail/MarketDetail.container'
import CommentList from '../../../../src/components/units/marketComment/commenList/CommentList.container'
import CommentWrite from '../../../../src/components/units/marketComment/commentWrite/CommentWrite.container'

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail />
      <CommentWrite />
      <CommentList />
    </>
  )
}

// export const getServerSideProps = () => {
//   // 백엔드에 요청해서 데이터 받기
//   return 받은데이터
// }
