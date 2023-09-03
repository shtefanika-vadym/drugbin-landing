import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { Button } from 'common/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { RecycleWrapper, SubTitle, Title } from './Recycle.styled'

export const Recycle = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <ContentWrapper color='#2949a6'>
      <RecycleWrapper>
        <Title>{t('landing_page.collect_title')}</Title>
        <SubTitle>{t('landing_page.collect_description')}</SubTitle>
        <Button variant='white' onClick={() => navigate('/collect')}>
          {t('button.collect')}
        </Button>
      </RecycleWrapper>
    </ContentWrapper>
  )
}
