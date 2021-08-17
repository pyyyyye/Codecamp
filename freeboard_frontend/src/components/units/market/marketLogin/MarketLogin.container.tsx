// ---------- 중고마켓 로그인 container.tsx -------------
import { useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import MarketLoginUI from './MarketLogin.presenter';
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from './MarketLogin.queries';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './MarketLogin.validation';
import { useForm } from 'react-hook-form';

export default function MarketLogin() {
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const client = useApolloClient();
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  function onClickGoToSignup() {
    router.push('/market/signup');
  }
  async function onSubmit(data: any) {
    try {
      const result = await loginUser({
        variables: {
          // email,
          // password,
          ...data,
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
      console.log(result);
      setUserInfo(resultUser.data?.fetchUserLoggedIn);
      setAccessToken(result.data?.loginUser?.accessToken || '');
      localStorage.setItem('refreshToken', 'true');
      // localStorage.setItem(
      //   'accessToken',
      //   result.data?.loginUser.accessToken || ''
      // );
      // console.log('-성공!', result.data?.loginUser.accessToken);
      alert('로그인 되었습니다.');
      router.push('../../../../../market/list');
    } catch (error) {
      alert('회원정보를 확인해주세요.');
    }
  }

  return (
    <MarketLoginUI
      // onChangeEmail={onChangeEmail}
      // onChangePassword={onChangePassword}
      // onClickLogin={onClickLogin}
      onClickGoToSignup={onClickGoToSignup}
      register={register}
      handleSubmit={handleSubmit}
      errors={formState.errors}
      // isActive={formState.isValid}
      onSubmit={onSubmit}
    />
  );
}
