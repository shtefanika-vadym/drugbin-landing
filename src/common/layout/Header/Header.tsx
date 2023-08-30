import { useLocation, useNavigate } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

import { useLockedBody } from 'usehooks-ts'

import logoS from 'common/assets/logo-s.svg'
import logo from 'common/assets/logo.svg'
import menuMobile from 'common/assets/menu-2-fill.svg'
// import userIcon from 'common/assets/user.svg'

import useBreakpoints from 'common/hooks/useBreakpoints'

import { SelectLanguage } from 'common/ui/SelectLanguage/SelectLanguage'
import { MobileMenu } from 'common/layout/MobileMenu/MobileMenu'
import type { INavigation } from 'common/layout/Paths/Paths'
import { NAVIGATION_ITEMS_UNAUTHORIZED } from 'common/layout/Paths/Paths'
import {
  Container,
  ContainerWrapper,
  Dot,
  Logo,
  Navigation,
  NavLink,
  UserIcon,
} from './Header.styled'

export const Header = () => {
  const { isBelowDesktop } = useBreakpoints()
  const navigate = useNavigate()
  const location = useLocation()
  const handleNavigate = (link: string) => {
    animateScroll.scrollTo(document.getElementById(link).offsetTop)
    setIsMenuOpen(false)
  }

  const [isMenuOpen, setIsMenuOpen] = useLockedBody(false)

  const pathByRole = NAVIGATION_ITEMS_UNAUTHORIZED

  return (
    <ContainerWrapper>
      <Container>
        {!isBelowDesktop ? (
          <Navigation>
            {pathByRole.map((navigation: INavigation) => (
              <NavLink
                key={navigation.title}
                isActive={location.pathname === navigation.route}
                onClick={() => handleNavigate(navigation.route)}>
                {navigation.title}
                <Dot isActive={location.pathname === navigation.route} />
              </NavLink>
            ))}
          </Navigation>
        ) : (
          <UserIcon src={menuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}

        <Logo src={!isBelowDesktop ? logo : logoS} onClick={() => navigate('/')} />
        {/* {!isBelowDesktop && (
          <UserWrapper onClick={() => logout()}>
            <Name>DrugBin Solution</Name>
            <UserIcon src={userIcon} alt='user' />
          </UserWrapper>
        )} */}
        {!isBelowDesktop && <SelectLanguage />}
      </Container>
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} handleOpen={setIsMenuOpen} />}
    </ContainerWrapper>
  )
}
