import { gql } from '@apollo/client';

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      # useditemAddress
      # buyer
      seller {
        _id
        email
        name
        picture
      }
      # soldAt
      createdAt
    }
  }
`;
