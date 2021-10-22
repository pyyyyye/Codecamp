import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 5000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 50px;
`

export const HeaderWrap = styled.div`
  width: 200px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-weight: 500;
  align-items: center;
  color: #51ada9;
  margin-left: 13px;
  /* background-color: red; */
`
export const AfterLogin = styled.div`
  margin: 0 auto;
  padding-right: 5px;
`
export const HeaderButton = styled.button`
  width: 70px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background: transparent;
  border: transparent;
  margin: 10px;
  cursor: pointer;
  color: #51ada9;
  :hover {
    font-weight: 700;
  }
`
