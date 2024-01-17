import list1 from 'common/assets/line1.png';
import list3 from 'common/assets/line3.png';
import list4 from 'common/assets/line4.png';

import useBreakpoints from 'common/hooks/useBreakpoints';

import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper';
import { Navigation } from '../About/About.styled';
import { Section } from './Section';
import { Image, ServicesWrapper } from './Services.styled';

export const Services: React.FC<{ id?: string }> = ({ id }) => {
  const { isBelowDesktop } = useBreakpoints();

  const LIST_SECTION_1 = {
    title: 'ETAPA 1: IDENTIFICAREA MEDICAMENTELOR',
    subTitle:
      'Pregătește acasă medicamentele expirate sau neutilizate și, de asemenea, este o idee bună să le separi de ambalajul lor (cutia din carton, prospectul). Urmărește cu atenție data de expirare înscrisă pe cutie sau blisterul medicamentelor. Separarea corectă a medicamentelor și ambalajelor contribuie la gestionarea responsabilă a deșeurilor și protejează mediul înconjurător.',
  };

  const LIST_SECTION_2 = {
    title: 'ETAPA 2: FACILITEAZĂ PROCESUL',
    subTitle:
      'Cu ajutorul aplicației noastre, completează detaliile referitoare la medicamentele expirate sau neutilizate pentru a simplifica întocmirea procesului verbal de predare. Beneficiezi astfel de o soluție eficientă și transparentă în gestionarea și colectarea acestor medicamente.',
  };

  const LIST_SECTION_3 = {
    title: 'ETAPA 3: PREDARE EFICIENTĂ',
    subTitle:
      'Prezintă codul QR împreună cu medicamentele pe care vrei să le predai la centrul de colectare selectat de tine.',
  };

  return (
    <ContentWrapper id={id}>
      <Navigation>Ghid complet</Navigation>
      <ServicesWrapper>
        <Section content={LIST_SECTION_1} right>
          <Image src={list1} />
        </Section>
        <Section content={LIST_SECTION_2} right={isBelowDesktop}>
          <Image src={list3} />
        </Section>
        <Section content={LIST_SECTION_3} right>
          <Image src={list4} />
        </Section>
      </ServicesWrapper>
    </ContentWrapper>
  );
};
