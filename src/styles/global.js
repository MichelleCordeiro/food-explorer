import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body.no-scroll {
    overflow: hidden;
    height: 100vh;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;

    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
  }

  button, .wrapper-tags span {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
  }

  input, textarea, label, placeholder, span, .tag {
    font-family: "Roboto", sans-serif;
    outline: none;
  }

  input, textarea {
    border: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 769px) {
    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: block;
    }
  }
`;
