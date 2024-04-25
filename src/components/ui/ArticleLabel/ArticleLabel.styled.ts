import {
  WDS_COLOR_BLUE_400,
  WDS_SIZE_004_PX,
  WDS_SIZE_008_PX,
  WDS_SIZE_024_PX,
  WDS_TEXT_WEIGHT_DEMI,
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../Text/Text";

export const Container = styled.div`
  border: 1.5px solid ${WDS_COLOR_BLUE_400};
  border-radius: ${WDS_SIZE_024_PX};
  padding: ${WDS_SIZE_004_PX} ${WDS_SIZE_008_PX};
  width: min-content;
  height: min-content;
`;

export const Label = styled(Text).attrs({
  variant: "bodyXS",
})`
  font-weight: ${WDS_TEXT_WEIGHT_DEMI};
  color: ${WDS_COLOR_BLUE_400};
`;
