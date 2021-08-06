import { gql, useMutation, useQuery } from '@apollo/client';
import { Modal } from 'antd';
import { CREATE_BOARD } from '../../src/components/units/board/write/BoardWrite.queries';

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
    # 이 자체가 아이디로 나오기 때문에 객체 따로 써주지 않음.
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    //  = (원하는 이름)=>(event)=> {}이벤트 사용 안하니까안씀
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        // refetchQueries: [{ query: FETCH_BOARDS }],
        update(cache, { data }) {
          // {data = 바로 위에서 delete한 data}
          cache.modify({
            // 캐시 수정한다.
            fields: {
              // 어떤 필드의 캐시를 수정할거냐
              fetchBoards: (prev, { readField }) => {
                // 이 api캐시 수정한다
                const newPrev = prev.filter((prevData) => {
                  return readField('_id', prevData) !== data.deleteBoard;
                }); // 필드 읽어내라 (이전 데이터들 중에 '아이디') !== 삭제한 데이터의 아이디 빼고
                // 기존 것들 중 필터링해서 빼버려라 => id를 ! !== 삭제 ㅇ안된 아이디!

                //! 만들 땐 createBoard로 하고, return을 열한개 빼주면 됨.

                // fetchboards안에 10개의 객체 있어서 밑에 [배열]로 적음.
                return [...newPrev];
                // return [data.CREATE_BOARD, ...prev];// = createBoard

                // 필터링한거 뺴고 나머지 모든 거 보여줘. ( 위에 아무것도 안쓰고 리턴하면 전부 리턴됨.) = = cache 직접 변경하는 방법임. redux는 이런 자동화 방법이 없어서 좀더 복잡?지금처럼 모든걸 다 스스로 작성해줫어야햇음. 지금처럼 = 위 방법말고 원래 하던 방법?
              },
            },
          });
        },
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <span style={{ padding: '30px' }}>{data.writer}</span>
          <span style={{ padding: '30px' }}>{data.title}</span>
          <span style={{ padding: '30px' }}>{data.contents}</span>
          <button onClick={onClickDelete(data._id)}>삭제하기</button>
        </div>
      ))}
    </>
  );
}
