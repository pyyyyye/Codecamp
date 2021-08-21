import styled from '@emotion/styled';
import { breakPoints } from '../../src/commons/styles/media';

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;
  color: #fff;

  @media ${breakPoints.tablet} {
    /* @media (min-width: 768px) and (max-width: 1200px) { */
    //태블릿 버전
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media ${breakPoints.mobile} {
    /* @media (max-width: 767px) { */
    // 모바일버전
    width: 100px;
    height: 100px;
    background-color: blue;
    /* display: none; */
  }
`;

export default function MdeiaPage() {
  return <Wrapper>상자</Wrapper>;
}
