import { border } from "src/styles/mixins/border.mixin";
import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_NEUTRALGREY_50,
  WDS_COLOR_PRIMARY_50,
  WDS_SIZE_003_PX,
  WDS_SIZE_016_PX,
  WDS_SIZE_020_PX,
} from "src/styles/tokens";
import styled from "styled-components";
import { CheckIcon } from "../Icon";
import { CheckAlignment } from "./Checkbox";

export const Container = styled.div``;

export const StyledCheck = styled(CheckIcon)`
  width: ${WDS_SIZE_020_PX};
  height: ${WDS_SIZE_020_PX};
  opacity: 0;
  transition-property: color, opacity;
  transition-duration: 0.2s;
`;

export const StyledCheckbox = styled.div`
  flex-shrink: 0;
  height: ${WDS_SIZE_020_PX};
  width: ${WDS_SIZE_020_PX};
  ${border({
    width: WDS_SIZE_003_PX,
    color: WDS_COLOR_NEUTRALGREY_50,
    inside: true,
  })};
  ${flex({ justifyContent: "center", alignItems: "center" })};
  transition-property: border, background-color;
  transition-duration: 0.2s;
`;

export const Label = styled.label<{ checkAlignment: CheckAlignment }>`
  all: unset;
  cursor: pointer;
  ${({ checkAlignment }) =>
    flex({
      direction: checkAlignment === "right" ? "row-reverse" : "row",
      gap: WDS_SIZE_016_PX,
    })};
  &:hover ${StyledCheckbox} {
    ${border({
      width: WDS_SIZE_003_PX,
      color: WDS_COLOR_NEUTRALGREY_50,
      inside: true,
    })};
    ${StyledCheck} {
      opacity: 0.4;
    }
  }
`;

export const StyledInput = styled.input`
  display: none;
  &:checked + ${Label} > ${StyledCheckbox} {
    ${border({
      width: WDS_SIZE_003_PX,
      color: WDS_COLOR_PRIMARY_50,
      inside: true,
    })};
    background-color: transparent;
    ${StyledCheck} {
      color: ${WDS_COLOR_PRIMARY_50};
      opacity: 1;
    }
  }
`;
