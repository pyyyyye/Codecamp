import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // ES6

// import ReactQuill from 'react-quill';

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
// 브라우저에서만 작동 가능한 임폴트 = 다이나믹임폴트
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function WebEditorPage() {
  const router = useRouter();
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: 'onChange',
  });
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickButton = async (data) => {
    try {
      // 게시물 등록하기
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeContents = (value) => {
    const isBlank = '<p><br></p>'; // 콘텐츠 부분에 글 지워도 공백 남지 않도록  ??? 불을 껐다 켯닿 한다는게 머선 말ㅇ지

    setValue('contents', value === isBlank ? '' : value);
    trigger('contents');
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register('writer')} />
      <br />
      비밀번호: <input type="password" {...register('password')} />
      <br />
      제목: <input type="text" {...register('title')} />
      <br />
      내용 <ReactQuill onChange={onChangeContents} />
      <button type="submit">게시물 등록하기</button>
    </form>
  );
}

// editor의 역할 = 우리가작성한거 양쪽에 태그를 <U>붙여?</U>
//
