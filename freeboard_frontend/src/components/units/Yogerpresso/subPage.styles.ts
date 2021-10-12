import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TopBox = styled.div`
  width: 100%;
  background-image: url('/yoger_img/sub_01_p1_bg.jpg');
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 90px;
  text-align: center;
  padding-top: 50px;
  margin-bottom: 2px;
  color: #302006;
`
export const SubTitle = styled.h6`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 34px;
  text-align: center;
  color: #302006;
  border-bottom: 1px solid #302006;
  span {
    font-weight: 500;
  }
`
export const SubText = styled.p`
  font-size: 12px;
  text-align: center;
  padding: 14px 0px;
  span {
    padding: 12px;
  }
  p {
    margin: 0px;
    padding-top: 5px;
  }
`
export const ButtonBox = styled.div`
  margin-bottom: 20px;
`
export const Button = styled.button`
  width: 170px;
  height: 36px;
  border-radius: 50px;
  border: 0.5px solid #b49770;
  color: #7a5e39;
  font-size: 12px;
  margin: 10px;
  cursor: pointer;
  background: none;
  :hover {
    background-color: #b49770;
    color: #fff;
  }
`
export const Mockup = styled.img`
  width: 70%;
  margin-bottom: 50px;
  margin-top: 20px;
`
export const UiBox = styled.div`
  width: 70%;
`
export const UiTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 64px 0px 40px 0px;
`
export const UiBoxTitle = styled.p`
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
  margin-bottom: 2px;
  color: #302006;
`
export const SizeText = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  padding-top: 26px;
  span {
    color: red;
    padding-left: 30px;
  }
  p {
    padding-left: 10px;
  }
`
export const UiMockupBox = styled.div`
  text-align: center;
  font-size: 20px;
  p {
    padding-bottom: 50px;
  }
`
export const UiImg = styled.img`
  width: 700px;
`
