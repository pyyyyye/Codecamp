import styled from '@emotion/styled';

export const BoardCommentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 300px;
  border-top: 1px solid #bdbdbd;
`;
export const CommentTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 40px;
`;
export const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
export const CommentTitle = styled.div`
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  line-height: 26.64px;
`;
export const CommentUpload = styled.div`
  width: 100%;
  margin: 0px;
`;
export const CommentUploadBottom = styled.div`
  width: 100%;
  height: 161px;
  border: 1px solid lightgray;
  position: relative;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid gainsboro;
  outline: none;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const UploadButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: black;
  color: #fff;
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
`;

//!=========== CommentList 댓글 하단 리스트 ===========//
export const CommentList = styled.div`
  margin-top: 20px;
  width: 100%;
`;
export const CommentListUp = styled.div`
  width: 100%;
  height: 130px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const CommentListLeft = styled.div`
  padding-right: 16px;
`;
export const CommentWriterImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const CommentListMiddle = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const CommentListTop = styled.div`
  width: 100%;
`;

export const WriterName = styled.div`
  color: #000;
  font-weight: 500;
  font-size: 16px;
  line-height: 23.68px;
`;
export const CommentToEdit = styled.div`
  width: 50px;
`;

export const CommentNote = styled.div`
  color: #4f4f4f;
  font-size: 16px;
  line-height: 23.68px;
  font-weight: 400;
`;
export const CommentDate = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  line-height: 17.76px;
  font-weight: 400;
  margin-top: 15px;
`;
export const CommentListRightIcons = styled.div`
  width: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;
export const CommentRightIcons = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
