import {
  Wrapper,
  TopBox,
  BestProductBox,
  TopProductImg,
  TopProductInfo,
  TopName,
  TopInfoRemarks,
  TopInfoPrice,
  TopInfoEtc,
  TopInfoLeft,
  TopInfoRight,
  HeartToggle,
  ToggleCount,
} from './MarketListOfTheBest.styles';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
    }
  }
`;

export default function MarketListOfTheBest() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  console.log(data);
  const onClickBox = (dataId) => () => {
    router.push(`/market/detail/${dataId}`);
  };
  return (
    <Wrapper>
      {data?.fetchUseditemsOfTheBest.map((data: any) => (
        <TopBox key={data._id}>
          <BestProductBox onClick={onClickBox(data._id)}>
            <TopProductImg
              src={`https://storage.googleapis.com/${data.images[0] || ''}`}
            />
            <TopProductInfo>
              <TopName>{data.name}</TopName>
              <TopInfoEtc>
                <TopInfoLeft>
                  <TopInfoRemarks>{data.remarks}</TopInfoRemarks>
                  <TopInfoPrice>{data.price}</TopInfoPrice>
                </TopInfoLeft>
                <TopInfoRight>
                  <HeartToggle src="/images/icon_like_2.png" />
                  <ToggleCount>{data.pickedCount}</ToggleCount>
                </TopInfoRight>
              </TopInfoEtc>
            </TopProductInfo>
          </BestProductBox>
        </TopBox>
      ))}
    </Wrapper>
  );
}
