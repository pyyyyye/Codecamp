// import { gql, useQuery } from '@apollo/client';
// import { useRouter } from 'next/router';
// import { useContext, useEffect } from 'react';
// import { IQuery } from '../../src/commons/types/generated/types';
// import { GlobalContext } from '../_app';

// const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn {
//     fetchUserLoggedIn {
//       name
//     }
//   }
// `;

// export default function LoginSuccessPage() {
//   const router = useRouter();
//   const { accessToken } = useContext(GlobalContext);
//   const { data } =
//     useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

//   useEffect(() => {
//     // if(!accessToken) 로그인페이지로 이동
//     if (!accessToken) router.push('/22-login');
//   }, []);

//   return <div>{data?.fetchUserLoggedIn.name}님 환영합니다~</div>;
// }

// import {
//   ApolloClient,
//   ApolloLink,
//   InMemoryCache,
//   ApolloProvider,
// } from '@apollo/client';
// import { AppProps } from 'next/dist/next-server/lib/router/router';
// import '../styles/globals.css';
// import 'antd/dist/antd.css';
// import Layout from '../src/components/commons/layout';
// import { Global } from '@emotion/react';
// import { globalStyles } from '../src/commons/styles/globalStyles';
// import { createUploadLink } from 'apollo-upload-client';

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import { createContext, Dispatch, SetStateAction, useState } from 'react';

// if (typeof window !== 'undefined') {
//   firebase.initializeApp({
//     apiKey: 'AIzaSyB2AZodzgw35GmS8qlyy3Z22jFI3Du2GH8',
//     authDomain: 'codecamp-01.firebaseapp.com',
//     databaseURL: 'http://codecamp-01.firebaseio.com',
//     projectId: 'codecamp-01',
//     storageBucket: 'codecamp01.appspot.com',
//   });
// }

// interface IContext {
//   accessToken: string;
//   setAccessToken: Dispatch<SetStateAction<string>>;
// }

// export const GlobalContext = createContext<IContext>({});
// function MyApp({ Component, pageProps }: AppProps) {
//   const [accessToken, setAccessToken] = useState('');
//   const value = {
//     accessToken: accessToken,
//     setAccessToken: setAccessToken,
//   };

//   const uploadLink = createUploadLink({
//     // 실제 데이터가 업로드 될 백엔드 주소
//     uri: 'http://backend02.codebootcamp.co.kr/graphql',
//     headers: {
//       authorization: `Bearer ${accessToken}`,
//       // 'accessToken 넣는 자리'
//       // 다르게 해도 되지만,  Bearer 라고 하면 토큰 정보 주고받는 자리라고 약속함.
//     },
//   });
//   const client = new ApolloClient({
//     // uri: 'http://backend02.codebootcamp.co.kr/graphql',
//     link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
//     cache: new InMemoryCache(),
//   });

//   return (
//     <GlobalContext.Provider value={value}>
//       <ApolloProvider client={client}>
//         <Layout>
//           <Global styles={globalStyles} />
//           <Component {...pageProps} />
//         </Layout>
//       </ApolloProvider>
//     </GlobalContext.Provider>
//   );
// }
// export default MyApp;
// -------- pagination.presenter.tsx ----------
// @ts-nocheck
import { MouseEvent } from 'react'
import { PaginationWrap, Page, PageBtn } from './pagination01.styles'
import { v4 as uuidv4 } from 'uuid'

interface IPaginations01UIProps {
  startPage: number
  lastPage: number
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void
  onClickPrevPage: () => void
  onClickNextPage: () => void
  data: any
}

export default function Pagination01UI(props: IPaginations01UIProps) {
  return (
    <PaginationWrap>
      <Page onClick={props.onClickPrevPage} src="/images/icon_prev.png" />
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <PageBtn
              key={uuidv4()}
              // key={props.startPage + index}
              onClick={props.onClickPage}
              id={props.startPage + index}
            >
              {props.startPage + index}
            </PageBtn>
          )
      )}
      <Page
        key={uuidv4()}
        onClick={props.onClickNextPage}
        src="/images/icon_next.png"
      />
    </PaginationWrap>
  )
}
