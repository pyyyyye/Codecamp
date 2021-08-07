import {
  Wrapper,
  Contents,
  TopContentsWriter,
  WriterProfileImg,
  WriterInfo,
  Name,
  Date,
  WriterIcon,
  LinkIcon,
  MapIcon,
  MainContentsProduct,
  ProductInfo,
  Map,
  InfoTop,
  InfoTopLeft,
  Title1,
  Title2,
  Price,
  InfoTopRight,
  LikeBtn,
  LikeCount,
  InfoMiddle,
  MainImage,
  SubImage,
  InfoBottom,
  InfoText,
  InfoTags,
  BottomBtn,
  ButtonBox,
} from './MarketDetail.styles';
// import { Tooltip } from 'antd';
// import { getDate } from '../../../commons/libraries/utils';

export default function MarketDetailUI() {
  return (
    <Wrapper>
      <Contents>
        {/* ------------- 상단 판매자 정보 START --------------- */}
        <TopContentsWriter>
          <WriterProfileImg src="/WriterProfileImg_2.png" />
          <WriterInfo>
            <Name>박영은</Name>
            <Date>Date: 2021. 08. 07</Date>
          </WriterInfo>
          <WriterIcon>
            {/*---- 우측 픽토그램 ---*/}
            <LinkIcon src="/icon_link.png" />
            {/* <MapIcon src="/link2.png" /> */}
            {/* <Tooltip
              placement="top"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            > 
              <MapIcon src="/link2.png" alt="작성자 주소" />
            </Tooltip>*/}
            <MapIcon src="/icon_location.png" alt="작성자 주소" />
          </WriterIcon>
        </TopContentsWriter>
        {/* ------------- 상단 판매자 정보 END --------------- */}

        <MainContentsProduct>
          <ProductInfo>
            <InfoTop>
              <InfoTopLeft>
                <Title1>2019 LTE 32GB</Title1>
                <Title2>삼성전자 갤럭시탭A 10.1 </Title2>
                <Price>240,120원</Price>
              </InfoTopLeft>
              <InfoTopRight>
                <LikeBtn src="/icon_like_2.png" />
                <LikeCount>20</LikeCount>
              </InfoTopRight>
            </InfoTop>

            {/* // ! ---- images ---- */}
            <InfoMiddle>
              <MainImage></MainImage>
              <SubImage> </SubImage>
            </InfoMiddle>

            {/* // ! ---- bottom txt ----  */}
            <InfoBottom>
              <InfoText>
                액정에 잔기스랑 주변부 스크레치있습니다만 예민하신분아니면 전혀
                신경쓰이지않을정도입니다
                <br /> 박스 보관중입니다 <br />
                메모용과 넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나
                문제점을 못느꼈네요 잘 안써서 싸게넘깁니다 택배거래안합니다
              </InfoText>
              <InfoTags>#삼성전자 #갤럭시탭 #갓성비</InfoTags>
            </InfoBottom>
          </ProductInfo>
          <Map>지도</Map>
        </MainContentsProduct>

        {/* --------- 하단 버튼 start ---------- */}
        <BottomBtn>
          <ButtonBox>목록으로</ButtonBox>
          <ButtonBox>수정하기</ButtonBox>
        </BottomBtn>
      </Contents>
    </Wrapper>
  );
}
