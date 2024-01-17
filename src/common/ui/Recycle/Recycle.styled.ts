import styled from 'styled-components'

import { WDS_BREAKPOINT_MOBILE_UP_TO } from 'common/constants/breakpoint'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const RecycleWrapper = styled.div`
  ${flex({ direction: 'column', gap: '24px', alignItems: 'center' })};
  padding: 24px 0px;
  text-align: center;
`
export const Title = styled.h1`
  ${textVariant('titleH3')};
  max-width: 800px;
  color: #000611;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('titleH3')};
  }
`
export const SubTitle = styled.p`
  max-width: 900px;
  ${textVariant('bodyL')};
  color: #01102e;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('bodyM')};
  }
`
