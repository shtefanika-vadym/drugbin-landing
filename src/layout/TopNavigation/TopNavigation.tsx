import { useCallback, useState } from "react";
import { MenuIcon } from "src/components/ui/Icon";
import { useScrollTo } from "src/hooks/useScrollTo";
import { useScrollLock } from "usehooks-ts";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import {
  Container,
  DesktopContainer,
  LogoS,
  LogoXS,
  NavLink,
  Navigation,
  TableContainer,
} from "./TopNavigation.styled";

export const TopNavigation = () => {
  const { scrollTo } = useScrollTo();
  const [isOpen, setIsOpen] = useState(false);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "#scrollable",
  });

  const handleOpenNavigation = useCallback(() => {
    setIsOpen(true);
    lock();
  }, [lock]);

  const handleCloseNavigation = useCallback(() => {
    setIsOpen(false);
    unlock();
  }, [unlock]);

  return (
    <Container>
      <DesktopContainer>
        <Navigation>
          <NavLink onClick={() => scrollTo("main")}>Valorile noastre</NavLink>
          <NavLink onClick={() => scrollTo("proces")}>Proces</NavLink>
          <NavLink onClick={() => scrollTo("contact")}>Contact</NavLink>
          <NavLink href="/collect">Colecteaza</NavLink>
        </Navigation>
        <LogoS href="/" />
      </DesktopContainer>

      <TableContainer>
        <MenuIcon onClick={handleOpenNavigation} />
        <LogoXS href="/" />

        {isOpen && <MobileNavigation close={handleCloseNavigation} />}
      </TableContainer>
    </Container>
  );
};
