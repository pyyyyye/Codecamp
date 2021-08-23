import { gql } from '@apollo/client';

// !-------------------답글 리스트 -------------------
export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      useditemQuestion {
        contents
        useditem
        user
        createdAt
      }
      user {
        name
        createdAt
      }
      createdAt
    }
  }
`;

// !------------------- 댓글 삭제 -------------------
export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
