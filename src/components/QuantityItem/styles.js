import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 0.1rem + 1vw, 1.5rem);
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > span {
    font-size: 2.263rem;
    font-family: 'Roboto', sans-serif;
  }

  > button {
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    > svg {
      display: flex;
      align-items: center;
      font-size: 2.7rem;

      transition: transform 0.5s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }

      &:disabled {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }
  }

  @media (min-width: 769px) {
    > button svg {
      font-size: 2.4rem;
    }
  }
`;
