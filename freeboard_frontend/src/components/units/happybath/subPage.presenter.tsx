import {
  Wrapper,
  TopBox,
  Title,
  SubTitle,
  SubText,
  ButtonBox,
  Button,
  Mockup,
  UiBox,
  UiBoxTitle,
  UiTitleBox,
  SizeText,
  UiMockupBox,
  UiImg
} from './subPage.styles'

export default function HappyBathSubUI() {
  return (
    <Wrapper>
      <TopBox>
        <Title>해피바스</Title>
        <SubTitle>
          웹, 패드, 모바일 반응형 메인페이지 <span>리디자인</span>
        </SubTitle>
        <SubText>
          <span>&#128197; 1 month</span>|
          <span>&#127912;, &#128187; 2018. 09</span>
          <p>기여도 100%</p>
        </SubText>
        <ButtonBox>
          <a href="http://joohyunedu.com/박영은/happybath" target="_blank">
            <Button>반응형 사이트 바로가기</Button>
          </a>
        </ButtonBox>
        <Mockup src="/yoger_img/happybathmockup.png" />
      </TopBox>

      <UiBox>
        <UiTitleBox>
          <UiBoxTitle>Design</UiBoxTitle>
          <SizeText>
            <span>PC</span>
            <p>1024px ~ </p>
            <span>Pad</span>
            <p>~ 700px</p>
            <span>Mobile</span>
            <p>~ 400px</p>
          </SizeText>
        </UiTitleBox>

        <UiMockupBox>
          <UiImg src="/yoger_img/happybathPCUI.png" />
          <UiImg src="/yoger_img/p_main.jpg" alt="해피바스 pc버전 시안" />
          <p>ver. PC</p>
        </UiMockupBox>
        <UiMockupBox>
          <UiImg src="/yoger_img/happybathMobileUI.png" />
          <UiImg src="/yoger_img/m_main.jpg" alt="해피바스 mobile버전 시안" />

          <p>ver. Mobile</p>
        </UiMockupBox>
      </UiBox>
    </Wrapper>
  )
}
