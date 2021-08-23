import { gql } from '@apollo/client';

// !------- 답글 등록 --------
export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
        createdAt
      }
      createdAt
      useditemQuestion {
        _id
        contents
        useditem {
          _id
          name
          contents
        }
        user {
          _id
          name
          createdAt
        }
      }
    }
  }
`;

// !------- 답글 수정 --------
export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestion(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      contents
    }
  }
`;

// !----------- 답글 리스트 ----------
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
