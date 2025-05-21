import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;
  /* margin-right: 2.4rem; */

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;
