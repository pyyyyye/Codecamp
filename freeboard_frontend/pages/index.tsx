import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Landing from './landingPage'

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('./paper.jpg');
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LOGO = styled.h1`
  font-size: 50px;
`
const ButtonBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const ClickBTN = styled.div`
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #555;
  opacity: 65%;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
  font-size: 13px;
  :hover {
    background-color: #9b111e;
  }
`

export default function Home() {
  // const router = useRouter()
  // function onClickMarket() {
  //   router.push('/market/login')
  // }
  // function onClickFreeBoard() {
  //   router.push('/board/bestposts')
  // }
  return (
    <Landing />
    // <Wrap>
    //   <>
    //     <LOGO>○ △ □</LOGO>
    //     <p>입장을 원하는 버튼을 눌러주세요.</p>
    //     <ButtonBox>
    //       <ClickBTN onClick={onClickMarket}>중고마켓</ClickBTN>
    //       <ClickBTN onClick={onClickFreeBoard}>자유게시판</ClickBTN>
    //     </ButtonBox>
    //   </>
    // </Wrap>
  )
}
