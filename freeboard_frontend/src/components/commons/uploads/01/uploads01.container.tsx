// ========= boardNew - upload button container ==========
// @ts-nocheck
import { ChangeEvent, useState, useRef } from 'react'
import { checkValidationFile } from '../../../../commons/libraries/validation'
import Uploads01UI from './uploads01.presenter'

export default function Upload01(props) {
  const fileRef = useRef('')
  const [fileUrl, setFileUrl] = useState('')
  function onClickUpload() {
    fileRef.current?.click()
  }

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event?.target.files?.[0]
    if (!checkValidationFile(file)) return
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string)
      props.onChangeFiles(file, props.index)
    }
    console.log('이미지 등록 완료')
  }
  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  )
}

//  ---- 이하 upload01 라이브러리 적용시킬 파일의 container에 삽입할 내용 ----
// function onChangeFiles(file: File, index: number) {
//   const newFiles = [...files];
//   newFiles[index] = file;
//   setFiles(newFiles);
// }
