import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  > main {
    padding-top: 6.2rem;
    padding-bottom: 7.7rem;
    padding-left: clamp(2.6rem, 1rem + 6vw, 3.6rem);
    padding-right: clamp(0.6rem, 1rem + 6vw, 1.6rem);
  }

  @media (min-width: 769px) {
    padding-bottom: calc(7.7rem + 4.8rem);
  }
`;
