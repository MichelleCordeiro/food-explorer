import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_500};

  width: 21rem;
  margin: 0 auto;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;

  position: relative;

  > #wrapper-heart svg {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
    cursor: pointer;

    fill: transparent;
    stroke-width: 2rem;
    stroke: ${({ theme }) => theme.COLORS.LIGHT_300};
    transition: all 0.4s ease-in-out;

    &:hover {
      fill: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
      stroke: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};

      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }

      70% {
        transform: scale(1.2);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
  }

  > #wrapper-infos {
    // 7rem - 1.6rem - 2.4rem = 3rem
    margin-top: ${({ $isAdmin }) => ($isAdmin ? '3rem' : '0')};
    // 7rem - 2.4rem = 4.6rem
    margin-bottom: ${({ $isAdmin }) => ($isAdmin ? '4.6rem' : '0')};

    > img {
      width: clamp(8.8rem, 0.5rem + 19vw, 17.6rem);
      height: clamp(8.8rem, 0.5rem + 19vw, 17.6rem);
      border-radius: 50%;
      object-fit: cover;

      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05) rotate(2deg);
        filter: saturate(1.3);
      }
    }

    > h3 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 160%;

      padding-block: 1.2rem;
    }

    > .price {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }
  }

  @media (min-width: 769px) {
    width: 30.4rem;
    /* width: clamp(28rem, 1rem + 15vw, 30.4rem); */
    gap: 1.5rem;

    > #wrapper-infos {
      // 6.65rem - 1.6rem - 2.4rem = 2.65rem
      margin-top: ${({ isAdmin }) => (isAdmin ? '2.65rem' : '0')};
      // 5.55rem - 2.4rem = 3.15rem
      margin-bottom: ${({ isAdmin }) => (isAdmin ? '3.15rem' : '0')};

      > h3 {
        font-size: 2.4rem;
        font-weight: 700;

        padding-block: 1.5rem;
      }

      > .description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        font-size: 1.4rem;
        justify-content: center;
        text-align: center;
        line-height: 160%;
        margin-bottom: 1.5rem;
      }

      > .price {
        font-size: 3.2rem;
      }
    }
  }
`;

export const Cart = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .quantity {
    padding-bottom: 1.6rem;

    > span {
      font-size: 1.6rem;
    }

    > button svg {
      font-size: 2.4rem;
    }
  }

  > .btn-cart {
    height: 3.2rem;
  }

  @media (min-width: 769px) {
    width: fit-content;

    flex-direction: row;
    gap: 1.6rem;

    > .quantity {
      padding-bottom: 0;

      > span {
        font-size: 2rem;
      }
    }

    > .btn-cart {
      height: 4.8rem;
    }
  }
`;
