import {
  BoardCommentWrapper,
  CommentTitleBox,
  CommentIcon,
  CommentTitle,
  CommentUpload,
  CommentUploadBottom,
  CommentInput,
  UploadButton,
  CreateButton,
} from './CommentWrite.styles';

export default function CommentWriteUI(props: any) {
  return (
    <BoardCommentWrapper>
      {!props.isEdit && (
        <CommentTitleBox>
          <CommentIcon src="/images/icon_CommentWrite.png" />
          <CommentTitle>문의하기</CommentTitle>
        </CommentTitleBox>
      )}

      {/* //!-----▶▶▶▶▶ 댓글 입력 및 등록 창 ◀◀◀◀◀------ */}

      <CommentUpload>
        <CommentUploadBottom>
          <CommentInput
            name="contents"
            onChange={props.onChangeInput}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          {props.isEdit ? (
            <UploadButton onClick={props.onClickCommentEdit}>
              수정하기
            </UploadButton>
          ) : (
            <CreateButton onClick={props.onClick}>문의하기</CreateButton>
          )}
        </CommentUploadBottom>
      </CommentUpload>
    </BoardCommentWrapper>
  );
}
