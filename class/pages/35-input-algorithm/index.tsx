// 실무형 알고리즘
import styled from '@emotion/styled';

const Search = styled.input`
  border: 1px solid #bdbdbd;
`;
const BirthInput = styled.input`
  border: 1px solid #bdbdbd;
  ::placeholder {
    padding-left: 5px;
    font-size: 12px;
    color: #bdbdbd;
  }
`;
//  생년월일에 따라 .삽입하고 나눔. 글자 지울 때 .도 같이 지워줘야해.
export default function Algorithm() {
  return (
    <>
      <br />
      <div>
        검색 : <Search />
      </div>
      <br />
      <div>
        회원 가입일 : <BirthInput placeholder="YYYY.MM.DD" />-
        <BirthInput placeholder="YYYY.MM.DD" />
      </div>
    </>
  );
}
