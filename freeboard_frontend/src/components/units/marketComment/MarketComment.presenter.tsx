//게시글 댓글 화면 presenter.js
import {
  BoardCommentWrapper,
  CommentTitleBox,
  CommentIcon,
  CommentTitle,
  CommentUpload,
  CommentUploadBottom,
  CommentInput,
  UploadButton,
  CommentList,
  CommentListUp,
  CommentListLeft,
  CommentWriterImg,
  CommentListMiddle,
  CommentListRightIcons,
  CommentRightIcons,
  CommentListTop,
  WriterName,
  CommentNote,
  CommentDate,
} from './MarketComment.styles';
import { getDate } from '../../../commons/libraries/utils';

export default function MarketCommentUI(props: any) {
  return (
    <BoardCommentWrapper>
      <CommentTitleBox>
        <CommentIcon src="/images/icon_CommentWrite.png" />
        <CommentTitle>문의하기</CommentTitle>
      </CommentTitleBox>

      {/* //!-----▶▶▶▶▶ 댓글 입력 및 등록 창 ◀◀◀◀◀------ */}
      {/* <CommentUpload>
        <CommentUploadBottom>
          <CommentInput
            name="contents"
            onChange={props.onChangeInput}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <div></div>
          <UploadButton onClick={props.onClick}>문의하기</UploadButton>
        </CommentUploadBottom>
      </CommentUpload> */}

      {/*//!------▶▶▶▶▶ 댓글 리스트 ◀◀◀◀◀-------*/}
      {/* <CommentList>
        {props.data?.fetchUseditemQuestions.map((data: any) => (
          <CommentListUp key={data._id}>
            <CommentListLeft>
              <CommentWriterImg src="/images/WriterProfileImg.png" />
            </CommentListLeft>

            <CommentListMiddle>
              <CommentListTop>
                <WriterName>{data.user.name}</WriterName>
              </CommentListTop>
              <CommentNote>{data.contents}</CommentNote>
              <CommentDate>{getDate(data.createdAt)}</CommentDate>
            </CommentListMiddle>

            <CommentListRightIcons>
              <CommentRightIcons src="/images/icon_reply.png" />
              <CommentRightIcons
                onClick={props.onClickCommentEdit(data._id)}
                src="/images/icon_edit.png"
              />
              <CommentRightIcons
                // id={data._id}
                onClick={props.onClickCommentDelete(data._id)}
                src="/images/icon_delete.png"
              />
            </CommentListRightIcons>
          </CommentListUp>
        ))}
      </CommentList> */}
    </BoardCommentWrapper>
  );
}
