import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper/modules'

import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

import { Container, NavButton } from './styles'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

export function Carousel({ id, items = [] }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiperReady, setSwiperReady] = useState(false)

  useEffect(() => {
    setSwiperReady(true)
  }, [])

  return (
    <Container className={`carousel-${id}`}>
      <Swiper
        className='swiper'
        modules={[Navigation, A11y, EffectFade, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        slidesPerView={2}
        spaceBetween={80}
        grabCursor
        loop
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          767: {
            slidesPerView: 3.5,
            spaceBetween: 220
          },
          1000: {
            slidesPerView: 3.5,
            spaceBetween: 60
          }
        }}
      >
        {items.map(item => (
          <SwiperSlide key={`slide-${item.props?.data?.id ?? item.props?.data?.title}`}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>

      <NavButton ref={prevRef} className='swiper-button-prev desktop-only'>
        <PiCaretLeftBold />
      </NavButton>

      <NavButton ref={nextRef} className='swiper-button-next desktop-only'>
        <PiCaretRightBold />
      </NavButton>
    </Container>
  )
}
