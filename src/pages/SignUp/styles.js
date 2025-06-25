import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media (min-width: 769px) {
    padding-inline: 3.2rem;
  }
`;

export const Content = styled.div`
  width: 31.6rem;
  height: 100%;

  display: grid;
  justify-self: center;
  align-content: center;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  > #logo {
    padding-bottom: 7.3rem;
    width: 100%;
    display: flex;

    > img {
      width: 4.3rem;
      height: 4.3rem;
    }

    > span {
      font-size: 3.724rem;
    }

    @media (min-width: 769px) {
      width: fit-content;
      height: fit-content;

      align-self: center;
      justify-self: center;

      padding-bottom: 0;

      > img {
        width: 4.9rem;
        height: 4.9rem;
      }

      > span {
        font-size: 4.2rem;
        font-weight: bold;
      }
    }
  }

  a {
    display: flex;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;

export const Form = styled.form`
  width: 100%;
  padding-bottom: 3.2rem;

  > .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    > label {
      padding-bottom: 0.8rem;
    }
  }

  > .error {
    div {
      margin-bottom: 0;
    }

    span {
      margin-bottom: 3.2rem;
    }
  }

  button {
    height: 4.8rem;
    margin-bottom: 3.2rem;
    filter: saturate(1);
    transition: filter 1s ease;

    &:disabled {
      background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
      cursor: not-allowed;

      filter: saturate(0.5);
      transition: filter 1s ease;
    }
  }

  @media (min-width: 769px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;

    /* width: 47.6rem; */
    width: clamp(38rem, 1rem + 40vw, 47.6rem);

    /* padding: 6.4rem; */
    padding: clamp(3rem, 1rem + 3vw, 6.4rem);

    // 110.6rem / 2 = 55.3rem
    // 55.3rem - 47.6rem = 7.7rem
    margin-left: clamp(0.6rem, 0.5rem + 4.5vw, 7.7rem);

    > h1 {
      font-weight: 500;
      text-align: center;

      margin-bottom: 3.2rem;
    }
  }
`;
