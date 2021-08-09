import { useEffect, useState } from 'react';

export default function BasketLoggedInPage() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('baskets') || '[]'); // 안에 들어있던 아니던 일단 배열임.
    setBaskets(items);
  }, []);

  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {baskets.map((data) => (
        <div key={data._id}>
          <span>{data.writer}</span>
          <span>{data.title}</span>
        </div>
      ))}
    </>
  );
}
// 장바구니에서 빼기 = filter로 local에서 하나하나 뺀다.
