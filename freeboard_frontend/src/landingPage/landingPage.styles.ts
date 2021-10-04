import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fffdf2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const TopInner = styled.div`
  width: 70%;
`
export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-size: 64px;
  line-height: 72px;
  color: #160b9c;
`
export const SnsWrap = styled.div`
  display: flex;
  flex-direction: row;
`

export const SubTitle = styled.p`
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 3px;
`
export const SnsButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
`
export const BottomInner = styled.div`
  width: 70%;
  padding-bottom: 100px;
`
export const TabWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const TabBox = styled.div``
export const TabButton = styled.button`
  border: none;
  border-bottom: 1px solid blue;
  background: none;
  cursor: pointer;
  margin: 0px 20px 30px 0px;
  :hover {
    border-bottom: 1px solid red;
  }
`
export const WorksBox = styled.div``
export const WorksTitle = styled.p``
export const WorksButton = styled.button`
  background-image: url('./portfolio_img/SplashScreen.png');
  background-size: 250px;
  background-position: center;
  width: 200px;
  height: 180px;
  border: none;
  border-radius: 30px;
  /* background-color: #ededed; */
  cursor: pointer;

  box-shadow: 0px 18px 8px -10px rgba(0, 0, 0, 0.1);
  :hover {
    background-size: 350px;
  }
`
export const StackBox = styled.div``
export const StackImg = styled.image``
export const StackTitle = styled.div``
