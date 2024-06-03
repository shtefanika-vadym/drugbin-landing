import { border } from "src/styles/mixins/border.mixin";
import { textVariant } from "src/styles/mixins/typography.mixin";
import {
  WDS_COLOR_NEUTRALGREY_50,
  WDS_COLOR_NEUTRAL_RICHBLACK,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_SIZE_008_PX,
  WDS_SIZE_010_PX,
  WDS_SIZE_042_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input<{ valid: boolean }>`
  all: unset;
  width: 100%;
  height: ${WDS_SIZE_042_PX};
  box-sizing: border-box;
  ${border({ inside: true, color: WDS_COLOR_NEUTRALGREY_50 })};
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_010_PX};
  color: ${WDS_COLOR_NEUTRAL_RICHBLACK};
  ${textVariant("inputLabel")};

  ::placeholder {
    ${textVariant("inputPlaceholder100")};
  }
`;
