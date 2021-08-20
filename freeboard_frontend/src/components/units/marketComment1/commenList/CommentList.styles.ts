import styled from '@emotion/styled';

export const BoardCommentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 300px;
`;

//!====== CommentList 댓글 하단 리스트 =====//
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
  width: 1064px;
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
