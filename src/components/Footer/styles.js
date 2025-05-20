import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;

  align-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  width: 42.8rem;
  height: 7.7rem;

  margin: 0 auto;
  padding-inline: 2.8rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.2rem;

  > a {
    width: fit-content;

    img {
      filter: grayscale(1);
      width: 2.2rem;
      height: 2rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
      font-size: 1.526rem;
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: 769px) {
    width: 100%;
    max-width: 112.2rem;
    font-size: 1.4rem;

    > a {
      img {
        width: clamp(2.2rem, 1.5rem + 1vw, 3rem);
        height: clamp(2rem, 1.5rem + 1vw, 3rem);
      }

      span {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        font-size: clamp(1.4rem, 1rem + 1vw, 2.4rem);
      }
    }
  }
`;
