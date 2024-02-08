import first from 'common/assets/first.jpg';
import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper';
import { About } from 'common/ui/About';
import { Button } from 'common/ui/Button';
import { Contact } from 'common/ui/Contact/Contact';
import { Recycle } from 'common/ui/Recycle/Recycle';
import { Services } from 'common/ui/Services';
import { Values } from 'common/ui/Values';
import { HashLink as Link } from 'react-router-hash-link';
import { Image, Join, Section, SubTitle, Title, Wrapper } from './Home.styled';
// eslint-disable-next-line no-restricted-imports
import { useTranslation } from 'react-i18next';

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

export const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ContentWrapper>
        <Section>
          <Title>{t('landing_page.title')}</Title>
          <SubTitle>{t('landing_page.subTitle')}</SubTitle>
          <Join>
            {t('landing_page.join_1')}
            <br />
            {t('landing_page.join_2')}
          </Join>
          <Button>
            <Link style={linkStyle} smooth to="/#proces">
              {t('button.find')}
            </Link>
          </Button>
          <Image src={first} alt="protejare" />
        </Section>
      </ContentWrapper>
      <Services id="proces" />
      <Recycle />
      <About id="about-us" />
      <Values id="values" />
      <Contact id="contact" />
    </Wrapper>
  );
};
