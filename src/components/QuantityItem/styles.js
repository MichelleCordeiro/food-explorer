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
  > .quant {
    width: 1.5rem;
  }

  > button {
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: transform 1s ease-out;

    > svg {
      display: flex;
      align-items: center;

      &:hover {
        transform: scale(1.1);
      }

      &:disabled {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }
  }
`;
