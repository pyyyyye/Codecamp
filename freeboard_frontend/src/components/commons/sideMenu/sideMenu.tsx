import styled from '@emotion/styled';
const SideWrap = styled.div`
  width: 200px;
  height: 505px;
  border: 1px solid #ebebeb;
  position: fixed;
  top: 280px;
  right: 400px;
  padding: 20px;
  background-color: #fff;
`;
const SideTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.64px;
  text-align: center;
  padding-bottom: 20px;
  margin: 0px;
`;
const Contents = styled.div`
  width: 100%;
  height: 418px;
  overflow: scroll;
  overflow-x: hidden;
  /* border: 1px solid #ebebeb;
  border-left: none; */

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffeb8a;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
const SideBox = styled.div`
  width: 156px;
  height: 199px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ebebeb;
  border-right: none;
`;
const ToggleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const ToggleImg = styled.img`
  width: 15px;
  height: 13.76px;
`;
const ToggleCount = styled.div`
  font-size: 12px;
  line-height: 17.76px;
  font-weight: 500;
  padding-left: 5px;
`;
const SideProductImg = styled.img`
  width: 60px;
  height: 60px;
  background-color: lightgray;
  font-size: 10px;
`;
const SideProductText = styled.div`
  width: 100%;
  padding-top: 12px;
`;
const SideProductName = styled.div`
  font-size: 12px;
  line-height: 17.76px;
  font-weight: 500;
`;
const SideProductRemarks = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #4f4f4f;
  line-height: 17.76px;
`;
const SideProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 23.68px;
  padding-top: 5px;
`;
const SideProductTags = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 14.8px;
  color: #bdbdbd;
  padding-top: 8px;
`;

export default function SideMenu(props) {
  return (
    <SideWrap>
      <SideTitle>오늘 본 상품</SideTitle>
      <Contents>
        {props.aaa.map((data) => {
          // console.log(data);
          return (
            <SideBox key={data._id}>
              <ToggleBox>
                <ToggleImg src="/images/icon_like_2.png" />
                <ToggleCount>{data?.pickedCount}</ToggleCount>
              </ToggleBox>
              <SideProductImg
                key={data.images}
                src={`https://storage.googleapis.com/${data?.images[0]}`}
              />
              <SideProductText>
                <SideProductName>{data?.name}</SideProductName>
                <SideProductRemarks>{data?.remarks}</SideProductRemarks>
                <SideProductPrice>{data?.price}원</SideProductPrice>
                <SideProductTags>{data?.tags}</SideProductTags>
              </SideProductText>
            </SideBox>
          );
        })}
      </Contents>
    </SideWrap>
  );
}
