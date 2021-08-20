import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import DOMPurify from 'dompurify';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id }, // 여기서id=[id]다이나믹임폴트폴더명
  });

  // if (typeof window === 'undefined') return <></>; // 윈도우
  // 가 아닐 경우 = 서버일경우 ( 이 부분 에러나면 29번 줄 방법으로 해 ( next-js에서 오류 가능성 있음. ))
  // 윈도우가 없을 때(= 브라우저가 없을 때 = 서버일 때)는 빈화면<></>을 그려
  // 아래 dompurify 에러가 많이 떠서 입력한 코드
  return (
    <div>
      작성자: <span>{data?.fetchBoard.writer}</span>
      <br />
      제목: <span>{data?.fetchBoard.title}</span>
      <br />
      내용:
      {typeof window !== 'undefined' ? (
        <span
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
            //      html 기능을 사용할 건데 그 안에 <script>기능이 있으면 사용을 못하게 방어한다.
          }}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

/* 내용: < value={data?.fetchBoard.contents} /> */

/* <textarea value={} /> */
