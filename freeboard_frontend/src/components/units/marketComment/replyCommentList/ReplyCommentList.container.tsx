import ReplyCommentListUI from './ReplyCommentList.presenter';
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from './ReplyCommentList.queries';

import { useQuery } from '@apollo/client';

//! ---------- 댓글 삭제 및 리스트 ----------
export default function ReplyCommentList(props: any) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });
  console.log('리댓 ReplyCommentList-data :', data);
  return <ReplyCommentListUI data={data} />;
}
