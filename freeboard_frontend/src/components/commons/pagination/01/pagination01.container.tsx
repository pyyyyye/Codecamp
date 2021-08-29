// -------- pagination.container.tsx ----------
import { MouseEvent, useState } from 'react';
import Pagination01_UI from './pagination01.presenter';

interface IPagination01Props {
  count?: number;
  startPage: number;
  setStartPage: any;
  refetch: any;
  activePage: any;
}

export default function Pagination01(props: IPagination01Props) {
  const [activePage, setActivePage] = useState(1);

  const lastPage = Math.ceil(Number(props.count?.fetchBoardsCount) / 10);

  function onClickPage(e: MouseEvent<HTMLSpanElement>) {
    props.refetch({ page: Number(e.target.id) });

    const activePage = Number((e.target as Element).id);
    setActivePage(activePage);
    props.refetch({ page: activePage });
    history.pushState({ page: activePage }, '', `?page=${activePage}`);
  } //가짜주소  뒤에 /생기고 page=1 이런식ㅇ로 뜬느거

  function onClickPrevPage() {
    if (props.startPage <= 1) return;
    props.setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    if (props.startPage + 10 > lastPage) return;
    setActivePage(props.startPage + 10);
    props.setStartPage((prev) => prev + 10);
  }

  return (
    <Pagination01_UI
      startPage={props.startPage}
      lastPage={lastPage}
      activePage={activePage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
