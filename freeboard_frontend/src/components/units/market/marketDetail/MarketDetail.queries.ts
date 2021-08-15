import { gql } from '@apollo/client';

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
      seller {
        _id
        email
        name
        picture
      }
    }
  }
`;
