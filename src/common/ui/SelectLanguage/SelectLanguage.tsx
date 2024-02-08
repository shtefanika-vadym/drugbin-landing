// eslint-disable-next-line no-restricted-imports
import { useTranslation } from 'react-i18next';
import { BarStyle, Language, SelectWrapper } from './SelectLanguage.styled';

type Languages = 'en' | 'ro';

export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (language: Languages) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <SelectWrapper>
      <Language
        isActive={currentLanguage === 'ro'}
        onClick={() => handleLanguageChange('ro')}
      >
        RO
      </Language>
      <BarStyle>|</BarStyle>
      <Language
        isActive={currentLanguage === 'en'}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </Language>
    </SelectWrapper>
  );
};
