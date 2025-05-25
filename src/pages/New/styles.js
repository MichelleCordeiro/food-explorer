import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > main {
    max-width: 42.8rem;
    padding-inline: 3.2rem;
    margin: 0 auto;

    padding-top: calc(11.4rem + 1.1rem);
    padding-bottom: calc(7.7rem + 5.3rem);

    > #header-new {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      > button {
        font-size: 1.655rem;
        font-weight: 600;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-size: 2.2rem;
          margin-right: 0.2rem;
        }
      }

      > h1 {
        font-size: 3.2rem;
        font-weight: 500;

        padding-block: 2.33rem 3.8rem;
      }
    }
  }

  @media (min-width: 769px) {
    /* width: 100%; */

    > main {
      padding-top: calc(11.4rem + 1.1rem);
      padding-bottom: calc(7.7rem + 11.6rem);
      padding-inline: clamp(1.6rem, 1rem + 6vw, 2.8rem);

      /* max-width: 112.4rem; */

      > h1 {
        padding-block: 2.4rem 3.2rem;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > div input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.8rem;
    cursor: pointer;
  }

  > #btn-salvar {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }

  > .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
      margin-bottom: 0;
    }

    > .wrapper-items {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;

      > div input {
        background-color: transparent;
      }
    }
  }
`;

export const Image = styled.div`
  > label div {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.5rem;
    cursor: pointer;

    padding: 1.2rem 3.2rem;
    margin-top: 1.6rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    > span {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 104%;
    }

    > input {
      display: none;
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    > select {
      width: 100%;
      padding: 1.3rem 1.6rem;
      margin-top: 1.6rem;

      border-radius: 0.8rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      line-height: 140%;

      border: none;
      -webkit-appearance: none;
      cursor: pointer;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      position: absolute;
      right: 1.2rem;
      bottom: 1.2rem;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`;
