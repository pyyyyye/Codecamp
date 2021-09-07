// @ts-nocheck
// import { MouseEvent } from 'react'
import { Wrapper, NaviWrap, NaviButton } from './LayoutNavigation.styles'

interface IProps {
  // onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClickFreeboard: () => void
  onClickMarket: () => void
}

export default function LayoutNavigationUI(props: IProps) {
  return (
    <Wrapper>
      <NaviWrap>
        <NaviButton onClick={props.onClickFreeboard}>자유게시판</NaviButton>
        <span>|</span>
        <NaviButton onClick={props.onClickMarket}>중고 마켓</NaviButton>
      </NaviWrap>
    </Wrapper>
  )
}
