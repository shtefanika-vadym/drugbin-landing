import styled from 'styled-components'

import { WDS_BREAKPOINT_MOBILE_UP_TO } from 'common/constants/breakpoint'
import { WDS_COLOR_BLUE_400 } from 'styles/colors'
import { flex } from 'styles/mixins/flex.mixin'
import { textVariant } from 'styles/mixins/typography.mixin'

export const Wrapper = styled.div`
  ${flex({ direction: 'column', alignItems: 'center', justifyContent: 'center', gap: '164px' })};

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    gap: 64px;
  }
`

export const Section = styled.div`
  ${flex({ direction: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' })};
  text-align: center;
`

export const Title = styled.h1`
  ${textVariant('titleH1')};

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('titleH3')};
  }
`

export const SubTitle = styled.p`
  ${textVariant('bodyL')};

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('bodyL')};
  }
`

export const Join = styled.p`
  color: ${WDS_COLOR_BLUE_400};
  ${textVariant('bodyL')};
  font-weight: 700;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${textVariant('bodyM')};
    font-weight: 700;
  }
`

export const Image = styled.img`
  width: 100%;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    border-radius: 8px;
    height: 262px;
  }
`
