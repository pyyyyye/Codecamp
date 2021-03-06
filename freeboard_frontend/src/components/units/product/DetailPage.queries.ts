//===게시물 상세페이지 queries.js ===
import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`
export const DELETE_BOARD = gql`
  mutation deleteBoard($deleteBoard: ID!) {
    deleteBoard(boardId: $deleteBoard)
  }
`
