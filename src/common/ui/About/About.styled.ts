import { WDS_BREAKPOINT_MOBILE_UP_TO } from 'common/constants/breakpoint'
import { grid } from 'styles/mixins/grid.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'
import styled from 'styled-components'

export const Content = styled.div``

export const Wrapper = styled.div`
  ${grid({ gridTemplateColumns: '1fr 1fr', columnGap: '48px' })};

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${grid({ gridTemplateColumns: '1fr', rowGap: '42px' })};
  }
`

export const RightContent = styled.div`
  ${textVariant('bodyS')};
  color: #011640;
`

export const LeftContent = styled.div`
  ${textVariant('titleH3')};
  color: #011640;
`

export const Navigation = styled.p`
  ${textVariant('bodyS')};
  margin-bottom: 12px;
  font-weight: bold;
  color: #011640;
`
