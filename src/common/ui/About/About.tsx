import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { LeftContent, Navigation, RightContent, Wrapper } from './About.styled'

export const About: React.FC<{ id: string }> = ({ id }) => {
  return (
    <ContentWrapper id={id}>
      <Navigation>Despre noi</Navigation>
      <Wrapper>
        <LeftContent>
          Cu o experiență vastă în domeniul farmaceutic și cu multă pasiune pentru software, am
          dezvoltat o soluție utilă și inovativă
        </LeftContent>
        <RightContent>
          Suntem o echipă interdisciplinară de profesioniști în domeniul tehnologiei și al
          sănătății, care și-au unit forțele pentru a face diferența în gestionarea resposabilă a
          medicamentelor expirate, pentru că am înțeles nevoia societății pentru politici de mediu
          coerente și preocuparea pentru mediu și sănătate.
        </RightContent>
      </Wrapper>
    </ContentWrapper>
  )
}
