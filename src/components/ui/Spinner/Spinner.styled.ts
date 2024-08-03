import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div<{
  width?: number;
  height?: number;
  border?: number;
}>`
  border: ${({ border }) => `${border}px solid #c5d3f4`};
  border-top: ${({ border }) => `${border}px solid #3453ac`};

  border-radius: 50%;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  animation: ${spin} 1s linear infinite;
`;
