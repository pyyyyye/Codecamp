import {
  ReplyCommentListBox,
  ReplyIconBox,
  ReplyIcon,
  ReplyCommentListUp,
  ReplyCommentListLeft,
  ReplyCommentWriterImg,
  ReplyCommentListMiddle,
  ReplyCommentListRightIcons,
  ReplyCommentRightIcons,
  ReplyCommentListTop,
  WriterName,
  ReplyCommentNote,
  ReplyCommentDate,
} from './ReplyCommentList.styles';
import { getDate } from '../../../../commons/libraries/utils';
import { useState } from 'react';
import ReplyCommentWrite from '../replyCommentWrite/ReplyCommentWrite.container';
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER,
} from './ReplyCommentList.queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

export default function ReplyCommentListUIItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswerMutation] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const router = useRouter();

  const onClickReplyEdit = () => {
    setIsEdit(true);
  };

  const onClickReplyCommentDelete = (replycommentDeleteId: any) => async () => {
    try {
      await deleteUseditemQuestionAnswerMutation({
        variables: {
          useditemQuestionAnswerId: replycommentDeleteId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: router.query.detailpages,
            },
          },
        ],
      });
      console.log('data');
      alert('해당 답글을 삭제합니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {!isEdit && (
        // <ReplyCommentListUp key={props.data._id}>
        <ReplyCommentListBox>
          <ReplyIconBox>
            <ReplyIcon src="/images/icon_replyComment.png" />
          </ReplyIconBox>

          <ReplyCommentListUp>
            <ReplyCommentListLeft>
              <ReplyCommentWriterImg src="/images/WriterProfileImg.png" />
            </ReplyCommentListLeft>

            <ReplyCommentListMiddle>
              <ReplyCommentListTop>
                {/* <WriterName>{props.data.user.name}</WriterName> */}
                <WriterName>구매자</WriterName>
              </ReplyCommentListTop>
              {/* <ReplyCommentNote>{props.data.contents}</ReplyCommentNote> */}
              <ReplyCommentNote>코멘트</ReplyCommentNote>

              {/* <ReplyCommentDate>{getDate(props.data.createdAt)}</ReplyCommentDate> */}
              <ReplyCommentDate>2012.08.22</ReplyCommentDate>
            </ReplyCommentListMiddle>

            <ReplyCommentListRightIcons>
              <ReplyCommentRightIcons src="/images/icon_reply.png" />
              <ReplyCommentRightIcons
                onClick={onClickReplyEdit}
                src="/images/icon_edit.png"
              />
              <ReplyCommentRightIcons
                // id={props.data._id}
                // onClick={onClickReplyCommentDelete(props.data._id)}
                onClick={onClickReplyCommentDelete}
                src="/images/icon_delete.png"
              />
            </ReplyCommentListRightIcons>
          </ReplyCommentListUp>
        </ReplyCommentListBox>
      )}

      {isEdit && (
        <ReplyCommentWrite
          isEdit={isEdit}
          id={props.data._id}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  );
}
