//게시글 댓글 화면 container.js
import BoardCommentUI from './BoardComment.presenter'
import { useMutation, useQuery } from '@apollo/client'
// import { FETCH_BOARD } from '../../product/DetailPage.queries';
import { BOARD_COMMENT, FETCHBOARD_COMMENT_LIST } from './BoardComment.queries'
// import { FETCH_BOARD } from '../../../units/product/DetailPage.queries';
import { useState } from 'react'
import { useRouter } from 'next/router'

export const onChangeContentsInput = {
  writer: '',
  password: '',
  contents: '',
  rating: 0
}

export default function BoardComment() {
  const router = useRouter()
  const { data } = useQuery(FETCHBOARD_COMMENT_LIST, {
    variables: { boardId: router.query.detailpages }
  })
  // !----------------- Rating ------------
  function onChangeStar(value: number) {
    setInputComment({ ...inputComment, rating: value })
    // alert(value + '점');
  }
  const [createBoardCommentMutation] = useMutation(BOARD_COMMENT)

  const [inputComment, setInputComment] = useState(onChangeContentsInput)

  async function onClick() {
    console.log('로그로그', inputComment)
    try {
      await createBoardCommentMutation({
        variables: {
          createBoardCommentInput: {
            ...inputComment
          },
          boardId: router.query.detailpages
        },
        refetchQueries: [
          {
            query: FETCHBOARD_COMMENT_LIST,
            variables: {
              boardId: router.query.detailpages
            }
          }
        ]
      })
      setInputComment(onChangeContentsInput)
      console.log('댓글 등록')
    } catch (error) {
      alert('댓글이 등록되지 않았습니다.')
    }
  }

  function onChangeInput(event: any) {
    console.log(event)
    const newInput = {
      ...inputComment,
      [event.target.name]: event.target.value
    }
    setInputComment(newInput)
    console.log(event.target.name)
  }

  return (
    <BoardCommentUI
      inputComment={inputComment}
      onChangeInput={onChangeInput}
      onChangeStar={onChangeStar}
      onClick={onClick}
      data={data}
      // stars={stars}
    />
  )
}

//!▶▶▶▶▶ 댓글 리스트 ◀◀◀◀◀!//
