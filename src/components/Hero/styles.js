import styled from 'styled-components'

export const Container = styled.div`
  grid-area: hero;
  padding-top: 16.4rem;
  margin-inline: auto;

  > .content {
    width: 112.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    position: relative;
    overflow: visible;

    > img {
      position: absolute;
      bottom: 0;
      left: -5.7rem;

      width: 65.6rem;
      height: 41.2rem;
    }

    > .infos {
      height: 26rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 0.8rem;
      padding-left: 60rem;

      h2 {
        font-weight: 500;
        font-size: 4rem;
        line-height: 6rem;
      }
    }
  }
`;
