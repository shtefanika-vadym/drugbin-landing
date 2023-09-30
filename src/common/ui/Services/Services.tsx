import list1 from 'common/assets/line1.png'
import list2 from 'common/assets/line2.png'
import list3 from 'common/assets/line3.png'
import list4 from 'common/assets/line4.png'

import useBreakpoints from 'common/hooks/useBreakpoints'

import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { Section } from './Section'
import { Image, ServicesWrapper } from './Services.styled'

export const Services = () => {
  const { isBelowDesktop } = useBreakpoints()

  const LIST_SECTION_1 = {
    title: 'ETAPA 1: IDENTIFICAREA MEDICAMENTELOR',
    subTitle:
      'Oricine preocupat de mediu se confruntă la un moment dat cu această întrebare, mai ales că există cazuri care creează mai multe incertitudini decât altele: cremele de protecție solară, pastele de dinți, termometrul... Intră aceste produse sub incidența sistemului de sortare DrugBin și trebuie returnate la farmacie?',
    otherTitle: 'Dar ce înseamnă cu adevărat un medicament?',
    otherContent:
      'Un medicament a primit o Autorizație de Punere pe Piață din partea autorităților. Acesta este compus dintr-un ingredient activ și din excipienți:',
    list: [
      'Ingredientul activ este substanța care acționează asupra simptomelor organismului bolnav.',
      'Excipienții sunt celelalte substanțe din medicament. Acestea permit conservarea ingredientului activ, facilitarea absorbției acestuia de către organism și controlul difuziei ingredientului activ în corp.',
    ],
  }

  const LIST_SECTION_2 = {
    title: 'ETAPA 2: SEPARAREA AMBALAJELOR DIN CARTON ȘI A PROSPECTELOR DIN HÂRTIE DE MEDICAMENTE',
    subTitle:
      'Doar medicamentul în sine este afectat de procesul de sortare DrugBin. Deci, ce facem cu prospectul și ambalajul?',
    otherTitle:
      'Chiar dacă rămâne doar o capsulă sau un comprimat în blister, toți farmaciștii sunt obligați să colecteze medicamentul.',
    otherContent:
      'Cu excepția medicamentelor de care avem nevoie în mod regulat, este mai bine să dezvoltăm obiceiul de a separa medicamentele de ambalaje (cutii din carton și prospecte pentru colectarea selectivă) la sfârșitul tratamentului și să returnăm la farmacie ceea ce rămâne din medicamentele tale.',
    list: [
      'Returnarea medicamentelor la farmacie și colectarea selectivă a ambalajelor asociate este un gest simplu pentru a evita poluarea mediului.',
    ],
  }

  const LIST_SECTION_3 = {
    title: 'ETAPA 3: FOLOSEȘTE PLATFORMA DrugBin PENTRU A FACILITA PROCESUL DE RECICLARE',
    subTitle:
      'Cu ajutorul platformei noastre, poți iniția procesul de reciclare chiar înainte să ieși din casă.',
    otherTitle:
      'De la repartizarea medicamentelor, preluarea lor și reciclarea și mai apoi donarea dacă este cazul, ne ocupăm noi.',
    otherContent:
      'Tot ce trebuie să faci este să completezi formularul cu datele medicamentului, să alegi o farmacie din apropierea ta care colaborează cu noi și să mergi direct acolo cu medicamentele pregătite.',
  }

  const LIST_SECTION_4 = {
    title: 'ETAPA 4: MERGI LA CEA MAI APROPIATĂ FARMACIE',
    subTitle:
      'Atunci când îți reînnoiești tratamentul, cu siguranță treci pe la farmacie. Deci, de ce să nu profiți de ocazie pentru a returna și Medicamentele Neutilizate destinate uzului uman, fie ele expirate sau nu?',
    otherTitle:
      'Toate farmaciile colectează Medicamentele Neutilizate (MNU) de la persoanele fizice, destinate uzului uman, fie ele expirate sau nu.',
    otherContent: 'Oriunde te-ai afla, găsește cea mai apropiată farmacie!',
    list: [
      'Returnarea medicamentelor la farmacie și colectarea selectivă a ambalajelor asociate este un gest simplu pentru a evita poluarea mediului.',
    ],
  }

  return (
    <ContentWrapper>
      <ServicesWrapper>
        <Section content={LIST_SECTION_1} right>
          <Image src={list1} />
        </Section>
        <Section content={LIST_SECTION_2} right={!isBelowDesktop ? false : true}>
          <Image src={list2} />
        </Section>
        <Section content={LIST_SECTION_3} right>
          <Image src={list3} />
        </Section>
        <Section content={LIST_SECTION_4} right={!isBelowDesktop ? false : true}>
          <Image src={list4} />
        </Section>
      </ServicesWrapper>
    </ContentWrapper>
  )
}
