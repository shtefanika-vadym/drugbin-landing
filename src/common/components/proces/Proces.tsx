import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { SubTitle, Title, Wrapper, Section } from './Proces.styled'
import { Services } from 'common/ui/Services/Services'

export const Proces = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Section>
          <Title>Află mai multe despre procesul de donare a medicamentelor</Title>
          <SubTitle>
            Nu arunca medicamentele expirate sau neutilizate! Predă-le în farmacii și noi te învățăm
            cum să reduci, salvezi și protejezi mediul!
          </SubTitle>
        </Section>
      </ContentWrapper>
      <Services />
    </Wrapper>
  )
}
