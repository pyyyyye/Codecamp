import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;
// display:flex, div주기
const Column = styled.span`
  padding-left: 50px;
  padding-right: 50px;
  color: lemonchiffon;
`;

export default function BasketPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (basketData) => (/* event 써도 되고 안써도 됨 */) => {
    // basketData = 사용자가 클릭 한 데이터
    // event.target.id를 hof방식으로 바꿔서 적용해본 예시
    console.log(basketData);
    const baskets = JSON.parse(localStorage.getItem('baskets') || '[]'); // 안에있는 문자열 객체가 배열로 바뀌게 됨!  -- 목록을 넣어야하기때문에 배열로 만들어 (JASON.parse)
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true; // 한 번 바구니에 담은 물건은 또 똑같이 담지 않도록
    });
    if (isExists) return;

    // console.log(baskets, isExists);
    // baskets = baskets.filter((data) => data._id !== basketData._id); // 배열이니까 filter써서 걸러냄. //application-local에서 확인하면 클릭한 데이터들은 삭제(빠지게)
    baskets.push(basketData);
    // localStorage.setItem('baskets', basketData); // 이렇게만 하면 객체이기 때문에 object object라고 뜸.
    localStorage.setItem('baskets', JSON.stringify(baskets)); // 배열로 만들었던 baskets의 데이터를 문자열로 바꿔서 보여준다.
  };

  const onClickLogin = () => {
    //* 로그인 완료됨!
    //* 로컬스토리지에 baskets이 있으면, 확인 모달 띄우기
    //* 장바구니에 데이터가 있는데, 장바구니로 이동 하시겠습니까?  // 데이터 없으면 바로 홈으로 가도 됨.
    router.push('/26-basket-logged-in');
  };

  return (
    <div>
      {data?.fetchBoards.map((data, index) => (
        <div key={data._id}>
          <Column>{index + 1}</Column>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <button id={data._id} onClick={onClickBasket(data)}>
            장바구니 담기
          </button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
