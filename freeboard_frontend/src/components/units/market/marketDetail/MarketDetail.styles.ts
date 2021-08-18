import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Contents = styled.div`
  max-width: 792px;
  width: 100%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 300px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

export const TopContentsWriter = styled.div`
  width: 100%;
  margin: 80px 0px 20px 0px;
  padding-bottom: 24px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
`;
export const WriterProfileImg = styled.img`
  width: 48px;
  height: 48px;
`;
export const WriterInfo = styled.div`
  width: 880px;
  height: 52px;
  margin-left: 16px;
`;
export const Name = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 25px;
  /* border: 1px solid black; */
  margin: 0;
`;
export const Date = styled.div`
  color: #828282;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
`;
export const WriterIcon = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LinkIcon = styled.img`
  width: 27px;
  height: 14px;
  cursor: pointer;
`;

export const MapIcon = styled.img`
  cursor: pointer;
  margin-left: 10px;
`;

// !==================== MainContentsProduct Start ====================
export const MainContentsProduct = styled.div`
  width: 100%;
`;
export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const InfoTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const InfoTopLeft = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const Title1 = styled.div`
  font-size: 18px;
  font-weight: 500px;
  color: #bdbdbd;
  line-height: 26.64px;
`;

export const Title2 = styled.div`
  font-size: 24px;
  line-height: 35.52px;
  font-weight: bold;
  color: #4f4f4f;
  margin-bottom: 6px;
`;

export const Price = styled.div`
  font-size: 36px;
  font-weight: 700;
  line-height: 53.28px;
`;

export const InfoTopRight = styled.div`
  width: 30px;
`;
export const LikeBtn = styled.img`
  width: 30px;
  height: 27.53px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-align: center;
  line-height: 27px;
  padding-top: 4px;
`;

// ! ----- images start -----
export const InfoMiddle = styled.div`
  width: 504px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const MainImage = styled.img`
  width: 296px;
  height: 296px;
  background-color: #bdbdbd;
`;
export const SubImage = styled.div`
  width: 78px;
  height: 78px;
  background-color: gray;
  margin: 20px 24px 80px 24px;
`;
export const InfoBottom = styled.div`
  width: 100%;
`;
export const InfoText = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
`;
export const InfoTags = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  color: #bdbdbd;
  padding-bottom: 20px;
`;

// ! ----- Map start -----
export const Map = styled.div`
  width: 100%;
  /* height: 360px; */
  font-size: 50px;
  margin: 0 auto;
  border-top: 1px solid #bdbdbd;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// !==================== BottomBtn Start ====================
export const BottomBtn = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 76px;
  padding: 80px;
`;
export const ButtonBox = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  line-height: 23.68px;
  text-align: center;
  border: none;
  margin: 0 12px;
  cursor: pointer;

  :hover {
    background-color: #ffd600;
  }
`;
