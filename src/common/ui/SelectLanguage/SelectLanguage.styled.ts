import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const SelectWrapper = styled.div`
  ${flex({ gap: '8px', alignItems: 'center' })};
`

export const Language = styled.div<{ isActive: boolean }>`
  ${textVariant('bodyS')};
  color: ${({ isActive }) => (isActive ? '#1C3375' : '#A3A6AD')};
  font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
  cursor: pointer;
`

export const BarStyle = styled.div`
  padding: 0;
  margin: 0;
  color: #ebf0fb;
`
