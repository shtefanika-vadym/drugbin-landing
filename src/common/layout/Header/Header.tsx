import { MobileMenu } from 'common/layout/MobileMenu/MobileMenu';
import type { INavigation } from 'common/layout/Paths/Paths';
import { NAVIGATION_DESKTOP } from 'common/layout/Paths/Paths';
import { HamburgerIcon, LogoIcon } from 'common/ui/Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useLockedBody } from 'usehooks-ts';
import {
  Container,
  ContainerWrapper,
  HamburgerMenu,
  LogoWrapper,
  NavLink,
  Navigation,
} from './Header.styled';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useLockedBody(false);
  const navigate = useNavigate();

  return (
    <ContainerWrapper>
      <Container>
        <Navigation>
          {NAVIGATION_DESKTOP.map((navigation: INavigation) => (
            <Link style={linkStyle} smooth to={navigation.route}>
              <NavLink key={navigation.title}>{navigation.title}</NavLink>
            </Link>
          ))}
        </Navigation>
        <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HamburgerIcon />
        </HamburgerMenu>
        <LogoWrapper onClick={() => navigate('/')}>
          <LogoIcon />
        </LogoWrapper>
        {isMenuOpen && (
          <MobileMenu isOpen={isMenuOpen} handleOpen={setIsMenuOpen} />
        )}
      </Container>
    </ContainerWrapper>
  );
};
