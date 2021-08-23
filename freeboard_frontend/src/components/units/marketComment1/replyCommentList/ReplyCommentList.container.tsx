import ReplyCommentListUI from './ReplyCommentList.presenter';
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER,
} from './ReplyCommentList.queries';

import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

//! ---------- 댓글 삭제 및 리스트 ----------
export default function ReplyCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: router.query.detailpages },
  });

  return <ReplyCommentListUI data={data} />;
}
