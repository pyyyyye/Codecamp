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
  ErrorMessage
} from './MarketLogin.styles'
import { CheckCircleOutlined } from '@ant-design/icons'
import { ChangeEvent } from 'react'

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
              <KeepLoginText>로그인 상태 유지 </KeepLoginText>
            </KeepStateLogin>
            {/* -- 로그인 버튼 -- */}
            <GotoLoginBox>
              <GoToLogin type="submit">로그인하기</GoToLogin>
            </GotoLoginBox>
            {/* -- 하단 비밀번호 찾기 및 회원가입 -- */}
            <BottomJoinOrFind>
              <BottomBtn>이메일 찾기</BottomBtn>|
              <BottomBtn>비밀번호 찾기</BottomBtn>|
              <BottomBtn>회원가입</BottomBtn>
            </BottomJoinOrFind>
            {/* ---- MainLoginContents End ---- */}
          </MainLoginContents>
        </form>
      </LoginContents>
    </Wrapper>
  )
}
