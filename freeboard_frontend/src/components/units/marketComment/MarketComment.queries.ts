//댓글 등록, 수정, 목록 queries
import { gql } from '@apollo/client';

// !------------------- 댓글 등록 -------------------
export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

// !------------------- 댓글 리스트 -------------------
export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

// // !------------------- 댓글 등록 -------------------
// export const UPDATE_USED_ITEM_QUESTION = gql`
//   mutation updateUseditemQuestion(
//     $useditemQuestionId: ID!
//     $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
//    ) {
//     updateUseditemQuestion(
//       useditemQuestionId: $useditemQuestionId
//       UpdateUseditemQuestionInput:
//     ){

//     }
//     }
// `;

// !------------------- 댓글 삭제 -------------------
export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $deleteUseditemQuestion)
  }
`;
