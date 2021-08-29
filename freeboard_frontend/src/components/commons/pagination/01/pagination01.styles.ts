// -------- pagination.styles.ts ----------
import styled from '@emotion/styled';

export const PaginationWrap = styled.div`
  margin: 0 auto;
  /* margin-top: 30px; */
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Page = styled.img`
  width: 7.41px;
  cursor: pointer;
  height: 12px;
`;

export const PageBtn = styled.div`
  margin: 0px 10px 0px 10px;
  cursor: pointer;
  font-size: 15.68px;

  :hover {
    color: #ffbb00;
    font-weight: 700;
  }
`;
