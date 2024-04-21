import GuidImageStep1 from "src/assets/images/guid1.png";
import GuidImageStep2 from "src/assets/images/guid2.png";
import GuidImageStep3 from "src/assets/images/guid3.png";
import { Layout } from "src/layout/Layout/Layout";
import { Text } from "../ui/Text/Text";
import { Container, Content, Description, Image } from "./Guid.styled";

export const Guid: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Layout>
      <Container id={id}>
        <Content>
          <Description>
            <Text variant="titleM" element="h1">
              ETAPA 1: IDENTIFICAREA MEDICAMENTELOR
            </Text>
            <Text element="p" variant="bodyS">
              Pregătește acasă medicamentele expirate sau neutilizate și, de
              asemenea, este o idee bună să le separi de ambalajul lor (cutia
              din carton, prospectul). Urmărește cu atenție data de expirare
              înscrisă pe cutie sau blisterul medicamentelor. Separarea corectă
              a medicamentelor și ambalajelor contribuie la gestionarea
              responsabilă a deșeurilor și protejează mediul înconjurător.
            </Text>
          </Description>
          <Image src={GuidImageStep1} alt="Guid" />
        </Content>

        <Content reverse>
          <Description>
            <Text variant="titleM" element="h1">
              ETAPA 2: FACILITEAZĂ PROCESUL
            </Text>
            <Text element="p" variant="bodyS">
              Cu ajutorul aplicației noastre, completează detaliile referitoare
              la medicamentele expirate sau neutilizate pentru a simplifica
              întocmirea procesului verbal de predare. Beneficiezi astfel de o
              soluție eficientă și transparentă în gestionarea și colectarea
              acestor medicamente.
            </Text>
          </Description>
          <Image src={GuidImageStep2} alt="Guid" />
        </Content>

        <Content>
          <Description>
            <Text variant="titleM" element="h1">
              ETAPA 3: PREDARE EFICIENTĂ
            </Text>
            <Text element="p" variant="bodyS">
              Prezintă codul QR împreună cu medicamentele pe care vrei să le
              predai la centrul de colectare selectat de tine.
            </Text>
          </Description>
          <Image src={GuidImageStep3} alt="Guid" />
        </Content>
      </Container>
    </Layout>
  );
};
