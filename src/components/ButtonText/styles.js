import styled from 'styled-components'

export const Container = styled.button`
    background: none;
  /* color: ${({ theme, $isactive }) =>
    $isactive === true ? theme.COLORS.ORANGE : theme.COLORS.LIGHT_300}; */
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:disabled {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }
`;
