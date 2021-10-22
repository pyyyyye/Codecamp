import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 200px;
  height: 50px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  position: sticky;
  top: 40px;
  z-index: 500;
  margin-left: 50px;
`
export const NaviWrap = styled.div`
  width: 380px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'font_Pretendard-Regular';
  span {
    color: #000;
  }
`
export const NaviButton = styled.button`
  height: 24px;
  color: #000;
  background: transparent;
  border: transparent;
  font-size: 15px;
  cursor: pointer;
  :hover {
    font-weight: 700;
  }
`
