import styled from "styled-components";
import { ThemeProps } from "../theme";

const LoginText = styled.span<ThemeProps>`
  color: gold;
  font-size: ${({ theme: { cellSize } }) => cellSize};
  left: 50%;
  position: absolute;
  text-shadow: black 1px 1px 1px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

export default LoginText;