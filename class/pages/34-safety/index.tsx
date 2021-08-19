import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useState } from 'react';
// import { useForm, useFormState } from 'react-hook-form';
import * as Sentry from '@sentry/nextjs';

// 등록 연타 시 연타 횟수만큼 글 등록되고 그런 거 방지

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function SafetyPage() {
  //   const { handleSubmit, formState } = useForm();
  //   formState.isSubmitting; ( 이 부분을 button의 disabled의 값으로 담아주면 됨. )
  //= 이즈 서브미팅이 이미 기능으로 들어가있음.

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [inputs, setInputs] = useState({
    writer: '',
    password: '',
    title: '',
    contents: '',
  });
  const onChangeInput = (key) => (event) => {
    setInputs((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...inputs },
        },
      });
      throw new Error('강제로 에러 발생시키기 !!');
      console.log(result);
      setIsSubmitting(false);
    } catch (error) {
      Sentry.captureEvent(error);
      // error가 setry dsn으로 넘어가게 됨.
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <div>
        작성자: <input type="text" onChange={onChangeInput('writer')} />
      </div>
      <div>
        비밀번호: <input type="text" onChange={onChangeInput('password')} />
      </div>
      <div>
        제목: <input type="text" onChange={onChangeInput('title')} />
      </div>
      <div>
        내용: <input type="text" onChange={onChangeInput('contents')} />
      </div>
      <button disabled={isSubmitting} onClick={onClickSubmit}>
        등록하기
      </button>
    </>
  );
}
