import { getDate } from '../../../../commons/libraries/utils'
import DOMPurify from 'dompurify'
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
  InfoBottom,
  InfoText,
  InfoTags,
  BottomBtn,
  ButtonBox
} from './MarketDetail.styles'
import KakaoMap01 from '../../../commons/kakaomap/kakaomap01'

export default function MarketDetailUI(props: any) {
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
                <LikeBtn
                  src="/images/icon_like_2.png"
                  onClick={props.onClickToggle}
                />
                <LikeCount>{props.data?.fetchUseditem.pickedCount}</LikeCount>
              </InfoTopRight>
            </InfoTop>

            {/* // ! ---- images ---- */}
            <InfoMiddle>
              {props.data?.fetchUseditem.images.map((data: any) => (
                <MainImage
                  key={data}
                  src={`https://storage.googleapis.com/${data}`}
                />
              ))}

              {/* <SubImage> </SubImage> */}
            </InfoMiddle>

            {/* // ! ---- bottom txt ----  */}
            <InfoBottom>
              {typeof window !== 'undefined' ? (
                <InfoText
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      props.data?.fetchUseditem.contents
                    )
                  }}
                />
              ) : (
                <div />
              )}
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
          <ButtonBox onClick={props.onClickDelete}>삭제하기</ButtonBox>
        </BottomBtn>
      </Contents>
    </Wrapper>
  )
}
