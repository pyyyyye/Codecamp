import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 300px;
`;

//! =============== Main Best Product List Contents =================
export const ListContents = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: lemonchiffon;
  padding-top: 80px;
`;
export const Title = styled.h1`
  font-size: 700;
  text-align: center;
  padding-bottom: 40px;
`;
export const TopBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: lightseagreen;
  text-align: center;
  line-height: 80px;
  margin-bottom: 80px;
  color: #fff;
`;
export const Contents = styled.div`
  width: 100%;
  height: 1000px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: blue;
  }

  ::-webkit-scrollbar-track {
    background-color: coral;
  }
`;
export const List = styled.div`
  width: 100%;
  height: 200px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// --- LEFT Product IMG Start ---
export const ProductPrevImg = styled.img`
  width: 160px;
  height: 160px;
  background-color: #bdbdbd;
  margin: 20px 40px 20px 0px;
`;

// --- CENTER ProductPrevInfo Start ---
export const ProductPrevInfo = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;
export const LeftInfo = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TopPrevInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0px;
`;
export const ProductName = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin-bottom: 4px;
`;
export const ProductRemarks = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
  line-height: 23.68px;
`;
export const ProductTags = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  line-height: 23.68px;
  padding-top: 8px;
`;

// --- BottomPrevInfo Start ----
export const BottomPrevInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SellerBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 22px;
`;
export const SellerImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

export const Seller = styled.div``;
export const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Like = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;
export const LikeCount = styled.div``;

// --- RIGHT Product Price ---
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 200px;
  height: 200px;
  text-align: right;
  align-items: center;
`;
export const PriceIcon = styled.img`
  width: 18px;
  height: 18px;
`;
export const Price = styled.div`
  padding-left: 11px;
  font-size: 24px;
  line-height: 35.52px;
  font-weight: 700;
`;

// --- GoToWrite Btn ---
export const GoToWrite = styled.button`
  width: 124px;
  height: 52px;
  text-align: center;
  font-size: 16px;
  line-height: 52px;
  cursor: pointer;
  outline: none;
  border: 1px solid #000;
  background: #fff;
  margin-top: 40px;
  :hover {
    background-color: #ffd600;
  }
`;

//! =============== Right Sticky Menu =================
export const RightSticky = styled.div`
  width: 196px;
  height: 100px;
  background-color: #bdbdbd;

  position: sticky;
  top: 600px;

  display: none;
`;
