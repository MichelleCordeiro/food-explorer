import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    max-width: 42.8rem;
    padding-inline: 5.6rem;
    margin: 0 auto;

    > .wrapper-button {
      padding-top: calc(11.4rem + 3.657rem);
    }
  }

  @media (min-width: 769px) {
    width: 100%;

    > main {
      max-width: 112.4rem;

      padding-inline: clamp(1.6rem, 1rem + 6vw, 2.8rem);
    }

    > .wrapper-button {
      padding-top: calc(10.4rem + 2.4rem);
    }
  }
`;

export const Dish = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.6rem;
  padding-bottom: calc(7.7rem + 5.414rem);

  > img {
    width: 26.4rem;
  }

  @media (min-width: 769px) {
    /* width: 100%; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: start;
    gap: 4.783rem;

    padding-top: 4.2rem;
    padding-bottom: calc(7.7rem + 15.54rem);

    > img {
      width: 36rem;
    }
  }
`;

export const DishContent = styled.div`
  > h1 {
    font-size: 2.704rem;
    font-weight: 500;
    padding-block: 1.6rem 2.4rem;
  }

  > p {
    font-size: 1.65rem;
    line-height: 160%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > .wrapper-tags {
    padding-block: 2.4rem 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;
  }

  > .wrapper-quantity {
    max-width: 31.6rem;

    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 1.6rem;

    > .btn-order-details {
      max-width: 18.8rem;
      height: 3.79rem;
      font-size: 0.95rem;

      svg {
        width: 2.2rem;
      }
    }
  }

  @media (min-width: 769px) {
    max-width: 68.7rem;

    flex-direction: column;

    > h1 {
      font-size: 4rem;
    }

    > p {
      font-size: 2.4rem;

      display: flex;
    }

    > .wrapper-tags {
      justify-content: start;
    }

    > .wrapper-quantity {
      > .btn-order-details {
        max-width: 16.2rem;
        height: 4.8rem;
        font-size: 1.4rem;

        svg {
          display: none;
        }
      }
    }
  }
`;
