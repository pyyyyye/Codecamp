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
  const onClickMoveToYogerPc = () => {
    window.open(
      'http://joohyunedu.com/박영은/yoger',
      '프론트엔드 개발자 박영은 - 요거프레소 반응형 제작 - pc',
      'width=100%'
    )
  }
  const onClickMoveToYogerMobile = () => {
    window.open(
      'http://joohyunedu.com/박영은/yoger/m/yoger_index.html',
      '프론트엔드 개발자 박영은 - 요거프레소 반응형 제작 - mobile',
      'width=100%'
    )
  }
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
          <p>기여도 100%</p>
        </SubText>
        <ButtonBox>
          <Button onClick={onClickMoveToYogerPc}>PC 버전 바로가기</Button>
          <Button onClick={onClickMoveToYogerMobile}>
            Mobile 버전 바로가기
          </Button>
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
