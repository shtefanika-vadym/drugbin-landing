import aboutIcon from 'common/assets/about.svg'
import checkmark from 'common/assets/checkmark.svg'
import contactIcon from 'common/assets/contact.svg'
import recycleIcon from 'common/assets/recycle.svg'
import serviceIcon from 'common/assets/service.svg'
import useBreakpoints from 'common/hooks/useBreakpoints'
import { Button } from 'common/ui/Button/Button'
import type { FC } from 'react'
import { useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import { useOnClickOutside } from 'usehooks-ts'
import {
  BorderStyle,
  ButtonWrapper,
  Icon,
  ItemWrapper,
  LanguageContainer,
  MenuContent,
  MenuWrapper,
  Text,
  Title,
} from './MobileMenu.styled'

export interface MobileMenuProps {
  isOpen: boolean
  handleOpen: (isOpen: boolean) => void
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, handleOpen }) => {
  const topNavRef = useRef<HTMLElement | null>(null)
  const { isBelowDesktop } = useBreakpoints()
  const navigate = useNavigate()
  const location = useLocation()

  const handleDropdown = useCallback(() => {
    handleOpen(!isOpen)
  }, [isOpen, handleOpen])

  const handleNavigate = (link: string) => {
    if (link === '/proces') return navigate(link)
    if (location.pathname === '/proces') {
      navigate('/')
      animateScroll.scrollTo(document.getElementById(link)?.offsetTop)
    }
    const targetOffset = document?.getElementById(link)?.offsetTop - (isBelowDesktop ? 72 : 0)
    animateScroll?.scrollTo(targetOffset)
    handleOpen(false)
  }

  useOnClickOutside(topNavRef, handleDropdown)

  return (
    <MenuWrapper>
      <MenuContent ref={topNavRef}>
        <LanguageContainer>
          <Title>Menu</Title>
        </LanguageContainer>
        <ItemWrapper onClick={() => handleNavigate('about-us')}>
          <Icon src={aboutIcon} />
          <Text>Despre noi</Text>
        </ItemWrapper>
        <ItemWrapper onClick={() => handleNavigate('values')}>
          <Icon src={serviceIcon} />
          <Text>Valorile noastre</Text>
        </ItemWrapper>
        <ItemWrapper onClick={() => handleNavigate('/proces')}>
          <Icon src={checkmark} />
          <Text>Proces</Text>
        </ItemWrapper>
        <ItemWrapper onClick={() => handleNavigate('contact')}>
          <Icon src={contactIcon} />
          <Text>Contact</Text>
        </ItemWrapper>
        <ItemWrapper onClick={() => navigate('/collect')}>
          <Icon src={recycleIcon} />
          <Text>Colecteaza</Text>
        </ItemWrapper>
        <BorderStyle />
        <ButtonWrapper>
          <Button variant='empty' onClick={handleDropdown}>
            Inchide
          </Button>
        </ButtonWrapper>
      </MenuContent>
    </MenuWrapper>
  )
}
