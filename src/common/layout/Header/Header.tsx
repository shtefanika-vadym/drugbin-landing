import logoS from 'common/assets/logo-s.svg'
import logo from 'common/assets/logo.svg'
import menuMobile from 'common/assets/menu-2-fill.svg'
import useBreakpoints from 'common/hooks/useBreakpoints'
import { MobileMenu } from 'common/layout/MobileMenu/MobileMenu'
import type { INavigation } from 'common/layout/Paths/Paths'
import { NAVIGATION_DESKTOP } from 'common/layout/Paths/Paths'
import { useNavigate } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { useLockedBody } from 'usehooks-ts'
import { Container, ContainerWrapper, Logo, NavLink, Navigation, UserIcon } from './Header.styled'

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useLockedBody(false)
  const { isBelowDesktop } = useBreakpoints()
  const navigate = useNavigate()

  return (
    <ContainerWrapper>
      <Container>
        {!isBelowDesktop ? (
          <Navigation>
            {NAVIGATION_DESKTOP.map((navigation: INavigation) => (
              <Link style={linkStyle} smooth to={navigation.route}>
                <NavLink key={navigation.title}>{navigation.title}</NavLink>
              </Link>
            ))}
          </Navigation>
        ) : (
          <UserIcon src={menuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
        <Logo src={!isBelowDesktop ? logo : logoS} onClick={() => navigate('/')} />
        {isMenuOpen && <MobileMenu isOpen={isMenuOpen} handleOpen={setIsMenuOpen} />}
      </Container>
    </ContainerWrapper>
  )
}
