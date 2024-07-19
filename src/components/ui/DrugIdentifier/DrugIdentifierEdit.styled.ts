import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRAL_RICHBLACK,
  WDS_SIZE_008_PX,
  WDS_SIZE_016_PX,
} from "src/styles/tokens";
import styled from "styled-components";
import { Text } from "../Text/Text";
import { textVariant } from "src/styles/mixins/typography.mixin";

export const Container = styled.div`
  ${flex({ gap: WDS_SIZE_008_PX, alignItems: "center" })};
`;

export const MainText = styled(Text).attrs({ variant: "bodyS" })`
  color: ${WDS_COLOR_NEUTRAL_RICHBLACK};
  line-height: ${WDS_SIZE_016_PX};
`;

export const CustomInput = styled.input`
  all: unset;
  ${textVariant("bodyS")};
  color: ${WDS_COLOR_NEUTRAL_RICHBLACK};
  line-height: ${WDS_SIZE_016_PX};
`;

