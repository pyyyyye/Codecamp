// _app.tsx
import { gql } from '@apollo/client';
import { GraphQLClient } from 'graphql-request';
// 굳이 graphql-request 안하고 axios를 써도 되긴 하는데 더 복잡하니까 그냥 깔끔하게 리퀘스트 넣어준 것.

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
// 1. refreshToken으로 새로운 accessToken을 발급받기 // apollo설정없이 요청 보낼 수 있는 기능 설치 (axios같은거.3번줄 )
export const getAccessToken = async (setAccessToken) => {
  try {
    const graphQLClient = new GraphQLClient(
      'https://backend02.codebootcamp.co.kr/graphql',
      { credentials: 'include' }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
};
