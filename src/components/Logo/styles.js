import styled from 'styled-components'

export const Container = styled.a`
  width: 18.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    width: max-content;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.1rem;
  }

  > img {
    width: 3rem;
    height: 3rem;
  }

  @media (min-width: 769px) {
    > span {
      width: inherit;

      font-size: clamp(2.1rem, 1rem + 1vw, 2.4rem);
    }
  }
`;
