import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
  useMutation,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
// 아폴로 쿼리를 통해서 발생한 에러를 통제하는 것
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { createUploadLink } from 'apollo-upload-client';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { getAccessToken } from '../src/commons/libraries/getAccessToken';
// import Head from 'next/head';

if (typeof window !== 'undefined') {
  firebase.initializeApp({
    apiKey: 'AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8',
    authDomain: 'codecamp-01.firebaseapp.com',
    databaseURL: 'http://codecamp-01.firebaseio.com',
    projectId: 'codecamp-01',
    storageBucket: 'codecamp01.appspot.com',
  });
}

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  userInfo: any;
  setUserInfo: any;
}

export const GlobalContext = createContext<IContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({}); // 유저정보

  const value = {
    // 글로벌콘텍스트에 담아준 것들은 모든 컴포넌트에서 꺼내 쓸 수 있음.
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  // console.log(accessToken);
  useEffect(() => {
    if (localStorage.getItem('refreshToken')) getAccessToken(setAccessToken);
  }, []);

  console.log(accessToken);
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          // 2. 발급받은 accessToken으로 방금 실패했던 쿼리 재실행하기 (operation에 실패한 내용 저장되어있음)
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    // 실제 데이터가 업로드 될 백엔드 주소
    uri: 'https://backend02.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
      // `Bearer ${ --- 'accessToken 넣는 자리', 다르게 해도 되지만,Bearer 라고 하면 토큰 정보 주고받는 자리라고 약속함.
      //   (typeof window !== 'undefined' &&
      //     localStorage.getItem('accessToken')) ||
      //   ''
      // }`,
      //
    },
    credentials: 'include',
  });
  const client = new ApolloClient({
    // uri: 'http://backend02.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {/* <Head>
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=52c079a2821b29491ec6470e2b957f3e"
          ></script>
        </Head> */}
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}
export default MyApp;
