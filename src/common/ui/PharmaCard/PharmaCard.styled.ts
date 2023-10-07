import { WDS_COLOR_BLACK, WDS_COLOR_BLUE_500, WDS_COLOR_WHITE } from 'common/style/colors'
import { textVariant } from 'common/style/mixins/typography.mixin'
import styled from 'styled-components'

export const PharmaCardContainer = styled.div<{ isActive: boolean }>`
  background-color: ${WDS_COLOR_WHITE};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px 16px;
  border: ${({ isActive }) => isActive && `1px solid rgba(174, 197, 242, 0.30)`};
  box-shadow: ${({ isActive }) => isActive && '-1px 1px 4px 0px rgba(182, 204, 242, 30)'};
`

export const NameText = styled.p`
  ${textVariant('bodyS')};
  color: ${WDS_COLOR_BLACK};
  margin-top: 8px;
`

export const ScheduleText = styled.p`
  ${textVariant('bodyXS')};
  color: ${WDS_COLOR_BLUE_500};
`
