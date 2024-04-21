import styled from "styled-components";
import { border } from "src/styles/mixins/border.mixin";
import { textVariant } from "src/styles/mixins/typography.mixin";
import {
  WDS_COLOR_NEUTRALGREY_50,
  WDS_COLOR_NEUTRAL_RICHBLACK,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_SIZE_008_PX,
  WDS_SIZE_010_PX,
  WDS_SIZE_128_PX,
} from "src/styles/tokens";

export const Container = styled.div`
  width: 100%;
`;

export const StyledTextarea = styled.textarea<{ valid: boolean }>`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  ${border({ inside: true, color: WDS_COLOR_NEUTRALGREY_50 })};
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_010_PX};
  color: ${WDS_COLOR_NEUTRAL_RICHBLACK};
  ${textVariant("inputLabel")};
  min-height: ${WDS_SIZE_128_PX};

  ::placeholder {
    ${textVariant("inputPlaceholder100")};
  }
`;
