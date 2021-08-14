// import { useRouter } from 'next/rou
import {
  Wrapper,
  ListContents,
  Title,
  TopBox,
  Contents,
  List,
  ProductBox,
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
  RightSticky,
  GoToWrite,
} from './MarketList.styles';

export default function MarketListUI(props) {
  return (
    <Wrapper>
      <ListContents>
        <Title>베스트 상품 </Title>
        <TopBox>상단 박스</TopBox>
        <Contents>
          {props.data?.fetchUseditems.map((data) => (
            <List
              key={data._id}
              id={data._id}
              onClick={props.onClickTitle(data._id)}
            >
              {/* {props.data?.fetchUseditems.images.map((data) => (
                <ProductPrevImg
                   key={data}
                  src={`https://storage.googleapis.com/${data}`}
                />
              ))} */}
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
                      <Seller>박영은</Seller>
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
      <RightSticky>오늘 본 상품</RightSticky>
    </Wrapper>
  );
}
