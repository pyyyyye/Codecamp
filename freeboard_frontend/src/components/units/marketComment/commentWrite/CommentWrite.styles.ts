import styled from '@emotion/styled';

export const BoardCommentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
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
  margin-bottom: 40px;
`;
export const CommentUploadBottom = styled.div`
  width: 100%;
  height: 163px;
  border: 1px solid lightgray;
  position: relative;
`;
export const CommentInput = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  outline: none;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const UploadButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: #ffd600;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 16px;
  line-height: 23.668px;
`;

export const CreateButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 23.668px;
`;
