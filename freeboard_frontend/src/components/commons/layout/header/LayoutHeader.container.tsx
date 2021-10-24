import { useRouter } from 'next/router'
import LayoutNavigation from '../navigation/LayoutNavigation.container'
import LayoutHeaderUI from './LayoutHeader.presenter'

export default function LayoutHeader() {
  const router = useRouter()

  const onClickLogin = () => {
    router.push('/market/login')
  }
  const onClickSignup = () => {
    router.push('/market/signup')
  }

  return (
    <>
      <LayoutHeaderUI
        onClickLogin={onClickLogin}
        onClickSignup={onClickSignup}
      />
    </>
  )
}
