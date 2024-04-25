import { useCallback } from "react";
import {
  InstagramIcon,
  LinkedInIcon,
  LogoFooterS,
  LogoFooterXS,
} from "src/components/ui/Icon";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { useScrollTo } from "src/hooks/useScrollTo";
import { WDS_SIZE_012_PX, WDS_SIZE_032_PX } from "src/styles/tokens";
import { Layout } from "../Layout/Layout";
import {
  Border,
  BottomContent,
  Container,
  NavLink,
  TopContent,
  TopLinks,
} from "./Footer.styled";

interface CookieConsentObject {
  renew: () => void;
}

interface Window {
  CookieConsent: CookieConsentObject | undefined;
}

declare global {
  interface Window {
    CookieConsent: CookieConsentObject | undefined;
  }
}

export const Footer = () => {
  const { scrollTo } = useScrollTo();
  const { isMobile } = useBreakpoints();

  const handleOpneCookiesSettings = useCallback(() => {
    if (window.CookieConsent) {
      window.CookieConsent.renew();
    } else {
      console.error(
        "CookieConsent object not found. Make sure Cookiebot script is loaded."
      );
    }
  }, []);

  return (
    <Layout>
      <Container>
        <TopLinks>
          <TopContent position="flex-start">
            {isMobile ? <LogoFooterS /> : <LogoFooterXS />}
          </TopContent>
          <TopContent position="center" gap={WDS_SIZE_032_PX}>
            <NavLink onClick={() => scrollTo("main")}>Valorile noastre</NavLink>
            <NavLink onClick={() => scrollTo("proces")}>Proces</NavLink>
            <NavLink onClick={() => scrollTo("contact")}>Contact</NavLink>
            <NavLink onClick={() => scrollTo("stiri")}>Stiri</NavLink>
            <NavLink href="/collect">Colecteaza</NavLink>
          </TopContent>
          <TopContent position="flex-end" gap={WDS_SIZE_012_PX}>
            <InstagramIcon />
            <LinkedInIcon />
          </TopContent>
        </TopLinks>
        <Border />
        <BottomContent>
          <NavLink light href="/privacy">
            Politica de Confidențialitate
          </NavLink>
          <NavLink light href="/terms">
            Termenii și condițiile de utilizare
          </NavLink>
          <NavLink light onClick={handleOpneCookiesSettings}>
            Setări privind cookie-urile
          </NavLink>
        </BottomContent>
      </Container>
    </Layout>
  );
};
