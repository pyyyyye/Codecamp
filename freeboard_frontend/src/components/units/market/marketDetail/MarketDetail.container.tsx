import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { GlobalContext } from '../../../../../pages/_app';
import MarketDetailUI from './MarketDetail.presenter';
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from './MarketDetail.queries';

export default function MarketDetail() {
  const router = useRouter();
  const { userInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.detailpages },
  });
  const [toggleUseditemPickMutation] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  function onClickMoveToList() {
    router.push('/market/list');
  }

  // !----- 찜하기 토글 -----!//
  const onClickToggle = async () => {
    try {
      await toggleUseditemPickMutation({
        variables: { useditemId: router.query.detailpages },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.detailpages,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // !----- 게시글 삭제하기 -----!//
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: router.query.detailpages },
      });
      alert('해당 글을 삭제합니다.');
      router.push('/market/list');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      userInfo={userInfo}
      onClickToggle={onClickToggle}
      onClickDelete={onClickDelete}
    />
  );
}
