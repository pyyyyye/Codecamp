import ReplyCommentWriteUI from './ReplyCommentWrite.presenter';
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from './ReplyCommentWrite.queries';
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';

//! --------------- 답글 등록 및 수정 ---------------
export const onChangeContentsInput = {
  contents: '',
};

export default function ReplyCommentWrite(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: router.query.detailpages },
  });
  // });
  const [updateUseditemQuestionAnswerMutation] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const [createUseditemQuestionAnswerMutation] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [inputReplyComment, setInputReplyComment] = useState(
    onChangeContentsInput
  );

  function onChangeReplyInput(event: any) {
    console.log(event);
    const newInput = {
      ...inputReplyComment,
      [event.target.name]: event.target.value,
    };
    setInputReplyComment(newInput);
    console.log(event.target.name);
  }

  //! ---- 답글 등록 ----
  async function onClickReply() {
    console.log(inputReplyComment);
    try {
      await createUseditemQuestionAnswerMutation({
        variables: {
          createUseditemQuestionInput: {
            ...inputReplyComment,
          },
          useditemQuestionId: router.query.detailpages,
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
      setInputReplyComment(onChangeContentsInput);
    } catch (error) {
      alert(error.message);
    }
  }

  //! ---- 답글 수정 ----
  const onClickReplyCommentEdit = async () => {
    // console.log(inputReplyComment);
    try {
      await updateUseditemQuestionAnswerMutation({
        variables: {
          updateUseditemQuestionAnswerInput: {
            ...inputReplyComment,
          },
          useditemQuestionAnswerId: props.id,
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
      setInputReplyComment(onChangeContentsInput);
      props.setIsEdit(false);
      alert('해당 댓글 수정을 완료했습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ReplyCommentWriteUI
      isEdit={props.isEdit}
      data={data}
      inputReplyComment={inputReplyComment}
      onClicReplyk={onClickReply}
      onChangeReplyInput={onChangeReplyInput}
      onClickCommentEdit={onClickReplyCommentEdit}
    />
  );
}
