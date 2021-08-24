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
  // console.log('아이디', props.data);
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });
  // console.log('답글 : ', data);
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
    // console.log('ㄴㄴ', event);
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
  0;

  //! ---- 답글 수정 ----
  console.log('수정됐나? : ', data);
  const onClickReplyCommentEdit = async () => {
    // console.log('수정버튼 클릭');

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
