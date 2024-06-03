import { border } from "src/styles/mixins/border.mixin";
import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRALGREY_50,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_SIZE_008_PX,
  WDS_SIZE_042_PX,
} from "src/styles/tokens";
import styled from "styled-components";

export const Container = styled.div`
  ${flex({ gap: WDS_SIZE_008_PX, alignItems: "end" })};
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  background-color: ${WDS_COLOR_NEUTRAL_WHITE};
  height: ${WDS_SIZE_042_PX};
  border-radius: ${WDS_SIZE_008_PX};
  box-sizing: border-box;
  ${flex({ justifyContent: "space-between" })};
  ${border({ inside: true, color: WDS_COLOR_NEUTRALGREY_50 })};
`;
