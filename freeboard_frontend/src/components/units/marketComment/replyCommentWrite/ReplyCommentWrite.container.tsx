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

export default function ReplyCommentWrite(props: any) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });
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
    const newInput = {
      ...inputReplyComment,
      [event.target.name]: event.target.value,
    };
    setInputReplyComment(newInput);
    console.log(event.target.name);
  }

  //! ---- 답글 등록 ----
  async function onClickReply() {
    try {
      await createUseditemQuestionAnswerMutation({
        variables: {
          createUseditemQuestionAnswerInput: { ...inputReplyComment },
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.data._id,
            },
          },
        ],
      });
      setInputReplyComment(onChangeContentsInput);
      // console.log(inputReplyComment);
      alert('해당 답글 등록을 완료했습니다~~!!!~~!.');
    } catch (errors) {
      alert(errors.message);
    }
  }

  //! ---- 답글 수정 ----

  const onClickReplyCommentEdit = async () => {
    try {
      await updateUseditemQuestionAnswerMutation({
        variables: {
          updateUseditemQuestionAnswerInput: { ...inputReplyComment },
          useditemQuestionAnswerId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.data._id,
            },
          },
        ],
      });
      setInputReplyComment(onChangeContentsInput);

      props.setIsEdit(false);
      alert('해당 답글 수정을 완료했습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ReplyCommentWriteUI
      isEdit={props.isEdit}
      data={data}
      inputReplyComment={inputReplyComment}
      onClickReply={onClickReply}
      onChangeReplyInput={onChangeReplyInput}
      onClickReplyCommentEdit={onClickReplyCommentEdit}
    />
  );
}
