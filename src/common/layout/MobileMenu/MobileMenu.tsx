import { PathsEnum } from 'common/layout/Paths/Paths';
import { Button } from 'common/ui/Button/Button';
import {
  AboutIcon,
  ContactIcon,
  ProcesIcon,
  RecycleIcon,
  ServicesIcon,
} from 'common/ui/Icon/Icon';
import type { FC } from 'react';
import { useCallback, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useOnClickOutside } from 'usehooks-ts';
import {
  BorderStyle,
  ButtonWrapper,
  ItemWrapper,
  LanguageContainer,
  MenuContent,
  MenuWrapper,
  Text,
  Title,
} from './MobileMenu.styled';
import { SelectLanguage } from 'common/ui/SelectLanguage';
// eslint-disable-next-line no-restricted-imports
import { useTranslation } from 'react-i18next';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};
export interface MobileMenuProps {
  isOpen: boolean;
  handleOpen: (isOpen: boolean) => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, handleOpen }) => {
  const topNavRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation();

  const handleDropdown = useCallback(() => {
    handleOpen(!isOpen);
  }, [isOpen, handleOpen]);

  useOnClickOutside(topNavRef, handleDropdown);

  const handleNavigation = useCallback(() => {
    handleOpen(false);
  }, [handleOpen]);

  return (
    <MenuWrapper>
      <MenuContent ref={topNavRef}>
        <LanguageContainer>
          <Title>Menu</Title>
          <SelectLanguage />
        </LanguageContainer>
        <Link style={linkStyle} smooth to={PathsEnum.proces}>
          <ItemWrapper onClick={handleNavigation}>
            <ProcesIcon />
            <Text>{t('navigation.guide')}</Text>
          </ItemWrapper>
        </Link>
        <Link style={linkStyle} smooth to={PathsEnum.about}>
          <ItemWrapper onClick={handleNavigation}>
            <AboutIcon />
            <Text>{t('navigation.about')}</Text>
          </ItemWrapper>
        </Link>
        <Link style={linkStyle} smooth to={PathsEnum.values}>
          <ItemWrapper onClick={handleNavigation}>
            <ServicesIcon />
            <Text>{t('navigation.values')}</Text>
          </ItemWrapper>
        </Link>
        <Link style={linkStyle} smooth to={PathsEnum.contact}>
          <ItemWrapper onClick={handleNavigation}>
            <ContactIcon />
            <Text>{t('navigation.contact')}</Text>
          </ItemWrapper>
        </Link>
        <Link style={linkStyle} smooth to={PathsEnum.collect}>
          <ItemWrapper onClick={handleNavigation}>
            <RecycleIcon />
            <Text>{t('navigation.collect')}</Text>
          </ItemWrapper>
        </Link>
        <BorderStyle />
        <ButtonWrapper>
          <Button variant="empty" onClick={handleDropdown}>
            {t('button.close')}
          </Button>
        </ButtonWrapper>
      </MenuContent>
    </MenuWrapper>
  );
};
