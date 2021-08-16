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
import KakaoMap01 from '../../../commons/kakaomap/kakaomap01';

export default function MarketDetailUI(props) {
  if (typeof window === 'undefined') return <></>;
  // 윈도우가 없을 때(= 브라우저가 없을 때 = 서버일 때)는 빈화면<></>을 그려
  // 아래 dompurify 에러가 많이 떠서 입력한 코드
  return (
    <Wrapper>
      <Contents>
        {/* ------------- 상단 판매자 정보 START --------------- */}
        <TopContentsWriter>
          <WriterProfileImg src="/images/WriterProfileImg_2.png" />
          <WriterInfo>
            <Name>{props.data?.fetchUseditem.seller.name}</Name>
            <Date>{getDate(props.data?.fetchUseditem.createdAt)}</Date>
          </WriterInfo>
          <WriterIcon>
            {/*---- 우측 픽토그램 ---*/}

            <LinkIcon src="/images/icon_link.png" />
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
              <InfoText
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              />
              <InfoTags>{props.data?.fetchUseditem.tags}</InfoTags>
            </InfoBottom>
          </ProductInfo>
          <Map>
            <KakaoMap01 isDetail={true} />
          </Map>
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
