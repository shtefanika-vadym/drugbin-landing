import { WDS_BREAKPOINT_MOBILE_UP_TO } from 'common/constants/breakpoint'
import { grid } from 'common/style/mixins/grid.mixin'
import { textVariant } from 'common/style/mixins/typography.mixin'
import styled from 'styled-components'

export const Content = styled.div`
  ${grid({ gridTemplateColumns: '1fr 1fr 1fr', columnGap: '42px' })};

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${grid({ gridTemplateColumns: '1fr', rowGap: '42px' })};
  }
`

export const Icon = styled.img``

export const CardTitle = styled.h1`
  ${textVariant('titleH4')};
  color: #01102e;
  margin: 12px 0;
`

export const CardContent = styled.h1`
  ${textVariant('bodyS')};
  color: #011640;
`

export const Navigation = styled.p`
  ${textVariant('bodyS')};
  margin-bottom: 12px;
  font-weight: bold;
  color: #011640;
  margin-bottom: 12px;
`

export const CardWrapper = styled.div``
