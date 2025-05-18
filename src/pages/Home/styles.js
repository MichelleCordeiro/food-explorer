import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 104px 412px auto 77px;
  grid-template-areas:
    'header'
    'hero'
    'content'
    'footer';
`;
