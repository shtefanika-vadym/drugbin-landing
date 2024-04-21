import { border } from "src/styles/mixins/border.mixin";
import { flex } from "src/styles/mixins/flex.mixin";
import {
    WDS_COLOR_NEUTRAL_WHITE,
    WDS_SIZE_008_PX,
    WDS_SIZE_016_PX,
    WDS_SIZE_024_PX
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  width: 330px;
  transform: translateX(-50%);
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  padding: ${WDS_SIZE_024_PX};
  box-sizing: border-box;
  border-radius: 5px;
  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: opacity 0.3s ease;
  z-index: 999;
  ${border({ color: "#EBF0FB" })};
  border-radius: ${WDS_SIZE_008_PX};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08);
  ${flex({ gap: WDS_SIZE_016_PX })};
`;

export const Icon = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: ${WDS_SIZE_008_PX};
  height: 42px;
  width: 42px;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
