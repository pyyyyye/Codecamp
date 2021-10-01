import styled from '@emotion/styled'
import { useRouter } from 'next/router'

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
  :hover {
    background-color: #9b111e;
  }
`

export default function Home() {
  const router = useRouter()
  function onClickPortfolio() {
    router.push('/board/bestposts')
  }
  return (
    <Wrap>
      <>
        <LOGO>○ △ □</LOGO>
        <p>입장을 원하시면 아래 버튼을 눌러주세요.</p>
        <ClickBTN onClick={onClickPortfolio}>Click</ClickBTN>
      </>
    </Wrap>
  )
}
