import styled from '@emotion/styled';

export const BannerWrap = styled.div`
  width: 100%;
  height: 700px;
  background-color: #777;
  font-size: 5px;
  z-index: 500;
  color: #fff;
  position: relative;
`;
export const BannerBox = styled.div`
  width: 100%;
  color: #fff;
  font-size: 50px;
`;
export const BannerTxt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 6px gray;
`;
export const BannerImg = styled.img`
  width: 100%;
  height: 700px;
  background-size: 100%;
`;
