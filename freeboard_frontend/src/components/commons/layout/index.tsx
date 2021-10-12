import LayoutBanner from './banner/LayoutBanner.container'
import LayoutHeader from './header/LayoutHeader.container'
// import LayoutNavigation from './navigation/LayoutNavigation.container';
import LayoutFooter from './footer/LayoutFooter.container'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
const Body = styled.div`
  /* margin: 0 auto; */
  /* height: 1000px; */
`
const Wrapper = styled.div`
  /* height: 1000px; */
`

interface IProps {
  children: ReactNode
}

const HIDDEN_URL = [
  '/market/signup',
  '/market/login',
  '/Yogerpresso/subPage',
  '/happybath/subPage'
]

export default function Layout(props: IProps) {
  const router = useRouter()
  const isHidden = HIDDEN_URL.join().includes(router.pathname)

  return (
    <>
      <Wrapper>
        {!isHidden && (
          <>
            <LayoutHeader />
            <LayoutBanner />
          </>
        )}
        {/* <div style={{ backgroundColor: 'green' }}>사이드메뉴입니다.</div> */}

        <Body>{props.children}</Body>
      </Wrapper>

      {!isHidden && <LayoutFooter />}
    </>
  )
}
