import first from 'common/assets/first.jpg'
import { Button } from 'common/ui/Button/Button'
import { Contact } from 'common/ui/Contact/Contact'
import { Recycle } from 'common/ui/Recycle/Recycle'
import { Services } from 'common/ui/Services/Services'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Icon, Join, Section, SubTitle, Title, Wrapper } from './Home.styled'
import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'

export const Home = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const isRO = localStorage?.getItem('selectedLanguage') === `"ro"`
  return (
    <Wrapper>
      <ContentWrapper id='about-us'>
        <Section>
          <Title>{t('landing_page.about_title')}</Title>
          <SubTitle>{t('landing_page.about_description')}</SubTitle>
          {!isRO ? <Join>{t('landing_page.about_join')}</Join> : null}
          <Button onClick={() => navigate('/collect')}>{t('button.collect')}</Button>
          <Icon src={first} />
        </Section>
      </ContentWrapper>
      <Services id='services' />
      <Recycle />
      <Contact id='contact' />
    </Wrapper>
  )
}
