import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    max-width: 42.8rem;
    padding-inline: 5.6rem;
    margin: 0 auto;

    > .wrapper-button {
      padding-top: calc(11.4rem + 3.657rem);

      > button svg {
        font-size: 3.2rem;
      }
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
  padding-top: 1.6rem;
  padding-bottom: calc(7.7rem + 5.414rem);

  > img {
    width: 26.3rem;
    height: 26.3rem;
    border-radius: 50%;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    text-align: start;
    gap: 4.783rem;

    padding-top: 4.2rem;
    padding-bottom: calc(7.7rem + 15.54rem);

    > img {
      width: 39rem;
      height: 39rem;
    }
  }
`;

export const DishContent = styled.div`
  > h1 {
    font-size: 2.704rem;
    font-weight: 500;
    padding-bottom: 2.4rem;
  }

  > p {
    font-size: 1.65rem;
    line-height: 160%;
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
      height: 4.8rem;
      font-size: 1.4rem;
    }

    > .btn-order-user-mobile {
      max-width: 18.8rem;
      height: 3.786rem;
      font-size: 0.95rem;

      svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }

    > .btn-order-admin-mobile {
      max-width: 100%;
    }

    > .btn-order-user-desktop,
      .btn-order-admin-desktop {
      display: none;
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
      justify-content: flex-start;

      > .btn-order-details {
        svg {
          display: none;
        }
      }

      > .btn-order-user-desktop {
        width: fit-content;
        display: flex;
        justify-content: center;
      }

      > .btn-order-admin-desktop {
        max-width: 13.1rem;

        display: flex;
        justify-content: center;
      }

      > .btn-order-user-mobile,
        .btn-order-admin-mobile {
        display: none;
      }
    }
  }
`;
