import logoS from 'common/assets/logo-s.svg'
import logo from 'common/assets/logo.svg'
import menuMobile from 'common/assets/menu-2-fill.svg'
import useBreakpoints from 'common/hooks/useBreakpoints'
import { MobileMenu } from 'common/layout/MobileMenu/MobileMenu'
import type { INavigation } from 'common/layout/Paths/Paths'
import { NAVIGATION_ITEMS_UNAUTHORIZED } from 'common/layout/Paths/Paths'
import { useLocation, useNavigate } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import { useLockedBody } from 'usehooks-ts'
import { Container, ContainerWrapper, Logo, NavLink, Navigation, UserIcon } from './Header.styled'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useLockedBody(false)
  const { isBelowDesktop } = useBreakpoints()
  const pathByRole = NAVIGATION_ITEMS_UNAUTHORIZED
  const navigate = useNavigate()
  const location = useLocation()

  // FIND BETTER APROCH
  const handleNavigate = (link: string) => {
    if (location.pathname === '/proces') {
      navigate('/')
      animateScroll.scrollTo(document.getElementById(link)?.offsetTop)
    }
    if (link === '/proces') return navigate(link)
    animateScroll.scrollTo(document.getElementById(link)?.offsetTop)
    setIsMenuOpen(false)
  }

  return (
    <ContainerWrapper>
      <Container>
        {!isBelowDesktop ? (
          <Navigation>
            {pathByRole.map((navigation: INavigation) => (
              <NavLink key={navigation.title} onClick={() => handleNavigate(navigation.route)}>
                {navigation.title}
              </NavLink>
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
