//  9번줄  한 줄 (다 붙여서)은 '', ""인데 여러 줄 쓰려면 ``
import axios from 'axios';
export default function GraphqlRestPage() {
  const onClickSubmit = async () => {
    const result = await axios.post(
      'https://backend02.codebootcamp.co.kr/graphql',
      {
        query: `
            mutation createBoard{
                createBoard(createBoardInput: {
                    writer:'자두', 
                    password: '1234', 
                    title: '제목!!'
                    contents: '내용!!!'
                }){
                    _id
                    writer
                }
            }
        `,
      }
    );
  };

  return <button onClick="onClickSubmit">등록하기</button>;
}
