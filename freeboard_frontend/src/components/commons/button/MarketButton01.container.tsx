// 중고마켓 등록하기, 목록으로, 수정하기 버튼   MarketButton01.tsx
import styled from '@emotion/react';

export const MarketButton01 = styled.button`
  background-color: ${(props) => (props.isActive ? '#ffd600' : '')};
`;

export default function MarketButton01UI() {
  return (
    <>
      <MarketButton01 type={props.type} isActive={props.isActive}>
        {props.buttonName}
      </MarketButton01>
    </>
  );
}
