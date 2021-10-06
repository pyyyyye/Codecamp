import { useRouter } from 'next/router'
import {
  Wrapper,
  Header,
  LeftBox,
  Title,
  SubTitle,
  RightBox,
  IconWrap,
  IconBox,
  IconImg,
  MyStacksButton,
  MainContainer,
  WorksBox,
  WorksTitleBox,
  WorksNum,
  WorksTitle,
  WorksContents,
  WorksImg,
  WorksTextBox,
  WorksType,
  WorksText,
  Footer,
  Hr,
  FooterText
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
  return (
    <Wrapper>
      {/*//! ----- Header ----- */}
      <Header>
        <LeftBox>
          <Title>PARK YOUNG EUN</Title>
          <SubTitle>Junior Front-end Developer Portfolio</SubTitle>
          <MyStacksButton>
            My Stacks  >
          </MyStacksButton>
        </LeftBox>
        <RightBox>
          <IconWrap>
            <IconBox>
              <IconImg src="/portfolio_img/Notion_logo.png" />
              <p>Notion</p>
            </IconBox>
            <IconBox>
              <IconImg src="/portfolio_img/github_logo.png" />
              <p>GitHub</p>
            </IconBox>
            <IconBox>
              <IconImg src="/portfolio_img/velog_logo.jpg" />
              <p>Velog</p>
            </IconBox>
          </IconWrap>
        </RightBox>
      </Header>

      {/*//! ----- Main Portfolio Works Container ----- */}
      <MainContainer>
        <WorksBox>
          <WorksTitleBox>
            <WorksNum>01.</WorksNum>
            <WorksTitle>Hey-Go</WorksTitle>
          </WorksTitleBox>
          <WorksContents>
            <WorksImg src="/portfolio_img/mockup01.png" />
          </WorksContents>
          <WorksTextBox>
            <WorksType>Team</WorksType>
            <WorksText>해외 여행 동행 구인 커뮤니티</WorksText>
          </WorksTextBox>
        </WorksBox>

        <WorksBox>
          <WorksTitleBox>
            <WorksNum>02.</WorksNum>
            <WorksTitle>Market</WorksTitle>
          </WorksTitleBox>
          <WorksContents>
            <WorksImg src="/portfolio_img/mockup01.png" />
          </WorksContents>
          <WorksTextBox>
            <WorksType>Solo</WorksType>
            <WorksText>중고 마켓</WorksText>
          </WorksTextBox>
        </WorksBox>

        <WorksBox>
          <WorksTitleBox>
            <WorksNum>01.</WorksNum>
            <WorksTitle>Hey-Go</WorksTitle>
          </WorksTitleBox>
          <WorksContents>
            <WorksImg src="/portfolio_img/mockup01.png" />
          </WorksContents>
          <WorksTextBox>
            <WorksType>Solo</WorksType>
            <WorksText>자유게시판</WorksText>
          </WorksTextBox>
        </WorksBox>
      </MainContainer>

      {/*//! ----- Footer ----- */}
      {/* <Footer>
        <Hr />
        <FooterText>park000eun@gmail.com</FooterText>
      </Footer> */}
    </Wrapper>
  )
}
