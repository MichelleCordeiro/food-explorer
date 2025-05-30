import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 2.4rem;

  > .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    z-index: 10;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > .swiper-button-prev:after,
  .swiper-button-next:after {
    display: none;
  }

  > .swiper-button-prev {
    top: 43%;
  }

  > .swiper-button-next {
    top: 48%;
  }

  @media (min-width: 769px) {
    padding-bottom: 4.8rem;

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

export const NavButton = styled.button`
`;
