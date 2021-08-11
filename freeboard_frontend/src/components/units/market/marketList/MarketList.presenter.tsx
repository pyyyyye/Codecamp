// import { useRouter } from 'next/rou
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
  // const withAuth = (Component: ComponentType) => (props) => {
  //   const { accessToken } = useContext(GlobalContext);
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (!accessToken) {
  //       alert('로그인이 필요한 페이지입니다.');
  //       router.push('../../../../../market/login');
  //     }
  //   }, []);
  // };
  return (
    <Wrapper>
      <ListContents>
        <Title>베스트 상품 </Title>
        {props.data?.fetchUseditems.map((data) => (
          <List key={data._id}>
            <ProductBox>
              <ProductPrevImg>{data.images}</ProductPrevImg>
              <ProductPrevInfo>
                <LeftInfo>
                  <TopPrevInfo>
                    <ProductName id={data._id} onClick={props.onClickTitle}>
                      {data.name}
                    </ProductName>
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
            </ProductBox>
          </List>
        ))}

        <GoToWrite id={props.data?._id} onClick={props.onClickWrite}>
          상품 등록하기
        </GoToWrite>
      </ListContents>

      {/* 우측 오늘 본 상품 */}
      <RightSticky>오늘 본 상품</RightSticky>
    </Wrapper>
  );
}
