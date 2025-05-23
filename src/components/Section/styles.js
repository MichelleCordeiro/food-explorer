import styled from 'styled-components'

export const Container = styled.section`
  max-width: 42.8rem;
  margin: 0 auto;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-size: 1.8rem;
  }

  @media (min-width: 769px) {
    max-width: calc(112.2rem - 4rem);

    > h2 {
      font-size: 3.2rem;
      padding-bottom: 2.3rem;
    }
  }
`;
