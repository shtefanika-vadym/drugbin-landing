import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRAL_RICHBLACK,
  WDS_SIZE_004_PX,
  WDS_SIZE_008_PX,
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../Text/Text";

export const Content = styled.div`
  margin-top: ${WDS_SIZE_004_PX};
`;

export const Title = styled.div`
  ${flex({ justifyContent: "space-between" })};
`;

export const Description = styled(Text).attrs({
  variant: "bodyInfo",
  color: WDS_COLOR_NEUTRAL_RICHBLACK,
})`
  margin: ${WDS_SIZE_004_PX} ${WDS_SIZE_008_PX};
`;
