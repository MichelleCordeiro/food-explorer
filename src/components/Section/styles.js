import styled from 'styled-components'

export const Container = styled.div`
  max-width: 112.2rem;
  margin: 0 auto 4.8rem;

  > h3 {
    font-size: 3.2rem;
    padding-bottom: 2.3rem;
  }

  > .carousel {
    position: relative;
    overflow: hidden;
    z-index: 1;

    width: 112.2rem;
    padding-bottom: 46.72rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem 0;
  }

  .fade-left,
  .fade-right {
    position: absolute;
    top: 0;
    width: 25rem;
    height: 100%;
    z-index: 10;
    pointer-events: none;
  }

  .fade-left {
    left: 0;
    background: ${({ theme }) => theme.COLORS.GRADIENT_100_left};
  }

  .fade-right {
    right: 0;
    background: ${({ theme }) => theme.COLORS.GRADIENT_100_right};
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20; /* maior que os fades (10) */
    background: transparent;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .arrow:hover {
    transform: translateY(-50%) scale(1.2);
  }

  .arrow:first-of-type {
    left: 1rem;
  }

  .arrow:last-of-type {
    right: 1rem;
  }
`;
