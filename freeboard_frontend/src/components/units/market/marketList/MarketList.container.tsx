import { useQuery } from '@apollo/client'
import router from 'next/router'
import MarketListUI from './MarketList.presenter'
import { FETCH_USED_ITEMS } from './MarketList.queries'
import { getDate } from '../../../../commons/libraries/utils'
import { useEffect, useState } from 'react'

export default function MarketList() {
  useEffect(() => {
    const SideProps = JSON.parse(localStorage.getItem('baskets') || '[]')
    setAaa(SideProps)
  }, [])
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS)
  const [aaa, setAaa] = useState([])

  function onClickWrite() {
    router.push('/market/write')
  }

  const onClickTitle = (basketData: any) => () => {
    console.log(basketData)
    router.push(`/market/detail/${basketData._id}`)

    const baskets = JSON.parse(localStorage.getItem('baskets') || '[]')
    let isExists = false
    baskets.forEach((data: any) => {
      if (data._id === basketData._id) isExists = true
    })
    if (isExists) return
    baskets.push(basketData)
    setAaa(baskets)
    localStorage.setItem(getDate('baskets'), JSON.stringify(baskets))
  }

  return (
    <MarketListUI
      data={data}
      fetchMore={fetchMore}
      onClickWrite={onClickWrite}
      onClickTitle={onClickTitle}
      aaa={aaa}
    />
  )
}
