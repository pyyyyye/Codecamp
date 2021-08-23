import {
  CommentListUp,
  CommentListBox,
  CommentListLeft,
  CommentWriterImg,
  CommentListMiddle,
  CommentListRightIcons,
  CommentRightIcons,
  CommentListTop,
  WriterName,
  CommentNote,
  CommentDate,
} from './CommentList.styles';
import ReplyCommentList from '../replyCommentList/ReplyCommentList.container';
import ReplyCommentWrite from '../replyCommentWrite/ReplyCommentWrite.container';
import { getDate } from '../../../../commons/libraries/utils';
import { useState } from 'react';
import CommentWrite from '../commentWrite/CommentWrite.container';
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from '../commenList/CommentList.queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

export default function CommentListUIItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionMutation] = useMutation(
    DELETE_USED_ITEM_QUESTION
  );
  const router = useRouter();

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickCommentDelete = (commentDeleteId: any) => async () => {
    try {
      await deleteUseditemQuestionMutation({
        variables: {
          useditemQuestionId: commentDeleteId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.detailpages,
            },
          },
        ],
      });
      console.log('댓글 리스트 데이터 :', props.data);
      alert('해당 댓글을 삭제합니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {!isEdit && (
        <CommentListUp key={props.data._id}>
          <CommentListBox>
            <CommentListLeft>
              <CommentWriterImg src="/images/WriterProfileImg.png" />
            </CommentListLeft>

            <CommentListMiddle>
              <CommentListTop>
                <WriterName>{props.data.user.name}</WriterName>
              </CommentListTop>
              <CommentNote>{props.data.contents}</CommentNote>
              <CommentDate>{getDate(props.data.createdAt)}</CommentDate>
            </CommentListMiddle>

            <CommentListRightIcons>
              <CommentRightIcons src="/images/icon_reply.png" />
              <CommentRightIcons
                onClick={onClickEdit}
                src="/images/icon_edit.png"
              />
              <CommentRightIcons
                // id={props.data._id}
                onClick={onClickCommentDelete(props.data._id)}
                src="/images/icon_delete.png"
              />
            </CommentListRightIcons>
          </CommentListBox>
          <ReplyCommentList data={props.data} />
          <ReplyCommentWrite />
        </CommentListUp>
      )}

      {isEdit && (
        <CommentWrite
          isEdit={isEdit}
          id={props.data._id}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
