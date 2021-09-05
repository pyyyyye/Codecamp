import { MouseEvent } from 'react';
import { Wrapper, NaviWrap, NaviButton } from './LayoutNavigation.styles';

interface IProps {
  onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function LayoutNavigationUI(props: IProps) {
  return (
    <Wrapper>
      <NaviWrap>
        <NaviButton onClick={props.onClickFreeboard}>자유게시판</NaviButton>|
        <NaviButton onClick={props.onClickMarket}>중고 마켓</NaviButton>
        {/* <NaviButton>마이 페이지</NaviButton> */}
      </NaviWrap>
    </Wrapper>
  );
}
