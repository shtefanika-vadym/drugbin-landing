import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'
import { WDS_COLOR_RED } from 'styles/colors'

export const PersonalInfromationWrapper = styled.div`
  ${flex({ direction: 'column', gap: '24px' })};
`

export const FormWrapper = styled.div`
  ${flex({ direction: 'column', gap: '16px' })};
`

export const ButtonWrapper = styled.div`
  ${flex({ justifyContent: 'space-between' })};
  margin-top: 24px;
`

export const InputWrapper = styled.div``

export const Error = styled.p`
  ${textVariant('bodyXS')};
  color: ${WDS_COLOR_RED};
  float: right;
  padding-top: 4px;
`
