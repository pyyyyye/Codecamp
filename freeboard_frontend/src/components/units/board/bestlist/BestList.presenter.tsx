//베스트 게시글 화면 presenter.js
import Pagination01 from '../../../commons/pagination/01/pagination01.container';
import {
  BestListWrapper,
  BestListTop,
  BestPostsTitle,
  BestPostsBox,
  BestPosts,
  BestPostsPhoto,
  TitleInBestPosts,
  BestPostsInfo,
  PostsInfo_Left,
  WriterInfo,
  WriterPhoto,
  WriterName,
  PostDate,
  PostsInfo_Right,
  RecomImage,
  RecomCount,
  BestListBottom,
  BestListBottomSearch,
  SearchBox,
  SearchDateBox,
  SearchButtonBox,
  SearchIcon,
  SearchInput,
  PostListsBox,
  Categorize,
  CategorizeTop,
  CategorizeTopTitle,
  ListFooter,
  UploadButton,
} from './BestList.styles';
import { getDate } from '../../../../commons/libraries/utils';

export default function ListPageUI(props: any) {
  return (
    <>
      <BestListWrapper>
        <BestListTop>
          <BestPostsTitle>베스트 게시글</BestPostsTitle>
          {/* //!▶▶▶▶▶▶  BestListTop  Start ◀◀◀◀◀!// */}
          <BestPostsBox>
            {props.bestData?.fetchBoardsOfTheBest.map((data) => (
              <BestPosts>
                <BestPostsPhoto
                  src="/images/BestPostsPhoto_01.png"
                  alt="베스트게시글 대표사진_01"
                />
                <TitleInBestPosts>{data?.title}</TitleInBestPosts>
                <BestPostsInfo>
                  <PostsInfo_Left>
                    <WriterInfo>
                      <WriterPhoto
                        src="/images/WriterProfileImg.png"
                        alt="작가 프로필사진 "
                      />
                      <WriterName>{data?.writer}</WriterName>
                    </WriterInfo>
                    <PostDate>{getDate(data?.createdAt)}</PostDate>
                  </PostsInfo_Left>
                  <PostsInfo_Right>
                    <RecomImage src="/images/icon_like.png" alt="추천 아이콘" />
                    <RecomCount>{data?.likeCount}</RecomCount>
                  </PostsInfo_Right>
                </BestPostsInfo>
              </BestPosts>
            ))}
          </BestPostsBox>
        </BestListTop>

        {/* //!▶▶▶▶▶▶ Search Start ◀◀◀◀◀!// */}
        <BestListBottom>
          <BestListBottomSearch>
            <SearchBox>
              <SearchIcon src="/images/icon_search.png" alt="검색 아이콘" />
              <SearchInput
                type="text"
                onChange={props.onChangeSearch}
                placeholder="제목을 검색해주세요."
              />
            </SearchBox>
            <SearchDateBox>YYYY.MM.DD ~ YYYY.MM.DD</SearchDateBox>
            <SearchButtonBox onClick={props.onClickSearch}>
              검색하기
            </SearchButtonBox>
          </BestListBottomSearch>

          {/* //!▶▶▶▶▶  list Start  ◀◀◀◀◀!// */}
          <PostListsBox>
            <Categorize>
              <CategorizeTop aaa={true}>번호</CategorizeTop>
              <CategorizeTopTitle aaa={true}>제목</CategorizeTopTitle>
              <CategorizeTop aaa={true}>작성자</CategorizeTop>
              <CategorizeTop aaa={true}>작성일</CategorizeTop>
            </Categorize>

            {props.data?.fetchBoards.map((data, index) => (
              <Categorize key={data._id}>
                <CategorizeTop>{index + 1}</CategorizeTop>
                <CategorizeTopTitle id={data?._id} onClick={props.onClickTitle}>
                  {data.title}
                </CategorizeTopTitle>
                <CategorizeTop>{data.writer}</CategorizeTop>
                <CategorizeTop>{getDate(data.createdAt)}</CategorizeTop>
              </Categorize>
            ))}
          </PostListsBox>

          {/* //!▶▶▶▶▶  ListFooter Start  ◀◀◀◀◀// */}
          <ListFooter>
            <Pagination01
              // key={props.data._id}
              id={props.data}
              data={props.data}
              count={props.count}
              refetch={props.refetch}
              startPage={props.startPage}
              setStartPage={props.setStartPage}
            />
            <UploadButton id={props.data?._id} onClick={props.onClickUpload}>
              게시물 등록하기
            </UploadButton>
          </ListFooter>
        </BestListBottom>
      </BestListWrapper>
    </>
  );
}
