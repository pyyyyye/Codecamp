import { useRouter } from 'next/router';
import { ComponentType, useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import {
  Wrapper,
  ListContents,
  Title,
  List,
  ProductBox,
  ProductPrevImg,
  ProductPrevInfo,
  TopPrevInfo,
  ProductName,
  ProductRemarks,
  ProductTags,
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
  const withAuth = (Component: ComponentType) => (props) => {
    const { accessToken } = useContext(GlobalContext);
    const router = useRouter();

    useEffect(() => {
      if (!accessToken) {
        alert('로그인이 필요한 페이지입니다.');
        router.push('../../../../../market/login');
      }
    }, []);
  };
  return (
    <Wrapper>
      <ListContents>
        <Title>베스트 상품 </Title>
        <List>
          <ProductBox>
            <ProductPrevImg>이미지</ProductPrevImg>
            <ProductPrevInfo>
              <TopPrevInfo>
                <ProductName>삼성전자</ProductName>
                <ProductRemarks>모델명</ProductRemarks>
                <ProductTags>#태그 #태그</ProductTags>
              </TopPrevInfo>
              {/* <BottomPrevInfo> */}
              {/* <SellerBox>
                  <SellerImg src="/images/WriterProfileImg_2.png" />
                  <Seller>판매자</Seller>
                </SellerBox>
                <LikeBox>
                  <Like src="/images/icon_like_2.png" />
                  <LikeCount>58</LikeCount>
                </LikeBox> */}
              {/* </BottomPrevInfo> */}
            </ProductPrevInfo>
            <ProductPrice>
              <PriceIcon src="/images/icon_Euro.png" />
              <Price>274,260원</Price>
            </ProductPrice>
          </ProductBox>
        </List>

        <GoToWrite onClick={props.onClickWrite}>상품 등록하기</GoToWrite>
      </ListContents>

      {/* 우측 오늘 본 상품 */}
      <RightSticky>오늘 본 상품</RightSticky>
    </Wrapper>
  );
}
