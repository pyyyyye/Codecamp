import { useForm } from 'react-hook-form';
import MarketWriteUI from './MarketWrite.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import { CREATE_USED_ITEM } from './MarketWrite.queries';
import { schema } from './MarketWrite.validation';
import { useMutation } from '@apollo/client';
import { Modal } from 'antd';

import router from 'next/router';

export default function MarketWrite() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  async function onClickSubmit(data: any) {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            ...data,
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
  return (
    <MarketWriteUI
      // active={active}
      onClickSubmit={onClickSubmit}
      // errors={formState.errors}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
