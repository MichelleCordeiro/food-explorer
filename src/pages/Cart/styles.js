import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16rem;


    #logo img {
      width: 4rem;
      height: 4rem;
    }

    .words {
      font-size: 4rem;
    }

    a #cart {
      max-width: 36rem;
      padding-bottom: 8rem;
    }
`;
