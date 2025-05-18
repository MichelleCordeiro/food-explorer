import styled from 'styled-components'

export const Container = styled.div`
  width: 30.4rem;
  /* height: 100vh; */
  margin: 0 auto 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > h4 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 160%;
  }

  > .description {
    font-size: 1.4rem;
    justify-content: center;
    text-align: center;
    line-height: 160%;
  }

  > .price {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
  }

  > .cart {
    display: grid;
    grid-template-columns: auto 9.2rem;
    gap: 1.6rem;

    > .quantity {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      > svg {
        font-size: 1.8rem;
      }
    }
  }
`;
