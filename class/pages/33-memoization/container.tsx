import { useCallback, useMemo, useState } from 'react';
import Presenter from './presenter';

export default function Container() {
  console.log('컨테이너(부모) 렌더링이 시작됩니다.');

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //   let randomNumber = useMemo(() => Math.random(), []);
  //   console.log(randomNumber);

  let aaa = useMemo(() => {
    return () => {
      console.log('let 클릭 !!!');
      console.log(countLet + 1);
      countLet = countLet + 1;
    };
  }, []);

  const onClickCountLet = useCallback(() => {
    console.log('let 클릭 !!!');
    console.log(countLet + 1);
    countLet = countLet + 1;
  }, []);

  // 의존성 배열에 데이터가 적을 때 사용
  // 함수 내부가 크게 복잡하지 않을 때 사용(만약, 복잡하다면state등 주의해서 사용. )
  const onClickCountState = useCallback(() => {
    console.log('state 클릭 !!!');
    // console.log(countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
    // state까지 기억해버려서 prev로 우회해줌
  }, []);

  return (
    <>
      <div>==================== 컨테이너 ===================</div>
      <div>countLet : {countLet}</div>
      <button onClick={onClickCountLet}>countLet + 1</button>
      <br />
      <div>countState : {countState}</div>
      <button onClick={onClickCountState}>countState + 1</button>
      <div>=======================================</div>
      <Presenter countLet={countLet} />
      {/* <Presenter countState={countState} /> */}
    </>
  );
}
