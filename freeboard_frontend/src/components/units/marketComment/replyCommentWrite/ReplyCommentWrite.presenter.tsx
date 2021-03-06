import {
  BoardReplyCommentWrapper,
  ReplyIconBox,
  ReplyIcon,
  ReplyCommentUpload,
  ReplyCommentLeft,
  ReplyCommentRight,
  ReplyWriterImg,
  ReplyCommentUploadBottom,
  ReplyCommentInput,
  UploadButton,
  CreateButton
} from './ReplyCommentWrite.styles'

export default function ReplyCommentWriteUI(props: any) {
  // console.log('답댓글 :', props.data);
  return (
    <BoardReplyCommentWrapper>
      {/* //!--▶▶▶▶▶답글 입력 및 등록 창 ◀◀◀◀◀-- */}
      <ReplyIconBox>
        <ReplyIcon src="/images/icon_replyComment.png" />
      </ReplyIconBox>

      <ReplyCommentUpload>
        <ReplyCommentLeft>
          <ReplyWriterImg src="/images/WriterProfileImg.png" />
        </ReplyCommentLeft>

        <ReplyCommentRight>
          <ReplyCommentUploadBottom>
            <ReplyCommentInput
              name="contents"
              onChange={props.onChangeReplyInput}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            {props.isEdit ? (
              <UploadButton onClick={props.onClickReplyCommentEdit}>
                수정하기
              </UploadButton>
            ) : (
              <CreateButton onClick={props.onClickReply}>답글등록</CreateButton>
            )}
          </ReplyCommentUploadBottom>
        </ReplyCommentRight>
      </ReplyCommentUpload>
    </BoardReplyCommentWrapper>
  )
}
