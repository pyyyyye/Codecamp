import ReplyCommentListUIItem from './ReplyCommentList.presenterItem';
import {
  BoardReplyCommentWrapper,
  ReplyCommentList,
} from './ReplyCommentList.styles';

export default function ReplyCommentListUI(props: any) {
  console.log('리댓 ReplyCommentListUI : ', props.data);
  return (
    <BoardReplyCommentWrapper>
      {/*//!---▶▶▶ 답글 리스트 ◀◀◀---*/}
      <ReplyCommentList>
        {props.data?.fetchUseditemQuestionAnswers.map((data: any) => (
          <>
            <ReplyCommentListUIItem key={data._id} data={data} />
          </>
        ))}
      </ReplyCommentList>
    </BoardReplyCommentWrapper>
  );
}
