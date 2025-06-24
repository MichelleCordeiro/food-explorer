import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 2rem 2rem 5rem 2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 1.4rem;
  font-style: italic;

  @media (min-width: 769px) {
    font-size: 2.4rem;
    padding: 0 2rem 7rem 2rem;
  }
`;
