import { useRouter } from 'next/router';
import { ComponentType, useContext, useEffect } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import { Wrapper, GoToWrite } from './MarketList.styles';

export default function MarketListUI(props) {
  return (
    <Wrapper>
      마켓 목록 페이지 입니다.
      <GoToWrite onClick={props.onClickWrite}>게시글 올리기</GoToWrite>
    </Wrapper>
  );
}

const withAuth = (Component: ComponentType) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert('로그인이 필요한 페이지입니다.');
      router.push('../../../../../market/login');
    }
  }, []);

  return (
    <Wrapper>
      {/* 마켓 목록 페이지 입니다. */}
      <GoToWrite>게시글 올리기</GoToWrite>
    </Wrapper>
  );
};
