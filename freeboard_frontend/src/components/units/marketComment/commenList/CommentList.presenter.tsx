import CommentListUIItem from './CommentList.presenterItem';
import { BoardCommentWrapper, CommentList } from './CommentList.styles';

export default function CommentListUI(props: any) {
  console.log('CommentList-data', props.data);
  return (
    <BoardCommentWrapper>
      {/*//!------▶▶▶▶▶ 댓글 리스트 ◀◀◀◀◀-------*/}
      <CommentList>
        {props.data?.fetchUseditemQuestions.map((data: any) => (
          <>
            <CommentListUIItem key={data._id} data={data} />
          </>
        ))}
      </CommentList>
    </BoardCommentWrapper>
  );
}
