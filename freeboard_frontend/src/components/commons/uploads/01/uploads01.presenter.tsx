// ========= boardNew - upload button presenter ==========

import { UploadButton, UploadFileHidden, UploadImage } from './uploads01.styles'
// import { IUploads01UIProps } from './ploads01.types';

export default function Uploads01UI(props: any) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <br />
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  )
}
