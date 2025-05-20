import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-top: 4.4rem;
  padding-inline: 3.6rem 1.6rem;

  @media (min-width: 769px) {
    padding-top: clamp(11rem, 1rem + 15vw, 16.4rem);

    padding-inline: clamp(1.6rem, 1rem + 6vw, 2.8rem);
  }
`;

export const Content = styled.div`
  max-width: 37.6rem;
  height: 12rem;
  margin: 0 auto;

  margin-top: 11.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 3px;

  position: relative;
  overflow: visible;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > img {
    position: absolute;
    bottom: 0;
    left: -2.8rem;
    z-index: 1;

    width: clamp(11rem, 0.5rem + 42vw, 19.1rem);
    height: clamp(6rem, 0.5rem + 33vw, 14.9rem);
  }

  > .infos {
    width: 21.5rem;
    z-index: 10;
    padding-block: 3.6rem 2.2rem;
    margin-right: clamp(0.1rem, 0rem + 1vw, 2.1rem);

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    gap: 0.8rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 140%;
    }

    p {
      font-size: 1.2rem;
      line-height: 140%;
    }
  }

  @media (min-width: 769px) {
    max-width: 112rem;
    height: 26rem;
    margin-top: clamp(8.4rem, 1.5rem + 4vw, 10.4rem);

    display: flex;

    > img {
      bottom: 0;
      left: -5.7rem;

      width: clamp(43.2rem, 1.5rem + 55vw, 63.2rem);
      height: clamp(32.6rem, 1.5rem + 35vw, 40.6rem);
    }

    > .infos {
      width: 42.2rem;
      height: 26rem;
      padding-block: 8.8rem 9.2rem;
      margin-right: clamp(5rem, 1rem + 5vw, 113rem);

      font-weight: 600;
      line-height: 100%;

      h1 {
        font-size: 4rem;
        font-weight: 500;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
      }
    }
  }
`;
