import { gql } from '@apollo/client';

// const LOGIN_USER = gql`
//   mutation loginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       accessToken
//     }
//   }
// `;

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUsserLoggedIn {
//     fetchUserLoggedIn {
//       email
//       name
//       picture
//     }
//   }
// `;

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
    }
  }
`;
