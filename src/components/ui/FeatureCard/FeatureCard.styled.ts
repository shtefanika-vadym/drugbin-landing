import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_50,
  WDS_SIZE_008_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_024_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Card = styled.div`
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_024_PX};
  box-sizing: border-box;
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })};
  transition: transform 0.3s ease;
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

export const IconContainer = styled.div`
  width: ${WDS_SIZE_024_PX};
  height: ${WDS_SIZE_024_PX};
  background-color: ${WDS_COLOR_PRIMARY_50};
  border-radius: ${WDS_SIZE_008_PX};
  ${flex({ alignItems: "center", justifyContent: "center" })};
  padding: ${WDS_SIZE_008_PX};
`;

export const TextContainer = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_008_PX })};
`;
