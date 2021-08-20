import CommentListUI from './CommentList.presenter';
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from './CommentList.queries';

import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

//! ---------- 댓글 삭제 및 리스트 ----------
export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.detailpages },
  });

  return <CommentListUI data={data} />;
}
