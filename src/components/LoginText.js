import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme';

const LoginText = ({ children }) => {
  const theme = useTheme();
  return <LoginTextWrapper theme={theme}>{children}</LoginTextWrapper>;
};

const LoginTextWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  color: white;
  font-size: ${({ theme }) => theme.cellSize};
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
`;

export default LoginText;
