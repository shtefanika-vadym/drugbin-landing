import styled from 'styled-components'

import {
  WDS_COLOR_BLACK,
  WDS_COLOR_BLUE_300,
  WDS_COLOR_BLUE_700,
  WDS_COLOR_GREY,
  WDS_COLOR_WHITE,
} from 'styles/colors'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'
import { WDS_SIZE_008_PX, WDS_SIZE_010_PX, WDS_SIZE_016_PX, WDS_SIZE_024_PX, WDS_SIZE_224_PX } from 'styles/size'
import { WDS_TEXT_FAMILY_BASE, WDS_TEXT_WEIGHT_REGULAR } from 'styles/typography'
import { border } from 'styles/mixins/border.mixin'

export const customStyles = {
  control: () => ({
    maxWidth: 400,
    height: 40,
    cursor: 'pointer',
    borderRadius: '8px',
    border: `1px solid ${WDS_COLOR_GREY}`,
    backgroundColor: 'white',
    display: 'flex',
    boxShadow: 'none',
  }),
  option: () => ({
    family: WDS_TEXT_FAMILY_BASE,
    weight: WDS_TEXT_WEIGHT_REGULAR,
    style: 'normal',
    size: WDS_SIZE_016_PX,
    lineHeight: WDS_SIZE_024_PX,
    color: WDS_COLOR_BLACK,
    cursor: 'pointer',
    padding: 10,

    '&:hover': {
      color: WDS_COLOR_BLUE_300,
    },
  }),
  menu: () => ({
    maxWidth: 400,
    border: `1px solid ${WDS_COLOR_GREY}`,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: '4px 0 0 0',
    maxHeight: 224,
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '0',
    },
    '&::-webkit-scrollbar-track': {
      background: '#E5E5E5',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#2949A6',
      borderRadius: '4px',
      '&:hover': {
        background: '#1C3375',
      },
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
}

export const Content = styled.div`
  ${flex({ direction: 'column' })};
`

export const Label = styled.p`
  ${textVariant('bodyS')};
  color: ${WDS_COLOR_BLUE_700};
  margin-bottom: 4px;
`

// FOR TEST

export const AutoComplete = styled.div`
`

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })};
  border: 1px solid ${WDS_COLOR_GREY};
  border-radius: ${WDS_SIZE_008_PX};
  padding: ${WDS_SIZE_008_PX} ${WDS_SIZE_010_PX};
  background-color: white;
`;

export const Dropdown = styled.div`
  position: relative;
  top: 4px;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  z-index: 1;
  max-height: ${WDS_SIZE_224_PX};
  padding: ${WDS_SIZE_010_PX};
  background: ${WDS_COLOR_WHITE};
  ${border({ type: 'solid', color: WDS_COLOR_GREY })};
  border-radius: ${WDS_SIZE_008_PX};
`;

export const Option = styled.div`
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SelectedOption = styled(Label)<{isActive: boolean}>`
  ${({ isActive }) => (isActive && `color:  ${WDS_COLOR_BLUE_300}` )};
  ${({ isActive }) => (isActive && `font-weight: bold` )};
`


