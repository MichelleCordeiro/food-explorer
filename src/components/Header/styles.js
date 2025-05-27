import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  position: fixed;
  z-index: 100;

  display: flex;
  align-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  width: 42.8rem;
  height: 11.4rem;

  margin: 0 auto;
  padding-inline: clamp(1.6rem, 1rem + 6vw, 2.8rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
  gap: clamp(1.4rem, 1rem + 1vw, 3.2rem);

  @media (min-width: 769px) {
    width: 112.2rem;
    height: 10.4rem;
  }
`;

export const ButtonIcon = styled.button`
  background: none;
  position: relative;

  > .wrapper-icon {
    display: flex;
    align-items: center;

    > svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > #circle-red {
      width: 2.2rem;
      height: 2.2rem;
      background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
      border-radius: 50%;

      position: absolute;
      bottom: 1.6rem;
      left: 1.6rem;

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
      }
    }
  }
`;

export const ButtonOrder = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    max-width: clamp(17rem, 1rem + 15vw, 21.6rem);

    > #btn-order-desktop {
      font-size: 1.4rem;

      svg {
        width: clamp(2.8rem, 1.5rem + 1vw, 3.2rem);
      }
    }
  }
`;

export const Search = styled.div`
  width: 100%;

  #wrapper-input {
    > div {
      margin-bottom: 0;

      &:focus-within {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
      }

      > input {
        &:focus {
          border: none;
        }
      }

      svg {
        font-size: 2.4rem;
      }
    }
  }

  @media (min-width: 769px) {
    flex-grow: 1;
  }
`;

export const Logout = styled.button`
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: clamp(3rem, 1.5rem + 1vw, 3.2rem);
  }
`;
