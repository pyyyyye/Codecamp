import styled from '@emotion/styled'
// !-- 랜딩 스타일
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 60px 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  width: 100%auto;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`
export const LeftBox = styled.div`
  width: 100%;
`
export const Title = styled.h1`
  font-size: 72px;
  line-height: 72px;
  letter-spacing: 5px;
  font-family: 'Neothic';
  margin-bottom: 0px;
`
export const SubTitle = styled.h6`
  display: flex;
  font-size: 20px;
  line-height: 20px;
  color: #888;
  font-family: 'Consolas';
  margin-top: 10px;
`
export const ImportanceTitle = styled.h6`
  font-size: 20px;
  color: #000;
  font-family: 'Consolas';
  margin: 0px 10px;
  background: linear-gradient(to top, #fee380 60%, transparent 50%);
`
export const MyStacksButton = styled.button`
  font-size: 13px;
  margin-top: 40px;
  color: #fec600;
  font-weight: 500;
  background: none;
  width: 110px;
  height: 30px;
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
export const ModalBox = styled.div`
  width: 100%;
  padding: 0px 10px;
`
export const LogoWrapTitle = styled.p`
  font-size: 20px;
  font-family: 'Consolas';
  border-bottom: 1px solid #fee380;
  padding-bottom: 10px;
`
export const LogoWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
`
export const LogoBox = styled.div`
  margin-right: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const LogoImg = styled.img`
  height: 56px;
  margin-bottom: 5px;
`
export const LogoTitle = styled.p`
  font-family: 'Consolas';
  font-weight: 500;
  font-size: 14px;
  padding-top: 5px;
  margin: 0px;
  text-align: center;
  line-height: 16px; ;
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
export const NotionTitle = styled.h5`
  font-weight: 600;
  background: linear-gradient(to top, #ffc59b 50%, transparent 50%);
`
export const MainContainer = styled.div`
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;

  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffeb8a;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`
export const WorksBox = styled.div`
  /* width: 335px; */
  width: 30%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  color: #777;

  :hover p {
    color: #000;
  }
  :hover #box1 {
    background-color: #fec600;
  }
  :hover #box2 {
    background-color: #2b6797;
  }
  :hover #box3 {
    background-color: #a4c61f;
  }
  :hover #box4 {
    background-color: #fe9702;
  }
  :hover #box5 {
    background-color: #46a0f6;
  }
`
export const WorksTitleBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: right;
`
export const WorksNum = styled.p`
  font-family: 'Neothic';
  font-size: 16px;
  /* color: #000; */
  letter-spacing: 2px;
  margin: 0px;
`
export const WorksTitle = styled.p`
  font-family: 'Neothic';
  font-size: 24px;
  letter-spacing: 2px;
  margin: 0px;
`
export const WorksContents = styled.div`
  background-color: #efefef;
  width: 335px;
  height: 300px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  align-items: center;
  text-align: center;
  line-height: 300px;
`
export const WorksImg1 = styled.img`
  width: 450px;
  position: absolute;
  top: 35px;
  right: 15px;
`
export const WorksImg2 = styled.img`
  width: 250px;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const WorksImg3 = styled.img`
  width: 380px;
  position: absolute;
  top: 16px;
  right: -6px;
`
export const WorksImg4 = styled.img`
  width: 450px;
  position: absolute;
  top: 30px;
  left: -50px;
`
export const WorksImg5 = styled.img`
  width: 260px;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const WorksTextBox = styled.div`
  padding-left: 15px;
  color: #888;
`
export const WorksType = styled.p`
  font-family: 'Consolas';
  font-size: 14px;
  line-height: 20px;
  padding-top: 20px;
`
export const WorksText = styled.p`
  font-family: 'SB_L';
  font-size: 18px;
  line-height: 20px;
  margin-top: 10px;
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
  letter-spacing: 0px;
  text-align: right;
  color: #999;
`
