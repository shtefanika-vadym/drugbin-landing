import styled from "styled-components";
import { WDS_COLOR_BLACK, WDS_COLOR_BLUE_300, WDS_COLOR_BLUE_700, WDS_COLOR_GREY, WDS_COLOR_WHITE } from "styles/colors";
import { border } from "styles/mixins/border.mixin";
import { flex } from "styles/mixins/flex.mixin";
import { textVariant } from "styles/mixins/typography.mixin";
import { WDS_SIZE_004_PX, WDS_SIZE_008_PX, WDS_SIZE_010_PX, WDS_SIZE_012_PX, WDS_SIZE_224_PX } from "styles/size";

export const Container = styled.div`
  position: relative;
`

export const LabelWrapper = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })};
  margin-bottom: ${WDS_SIZE_004_PX};
`

export const Label = styled.p`
  ${textVariant('bodyS')};
  color: ${WDS_COLOR_BLUE_700};
`

export const DeleteText = styled.p`
  text-decoration: underline;
  ${textVariant('bodyS')};
  cursor: pointer;
  color: #a3a6ad;
`

export const SelectWrapper = styled.div`
  border: 1px solid ${WDS_COLOR_GREY};
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_010_PX};
  background-color: white;
`

export const Placeholder = styled.p`
  color: ${WDS_COLOR_GREY};
  ${textVariant('bodyS')};
`

export const SelectDropdown = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1;
  ${border({ type: 'solid', color: WDS_COLOR_GREY })};
  border-radius: ${WDS_SIZE_008_PX};
  background: ${WDS_COLOR_WHITE};
  max-height: ${WDS_SIZE_224_PX};
  padding: ${WDS_SIZE_010_PX};
  overflow: scroll;
`

export const SelectedValue = styled.p`
  ${textVariant('bodyS')};
  color: ${WDS_COLOR_BLACK};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`

export const DropdownList = styled.div`
  padding: ${WDS_SIZE_004_PX};
`

export const ListItem = styled.div<{isActive: boolean}>`
  color: ${({ isActive }) => (isActive ? WDS_COLOR_BLUE_300 : WDS_COLOR_BLUE_700 )};
  ${({ isActive }) => (isActive && `font-weight: bold` )};
  padding: ${WDS_SIZE_012_PX} 0;
  ${textVariant('bodyS')};
`

export const WarningMessage = styled.p`
  ${textVariant('bodyS')};
  padding: ${WDS_SIZE_012_PX} 0;
  color: ${WDS_COLOR_BLUE_700};
  text-align: center;
`