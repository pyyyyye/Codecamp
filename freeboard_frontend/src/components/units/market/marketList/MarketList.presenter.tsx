// import { useRouter } from 'next/rou
import SideMenu from '../../../commons/sideMenu/sideMenu';
import {
  Wrapper,
  ListContents,
  Title,
  TopBox,
  BestProductBox,
  TopProductImg,
  TopProductInfo,
  TopName,
  TopInfoRemarks,
  TopInfoPrice,
  TopInfoEtc,
  TopInfoLeft,
  TopInfoRight,
  HeartToggle,
  ToggleCount,
  Contents,
  List,
  // ProductBox,
  ProductPrevImg,
  ProductPrevInfo,
  TopPrevInfo,
  ProductName,
  ProductRemarks,
  ProductTags,
  LeftInfo,
  BottomPrevInfo,
  SellerBox,
  Seller,
  SellerImg,
  LikeBox,
  Like,
  LikeCount,
  ProductPrice,
  PriceIcon,
  Price,
  GoToWrite,
  MiddleBox,
} from './MarketList.styles';

export default function MarketListUI(props) {
  return (
    <Wrapper>
      <ListContents>
        <Title>베스트 상품 </Title>
        {/* //!----- 상단 베스트 상품 ----- */}
        <TopBox>
          {new Array(4).fill(1).map(() => (
            <BestProductBox>
              <TopProductImg />
              <TopProductInfo>
                <TopName>베스트 상품 name</TopName>
                <TopInfoEtc>
                  <TopInfoLeft>
                    <TopInfoRemarks>베스트 상품remarks</TopInfoRemarks>
                    <TopInfoPrice>28,551원</TopInfoPrice>
                  </TopInfoLeft>
                  <TopInfoRight>
                    <HeartToggle src="/images/icon_like_2.png" />
                    <ToggleCount>0</ToggleCount>
                  </TopInfoRight>
                </TopInfoEtc>
              </TopProductInfo>
            </BestProductBox>
          ))}
        </TopBox>
        {/* //!----- 중간 검색, 달력, 등 ----- */}
        <MiddleBox>검색, 달력 상자</MiddleBox>
        {/* //!----- 하단 상품 list ----- */}
        <Contents>
          {props.data?.fetchUseditems.map((data) => (
            <List
              key={data._id}
              id={data._id}
              onClick={props.onClickTitle(data)}
            >
              <ProductPrevImg
                key={data._id}
                src={`https://storage.googleapis.com/${data.images[0]}`}
              />
              <ProductPrevInfo>
                <LeftInfo>
                  <TopPrevInfo>
                    <ProductName>{data.name}</ProductName>
                    <ProductRemarks>{data.remarks}</ProductRemarks>
                    <ProductTags>{data.tags}</ProductTags>
                  </TopPrevInfo>

                  <BottomPrevInfo>
                    <SellerBox>
                      <SellerImg src="/images/WriterProfileImg_2.png" />
                      <Seller>{data.seller.name}</Seller>
                    </SellerBox>
                    <LikeBox>
                      <Like src="/images/icon_like_2.png" />
                      <LikeCount>58</LikeCount>
                    </LikeBox>
                  </BottomPrevInfo>
                </LeftInfo>

                <ProductPrice>
                  <PriceIcon src="/images/icon_Euro.png" />
                  <Price>{data.price}</Price>
                </ProductPrice>
              </ProductPrevInfo>
            </List>
          ))}
        </Contents>
        <GoToWrite id={props.data?._id} onClick={props.onClickWrite}>
          상품 등록하기
        </GoToWrite>
      </ListContents>

      {/* 우측 오늘 본 상품 */}
      <SideMenu aaa={props.aaa} />
    </Wrapper>
  );
}
