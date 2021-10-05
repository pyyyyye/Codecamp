import { useRouter } from 'next/router'
import {
  Wrapper,
  TopInner,
  Top,
  Title,
  SnsWrap,
  SubTitle,
  SnsButton,
  BottomInner,
  WorksWrap,
  WorksPhoto,
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
  const router = useRouter()

  function onClickMoveToWork1() {
    router.replace(
      'https://newbizstart.notion.site/89f50449509d4630a9d52e9b5504d885'
    )
  }
  function onClickMoveToWork2() {
    router.push('/market/list')
  }
  function onClickMoveToWork3() {
    router.push('/board/bestposts')
  }

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
        {/* <TabWrap> */}
        {/* MY WORKS */}
        <TabBox>
          <TabButton>MY WORKS</TabButton>
          <WorksWrap>
            <WorksBox>
              <WorksTitle>1. 헤이고</WorksTitle>
              <WorksButton onClick={onClickMoveToWork1}>
                <WorksPhoto src="/portfolio_img/SplashScreen.png" />
              </WorksButton>
            </WorksBox>
            <WorksBox>
              <WorksTitle>2. LA한인 - 중고마켓</WorksTitle>
              <WorksButton onClick={onClickMoveToWork2}>
                <WorksPhoto src="/images/BannerImg01.jpg" />
              </WorksButton>
            </WorksBox>
            <WorksBox>
              <WorksTitle>3. LA한인 - 자유게시판</WorksTitle>
              <WorksButton onClick={onClickMoveToWork3}>
                <WorksPhoto src="/images/BannerImg02.jpg" />
              </WorksButton>
            </WorksBox>
          </WorksWrap>
        </TabBox>

        {/* MY STACKS */}
        {/* <TabBox>
            <TabButton>MY STACKS</TabButton>
            <StackBox>
              <StackImg />
              <StackTitle>React</StackTitle>
            </StackBox>
          </TabBox>
        </TabWrap> */}
      </BottomInner>
    </Wrapper>
  )
}
