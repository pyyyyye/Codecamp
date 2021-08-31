//베스트 게시글 화면 container.ts
import ListPageUI from './BestList.presenter';
import { useQuery } from '@apollo/client';
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARDS_COUNT,
} from './BestList.queries';
import { useRouter } from 'next/router';
import { useState, ChangeEvent } from 'react';

export default function ListPage() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('');

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: count } = useQuery(FETCH_BOARDS_COUNT);
  function onClickTitle(event) {
    console.log(event.target);
    router.push(`/board/detail/${event.target.id}`);
  }
  function onClickUpload(event) {
    router.push(`/board/new/${event.target.id}`);
  }

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  function onClickSearch() {
    refetch({ search: search });
    setKeyword(search);
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
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  );
}
