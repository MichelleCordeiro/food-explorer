import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  z-index: 100;
  transition: left 300ms ease-in-out;

  > div .wrapper {
    width: 42.8rem;
    margin: 0 auto;
    padding-inline: clamp(1.6rem, 1rem + 6vw, 2.8rem);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Close = styled.div`
  height: 11.4rem;
  padding-block: 5.6rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.116rem;

  > div .wrapper-close {
    width: fit-content;

    display: flex;
    align-items: end;
    gap: 0.8rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;

export const MenuItems = styled.div`
  > .wrapper {
    &:first-child {
      margin-block: 3.6rem;
    }
  }

  div {
    > .wrapper-menus {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > .line {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

        > button {
          width: fit-content;
          padding: 1rem;
        }
      }
    }
  }
`;
