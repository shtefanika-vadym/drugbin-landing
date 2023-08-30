import { HeaderWrapper } from 'common/layout/Header/HeaderWrapper'
import { Icon, Join, Section, SubTitle, Title, Wrapper } from './Home.styled'
import { useTranslation } from 'react-i18next'
import first from 'common/assets/first.jpg'
import { Services } from 'common/ui/Services/Services'
import { Recycle } from 'common/ui/Recycle/Recycle'
import { Contact } from 'common/ui/Contact/Contact'

export const Home = () => {
  const { t } = useTranslation()
  const isRO = localStorage?.getItem('selectedLanguage') === `"ro"`
  return (
    <HeaderWrapper>
      <Wrapper>
        <Section id='about-us'>
          <Title>{t('landing_page.about_title')}</Title>
          <SubTitle>{t('landing_page.about_description')}</SubTitle>
          {!isRO ? <Join>{t('landing_page.about_join')}</Join> : null}
          {/* <Button onClick={() => navigate('/collect')}>{t('button.collect')}</Button> */}
          <Icon src={first} />
        </Section>
        <Services id='services' />
        <Recycle />
        <Contact id='contact' />
      </Wrapper>
    </HeaderWrapper>
  )
}
