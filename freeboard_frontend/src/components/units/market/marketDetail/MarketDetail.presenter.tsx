import { getDate } from '../../../../commons/libraries/utils';
import DOMPurify from 'dompurify';
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

export default function MarketDetailUI(props) {
  return (
    <Wrapper>
      <Contents>
        {/* ------------- 상단 판매자 정보 START --------------- */}
        <TopContentsWriter>
          <WriterProfileImg src="/images/WriterProfileImg_2.png" />
          <WriterInfo>
            <Name>{props.userInfo.name}</Name>
            <Date>{getDate(props.data?.fetchUseditem.createdAt)}</Date>
          </WriterInfo>
          <WriterIcon>
            {/*---- 우측 픽토그램 ---*/}
            <LinkIcon src="/images/icon_link.png" />
            {/* <Tooltip
              placement="top"
              title={`${props.data?.fetchUseditem.boardAddress?.address} ${props.data?.fetchUseditem.boardAddress?.addressDetail}`}
            >
              <MapIcon src="/icon_location.png" alt="작성자 주소" />
            </Tooltip> */}
            <MapIcon src="/images/icon_location.png" alt="작성자 주소" />
          </WriterIcon>
        </TopContentsWriter>
        {/* ------------- 상단 판매자 정보 END --------------- */}

        <MainContentsProduct>
          <ProductInfo>
            <InfoTop>
              <InfoTopLeft>
                <Title1>{props.data?.fetchUseditem.remarks}</Title1>
                <Title2>{props.data?.fetchUseditem.name} </Title2>
                <Price>{props.data?.fetchUseditem.price}</Price>
              </InfoTopLeft>
              <InfoTopRight>
                <LikeBtn src="/images/icon_like_2.png" />
                <LikeCount>20</LikeCount>
              </InfoTopRight>
            </InfoTop>

            {/* // ! ---- images ---- */}
            <InfoMiddle>
              {props.data?.fetchUseditem.images.map((data) => (
                <MainImage
                  key={data}
                  src={`https://storage.googleapis.com/${data}`}
                />
              ))}

              <SubImage> </SubImage>
            </InfoMiddle>

            {/* // ! ---- bottom txt ----  */}
            <InfoBottom>
              {/* <InfoText
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              /> */}
              <InfoTags>{props.data?.fetchUseditem.tags}</InfoTags>
            </InfoBottom>
          </ProductInfo>
          <Map>지도</Map>
        </MainContentsProduct>

        {/* --------- 하단 버튼 start ---------- */}
        <BottomBtn>
          <ButtonBox onClick={props.onClickMoveToList}>목록으로</ButtonBox>
          <ButtonBox>수정하기</ButtonBox>
        </BottomBtn>
      </Contents>
    </Wrapper>
  );
}
