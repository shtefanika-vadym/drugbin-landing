import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_BUTTON_SECONDARY_BACKGROUND,
  WDS_COLOR_NEUTRALGREY_50,
  WDS_SIZE_016_PX,
  WDS_SIZE_018_PX,
  WDS_SIZE_024_PX,
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../ui/Text/Text";

export const Container = styled.form`
  ${flex({ direction: "column", gap: WDS_SIZE_024_PX })};
  width: 100%;
`;

export const DrugData = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_016_PX })};
  background-color: ${WDS_COLOR_BUTTON_SECONDARY_BACKGROUND};
  border-radius: ${WDS_SIZE_018_PX};
  padding: ${WDS_SIZE_016_PX};
  box-sizing: border-box;
  position: relative;
`;

export const Delete = styled(Text).attrs({
  variant: "bodyXS",
  color: WDS_COLOR_NEUTRALGREY_50,
})`
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 16px;
`;
