// ---------- 중고마켓 로그인 container.tsx -------------
import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { MouseEvent, useContext } from 'react';
import { ChangeEvent, useState } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import MarketLoginUI from './MarketLogin.presenter';
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from './MarketLogin.queries';

export default function MarketLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const router = useRouter();
  const client = useApolloClient();

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onClickGoToSignup() {
    router.push('/market/signup');
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      setAccessToken(result.data?.loginUser.accessToken || '');
      alert('로그인 되었습니다.');
      router.push('../../../../../market/list');
    } catch (error) {
      alert('회원정보를 확인해주세요.');
    }
  }

  return (
    <MarketLoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickGoToSignup={onClickGoToSignup}
    />
  );
}
