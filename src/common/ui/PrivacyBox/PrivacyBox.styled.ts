import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const PrivacyBoxWrapper = styled.div`
  ${flex({ gap: '16px', justifyContent: 'center', alignItems: 'center' })};
  background: rgba(235, 240, 251, 0.45);
  border-radius: 8px;
  padding: 16px;
`

export const Description = styled.p`
  ${textVariant('bodyXS')};
  font-weight: 400;
  color: #011640;
`

export const Icon = styled.img``
