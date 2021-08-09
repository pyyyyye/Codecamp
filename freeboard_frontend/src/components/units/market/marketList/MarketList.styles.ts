import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
`;
export const List = styled.div`
  width: 100%;
  height: 200px;
  background-color: skyblue;
`;

// --- LEFT Product IMG Start ---
export const ProductBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProductPrevImg = styled.div`
  width: 160px;
  height: 160px;
  background-color: #bdbdbd;
`;

// --- CENTER ProductPrevInfo Start ---
export const ProductPrevInfo = styled.div`
  width: 816px;
  background-color: orange;
`;
export const TopPrevInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductName = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;
export const ProductRemarks = styled.span``;
export const ProductTags = styled.span``;

// --- BottomPrevInfo Start ----
// export const BottomPrevInfo = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
// export const SellerBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding-right: 22px;
// `;
// export const SellerImg = styled.img`
//   width: 20px;
//   height: 20px;
// `;
// export const Seller = styled.div``;
// export const LikeBox = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
// export const Like = styled.img`
//   width: 20px;
//   height: 20px;
// `;
// export const LikeCount = styled.div``;

// --- RIGHT Product Price ---
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: row;
  height: 36px;
  border: 1px solid blue;
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
  :hover {
    background-color: #ffd600;
  }
`;

//! =============== Right Sticky Menu =================
export const RightSticky = styled.div`
  width: 196px;
  height: 505px;
  background-color: #bdbdbd;

  display: none;
`;
