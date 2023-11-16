import { WDS_BREAKPOINT_MOBILE_UP_TO } from 'common/constants/breakpoint'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'
import styled from 'styled-components'

export const Wrapper = styled.div`
  ${flex({ direction: 'column', alignItems: 'center', justifyContent: 'center' })};
  gap: 164px;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    gap: 64px;
  }
`

export const Section = styled.div`
  ${flex({ direction: 'column', alignItems: 'center', justifyContent: 'center' })};
  text-align: center;
  gap: 24px;
`

export const Title = styled.h1`
  ${textVariant('titleH1')};
  max-width: 900px;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('titleH3')};
  }
`

export const SubTitle = styled.p`
  ${textVariant('bodyL')};
  max-width: 847px;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('bodyM')};
    width: 95%;
  }
`