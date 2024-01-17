import useBreakpoints from 'common/hooks/useBreakpoints';

import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper';
import {
  FooterLogoIcon,
  FooterLogoMobileIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'common/ui/Icon/Icon';
import {
  Content,
  FooterContent,
  IconWrapper,
  LinkStyle,
  LinksWrapper,
  NavigationContent,
  PolicyContent,
} from './Footer.styled';

export const Footer = () => {
  const { isMobile } = useBreakpoints();

  return (
    <ContentWrapper>
      <FooterContent>
        <Content>
          {isMobile ? <FooterLogoMobileIcon /> : <FooterLogoIcon />}
          <IconWrapper>
            <InstagramIcon />
            <LinkedinIcon />
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
  );
};
