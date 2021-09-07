// @ts-nocheck

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled'
import { BannerWrap, BannerBox, BannerImg } from '../banner/LayoutBanner.styles'

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  const Slide = styled(Slider)`
    width: 100%;
    .slick-prev {
      left: 50px;
      z-index: 2;
      width: 50px;
    }
    .slick-next {
      right: 50px;
      width: 50px;
      z-index: 2;
    }
  `

  return (
    <BannerWrap>
      <Slide {...settings}>
        <BannerBox>
          <BannerImg src="/images/BannerImg01.jpg" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/images/BannerImg02.jpg" />
        </BannerBox>
        <BannerBox>
          <BannerImg src="/images/BannerImg03.jpg" />
        </BannerBox>
      </Slide>
    </BannerWrap>
  )
}
