//=== 게시물 상세페이지 presenter.js ===
// @ts-nocheck
import {
  Wrapper,
  PostContents,
  TopContentsWriter,
  WriterProfileImg,
  WriterInfo,
  WriterIcon,
  Name,
  Date,
  MiddleContentsPost,
  ContentsTitle,
  ContentsImgWrap,
  ContentsImage,
  ContentsText,
  ContentsVideo,
  BottomContentsRecommend,
  Recommendations,
  RecomImage,
  RecomCount,
  DecomImage,
  DecomCount,
  LinkIcon,
  MapIcon,
  // EtcContents,
  BottomButtons,
  GoToButton
} from './DetailPage.styles'
import { getDate } from '../../../commons/libraries/utils'
import { IDetailPageUIProps } from './DetailPage.types'
import { Tooltip } from 'antd'

export default function DetailPageUI(props: IDetailPageUIProps) {
  return (
    <Wrapper>
      {/*//! == 상세페이지 게시물 영역 == !*/}
      <PostContents>
        {/*----- TopContentsWriter Start -----*/}
        <TopContentsWriter>
          <WriterProfileImg src="/images/WriterProfileImg_2.png" />
          <WriterInfo>
            <Name>{props.data?.fetchBoard.writer}</Name>
            <Date>{getDate(props.data?.fetchBoard.createdAt)}</Date>
          </WriterInfo>
          <WriterIcon>
            {/*---- 우측 픽토그램 ---*/}
            <LinkIcon src="/images/icon_link.png" />
            <Tooltip
              placement="top"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <MapIcon src="/images/icon_location.png" alt="작성자 주소" />
            </Tooltip>
          </WriterIcon>
        </TopContentsWriter>

        {/*//! --- MiddleContentsPost Start --- */}
        <MiddleContentsPost>
          <ContentsTitle> {props.data?.fetchBoard.title}</ContentsTitle>
          <ContentsImgWrap>
            {props.data?.fetchBoard.images.map((data) => (
              <ContentsImage
                key={data.images}
                src={`https://storage.googleapis.com/${data}`}
              />
            ))}
          </ContentsImgWrap>

          <ContentsText>{props.data?.fetchBoard.contents}</ContentsText>

          <ContentsVideo
            url={props.data?.fetchBoard.youtubeUrl}
            width="400px"
            height="300px"
            playing={true}
            muted={true}
            controls={true}
          />
        </MiddleContentsPost>

        {/*//!--- BottomContentsRecommend 좋아요 싫어요 Start --- */}
        <BottomContentsRecommend>
          <Recommendations>
            <RecomImage src="\images\icon_like.png" />
            <RecomCount>{props.data?.fetchBoard.likeCount}</RecomCount>
          </Recommendations>
          <Recommendations>
            <DecomImage src="\images/icon_disLike.png" />
            <DecomCount>{props.data?.fetchBoard.dislikeCount}</DecomCount>
          </Recommendations>
        </BottomContentsRecommend>
      </PostContents>

      {/*//! == 게시글 외 하단 기타 컨텐츠 시작 == */}
      <BottomButtons>
        {/* -- '목록으로' 버튼 -- */}
        <GoToButton onClick={props.onClickMoveToList}>목록으로</GoToButton>

        {/* -- '수정하기' 버튼 -- */}
        <GoToButton onClick={props.onClickMoveToEdit}>수정하기</GoToButton>

        {/* -- '삭제하기' 버튼 -- */}
        <GoToButton onClick={props.onClickMoveToDelete}>삭제하기</GoToButton>
      </BottomButtons>
    </Wrapper>
  )
}
