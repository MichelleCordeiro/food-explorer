import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border: 1px solid
    ${({ $hasError, theme }) => ($hasError ? theme.COLORS.TINTS_TOMATO_400 : 'transparent')};

  border-radius: 0.8rem;
  margin-bottom: 3.2rem;

  transition: border 0.2s ease;

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
      border-radius: 0.8rem;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${({ theme }) => theme.COLORS.LIGHT_100};
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  > svg {
    margin-left: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
