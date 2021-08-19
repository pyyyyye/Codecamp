import { useQuery, gql, useMutation } from '@apollo/client';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: '611ce2362d1aa300298e6cb0' },
  });

  const onClickLike = (likeCount) => () => {
    likeBoard({
      variables: { boardId: '611ce2362d1aa300298e6cb0' },
      //   refetchQueries: [
      //     { ------ 방법 1)
      //       query: FETCH_BOARD,
      //       variables: { boardId: '611ce2362d1aa300298e6cb0' },
      //     },
      //   ],

      optimisticResponse: {
        // 대개 네트웤 속도 빨라서 안보이니까 속도 slow3G로 바꿔서 확인해봐
        likeBoard: likeCount + 1, // 일단 +1로 바뀌고(가정)(업데이트1) db확인하고 그 값 data.likeCount로 넣어줘 (업데이트 2)
      },
      // 이하 얘만 쓰면!!! 방법 2)cache.modifiy=cache직접수정 / cache.writeQuery=캐시 직접 수정/위랑 같이쓰면 옵티ui됨
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: '611ce2362d1aa300298e6cb0' },
          data: {
            fetchBoard: {
              _id: '611ce2362d1aa300298e6cb0',
              __typename: 'Board',
              likeCount: data.likeBoard, // 업데이트 된 data의 likeBoard 수 적용
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>좋아요 : {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike(data?.fetchBoard.likeCount)}>
        좋아요 + 1
      </button>
    </>
  );
}
