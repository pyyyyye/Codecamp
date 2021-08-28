// import { useRouter } from 'next/rou
import SideMenu from '../../../commons/sideMenu/sideMenu';
import MarketListOfTheBest from '../../marketListOfTheBest/MarketListOfTheBest.container';
import InfiniteScroll from 'react-infinite-scroller';
import {
  Wrapper,
  Title,
  ListContents,
  ItemPages,
  ItemsBox,
  ItemSearchContents,
  ItemsSearchBox,
  SearchBoxInput,
  SearchIcon,
  CalendarBox,
  GoToSearchBtn,
  Contents,
  List,
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
import { useState } from 'react';

export default function MarketListUI(props: any) {
  const [hasMore, setHasMore] = useState(true);

  const onLoadMore = () => {
    if (!props.data) return;
    props.fetchMore({
      variables: {
        page: Math.floor(props.data?.fetchUseditems.length) / 10 + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <Wrapper>
      <ListContents>
        {/* //!---- MarketListOfTheBest ---- */}
        <Title>베스트 상품 </Title>
        <MarketListOfTheBest />
        {/* //!----- 중간 검색, 달력, 등 ----- */}
        <MiddleBox>
          {/* //! - 상품 목록 - */}
          <ItemPages>
            <ItemsBox>판매중 상품</ItemsBox>
            <ItemsBox>판매된 상품</ItemsBox>
          </ItemPages>
          <ItemSearchContents>
            {/* //! - 검색 - */}
            <ItemsSearchBox>
              <SearchBoxInput placeholder="제품을 검색해주세요." />
              <SearchIcon src="/images/icon_search.png" />
            </ItemsSearchBox>

            {/* //! - 달력 - */}
            <CalendarBox> 날짜 선택 박스입니다.</CalendarBox>

            {/* //! - 검색 버튼 - */}
            <GoToSearchBtn>검색</GoToSearchBtn>
          </ItemSearchContents>
        </MiddleBox>
        {/* //!----- 하단 상품 list ----- */}
        <Contents>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={hasMore}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((data: any) => (
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
                      <ProductName id="name">{data.name}</ProductName>
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
                        <LikeCount>{data.pickedCount}</LikeCount>
                      </LikeBox>
                    </BottomPrevInfo>
                  </LeftInfo>

                  <ProductPrice>
                    <PriceIcon src="/images/icon_Euro.png" />
                    <Price className="priceHover">{data.price}</Price>
                  </ProductPrice>
                </ProductPrevInfo>
              </List>
            ))}
          </InfiniteScroll>
        </Contents>
        <GoToWrite id={props.data?._id} onClick={props.onClickWrite}>
          상품 등록하기
        </GoToWrite>
        <SideMenu aaa={props.aaa} />
      </ListContents>
    </Wrapper>
  );
}
