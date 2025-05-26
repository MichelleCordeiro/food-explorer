import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.6rem;

  border: none;
  resize: none;
  border-radius: 1rem;

  padding: 1.4rem;
  margin-block: 1.6rem 2.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 3.2rem;
  }
`
