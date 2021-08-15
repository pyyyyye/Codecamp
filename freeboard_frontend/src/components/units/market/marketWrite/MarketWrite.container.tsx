import { useForm } from 'react-hook-form';
import MarketWriteUI from './MarketWrite.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import { CREATE_USED_ITEM, UPLOAD_FILE } from './MarketWrite.queries';
import { schema } from './MarketWrite.validation';
import { useMutation } from '@apollo/client';
import { Modal } from 'antd';
import router from 'next/router';
import { useState } from 'react';

export default function MarketWrite() {
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  async function onSubmit(data: any) {
    try {
      // 이미지 업로드
      const uploadFiles = files
        .filter((data) => data)
        .map((data) => uploadFile({ variables: { file: data } }));
      const results = await Promise.all(uploadFiles);
      const images = results.map((data) => data.data.uploadFile.url);

      // 게시물 업로드
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            // ...data,
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: images,
          },
        },
      });
      // console.log(result.data?.createUsedItem.accessToken);
      console.log(result.data);
      Modal.confirm({
        content: '게시글이 등록되었습니다.',
        onOk: () => router.push(`detail/${result.data?.createUseditem._id}`),
      });
    } catch (error) {
      // console.log(error);
      Modal.error({ content: error.message });
    }
  }
  const onChangeQuill = (value: any) => {
    const isBlank = '<p><br/><p>';

    setValue('contents', value === isBlank ? '' : value);
    trigger('contents');
  };

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <MarketWriteUI
      onSubmit={onSubmit}
      onChangeFiles={onChangeFiles}
      register={register}
      handleSubmit={handleSubmit}
      onChangeQuill={onChangeQuill}
      errors={formState.errors}
      latLng={latLng}
      setLatLng={setLatLng}
      // isActive={formState.isValid}
    />
  );
}
