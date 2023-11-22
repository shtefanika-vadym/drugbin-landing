import styled from 'styled-components'
import { WDS_COLOR_WHITE } from 'styles/colors'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const Container = styled.div<{ isActive: boolean }>`
  background-color: ${WDS_COLOR_WHITE};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 24px 16px;
  border: ${({ isActive }) => isActive && '0.5px solid var(--secondary, #AEC5F2)'};
  box-shadow: ${({ isActive }) => isActive && '-1px 3px 10.7px 0px rgba(2, 80, 238, 0.17)'};
`

export const TextWrapper = styled.div`
  ${flex({ direction: 'column', gap: '8px' })};
  margin-bottom: 16px;
`

export const NameText = styled.p`
  ${textVariant('bodyM')};
  color: #000611;
`

export const ScheduleText = styled.p`
  ${textVariant('bodyXS')};
  color: '#1C3375';
`

export const AddressText = styled.p`
  ${textVariant('bodyS')};
  color: #000611;
`