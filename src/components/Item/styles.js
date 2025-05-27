import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_500};

  width: 21rem;
  margin: 0 auto;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  position: relative;

  > #wrapper-heart svg {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }

  > img {
    width: clamp(8.8rem, 0.5rem + 19vw, 17.6rem);
    height: clamp(8.8rem, 0.5rem + 19vw, 17.6rem);
  }

  > h3 {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 160%;
  }

  > .price {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
  }

  @media (min-width: 769px) {
    width: 30.4rem;
    gap: 1.5rem;

    > h3 {
      font-size: 2.4rem;
      font-weight: 700;
    }

    > .description {
      font-size: 1.4rem;
      justify-content: center;
      text-align: center;
      line-height: 160%;
    }

    > .price {
      font-size: 3.2rem;
    }
  }
`;

export const Cart = styled.div`
  display: grid;
  grid-template-columns: 16.2rem;
  justify-items: center;

  > .quantity {
    padding-bottom: 1.6rem;

    > p {
      font-size: 1.6rem;
    }

    > button svg {
      font-size: 1.8rem;
    }
  }

  > .btn-cart {
    height: 3.2rem;
  }

  @media (min-width: 769px) {
    grid-template-columns: auto 9.2rem;
    gap: 1.6rem;

    > .quantity {
      padding-bottom: 0;
    }

    > .btn-cart {
      height: 4.8rem;
    }
  }
`;
