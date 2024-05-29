import { flex } from "src/styles/mixins/flex.mixin";
import { WDS_SIZE_008_PX, WDS_SIZE_024_PX } from "src/styles/tokens";
import styled, { keyframes } from "styled-components";
import { Button } from "../Button/Button";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100%);

  background-color: #f9f8f8;
  z-index: 999;
  ${flex({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: WDS_SIZE_008_PX,
  })}
  text-align: center;
  padding: ${WDS_SIZE_024_PX};
  box-sizing: border-box;
`;

export const Spinner = styled.div`
  border: 6px solid #c5d3f4;
  border-top: 6px solid #3453ac;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const CloseButton = styled(Button)``;
