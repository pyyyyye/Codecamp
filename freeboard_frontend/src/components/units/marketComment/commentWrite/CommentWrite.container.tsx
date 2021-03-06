import CommentWriteUI from './CommentWrite.presenter'
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS
} from './CommentWrite.queries'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

//! --------------- 댓글 등록 및 수정 ---------------
export const onChangeContentsInput = {
  contents: ''
}

export default function CommentWrite(props: any) {
  const router = useRouter()
  const [updateUseditemQuestionMutation] = useMutation(
    UPDATE_USED_ITEM_QUESTION
  )
  const [createUseditemQuestionMutation] = useMutation(
    CREATE_USED_ITEM_QUESTION
  )
  const [inputComment, setInputComment] = useState(onChangeContentsInput)

  function onChangeInput(event: any) {
    console.log(event)
    const newInput = {
      ...inputComment,
      [event.target.name]: event.target.value
    }
    setInputComment(newInput)
    console.log(event.target.name)
  }

  //! ---- 댓글 등록 ----
  async function onClick() {
    try {
      await createUseditemQuestionMutation({
        variables: {
          createUseditemQuestionInput: {
            ...inputComment
          },
          useditemId: router.query.detailpages
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.detailpages
            }
          }
        ]
      })
      setInputComment(onChangeContentsInput)
      alert('해당 댓글 등록을 완료했습니다.')
    } catch (error) {
      alert('댓글 등록이 취소되었습니다.')
    }
  }

  //! ---- 댓글 수정 ----
  const onClickCommentEdit = async () => {
    try {
      await updateUseditemQuestionMutation({
        variables: {
          updateUseditemQuestionInput: {
            ...inputComment
          },
          useditemQuestionId: props.ondata._id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.detailpages
            }
          }
        ]
      })
      setInputComment(onChangeContentsInput)
      props.setIsEdit(false)
      alert('해당 댓글 수정을 완료했습니다.')
    } catch (error) {
      alert('댓글 수정이 취소되었습니다.')
      // alert(error.message);
    }
  }

  return (
    <CommentWriteUI
      isEdit={props.isEdit}
      ondata={props.ondata}
      inputComment={inputComment}
      onClick={onClick}
      onChangeInput={onChangeInput}
      onClickCommentEdit={onClickCommentEdit}
    />
  )
}
