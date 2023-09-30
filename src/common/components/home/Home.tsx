import first from 'common/assets/first.jpg'
import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { About } from 'common/ui/About/About'
import { Button } from 'common/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { Icon, Join, Section, SubTitle, Title, Wrapper } from './Home.styled'
import { Recycle } from 'common/ui/Recycle/Recycle'
import { Values } from 'common/ui/Values/Values'
import { Contact } from 'common/ui/Contact/Contact'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <ContentWrapper>
        <Section>
          <Title>
            Știai că natura luptă neîncetat pentru binele tău? Acum este momentul să te alături și
            tu acestei lupte!
          </Title>
          <SubTitle>
            În fiecare an, nu mai puțin de 1,500 de tone de medicamente ajung în apele din România.
            Și mai alarmant este că avem la fel de multe decese cauzate de rezistența la
            antibiotice. Dar iată noutatea: nu doar utilizarea nechibzuită a antibioticelor este
            responsabilă pentru această problemă. Poluarea masivă afectează și biodiversitatea
            prețioasă.
          </SubTitle>
          <Join>
            Nu arunca medicamentele expirate sau neutilizate! Predă-le în farmacii și noi te învățăm
            cum să faci asta!
          </Join>
          <Button onClick={() => navigate('/proces')}>Află mai multe</Button>
          <Icon src={first} />
        </Section>
      </ContentWrapper>
      <About id='about-us' />
      <Recycle />
      <Values id='values' />
      <Contact id='contact' />
    </Wrapper>
  )
}
