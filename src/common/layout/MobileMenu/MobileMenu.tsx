import { NAVIGATION_MOBILE } from 'common/layout/Paths/Paths'
import { Button } from 'common/ui/Button/Button'
import type { FC } from 'react'
import { useCallback, useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
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

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
}
export interface MobileMenuProps {
  isOpen: boolean
  handleOpen: (isOpen: boolean) => void
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, handleOpen }) => {
  const topNavRef = useRef<HTMLElement | null>(null)

  const handleDropdown = useCallback(() => {
    handleOpen(!isOpen)
  }, [isOpen, handleOpen])
  useOnClickOutside(topNavRef, handleDropdown)

  const handleNavigation = () => {
    handleOpen(false)
  }

  return (
    <MenuWrapper>
      <MenuContent ref={topNavRef}>
        <LanguageContainer>
          <Title>Menu</Title>
        </LanguageContainer>
        {NAVIGATION_MOBILE.map((element, index) => {
          return (
            <Link key={index} style={linkStyle} smooth to={element.route}>
              <ItemWrapper onClick={handleNavigation}>
                <Icon src={element.icon} />
                <Text>{element.title}</Text>
              </ItemWrapper>
            </Link>
          )
        })}
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
