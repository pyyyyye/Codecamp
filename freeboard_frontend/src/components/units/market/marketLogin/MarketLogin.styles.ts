// ---------- 중고마켓 로그인 styles.tsx -------------
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%auto;
  display: flex;
  justify-content: center;
  padding-top: 240px;
`
export const LoginContents = styled.div`
  width: 380px;
  /* height: 510px; */
`
export const TopLogo = styled.div`
  width: 288px;
  height: 44px;
  margin: 0 auto;
  background-image: url('/images/market_logo.png');
  background-repeat: no-repeat;
  padding-bottom: 100px;
`
export const MainLoginContents = styled.div`
  width: 100%;
  height: 388px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
// export const LoginBox = styled.div`
// `;
export const InputLogin = styled.input`
  height: 64px;
  border: 1px solid #fff;
  border-radius: 16px;
  background: transparent;
  color: #fff;
  padding-left: 16px;
  outline: none;
`
export const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 4px 0px 10px 16px;
  color: #ff0000;
`

export const KeepStateLogin = styled.div`
  height: 45px;
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: row;
  line-height: 16px;
  /* padding-top: 15px; */
  padding-bottom: 40px;
`
export const KeepLoginText = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  margin-left: 12px;
  cursor: pointer;
`
export const GotoLoginBox = styled.div`
  width: 100%;
  /* margin-bottom: 40px; */
`
export const GoToLogin = styled.button`
  width: 100%;
  height: 64px;
  background-color: #4f4f4f;
  border-radius: 16px;
  text-align: center;
  line-height: 64px;
  color: #fff;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  border: none;
  outline: none;
  :hover {
    background-color: #ffd600;
    color: #000;
  }
`
export const BottomJoinOrFind = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  /* margin-top: 40px; */
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid;
`
export const BottomBtn = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 13px;
  padding: 0 18px;

  cursor: pointer;
`
export const ExData = styled.div`
  position: fixed;
  right: 500px;
  top: 335px;
  width: 220px;
  height: 106px;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 25px;
`
export const IdPw = styled.p`
  color: #fff;
  letter-spacing: 2px;
`
