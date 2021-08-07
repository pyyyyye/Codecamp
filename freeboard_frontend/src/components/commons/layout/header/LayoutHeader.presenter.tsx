import { useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import { Wrapper, HeaderWrap, HeaderButton } from './LayoutHeader.styles';

export default function LayoutHeaderUI() {
  const { accessToken } = useContext(GlobalContext);
  return (
    <Wrapper>
      <HeaderWrap>
        {accessToken ? (
          <div>마이페이지</div>
        ) : (
          <div>
            <HeaderButton>로그인</HeaderButton>|
            <HeaderButton>회원가입</HeaderButton>
          </div>
        )}
      </HeaderWrap>
    </Wrapper>
  );
}
