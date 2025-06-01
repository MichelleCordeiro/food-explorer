import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border: 0;
  border-radius: 0.5rem;
  padding: 0rem 2.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.pink};
  }

  @media (min-width: 769px) {
    height: 4.8rem;
  }
`;
