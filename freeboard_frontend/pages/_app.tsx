import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { createUploadLink } from 'apollo-upload-client';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import Layout from '../src/components/commons/layout';
import { getAccessToken } from '../src/commons/libraries/getAccessToken';
import { onError } from '@apollo/client/link/error';

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  userInfo: any;
  setUserInfo: any;
}

export const GlobalContext = createContext<IContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({}); //유저 정보

  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  console.log(value);
  console.log(router.pathname.includes('/signup')); // ----- market 배경이미지 때문에 추가한 부분

  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      getAccessToken(setAccessToken);
      setUserInfo(JSON.parse(localStorage.getItem('userInfo') || '{}'));
      // globalContext에 담기 위해 json.parse()형태로 문자열로 담아줌.
    }
  }, []);

  console.log(accessToken);
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
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
    // 실제 파일이 업로드 될 주소
    uri: 'https://backend02.codebootcamp.co.kr/graphql',
    headers: {
      authorization: `Bearer ${accessToken}`,
      //   (typeof window !== 'undefined' &&
      //     localStorage.getItem('accessToken')) ||
      //   ''
      // }`,
    },
    credentials: 'include',
  });
  const client = new ApolloClient({
    // uri: 'http://backend02.codebootcamp.co.kr/graphql',
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  const checkLogin = // ----- market 배경이미지 때문에 추가한 부분
    router.pathname.includes('/login') || router.pathname.includes('/signup');

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Layout>
          <div // ----- market 배경이미지 때문에 추가한 부분 50~69 줄.( 67번줄 제외 )
            style={
              checkLogin
                ? {
                    backgroundImage: 'url(/market/market_bg.png)',
                  }
                : undefined
            }
          >
            <div
              style={
                checkLogin
                  ? {
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    }
                  : undefined
              }
            >
              <Component {...pageProps} />
            </div>
          </div>
          <Global styles={globalStyles} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
