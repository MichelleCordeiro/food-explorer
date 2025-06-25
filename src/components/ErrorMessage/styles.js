import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-14px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
  text-align: left;

  font-size: 1.2rem;
  margin-top: 0.8rem;
  animation: ${fadeIn} 0.3s ease-out;

`;
