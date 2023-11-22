import styled from 'styled-components'

import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'
import { WDS_COLOR_BLUE_700, WDS_COLOR_RED } from 'styles/colors'

export const DrugInformationWrapper = styled.div`
  ${flex({ direction: 'column' })};
`

export const MultiFormWrapper = styled.div`
  ${flex({ direction: 'column', gap: '24px' })};
  margin-top: 24px;
`

export const FormWrapper = styled.div`
  ${flex({ direction: 'column', gap: '16px' })};
  padding: 16px;
  border-radius: 16px;
  background: rgba(235, 240, 251, 0.45);
`
export const InputWrapper = styled.div``

export const Error = styled.p`
  ${textVariant('bodyXS')};
  color: ${WDS_COLOR_RED};
  text-align: right;
  padding-top: 4px;
`

export const AddNewWrapper = styled.div`
  ${flex({ direction: 'column' })};
  margin-top: 24px;
`

export const Label = styled.p`
  ${textVariant('bodyS')};
  color: ${WDS_COLOR_BLUE_700};
`

export const Delete = styled.p`
  ${textVariant('bodyS')};
  text-decoration: underline;
  color: #a3a6ad;
  cursor: pointer;
  position: absolute;
  right: 28px;
`

export const LabelWrapper = styled.div`
  ${flex({ justifyContent: 'space-between' })};
  padding-bottom: 4px;
`

export const Psycholeptic = styled.p`
  ${textVariant('bodyXS')};
  color: #a12626;
  margin-top: 4px;
`
