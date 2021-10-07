import { Modal } from 'antd'
import { useState } from 'react'
import {
  Wrapper,
  Header,
  LeftBox,
  Title,
  SubTitle,
  ImportanceTitle,
  RightBox,
  IconWrap,
  IconBox,
  IconImg,
  NotionTitle,
  MyStacksButton,
  ModalBox,
  LogoWrapTitle,
  LogoWrap,
  LogoBox,
  LogoImg,
  LogoTitle,
  MainContainer,
  WorksBox,
  WorksTitleBox,
  WorksNum,
  WorksTitle,
  WorksContents,
  WorksImg1,
  WorksImg2,
  WorksImg3,
  WorksTextBox,
  WorksType,
  WorksText,
} from './landingPage.styles'

export default function LandingPage() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickMoveToNotion = () => {
    window.open("https://www.notion.so/5ea464d9cb8e4cb9a931917038f51db4", "프론트엔드 개발자 박영은 노션 이력서", "width=100%");
  }
  const onClickMoveToGitHub = () => {
    window.open("https://github.com/pyyyyye", "프론트엔드 개발자 박영은 깃허브", "width=100%");
  }
  const onClickMoveToVelog = () => {
    window.open("https://velog.io/@park0eun", "프론트엔드 개발자 박영은 벨로그", "width=100%");
  }

  function onClickMoveToHeyGo() {
    window.open("https://newbizstart.notion.site/89f50449509d4630a9d52e9b5504d885", "박영은 포트폴리오 - 헤이고", "width=100%");
  }
  function onClickMoveToMarket() {
    window.open("/market/list", "박영은 포트폴리오 - 헤이고", "width=100%");
  }
  function onClickMoveToFreeBoard() {
    window.open("/board/bestposts", "박영은 포트폴리오 - 헤이고", "width=100%");
  }

  return (
    <Wrapper>
      {/*//! ----- Header ----- */}
      <Header>
        <LeftBox>
          <Title>PARK YOUNG EUN</Title>
          <SubTitle>Junior <ImportanceTitle>Front-end Developer</ImportanceTitle> Portfolio</SubTitle>
          
          {/* -- My Stacks - Modal -- */}
          <MyStacksButton onClick={showModal}>
            My Stacks  >
          </MyStacksButton>
          <Modal title="Park YounEun's Stacks" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} bodyStyle={{ height:600, overflow:'auto'}}>
            <ModalBox>
              <LogoWrapTitle>1.Stacks</LogoWrapTitle>
              <LogoWrap>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_js.png" />
                  <LogoTitle>JavaScript</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_ts.png" />
                  <LogoTitle>TypeScript</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_html.png" />
                  <LogoTitle>Html</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg src="/portfolio_img/logo_css.png" />
                  <LogoTitle>Css</LogoTitle>
                </LogoBox>
              </LogoWrap>

              <LogoWrapTitle>2. Framework & Library</LogoWrapTitle>
              <LogoWrap>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_nextjs.png" />
                  <LogoTitle>Next.js</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_react.png" />
                  <LogoTitle>React</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_react.png" />
                  <LogoTitle>React-Hooks</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/router.png" />
                  <LogoTitle>React-Router</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg src="/portfolio_img/logo_react.png" />
                  <LogoTitle>React-Native</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg src="/portfolio_img/logo_ReactNavi.png" />
                  <LogoTitle>React<br/>Navigation</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg src="/portfolio_img/emotion.png" />
                  <LogoTitle>Emotion</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg src="/portfolio_img/logo_styledComponent.png" />
                  <LogoTitle>Styled<br/>Component</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg src="/portfolio_img/logo_ant.png" />
                  <LogoTitle>Ant-Design</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg src="/portfolio_img/logo_material.png" />
                  <LogoTitle>Material<br/>Design</LogoTitle>
                </LogoBox>
              </LogoWrap>

              <LogoWrapTitle>3. Network</LogoWrapTitle>
              <LogoWrap>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/graphql.png" />
                  <LogoTitle>GraphQl-api</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_apollo.png" />
                  <LogoTitle>Apollo Client</LogoTitle>
                </LogoBox>
                <LogoBox>
                <LogoImg  src="/portfolio_img/logo_com.jpg" />
                  <LogoTitle>REST api</LogoTitle>
                </LogoBox>
              </LogoWrap>

              <LogoWrapTitle>4. Communication Tools</LogoWrapTitle>
              <LogoWrap>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/Git-Icon-Black.png" />
                  <LogoTitle>Git</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/github_logo.png" />
                  <LogoTitle>Git-hub</LogoTitle>
                </LogoBox>
                <LogoBox>
                <LogoImg  src="/portfolio_img/slack2.png" />
                  <LogoTitle>Slack</LogoTitle>
                </LogoBox>
                <LogoBox>
                <LogoImg  src="/portfolio_img/logo_figma.png" />
                  <LogoTitle>Figma</LogoTitle>
                </LogoBox>
                <LogoBox>
                <LogoImg  src="/portfolio_img/Notion_logo.png" />
                  <LogoTitle>Notion</LogoTitle>
                </LogoBox>
              </LogoWrap>

              <LogoWrapTitle>5. Adobe</LogoWrapTitle>
              <LogoWrap>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_photoshop.png" />
                  <LogoTitle>Photoshop</LogoTitle>
                </LogoBox>
                <LogoBox>
                  <LogoImg  src="/portfolio_img/logo_indesign.png" />
                  <LogoTitle>Indesign</LogoTitle>
                </LogoBox>
              </LogoWrap>
            </ModalBox>
          </Modal>

        </LeftBox>
        <RightBox>
          <IconWrap>
            <IconBox onClick={onClickMoveToNotion}>
              <IconImg src="/portfolio_img/Notion_logo.png" />
            
              <NotionTitle> Resume </NotionTitle>
              <p>Notion</p>
            </IconBox>
            <IconBox onClick={onClickMoveToGitHub}>
              <IconImg src="/portfolio_img/github_logo.png" />
              <p>GitHub</p>
            </IconBox>
            <IconBox onClick={onClickMoveToVelog}>
              <IconImg src="/portfolio_img/velog_logo.jpg" />
              <p>Velog</p>
            </IconBox>
          </IconWrap>
        </RightBox>
      </Header>

      {/*//! ----- Main Portfolio Works Container ----- */}
      <MainContainer>
        <WorksBox onClick={onClickMoveToHeyGo}>
          <WorksTitleBox>
            <WorksNum>01.</WorksNum>
            <WorksTitle>Hey-Go</WorksTitle>
          </WorksTitleBox>
          <WorksContents>
            <WorksImg1 src="/portfolio_img/mockup01.png" />
          </WorksContents>
          <WorksTextBox>
            <WorksType>Team</WorksType>
            <WorksText>해외 여행 동행 구인 커뮤니티</WorksText>
          </WorksTextBox>
        </WorksBox>

        <WorksBox onClick={onClickMoveToMarket}>
          <WorksTitleBox>
            <WorksNum>02.</WorksNum>
            <WorksTitle>Market</WorksTitle>
          </WorksTitleBox>
          <WorksContents>
            <WorksImg2 src="/portfolio_img/MacBook.png" />
          </WorksContents>
          <WorksTextBox>
            <WorksType>Solo</WorksType>
            <WorksText>중고 마켓</WorksText>
          </WorksTextBox>
        </WorksBox>

        <WorksBox onClick={onClickMoveToFreeBoard}>
          <WorksTitleBox>
            <WorksNum>03.</WorksNum>
            <WorksTitle>Freeboard</WorksTitle>
          </WorksTitleBox>
          <WorksContents>
            <WorksImg3 src="/portfolio_img/Display.png" />
          </WorksContents>
          <WorksTextBox>
            <WorksType>Solo</WorksType>
            <WorksText>자유게시판</WorksText>
          </WorksTextBox>
        </WorksBox>

        <WorksBox>
          <WorksTitleBox>
            <WorksNum>&nbsp;  </WorksNum>
            <WorksTitle> &nbsp; </WorksTitle>
          </WorksTitleBox>
          <WorksContents>
          <p>Loding ...</p>
          </WorksContents>
          <WorksTextBox>
            <WorksType> &nbsp; </WorksType>
            <WorksText>  &nbsp; </WorksText>
          </WorksTextBox>
        </WorksBox>
        <WorksBox>
          <WorksTitleBox>
            <WorksNum>&nbsp;  </WorksNum>
            <WorksTitle> &nbsp; </WorksTitle>
          </WorksTitleBox>
          <WorksContents>
           <p>Loding ...</p>
          </WorksContents>
          <WorksTextBox>
            <WorksType> &nbsp; </WorksType>
            <WorksText> &nbsp;  </WorksText>
          </WorksTextBox>
        </WorksBox>
          
          
      </MainContainer>
    </Wrapper>
  )
}
