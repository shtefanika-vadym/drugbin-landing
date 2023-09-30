import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { Button } from 'common/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { RecycleWrapper, SubTitle, Title } from './Recycle.styled'
import useBreakpoints from 'common/hooks/useBreakpoints'

export const Recycle = () => {
  const navigate = useNavigate()
  const { isBelowDesktop } = useBreakpoints()
  return (
    <ContentWrapper color='white'>
      <RecycleWrapper>
        <Title>Te invităm să devii și tu ambasadorul schimbării</Title>
        <SubTitle>
          Misiunea noastră este simplă, dar esențială: dorim să ajutăm oamenii să înțeleagă
          importanța eliminării corecte a medicamentelor expirate și să punem la dispoziție
          instrumente digitale intuitive pentru a gestiona această problemă de interes național cât
          mai eficient.
          <SubTitle>
            Alătură-te nouă în eforturile noastre pentru o lume mai bună. Să facem împreună
            diferența!
          </SubTitle>
        </SubTitle>
        {isBelowDesktop && (
          <Button variant='primary' onClick={() => navigate('/collect')}>
            Colecteaza
          </Button>
        )}
      </RecycleWrapper>
    </ContentWrapper>
  )
}
