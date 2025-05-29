import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    width: 3rem;
    height: 3rem;
  }

  > .words {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.1rem;
    white-space: nowrap;

    display: flex;
    align-items: center;

    > #word-admin {
      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
      font-size: 1.2rem;
      margin-inline: 0.8rem 6.5rem;
    }
  }

  @media (min-width: 769px) {
    > .words {
      min-width: max-content;
      font-size: clamp(2.1rem, 1rem + 1vw, 2.4rem);

      position: relative;

      > #word-admin {
        position: absolute;
        bottom: -1.4rem;
        left: clamp(9rem, 4rem + 3vw, 10.8rem);
      }
    }
  }
`;
