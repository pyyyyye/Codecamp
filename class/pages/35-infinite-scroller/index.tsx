import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border: 5px solid skyblue;
  overflow: scroll;
`;
export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
// hasMore가 트루이면 아직 많은 요청이 남은 거. false일 땐 loadmore실행 끝남. true면서 스크롤 내려야 loadMore실행됨

export default function InfiniteScrollerPage() {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onLoadMore = () => {
    if (!data) return; // data 없으면 종료.
    fetchMore({
      variables: { page: Math.floor(data?.fetchBoards.length) / 10 + 1 },
      // 10개씩 나오는데 10으로 나눠놓고 10+1은 다음 페이지 요청하는 것.
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        // 마지막에 불러올 것의 길이가 없다면 setHasMore(false) 무한스크롤 종료시킴.
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
          // 원래 있던 캐시, 계쏙 불러올 캐시 = > { 기존 불러온 거  , 계속 불러올 거}
          // 캐시를 이렇게 바꿔준거야.
        };
      },
    });
  };
  return (
    <>
      <h3>무한스크롤</h3>
      <Wrapper>
        {/* 무한스크롤을 감싸는 것을 만들고 그 것에 height값을 주면 그 안으로 스크롤 생김.  */}
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={hasMore}
          useWindow={false}
          loader={
            <div className="loader" key={0}>
              로딩중입니다...
            </div>
          }
        >
          {data?.fetchBoards.map((data) => (
            <div key={data._id}>
              <span>{data.writer}</span>
              <span>{data.contents}</span>
            </div>
          ))}
        </InfiniteScroll>
      </Wrapper>
    </>
  );
}
