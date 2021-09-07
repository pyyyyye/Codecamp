//베스트 게시글 화면 presenter.js
// @ts-nocheck
import Pagination01 from '../../../commons/pagination/01/pagination01.container'
import {
  BestListWrapper,
  BestListTop,
  BestPostsTitle,
  BestPostsBox,
  BestPosts,
  BestPostsPhoto,
  TitleInBestPosts,
  BestPostsInfo,
  PostsInfoLeft,
  WriterInfo,
  WriterPhoto,
  WriterName,
  PostDate,
  PostsInfoRight,
  RecomImage,
  RecomCount,
  BestListBottom,
  PostListsBox,
  Categorize,
  CategorizeTop,
  CategorizeTopTitle,
  ListFooter,
  UploadButton
} from './BestList.styles'
import { getDate } from '../../../../commons/libraries/utils'
import SearchOfFreeboard from '../../../commons/searchOfFreeboard/searchOfFreeboard'
interface IListProps {
  bestData: any
  data: any
}
export default function ListPageUI(props: IListProps) {
  return (
    <>
      <BestListWrapper>
        <BestListTop>
          <BestPostsTitle>베스트 게시글</BestPostsTitle>
          {/* //!▶▶▶▶▶▶  BestListTop  Start ◀◀◀◀◀!// */}
          <BestPostsBox>
            {props.bestData?.fetchBoardsOfTheBest.map((data) => (
              <BestPosts key={data._id}>
                <BestPostsPhoto
                  src="/images/BestPostsPhoto_01.png"
                  alt="베스트게시글 대표사진_01"
                />
                <TitleInBestPosts>{data?.title}</TitleInBestPosts>
                <BestPostsInfo>
                  <PostsInfoLeft>
                    <WriterInfo>
                      <WriterPhoto
                        src="/images/WriterProfileImg.png"
                        alt="작가 프로필사진 "
                      />
                      <WriterName>{data?.writer}</WriterName>
                    </WriterInfo>
                    <PostDate>{getDate(data?.createdAt)}</PostDate>
                  </PostsInfoLeft>
                  <PostsInfoRight>
                    <RecomImage src="/images/icon_like.png" alt="추천 아이콘" />
                    <RecomCount>{data?.likeCount}</RecomCount>
                  </PostsInfoRight>
                </BestPostsInfo>
              </BestPosts>
            ))}
          </BestPostsBox>
        </BestListTop>

        {/* //!▶▶▶▶▶▶ Search Start ◀◀◀◀◀!// */}
        <BestListBottom>
          <SearchOfFreeboard
            data={props.data}
            refetch={props.refetch}
            setKeyword={props.setKeyword}
            search={props.search}
            setSearch={props.setSearch}
          />

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
                  {data.title.replaceAll()}
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
              search={props.search}
              setSearch={props.setSearch}
              id={props.data}
              data={props.data}
              count={props.count}
              refetch={props.refetch}
              keyword={props.keyword}
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
  )
}
