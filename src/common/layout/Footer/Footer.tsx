import LogoIconMobile from 'common/assets/footer-mobile.svg'
import Instagram from 'common/assets/instagram.svg'
import Linkedin from 'common/assets/linkedin-line.svg'
import LogoIcon from 'common/assets/logo-footer.svg'

import useBreakpoints from 'common/hooks/useBreakpoints'

import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import {
  Content,
  FooterContent,
  Icon,
  IconWrapper,
  LinkStyle,
  LinksWrapper,
  NavigationContent,
  PolicyContent,
} from './Footer.styled'

export const Footer = () => {
  const { isMobile } = useBreakpoints()
  return (
    <ContentWrapper>
      <FooterContent>
        <Content>
          <Icon src={isMobile ? LogoIconMobile : LogoIcon} />
          <IconWrapper>
            <Icon src={Instagram} />
            <Icon src={Linkedin} />
          </IconWrapper>
        </Content>
        <NavigationContent>
          <LinkStyle>About us</LinkStyle>
          <LinkStyle>Services</LinkStyle>
          <LinkStyle>Contact</LinkStyle>
        </NavigationContent>
        <PolicyContent>
          <LinksWrapper>Privacy Policy</LinksWrapper>
          <LinksWrapper>Terms of Service</LinksWrapper>
          <LinksWrapper>Cookies Settings</LinksWrapper>
        </PolicyContent>
      </FooterContent>
    </ContentWrapper>
  )
}
