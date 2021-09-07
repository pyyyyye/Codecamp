import withAuth from '../../../src/components/commons/hoc/withAuth'
import MarketWrite from '../../../src/components/units/market/marketWrite/MarketWrite.container'

function MarketWritePage() {
  return <MarketWrite />
}

export default withAuth(MarketWritePage)

// export default function MarketWritePage() {
//   return <MarketWrite />;
// }
