import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import MarketDetailUI from './MarketDetail.presenter';
import { FETCH_USED_ITEM } from './MarketDetail.queries';

export default function MarketDetail() {
  const router = useRouter();
  // const [loginUser] = useMutation(LOGIN_USER);
  const { userInfo } = useContext(GlobalContext);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.detailpages },
  });
  console.log(data);
  function onClickMoveToList() {
    router.push('/market/list');
  }

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      userInfo={userInfo}
    />
  );
}
