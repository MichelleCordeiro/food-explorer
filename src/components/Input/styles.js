import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border-radius: 0.8rem;
  margin-bottom: 3.2rem;

  > input {
    width: 100%;
    height: 4.8rem;
    padding: 1.6rem 1.4rem;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
      border-radius: 0.8rem;
    }
  }

  > svg {
    margin-left: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
