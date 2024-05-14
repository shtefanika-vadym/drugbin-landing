import { border } from "src/styles/mixins/border.mixin";
import { flex } from "src/styles/mixins/flex.mixin";
import {
  WDS_COLOR_BLUE_100,
  WDS_COLOR_NEUTRALGREY_50,
  WDS_COLOR_NEUTRAL_BLACK,
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_SIZE_008_PX,
  WDS_SIZE_010_PX,
  WDS_SIZE_020_PX,
  WDS_SIZE_224_PX,
  WDS_TEXT_WEIGHT_DEMI,
} from "src/styles/tokens";
import { textVariant } from "src/styles/mixins/typography.mixin";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
`;

export const Label = styled.div`
  ${textVariant("inputLabel")};
`;

export const DropdownWrapper = styled.div`
  ${flex({ alignItems: "center", justifyContent: "space-between" })};
  ${border({ type: "solid", color: WDS_COLOR_NEUTRALGREY_50 })};
  ${textVariant("inputLabel")};
  color: ${WDS_COLOR_NEUTRAL_BLACK};
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_008_PX};
  background-color: white;
  box-sizing: border-box;
`;

export const DropdownList = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: ${WDS_SIZE_224_PX};
  padding: ${WDS_SIZE_010_PX};
  background: ${WDS_COLOR_NEUTRAL_WHITE};
  ${border({ type: "solid", color: WDS_COLOR_NEUTRALGREY_50 })};
  border-radius: ${WDS_SIZE_008_PX};
  overflow: scroll;
`;

export const Select = styled.div`
  ${flex({ direction: "column", gap: WDS_SIZE_020_PX })};
`;

export const Option = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  ${textVariant("bodyS")};
  font-weight: ${({ isActive }) => isActive && WDS_TEXT_WEIGHT_DEMI};
  color: ${({ isActive }) =>
    isActive ? WDS_COLOR_BLUE_100 : WDS_COLOR_NEUTRAL_BLACK};

  :hover {
    color: ${WDS_COLOR_BLUE_100};
  }
`;
