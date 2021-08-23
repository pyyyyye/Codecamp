import styled from '@emotion/styled';

export const BoardReplyCommentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;
export const ReplyIconBox = styled.div`
  width: 20px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 55px;
  padding-right: 30px;
`;
export const ReplyIcon = styled.img`
  width: 15px;
  height: 17px;
`;

export const ReplyCommentUpload = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const ReplyCommentLeft = styled.div`
  width: 100%auto;
`;

export const ReplyWriterImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const ReplyCommentRight = styled.div`
  width: 100%;
  padding-left: 16px;
`;

export const ReplyWriterName = styled.div`
  font-size: 16px;
  line-height: 23.68px;
  padding-bottom: 8px;
  font-weight: 500;
`;

export const ReplyCommentUploadBottom = styled.div`
  width: 100%;
  height: 117px;
  border: 1px solid lightgray;
  position: relative;
`;
export const ReplyCommentInput = styled.textarea`
  width: 100%;
  height: 64px;
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
  height: 51px;
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
  height: 51px;
  background-color: #ffe769d4;
  color: #000;
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 23.668px;
  :hover {
    background-color: #ffd600;
  }
`;
