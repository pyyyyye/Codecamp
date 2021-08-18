import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 300px;
`;
export const ListContents = styled.div`
  width: 100%;
  max-width: 1200px;
  padding-top: 80px;
  position: relative;
`;
export const Title = styled.h1`
  font-size: 700;
  text-align: center;
  padding-bottom: 40px;
`;
//! =============== Top Bestlist =================
//! ===== Middle ETC Box =====

export const MiddleBox = styled.div`
  width: 100%auto;
  line-height: 52px;
  height: 52px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemPages = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ItemsBox = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 26.64px;
  margin-right: 20px;
  cursor: pointer;
`;
export const ItemSearchContents = styled.div`
  width: 690px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ItemsSearchBox = styled.div`
  width: 282px;
  height: 52px;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  padding: 0px 14px;
`;
export const SearchBoxInput = styled.input`
  height: 52px;
  border: none;
  background: transparent;
  outline: none;
`;
export const SearchIcon = styled.img`
  width: 17.5px;
  height: 17.5px;
`;
export const CalendarBox = styled.div`
  width: 282px;
  height: 52px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  text-align: left;
  padding-left: 15px;
`;
export const GoToSearchBtn = styled.button`
  width: 78px;
  height: 52px;
  outline: none;
  text-align: center;
  background-color: #000;
  color: #fff;
  line-height: 23.68px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

//! =============== Bottom list contents =================

export const Contents = styled.div`
  width: 100%;
  height: 1000px;
  overflow: scroll;
  overflow-x: hidden;

  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffd600;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }
`;
export const List = styled.div`
  width: 100%;
  height: 200px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border-top: 1px solid #bdbdbd; */
  border-bottom: 1px solid #bdbdbd;
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
  padding-top: 28px;
  padding-bottom: 28px;
`;
export const TopPrevInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

export const Seller = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  color: #4f4f4f;
`;
export const LikeBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Like = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;
export const LikeCount = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  line-height: 23.68px;
`;

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
