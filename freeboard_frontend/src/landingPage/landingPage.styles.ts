import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  width: 100%auto;
  display: flex;
  justify-content: space-between;
`
export const LeftBox = styled.div`
  width: 100%;
`
export const Title = styled.h1`
  font-size: 72px;
  line-height: 80px;
  letter-spacing: 5px;
  font-family: 'Neothic';
  margin-bottom: 0px;
`
export const SubTitle = styled.h6`
  font-size: 32px;
  color: #888;
  letter-spacing: 2px;
  font-family: 'Consolas';
`
export const MyStacksButton = styled.button`
  font-size: 14px;
  color: #fec600;
  font-weight: 500;
  background: none;
  width: 130px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #fec600;
  font-family: 'Consolas';
  cursor: pointer;
  :hover {
    border: none;
    background-color: #fec600;
    color: #fff;
  }
`
export const RightBox = styled.div``

export const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const IconBox = styled.div`
  width: 50px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;

  p {
    display: none;
    margin-top: 5px;
    color: lime;
  }

  :hover p {
    display: inline;
    font-family: 'Consolas';
    color: #000;
  }
`
export const IconImg = styled.img`
  width: 34px;
  height: 34px;
`

export const MainContainer = styled.div`
  padding-top: 50px;

  width: 100%;
  display: flex;
  flex-direction: row;
`
export const WorksBox = styled.div`
  width: 335px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`
export const WorksTitleBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: right;
`
export const WorksNum = styled.p`
  font-family: 'Neothic';
  font-size: 24px;
  color: #000;
  letter-spacing: 2px;
`
export const WorksTitle = styled.p`
  font-family: 'Neothic';
  font-size: 24px;
  color: #000;
  letter-spacing: 2px;
`
export const WorksContents = styled.div`
  background-color: #efefef;
  width: 335px;
  height: 290px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`
export const WorksImg = styled.img`
  width: 450px;
  position: absolute;
  top: 25px;
  right: 15px;
`
export const WorksTextBox = styled.div`
  padding-left: 15px;
`
export const WorksType = styled.p`
  font-family: 'SB_L';
  font-size: 14px;
  line-height: 20px;
  color: #888;
  padding-top: 20px;
`
export const WorksText = styled.p`
  font-family: 'SB_L';
  font-size: 18px;
  line-height: 30px;
  margin-top: 10px;
  color: #000;
`
export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Hr = styled.hr`
  width: 85%;
  border: 0.01px solid #bdbdbd;
`
export const FooterText = styled.p`
  font-family: 'Consolas';
  letter-spacing: 1px;
  text-align: right;
  color: #999;
`
