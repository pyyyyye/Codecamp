import { ChangeEvent } from 'react'
import styled from '@emotion/styled'

const BestListBottomSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const SearchBox = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: left;
  cursor: pointer;
`
const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 1px;
  margin-right: 12px;
  margin: 18px;
`
const SearchInput = styled.input`
  width: 700px;
  height: 52px;
  font-size: 16px;
  line-height: 18px;
  outline: none;
  background: none;
  border: none;
`
const SearchDateBox = styled.div`
  width: 244px;
  height: 52px;
  border: 1px solid lightgray;
  color: lightgray;
  line-height: 52px;
  font-weight: 16px;
  text-align: center;
  cursor: pointer;
`
const SearchButtonBox = styled.button`
  width: 94px;
  height: 52px;
  background-color: black;
  border-radius: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  border: 0px;
  cursor: pointer;
  :hover {
    background: #ffbb00;
    color: #000;
  }
`

export default function SearchOfFreeboard(props: any) {
  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    props.setSearch(event.target.value)
  }
  function onClickSearch() {
    props.refetch({ search: props.search })
    props.setKeyword(props.search)
  }

  return (
    <BestListBottomSearch>
      <SearchBox>
        <SearchIcon src="/images/icon_search.png" alt="검색 아이콘" />
        <SearchInput
          type="text"
          onChange={onChangeSearch}
          placeholder="제목을 검색해주세요."
        />
      </SearchBox>
      <SearchDateBox>YYYY.MM.DD ~ YYYY.MM.DD</SearchDateBox>
      <SearchButtonBox onClick={onClickSearch}>검색하기</SearchButtonBox>
    </BestListBottomSearch>
  )
}
