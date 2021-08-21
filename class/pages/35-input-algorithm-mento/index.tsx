import { useState } from 'react';

export default function InputAlgorithm() {
  const [value, setValue] = useState('');

  const onChangeInput = (event) => {
    const dottedValue = [];
    const nextValue = event.target.value;
    if (nextValue.length > value.length) {
      // 작성 시 돌아가는 logic
      const nextPureValue = nextValue.replaceAll('.', '').split('');
      nextPureValue.forEach((data: string, index: number) => {
        // for문이나 map 다 상관업는데 일단 여기서는 forEach씀. (for문일 시 index가 아니라 i)
        dottedValue.push(data); // [1,9,9,5,0,5,...] 의 배열을 넣어줘.
        if (index + 1 === 4 || index + 1 === 6) dottedValue.push('.');
        // ||또는 이기 때문에 양쪽 경우 둘 다 실행 됨.
        // = ['1','9','9','5','.','0','5','.','2','8']
      });
      // 12월이 한계일 때 12이상의 수를 입력할 시 12로만 나오게 설정
      // 월별 말일 수 다른 것. = new Date() 마지막날 or 말일 구하기   검색해보기.
      setValue(dottedValue.join(''));
      // 위에 각각 쪼개어 둔 배열을 join 합침.
    } else {
      // 삭제 시 돌아가는 logic
      const nextPureValue = nextValue.replaceAll('.', '').split('');
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          dottedValue.push('.');
        } else if (nextPureValue.length > 4 && index + 1 === 4) {
          dottedValue.push('.');
        }
      });
      setValue(dottedValue.join(''));
    }
  };

  return (
    <input
      type="text"
      value={value}
      placeholder="YYYY.MM.DD"
      maxLength={10}
      onChange={onChangeInput}
    />
  );
}
