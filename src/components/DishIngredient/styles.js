import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => (isNew ? 'transparent' : theme.COLORS.LIGHT_600)};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  outline: ${({ theme, isNew }) => (isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none')};

  border-radius: 0.8rem;
  padding-right: 1.6rem;

  > button {
    background: none;
    cursor: pointer;

    display: flex;
    align-items: center;

    color: ${({ theme, isNew }) => (isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100)};
  }

  input {
    height: 3.2rem;

    padding: 0.8rem 0.8rem 0.8rem 1.6rem;
    font-size: 1.6rem;

    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  @media (min-width: 769px) {
    /* max-width: 112.2rem; */
  }
`;
