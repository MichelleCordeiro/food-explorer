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
        font-weight: 500;

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
    width: 100%;

    > main {
      max-width: 112rem;

      padding-top: calc(9.6rem + 4.1rem);
      padding-bottom: calc(7.7rem + 11.6rem);

      > #header-new button {
      font-size: 2.4rem;
      font-weight: 600;
      }

      > h1 {
        padding-block: 2.4rem 3.2rem;
      }
    }
  }
`;

export const Form = styled.form`
  > div input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.8rem;
    cursor: pointer;
  }

  > .infos {
    display: flex;
    flex-direction: column;

    > .wrapper {
      flex: 1;
      margin-bottom: 2.4rem;

      > label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      > div {
        margin-top: 1.6rem;
        margin-bottom: 0;
      }

      > .wrapper-items {
        width: 100%;
        padding: 0.8rem;

        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 0.8rem;

        div input {
          background-color: transparent;
        }
      }
    }
  }

  > .wrapper-button #btn-save {
    font-size: 1.4rem;
    font-weight: 500;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  }

  @media (min-width: 769px) {
    > .infos {
      flex-direction: row;
      align-items: flex-start;

      gap: 3.2rem;
      margin-bottom: 2.4rem;

      > .wrapper-image {
        flex: 0 0 22.9rem;
        min-width: 20.8rem;
      }

      > .wrapper-name {
        flex: 1 1 45%;
      }

      > .wrapper-category {
        flex: 0 1 36.4rem;
        min-width: 16rem;
      }

      > .wrapper-ingredients {
        flex: 1 1 100%;
      }

      > .wrapper-price {
        flex: 0 1 25.1rem;
        min-width: 16rem;
      }
    }

    > .wrapper-button {
      width: 100%;
      display: flex;
      justify-content: end;

      > #btn-save {
        width: fit-content;
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

    padding-block: 1.2rem;
    padding-inline: clamp(0.8rem, 0.5rem + 2vw, 3.2rem);
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
      font-size: 1.4rem;
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
      height: 4.8rem;
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
      bottom: 0;

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
