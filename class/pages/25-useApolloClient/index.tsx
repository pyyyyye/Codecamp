import { gql, useApolloClient, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '../_app';
// 아바타나 마이페이지 화면 이용하기
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUsserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const client = useApolloClient();

  const onClickLogin = async (data) => {
    // 여기서 로그인 실행
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
        refetchQueries: [],
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN, // 로그인 하고 정보 받아오기
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      setAccessToken(result.data?.loginUser.accessToken);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {userInfo?.email ? `${userInfo.name}님 환영합니다.` : '로그인 해주세요'}
      <form onSubmit={handleSubmit(onClickLogin)}>
        이메일
        <input type="text" {...register('email')} />
        <br />
        비밀번호
        <input type="password" {...register('password')} />
        <br />
        <button type="submit">로그인하기</button>
      </form>
    </>
  );
}
