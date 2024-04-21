import { useCallback, useRef } from "react";
import { Button } from "src/components/ui/Button/Button";
import {
  AboutIcon,
  ContactIcon,
  ProcesIcon,
  ServiceIcon
} from "src/components/ui/Icon";
import { Text } from "src/components/ui/Text/Text";
import { useOnRouterEvent } from "src/hooks/useOnRouterEvent";
import { useScrollTo } from "src/hooks/useScrollTo";
import { WDS_COLOR_NEUTRAL_RICHBLACK } from "src/styles/tokens";
import { useOnClickOutside } from "usehooks-ts";
import {
  Border,
  Container,
  NavLink,
  Navigation,
} from "./MobileNavigation.styled";

interface MobileNavigationProps {
  close: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  close,
}) => {
  const { scrollTo } = useScrollTo();

  const handleNavigate = useCallback(
    (path: string) => {
      scrollTo(path);
      close();
    },
    [close, scrollTo]
  );

  const navigationRef = useRef<HTMLElement | null>(null);

  useOnClickOutside(navigationRef, close);
  useOnRouterEvent(close);

  return (
    <Container>
      <Navigation ref={navigationRef}>
        <Text variant="titleS">Menu</Text>
        <NavLink onClick={() => handleNavigate("main")}>
          <ServiceIcon />
          <Text variant="bodyM" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
            Valorile noastre
          </Text>
        </NavLink>
        {/* <NavLink>
          <BenefitIcon />
          <Text variant="bodyM" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
            Beneficiari
          </Text>
        </NavLink> */}
        <NavLink onClick={() => handleNavigate("proces")}>
          <AboutIcon />
          <Text variant="bodyM" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
            Proces
          </Text>
        </NavLink>
        <NavLink onClick={() => handleNavigate("contact")}>
          <ContactIcon />
          <Text variant="bodyM" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
            Contact
          </Text>
        </NavLink>
        <NavLink href="/collect">
          <ProcesIcon />
          <Text variant="bodyM" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
            Colecteaza
          </Text>
        </NavLink>
        <Border />
        <Button variant="ghost" onClick={() => close()}>
          Anulare
        </Button>
      </Navigation>
    </Container>
  );
};
