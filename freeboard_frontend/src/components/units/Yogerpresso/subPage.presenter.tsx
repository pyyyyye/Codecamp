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

export default function YogerSubUI() {
  return (
    <Wrapper>
      <TopBox>
        <Title>요거프레소</Title>
        <SubTitle>
          웹 &#46; 모바일 반응형 메인페이지 <span>리디자인</span>
        </SubTitle>
        <SubText>
          <span>&#128197; 1 month</span>|
          <span>&#127912;, &#128187; 2018. 08</span>
        </SubText>
        <ButtonBox>
          <a href="http://joohyunedu.com/박영은/yoger" target="_blank">
            <Button>PC 버전 바로가기</Button>
          </a>
          <a
            href="http://joohyunedu.com/박영은/yoger/m/yoger_index.html"
            target="_blank"
          >
            <Button>Mobile 버전 바로가기</Button>
          </a>
        </ButtonBox>
        <Mockup src="/yoger_img/sub_01_p1_products.png" />
      </TopBox>

      <UiBox>
        <UiTitleBox>
          <UiBoxTitle>Design</UiBoxTitle>
          <SizeText>
            <span>PC</span>
            <p>1367px ~ 1920px</p>
            <span>Mobile</span>
            <p>~ 767px</p>
          </SizeText>
        </UiTitleBox>

        <UiMockupBox>
          <UiImg src="/yoger_img/sub_01_p2_st_guide_pc.png" />
          <p>ver. PC</p>
        </UiMockupBox>
        <UiMockupBox>
          <UiImg src="/yoger_img/sub_01_p4_mobile.png" />
          <p>ver. Mobile</p>
        </UiMockupBox>
      </UiBox>
    </Wrapper>
  )
}
