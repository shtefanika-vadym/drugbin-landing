import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const TextareaWrapper = styled.div`
  ${flex({ direction: 'column' })};
`

export const Label = styled.p`
  ${textVariant('bodyS')};
`

export const TextareaStyle = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  border: 1px solid #a3a6ad;
  border-radius: 8px;
  height: 126px;
`
