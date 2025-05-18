import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: 0;
  border-radius: 5px;
  padding: 0px 24px;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.pink};
  }
`;
