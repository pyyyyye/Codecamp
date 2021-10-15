// ======= 중고마켓 회원가입 | market signup presenter =======
import {
  Wrapper,
  MainSignupContents,
  TopTitle,
  InputSignup,
  SingupLabel,
  InputBox,
  SignupError,
  GoToSignup
} from './MarketSignup.styles'

export default function MarketSignupUI(props: any) {
  return (
    <Wrapper>
      <TopTitle>Sign up</TopTitle>
      <MainSignupContents>
        <InputBox>
          <SingupLabel>Name</SingupLabel>
          <InputSignup
            name="name"
            type="text"
            placeholder=" Name"
            onChange={props.onChangeSignupInput}
          />
          <SignupError>{props.inputError.name}</SignupError>
        </InputBox>
        <InputBox>
          <SingupLabel>E-mail</SingupLabel>
          <InputSignup
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={props.onChangeSignupInput}
          />
          <SignupError>{props.inputError.email}</SignupError>
        </InputBox>
        <InputBox>
          <SingupLabel>Password</SingupLabel>
          <InputSignup
            name="password"
            type="password"
            placeholder="Create Password"
            onChange={props.onChangeSignupInput}
          />
          <SignupError>{props.inputError.password}</SignupError>
        </InputBox>
        {/* <InputBox>
          <SingupLabel>Password</SingupLabel>
          <InputSignup
            id="SignupPasswordAgain"
            type="password"
            placeholder="Create Password"
            onChange={props.onChangePasswordAginInput}
          />
          <SignupError>{props.inputError.repassword}</SignupError>
         <SignupError>{props.inputError.password}</SignupError>
        {/* </InputBox>  */}
        <GoToSignup onClick={props.onClickSignup}>Sign up</GoToSignup>
      </MainSignupContents>
    </Wrapper>
  )
}
