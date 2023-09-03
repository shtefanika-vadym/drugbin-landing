import styled from 'styled-components'

import { WDS_BREAKPOINT_MOBILE_UP_TO } from 'common/constants/breakpoint'
import { flex } from 'common/style/mixins/flex.mixin'
import { textVariant } from 'common/style/mixins/typography.mixin'

export const FooterContent = styled.div`
  ${flex({ direction: 'column' })};
  padding-top: 80px;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${flex({ direction: 'column', gap: '32px' })};
    padding: 0 16px;
  }
`
export const Content = styled.div`
  ${flex({ justifyContent: 'space-between' })};

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    ${flex({ direction: 'column', gap: '24px' })};
  }
`

export const NavigationContent = styled.div`
  ${flex({ justifyContent: 'center' })};
  ${textVariant('subheading')}
  ${flex({ gap: '32px' })};
  color: #01102e;
  cursor: pointer;
  padding-top: 80px;

  @media (max-width: ${WDS_BREAKPOINT_MOBILE_UP_TO}) {
    padding-top: unset;
  }
`

export const IconWrapper = styled.div`
  ${flex({ gap: '12px' })};
`

export const LinkStyle = styled.p``

export const Icon = styled.img`
  cursor: pointer;
`

export const PolicyContent = styled.div`
  width: 100%;
  ${flex({ justifyContent: 'center', gap: '24px' })};
  border-top: 1px solid #ebf0fb;
  padding: 32px 0;
`
export const LinksWrapper = styled.div`
  ${textVariant('bodyXS')};
  text-decoration: underline;
  color: #1c3375;
`
