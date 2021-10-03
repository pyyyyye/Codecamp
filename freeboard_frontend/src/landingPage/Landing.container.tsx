import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightblue;
  padding: 200px;
`
const InnerWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red; ;
`
const Title = styled.h1``
const SubTitle = styled.p``

export default function LandingPage() {
  return (
    <Wrapper>
      <InnerWrap>
        <Title>PORTFOLIO</Title>
        <SubTitle>Front-end Developer</SubTitle>
        <SubTitle>PARK YOUNG EUN</SubTitle>
      </InnerWrap>
    </Wrapper>
  )
}
