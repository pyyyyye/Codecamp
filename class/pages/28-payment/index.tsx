import { useState } from 'react';
import Head from 'next/head';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

// 충전하기 // 구매는 BUYING AND 등으
// 로그인 한 상태에서 얘를 가져와야지 액세스토큰 인식함.
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export default function PaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  function onChangeAmount(event) {
    setAmount(event.target.value); // 입력한 값으로 amoubnt값 바꾸기
  }

  function onClickPayment() {
    const IMP = window.IMP;
    IMP.init('imp49910675');
    IMP.request_pay(
      {
        // param // 변수로 담기 가능 // 일부만 필수 정보.
        pg: 'html5_inicis',
        pay_method: 'card',
        name: '노르웨이 의자',
        // merchant_uid: 'ORD20180131-0000011', // 잘 모르겠으면 uuid로 만들어
        amount: amount,
        buyer_email: 'gildong@gmail.com',
        buyer_name: '홍길동', // fetchUserLogedIn 해.
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
        m_redirect_url: '',
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          alert('결제에 성공했습니다.');
          router.push('/28-payment-success');
        } else {
          //   console.log(rsp.error_msg);
          // 결제 실패 시 로직,   이부분이 import uid 실제 key라고 생각하면 돼
          alert('결제에 실패했습니다.');
        }
      }
    );
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      결제금액 : <input type="text" onChange={onChangeAmount} />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
