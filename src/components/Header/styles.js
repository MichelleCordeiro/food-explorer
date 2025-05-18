import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 10.4rem;
  align-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Content = styled.div`
  max-width: 112.2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 3.2rem;

  > button {
    max-width: 22.6rem;
  }
`;

export const Logo = styled.a`
  width: 18.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  > h1 {
    width: inherit;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
  }

  > img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-grow: 1;

  > input {
    display: flex;
    justify-self: center;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 32px;
  }
`;
