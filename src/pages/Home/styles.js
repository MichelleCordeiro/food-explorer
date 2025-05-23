import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  > main {
    padding-top: 6.2rem;
    padding-bottom: calc(7.7rem + 2.5rem);
    padding-left: clamp(2.6rem, 1rem + 6vw, 3.6rem);
    padding-right: clamp(0.6rem, 1rem + 6vw, 1.6rem);
  }

  @media (min-width: 769px) {
    padding-bottom: calc(7.7rem + 4.8rem);

    > main {
      /* padding-inline: 12.3rem; */
    }
  }
`;

export const Carousel = styled.div`
  padding-block: 2.4rem;

  > .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 40%;
    z-index: 10;
    background: transparent;
    border: none;
  }

  > .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > .swiper-slide {
    text-align: center;
    font-size: 18px;

    > .cart .btn-cart {
      background-color: pink;
      color: pink;
      height: 3.2rem;
    }
  }

  @media (min-width: 769px) {
    padding-block: 2.3rem 4.8rem;

    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 14rem;
      height: 100%;
      z-index: 5;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.COLORS.DARK_400},
        rgba(0, 0, 0, 0.1)
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        to left,
        ${({ theme }) => theme.COLORS.DARK_400},
        rgba(0, 0, 0, 0.1)
      );
    }
  }
`;
