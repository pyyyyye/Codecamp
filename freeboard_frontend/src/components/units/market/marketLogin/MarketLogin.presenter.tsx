// ---------- 중고마켓 로그인 presenter.tsx -------------
// @ts-nocheck
import {
  Wrapper,
  LoginContents,
  TopLogo,
  MainLoginContents,
  InputLogin,
  KeepStateLogin,
  KeepLoginText,
  GoToLogin,
  GotoLoginBox,
  BottomJoinOrFind,
  BottomBtn,
  ErrorMessage,
  IdPw
} from './MarketLogin.styles'
import { CheckCircleOutlined } from '@ant-design/icons'
import { ChangeEvent } from 'react'
import { useRouter } from 'next/router'

interface IProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onClickLogin: () => void
  onClickGoToSignup: any
  register: any
  handleSubmit: () => void
  // onSubmit: () => void;
}

export default function MarketLoginUI(props: IProps) {
  const router = useRouter()
  const onClickMoveToSignUp = () => {
    router.push('/market/signup')
  }

  return (
    <Wrapper>
      <LoginContents>
        <TopLogo />
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <MainLoginContents>
            {/* ---- MainLoginContents Start ---- */}
            <InputLogin
              type="text"
              {...props.register('email')}
              placeholder="이메일을입력해주세요"
            />
            <ErrorMessage>{props.errors.email?.message}</ErrorMessage>
            {/* -- 비밀번호 -- */}
            <InputLogin
              type="password"
              {...props.register('password')}
              placeholder="비밀번호를 입력해주세요"
              // errorMessage={props.errors.password?.message}
            />
            <ErrorMessage>{props.errors.password?.message}</ErrorMessage>
            {/* -- 로그인상태 유지 체크박스 -- */}
            <KeepStateLogin>
              <CheckCircleOutlined />
              <KeepLoginText>
                <IdPw>
                  Test &nbsp;) &nbsp;ID : <span>111@111.com</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp; PW : <span>aa1111</span>
                </IdPw>
              </KeepLoginText>
            </KeepStateLogin>
            {/* -- 로그인 버튼 -- */}
            <GotoLoginBox>
              <GoToLogin type="submit">Sign in</GoToLogin>
            </GotoLoginBox>
            {/* -- 하단 비밀번호 찾기 및 회원가입 -- */}
            <BottomJoinOrFind>
              <BottomBtn>Forgot ID</BottomBtn>|<BottomBtn>Forgot PW</BottomBtn>|
              <BottomBtn onClick={onClickMoveToSignUp}>Sing up</BottomBtn>
            </BottomJoinOrFind>
            {/* ---- MainLoginContents End ---- */}
          </MainLoginContents>
        </form>
      </LoginContents>
    </Wrapper>
  )
}
