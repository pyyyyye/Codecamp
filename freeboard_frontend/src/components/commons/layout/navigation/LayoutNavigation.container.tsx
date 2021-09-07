import { useRouter } from 'next/router'
import LayoutNavigationUI from './LayoutNavigation.presenter'

export default function LayoutNavigation() {
  const router = useRouter()

  const onClickMarket = () => {
    router.push('/market/list')
  }
  const onClickFreeboard = () => {
    router.push('/board/bestposts')
  }
  return (
    <LayoutNavigationUI
      onClickFreeboard={onClickFreeboard}
      onClickMarket={onClickMarket}
    />
  )
}
