import GuidImageStep1 from "src/assets/images/guid1.webp";
import GuidImageStep2 from "src/assets/images/guid2.webp";
import GuidImageStep3 from "src/assets/images/guid3.webp";
import { Layout } from "src/layout/Layout/Layout";
import { Text } from "../ui/Text/Text";
import { Container, Content, Description, Image } from "./Guid.styled";

export const Guid: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Layout>
      <Container id={id}>
        <Content>
          <Description>
            <Text variant="titleM" element="h2">
              ETAPA 1
            </Text>
            <Text element="p" variant="bodyS">
              Identifică, acasă, medicamentele expirate sau cele pe care nu le
              mai folosești. Trebuie să știi că, medicamentele expirate sau
              neutilizate sunt <b>deșeuri periculoase</b> și se predau la
              punctele de colectare special amenajate din cadrul{" "}
              <b>spitalelor publice și private din România</b>. Conform
              instrucțiunilor emise de către Ministerul Sănătății privind
              gestionarea deșeurilor medicale neutilizate provenite de la
              populație, deșeurile de medicamente rezultate de la populație sunt
              reprezentate de medicamente cu termenul de valabilitate depășit,
              medicamente care nu mai sunt utilizate, reziduuri de medicamente,
              medicamente care au recipiente deteriorate, medicamente retrase de
              pe piață etc.
            </Text>
          </Description>
          <Image src={GuidImageStep1} alt="Guid" />
        </Content>

        <Content reverse>
          <Description>
            <Text variant="titleM" element="h2">
              ETAPA 2
            </Text>
            <Text element="p" variant="bodyS">
              Selectează punctul de colectare cel mai apropiat ție sau cel pe
              care dorești sa-l accesezi. Odată cu selectarea centrului de
              colectare unde urmează să predai medicamentele expirate sau
              neutilizate îți vor apărea și condițiile de predare la unitatea
              respectivă. Fiecare punct de colectare are stabilit un anumit
              interval orar pentru preluarea medicamentelor expirate sau
              neutilizate. Alege-l pe cel care se pliază cel mai bine
              programului tau de lucru și NU UITA!......
              <b>Responsabilitatea pentru mediu ne aparține tuturor!</b>
            </Text>
          </Description>
          <Image src={GuidImageStep2} alt="Guid" />
        </Content>

        <Content>
          <Description>
            <Text variant="titleM" element="h2">
              ETAPA 3
            </Text>
            <Text element="p" variant="bodyS">
              Cu o simplă poză, cu telefonul tău, la ce urmează să predai (fie
              medicamente în blistere sau medicamente în ambalajul lor original)
              putem genera instant un proces verbal de predare, astfel încât
              acest proces să decurgă în siguranță sau te îndrumăm Cum să predai
              corect medicamentele expirate sau neutilizate. Aplicația va
              genera, în urma fotografierii medicamentelor expirate sau
              neutilizate pe care urmează să le predai, detalii privind tipurile
              de produse pe care le ai și separarea lor fizică, încă de acasă,
              astfel încât procesul de predare la centrul de colectare să fie
              <b> Rapid</b>, <b>Sigur</b> și <b>Eficient</b>.
            </Text>
          </Description>
          <Image src={GuidImageStep3} alt="Guid" />
        </Content>
      </Container>
    </Layout>
  );
};
