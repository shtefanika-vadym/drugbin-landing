import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { CardContent, CardTitle, CardWrapper, Content, Icon, Navigation } from './Values.styled'
import starIcon from 'common/assets/smile_star.svg'

export const Values: React.FC<{ id: string }> = ({ id }) => {
  return (
    <ContentWrapper id={id}>
      <Navigation>Valorile noastre</Navigation>
      <Content>
        <CardWrapper>
          <Icon src={starIcon} />
          <CardTitle>Responsabilitate</CardTitle>
          <CardContent>
            Suntem conștienți de impactul negativ pe care medicamentele expirate îl au asupra apei,
            solului și, în final, asupra sănătății noastre. Ne-am angajat să educăm populația cu
            privire la această problemă, prin promovarea unei gestionări adecvate, astfel încât să
            putem contribui cu toții la reducerea poluării.
          </CardContent>
        </CardWrapper>
        <CardWrapper>
          <Icon src={starIcon} />
          <CardTitle>Inovație</CardTitle>
          <CardContent>
            Suntem ferm convinși că tehnologia poate aduce soluții revoluționare în gestionarea
            medicamentelor expirate. Cu ajutorul tehnologiei de vârf, putem transforma modul în care
            gestionăm medicamentele expirate și putem să aducem o schimbare pozitivă.
          </CardContent>
        </CardWrapper>
        <CardWrapper>
          <Icon src={starIcon} />
          <CardTitle>Angajament</CardTitle>
          <CardContent>
            Suntem aici pentru a oferi programe de educație dedicate populației, împreună cu primul
            soft specializat pentru gestionarea eficientă a medicamentelor expirate. Noi credem cu
            tărie în educația ca mijloc de responsabilizare, ce aduce beneficii pentru toți
            partenerii implicați.
          </CardContent>
        </CardWrapper>
      </Content>
    </ContentWrapper>
  )
}
