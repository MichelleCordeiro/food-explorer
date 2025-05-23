import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Item } from '../../components/Item'
import { ButtonText } from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

import { Container, Carousel } from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, EffectFade } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />

      <main>
        <Section title='Refeições'>
          <Carousel className='wrapper-carousel'>
            <Swiper
              className='swiper'
              modules={[Navigation, A11y, EffectFade]}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={swiper => console.log(swiper)}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
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
              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Spaguetti Gambe'
                  description='Massa fresca com camarões e pesto.'
                  price={'R$ 79.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Spaguetti Gambe'
                  description='Massa fresca com camarões e pesto.'
                  price={'R$ 79.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>
            </Swiper>

            <ButtonText className='swiper-button-prev desktop-only'>
              <PiCaretLeftBold />
            </ButtonText>
            <ButtonText className='swiper-button-next desktop-only'>
              <PiCaretRightBold />
            </ButtonText>
          </Carousel>
        </Section>

        <Section title='Sobremesas'>
          <Carousel className='wrapper-carousel'>
            <Swiper
              className='swiper'
              modules={[Navigation, A11y, EffectFade]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
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
              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Spaguetti Gambe'
                  description='Massa fresca com camarões e pesto.'
                  price={'R$ 79.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Spaguetti Gambe'
                  description='Massa fresca com camarões e pesto.'
                  price={'R$ 79.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>
            </Swiper>

            <ButtonText className='swiper-button-prev desktop-only'>
              <PiCaretLeftBold />
            </ButtonText>
            <ButtonText className='swiper-button-next desktop-only'>
              <PiCaretRightBold />
            </ButtonText>
          </Carousel>
        </Section>

        <Section title='Bebidas'>
          <Carousel className='wrapper-carousel'>
            <Swiper
              className='swiper'
              modules={[Navigation, A11y, EffectFade]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
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
              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Spaguetti Gambe'
                  description='Massa fresca com camarões e pesto.'
                  price={'R$ 79.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Spaguetti Gambe'
                  description='Massa fresca com camarões e pesto.'
                  price={'R$ 79.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <Item
                  title='Torradas de Parma'
                  description='Presunto de parma e rúcula em um pão com fermentação natural.'
                  price={'R$ 25.97'}
                />
              </SwiperSlide>
            </Swiper>

            <ButtonText className='swiper-button-prev desktop-only'>
              <PiCaretLeftBold />
            </ButtonText>
            <ButtonText className='swiper-button-next desktop-only'>
              <PiCaretRightBold />
            </ButtonText>
          </Carousel>
        </Section>
      </main>

      <Footer />
    </Container>
  )
}
