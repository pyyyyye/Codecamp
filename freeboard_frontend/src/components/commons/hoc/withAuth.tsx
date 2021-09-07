// @ts-nocheck
// ------------ market login의 withAuth ------------
import { useRouter } from 'next/router'
import { ComponentType, useEffect } from 'react'
// import { GlobalContext } from '../../../../pages/_app'

const withAuth = (Component: ComponentType) => (props: any) => {
  const router = useRouter()
  // const { accessToken } = useContext(GlobalContext)

  useEffect(() => {
    if (!localStorage.getItem('refreshToken')) {
      alert('로그인이 필요한 페이지입니다.')
      router.push('/market/login')
    }
  }, [])

  // if (!accessToken) return <></>;
  // 액세스토큰없으면 빈화면 보여준다.
  return <Component {...props} />
}

export default withAuth()
