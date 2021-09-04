//베스트 게시글 화면 container.ts
import ListPageUI from './BestList.presenter';
import { useQuery } from '@apollo/client';
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARDS_COUNT,
} from './BestList.queries';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ListPage() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [search, setSearch] = useState('');

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: count } = useQuery(FETCH_BOARDS_COUNT);
  function onClickTitle(event: any) {
    console.log(event.target);
    router.push(`/board/detail/${event.target.id}`);
  }
  function onClickUpload(event: any) {
    router.push(`/board/new/${event.target.id}`);
  }

  return (
    //!-------------- props로 담는 부분
    <ListPageUI
      onClickUpload={onClickUpload}
      data={data}
      count={count}
      bestData={bestData}
      refetch={refetch}
      onClickTitle={onClickTitle}
      startPage={startPage}
      setStartPage={setStartPage}
      keyword={keyword}
      setKeyword={setKeyword}
      search={search}
      setSearch={setSearch}
    />
  );
}
