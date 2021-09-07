// _app.tsx
import { gql } from '@apollo/client'
import { GraphQLClient } from 'graphql-request'

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`
// 1. refreshToken으로 새로운 accessToken을 발급받기 // apollo설정없이 요청 보낼 수 있는 기능 설치 (axios같은거.3번줄 )
export const getAccessToken = async (setAccessToken: any) => {
  try {
    const graphQLClient = new GraphQLClient(
      'https://backend02.codebootcamp.co.kr/graphql',
      { credentials: 'include' }
    )
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN)
    const newAccessToken = result.restoreAccessToken.accessToken
    setAccessToken(newAccessToken)
    return newAccessToken
  } catch (error) {
    // console.log(error.message);
  }
}
