import styled from '@emotion/styled'
const Box = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Btn = styled.button`
  width: 300px;
  height: 40px;
  text-align: center;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  :hover {
    font-weight: 700;
  }
`

export default function Trenb() {
  const onClickGoogle = () => {
    console.log('구글 계정 로그인')
  }
  const onClickFaceBook = () => {
    console.log('페이스북 계정 로그인')
  }
  const onClickNaver = () => {
    console.log('네이버 계정 로그인')
  }

  return (
    <Box>
      <Btn onClick={onClickGoogle}>구글 계정 로그인</Btn>
      <Btn onClick={onClickFaceBook}>페이스북 계정 로그인</Btn>
      <Btn onClick={onClickNaver}>카카오톡 계정 로그인</Btn>
    </Box>
  )
}
