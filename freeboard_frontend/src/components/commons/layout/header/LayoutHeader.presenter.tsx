import { MouseEvent, useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import { Wrapper, HeaderWrap, HeaderButton } from './LayoutHeader.styles';

interface IProps {
  onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function LayoutHeaderUI(props: IProps) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <Wrapper>
      <HeaderWrap>
        {accessToken ? (
          <div>마이페이지</div>
        ) : (
          <div>
            <HeaderButton onClick={props.onClickLogin}>로그인</HeaderButton>|
            <HeaderButton onClick={props.onClickSignup}>회원가입</HeaderButton>
          </div>
        )}
      </HeaderWrap>
    </Wrapper>
  );
}
