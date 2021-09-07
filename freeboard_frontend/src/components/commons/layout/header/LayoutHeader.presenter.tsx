// @ts-nocheck

import { useContext } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import {
  Wrapper,
  HeaderWrap,
  HeaderButton,
  AfterLogin
} from './LayoutHeader.styles'

interface IProps {
  onClickLogin: () => void
  onClickSignup: () => void
}

export default function LayoutHeaderUI(props: IProps) {
  const { accessToken } = useContext(GlobalContext)
  return (
    <Wrapper>
      <HeaderWrap>
        {accessToken ? (
          <AfterLogin>마이페이지</AfterLogin>
        ) : (
          <div>
            <HeaderButton onClick={props.onClickLogin}>로그인</HeaderButton>|
            <HeaderButton onClick={props.onClickSignup}>회원가입</HeaderButton>
          </div>
        )}
      </HeaderWrap>
    </Wrapper>
  )
}
