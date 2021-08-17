import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useState } from 'react';
import {
  IMutation,
  IMutationLoginUserArgs,
} from '../../src/commons/types/generated/types';
import { GlobalContext } from '../_app';

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function SignupPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      console.log(result);
      setAccessToken(result.data?.loginUserExample?.accessToken || ''); // 타입 없으면 '' 빈문자열 넘겨줘
      localStorage.setItem('refreshToken', 'true');
      // 실제로는 refreshToken이라고 대놓고 쓰면 안됨. 이름 바꿔줘야해.
      // localStorage.setItem('accessToken', result.data?.loginUser.accessToken || ''); --0817 리프레시토큰 하면서 주석함.
      //  로그인 시 로컬스토리지에 accessToken 저장되게 설정.
      // =ClobalContext에 담아라
      //   console.log(result.data?.loginUser.accessToken);
      //   alert(result.data?.loginUser.accessToken); // accessToken 보여지게
      router.push('/22-login-success');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호 : <input type="text" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}> 로그인하기</button>
    </>
  );
}
