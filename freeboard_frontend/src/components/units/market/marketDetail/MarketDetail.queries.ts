import { gql } from '@apollo/client'

// !----- 게시글 불러오기 -----!//
export const FETCH_USED_ITEM = gql`
  query fetchUsedItem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      images
      pickedCount
      seller {
        _id
        email
        name
        picture
      }
    }
  }
`

// !----- 찜하기 토글 -----!//
export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`

// !----- 게시글 삭제하기 -----!//
export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`
