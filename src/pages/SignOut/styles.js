import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 31.6rem;
  align-items: center;

  > #logo {
    padding-bottom: 7.3rem;
    width: 100%;

    > img {
      width: 4.3rem;
      height: 4.3rem;
    }

    > span {
      font-size: 3.724rem;
    }
  }

  > a {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;
  padding-block: 7.3rem 3.2rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  padding-block: 0.8rem 3.2rem;

  > label {
    padding-bottom: 0.8rem;
  }
`;
