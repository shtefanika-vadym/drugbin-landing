import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_SIZE_008_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_024_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div<{ isActive: boolean }>`
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  box-sizing: border-box;
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_024_PX} ${WDS_SIZE_016_PX};
  border: ${({ isActive }) =>
    isActive && "0.5px solid var(--secondary, #AEC5F2)"};
  box-shadow: ${({ isActive }) =>
    isActive && "-1px 3px 10.7px 0px rgba(2, 80, 238, 0.17)"};
`;

export const TextWrapper = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_008_PX })};
  margin-bottom: 16px;
`;
