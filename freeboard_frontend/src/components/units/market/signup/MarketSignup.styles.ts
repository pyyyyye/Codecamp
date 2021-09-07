// ====== 중고마켓 회원가입 | market signup styles ======
import styled from '@emotion/styled'

export const TopTitle = styled.h1`
  color: #fff;

  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  border-bottom: 40px;
  padding-top: 100px;
`
export const MainSignupContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
`
export const InputBox = styled.div`
  width: 384px;
  padding-bottom: 20px;
`
export const SingupLabel = styled.label`
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 12px;
`
export const InputSignup = styled.input`
  outline: none;
  width: 100%;
  height: 64px;
  border: 1px solid #fff;
  border-radius: 16px;
  color: #fff;
  padding: 20px;
  background: transparent;
  font-size: 15px;
  margin-top: 12px;
`
export const SignupError = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: red;
  margin: 10px 0px 0px 16px;
`
export const GoToSignup = styled.div`
  width: 384px;
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 64px;
  color: #fff;
  margin-top: 40px;
  margin-bottom: 120px;
`
