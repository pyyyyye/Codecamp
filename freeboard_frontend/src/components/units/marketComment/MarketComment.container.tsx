//게시글 댓글 화면 container.js
import { useMutation, useQuery } from '@apollo/client';
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from './MarketComment.queries';
import { useState } from 'react';
import { useRouter } from 'next/router';
import MarketCommentUI from './MarketComment.presenter';

export const onChangeContentsInput = {
  contents: '',
};

export default function MarketComment() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: router.query.detailpages },
  });

  const [deleteUseditemQuestionMutation] = useMutation(
    DELETE_USED_ITEM_QUESTION
  );
  const [updateUseditemQuestionMutation] = useMutation(
    UPDATE_USED_ITEM_QUESTION
  );
  // const [createUseditemQuestionMutation] = useMutation(
  //   CREATE_USED_ITEM_QUESTION
  // );
  const [inputComment, setInputComment] = useState(onChangeContentsInput);

  function onChangeInput(event: any) {
    console.log(event);
    const newInput = {
      ...inputComment,
      [event.target.name]: event.target.value,
    };
    setInputComment(newInput);
    console.log(event.target.name);
  }

  // //! ---- 댓글 등록 , 댓글 리스트 ----
  // async function onClick() {
  //   console.log(inputComment);
  //   try {
  //     await createUseditemQuestionMutation({
  //       variables: {
  //         createUseditemQuestionInput: {
  //           ...inputComment,
  //         },
  //         useditemId: router.query.detailpages,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USED_ITEM_QUESTIONS,
  //           variables: {
  //             useditemId: router.query.detailpages,
  //           },
  //         },
  //       ],
  //     });
  //     setInputComment(onChangeContentsInput);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  //! ---- 댓글 수정 ----
  const onClickCommentEdit = (commentEditId: any) => async () => {
    // console.log(inputComment);
    try {
      await updateUseditemQuestionMutation({
        variables: {
          updateUseditemQuestionInput: {
            ...inputComment,
          },
          useditemQuestionId: commentEditId,
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
      setInputComment(onChangeContentsInput);
      alert('해당 댓글 수정을 완료했습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  //! ---- 댓글 삭제 ----
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
      console.log('data');
      alert('해당 댓글을 삭제합니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketCommentUI
      // inputComment={inputComment}
      // onChangeInput={onChangeInput}
      // onClick={onClick}
      data={data}
      onClickCommentEdit={onClickCommentEdit}
      onClickCommentDelete={onClickCommentDelete}
    />
  );
}
