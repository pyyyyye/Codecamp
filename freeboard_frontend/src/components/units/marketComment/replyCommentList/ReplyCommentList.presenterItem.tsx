// @ts-nocheck
import {
  ReplyCommentListBox,
  ReplyIconBox,
  ReplyIcon,
  ReplyCommentListUp,
  ReplyCommentListLeft,
  ReplyCommentWriterImg,
  ReplyCommentListMiddle,
  ReplyCommentListRightIcons,
  ReplyCommentRightIcons,
  ReplyCommentListTop,
  WriterName,
  ReplyCommentNote,
  ReplyCommentDate
} from './ReplyCommentList.styles'
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER
} from './ReplyCommentList.queries'
import ReplyCommentWrite from '../replyCommentWrite/ReplyCommentWrite.container'
import { useMutation } from '@apollo/client'
import { useState, useContext } from 'react'
import { getDate } from '../../../../commons/libraries/utils'
import { GlobalContext } from '../../../../../pages/_app'

export default function ReplyCommentListUIItem(props: any) {
  const [isEdit, setIsEdit] = useState(false)
  const isNew = false
  const { userInfo } = useContext(GlobalContext)
  const [deleteUseditemQuestionAnswerMutation] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  )
  console.log('유저인포.네임 :', userInfo)
  console.log('useditemQuestionId : ', props.useditemQuestionId)

  const onClickReplyEdit = () => {
    setIsEdit(true)
  }
  // const onClickReplyNew = () => {
  //   setIsNew(true);
  // };

  const onClickReplyCommentDelete = async () => {
    try {
      await deleteUseditemQuestionAnswerMutation({
        variables: {
          useditemQuestionAnswerId: props.data._id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.useditemQuestionId
            }
          }
        ]
        // update(cache, { data }) {
        //   cache.modify({
        //     fields: {
        //       fetchUseditemQuestionAnswersMutation: (prev, { readField }) => {
        //         const newPrev = prev.filter((prevData: any) => {
        //           return (
        //             readField('_id', prevData) !==
        //             data.deleteUseditemQuestionAnswerMutation
        //           );
        //         });
        //         return [...newPrev];
        //       },
        //     },
        //   });
        // },
      })

      console.log('답글 리스트 데이터 :', props.fetchData)
      alert('해당 답글을 삭제합니다.')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      {!isEdit && (
        <ReplyCommentListBox>
          <ReplyIconBox>
            <ReplyIcon src="/images/icon_replyComment.png" />
          </ReplyIconBox>

          <ReplyCommentListUp key={props.data._id}>
            <ReplyCommentListLeft>
              <ReplyCommentWriterImg src="/images/WriterProfileImg.png" />
            </ReplyCommentListLeft>

            <ReplyCommentListMiddle>
              <ReplyCommentListTop>
                <WriterName>{props.data.user.name}</WriterName>
              </ReplyCommentListTop>
              <ReplyCommentNote>{props.data.contents}</ReplyCommentNote>

              <ReplyCommentDate>
                {getDate(props.data.createdAt)}
              </ReplyCommentDate>
            </ReplyCommentListMiddle>

            <ReplyCommentListRightIcons>
              {props.data.user.name !== userInfo.name ? (
                !isNew && (
                  <ReplyCommentRightIcons
                    // onClick={onClickReplyNew}
                    src="/images/icon_reply.png"
                  />
                )
              ) : (
                <>
                  <ReplyCommentRightIcons
                    onClick={onClickReplyEdit}
                    src="/images/icon_edit.png"
                  />
                  <ReplyCommentRightIcons
                    onClick={onClickReplyCommentDelete}
                    src="/images/icon_delete.png"
                  />
                </>
              )}
            </ReplyCommentListRightIcons>
          </ReplyCommentListUp>
        </ReplyCommentListBox>
      )}

      {isEdit && (
        <ReplyCommentWrite
          isEdit={isEdit}
          // isNew={isNew}
          data={props.data}
          setIsEdit={setIsEdit}
        />
      )}
    </>
  )
}
