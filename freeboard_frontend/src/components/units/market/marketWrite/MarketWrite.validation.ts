import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('상품명은 필수 입력입니다.'),
  remarks: yup.string().required('한 줄 요약은 필수 입력입니다.'),
  contents: yup.string().required('상세 설명은 필수 입력입니다.'),
  price: yup.number().required('판매가격은 필수 입력입니다.'),
});
