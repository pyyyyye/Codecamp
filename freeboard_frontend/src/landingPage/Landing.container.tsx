import {
  Wrapper,
  TopInner,
  Top,
  Title,
  SnsWrap,
  SubTitle,
  SnsButton,
  BottomInner,
  TabWrap,
  TabBox,
  TabButton,
  WorksBox,
  WorksTitle,
  WorksButton,
  StackBox,
  StackImg,
  StackTitle
} from './landingPage.styles'

export default function LandingPage() {
  return (
    <Wrapper>
      {/* --- 상단 타이틀 --- */}
      <TopInner>
        <Top>
          <Title>PORTFOLIO</Title>
          <SnsWrap>
            <SnsButton>1</SnsButton>
            <SnsButton>2</SnsButton>
            <SnsButton>3</SnsButton>
            <SnsButton>4</SnsButton>
          </SnsWrap>
        </Top>
        <SubTitle>
          Front-end Developer <br />
          PARK YOUNG EUN
        </SubTitle>
      </TopInner>

      {/* --- 하단 컨텐츠 --- */}
      <BottomInner>
        <TabWrap>
          {/* MY WORKS */}
          <TabBox>
            <TabButton>MY WORKS</TabButton>
            <WorksBox>
              <WorksTitle>1. 헤이고</WorksTitle>
              <WorksButton></WorksButton>
            </WorksBox>
          </TabBox>

          {/* MY STACKS */}
          <TabBox>
            <TabButton>MY STACKS</TabButton>
            <StackBox>
              <StackImg />
              <StackTitle>React</StackTitle>
            </StackBox>
          </TabBox>
        </TabWrap>
      </BottomInner>
    </Wrapper>
  )
}
