import axios from 'axios';
import { useState } from 'react';

export default function CallbackPage() {
  const [callback, setCallback] = useState([]);
  const [promise, setPromise] = useState([]);
  const [asyncAawit, setAsyncAawit] = useState([]);

  const onClickCallback = () => {
    const ccc = new XMLHttpRequest();
    ccc.open('get', 'http://numbersapi.com/random?min=1&max=200');
    ccc.send();
    ccc.addEventListener('load', (res) => {
      const num = res.target.response.split('')[0];
      const aaa = new XMLHttpRequest(); // javascript 기능이라 설치 안해도 됨.
      aaa.open('get', `https://koreanjson.com/posts/${num}`); // axios의 get과 같음.
      aaa.send();
      aaa.addEventListener('load', (res) => {
        const user = JSON.parse(res.target.response).UserId;
        const aaa2 = new XMLHttpRequest();
        aaa2.open('get', `http://koreanjson.com/posts?userId=${user}`);
        aaa2.send();
        aaa2.addEventListener('load', (res2) => {
          setCallback(JSON.parse(res2.target.response));
          //   console.log(JSON.parse(res2.target.response));--------------------- // callback지옥
        });
      });
    });
  };
  // axios가 promise를 지원하는 객체 라이브러리. 방법 밑에 .then /useMutaiton도 .then됨.
  //! ------------- Promise --------------------
  const onClickPromise = () => {
    axios
      .get('http://numbersapi.com/random?min=1&max=200')
      .then((res1) => {
        const num = res1.data.split(' ')[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res2) => {
        console.log(res2);
        const user = res2.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${user}`);
      })
      .then((res3) => {
        setPromise(res3.data);
      });
    // ------------- 프로미스 체이닝 (체인 엮인 것 처럼 생겨써)
    // axios.get('https://koreanjson.com/posts/1').then((res) => {
    //   console.log(res.data);
    // });
  };
  //! ------------- AsyncAwait --------------------
  const onClickAsyncAwait = async () => {
    const res1 = await axios.get('http://numbersapi.com/random?min=1&max=200');
    const num = res1.data.split(' ')[0];

    const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const user = res2.data.UserId;

    const res3 = await axios.get(`http://koreanjson.com/posts?userId=${user}`);
    setAsyncAawit(res3.data);
    // const res = await axios.get('https://koreanjson.com/posts/1');
    // console.log(res.data);
  };

  return (
    <>
      <div>콜백과 친구들</div>
      <span>
        결과 :
        {callback.map((data) => (
          <div>{data.title}</div>
        ))}
      </span>
      <button onClick={onClickCallback}>Callback</button>
      <br />

      <span>
        결과 :
        {promise.map((data) => (
          <div>{data.title}</div>
        ))}
      </span>
      <button onClick={onClickPromise}>Promise</button>
      <br />

      <span>
        결과 :
        {asyncAawit.map((data) => (
          <div>{data.title}</div>
        ))}
      </span>
      <button onClick={onClickAsyncAwait}>Async / Await</button>
    </>
  );
}
