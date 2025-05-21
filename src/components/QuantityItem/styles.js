import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.585rem;
  gap: clamp(1rem, 0.1rem + 1vw, 1.585rem);

  /* margin-top: 7.7rem; */

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > p {
    font-size: 2.263rem;
    font-family: 'Roboto', sans-serif;
  }

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: transform 1s ease-out;

    > svg {
      width: 2.7rem;
      height: 2.7rem;

      &:hover {
        transform: scale(1.1);
      }

      &:disabled {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }
  }

  @media (min-width: 769px) {
    gap: 1.4rem;
  }
`;
