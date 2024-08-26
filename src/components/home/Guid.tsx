import GuidImageStep1 from "src/assets/images/guid1.webp";
import GuidImageStep2 from "src/assets/images/guid2.webp";
import GuidImageStep3 from "src/assets/images/guid3.webp";
import { Layout } from "src/layout/Layout/Layout";
import { Text } from "../ui/Text/Text";
import {
  Container,
  Content,
  Description,
  Image,
  TopContent,
} from "./Guid.styled";

export const Guid: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Layout>
      <Container id={id}>
        <TopContent>
          <Text variant="titleM" element="h2">
            Ce trebuie să știi?
          </Text>
          <Text element="p" variant="bodyS">
            Medicamentele expirate sau neutilizate sunt deșeuri periculoase și
            se predau la punctele de colectare special amenajate din cadrul
            spitalelor publice și private din România. Putem genera, cu o simplă
            fotografie, un proces verbal de predare, astfel încât să nu existe
            riscuri privind traficul cu medicamente iar predarea acestora să
            decurgă în mod sigur și elegant. Trebuie doar să poziționezi toate
            medicamentele în fața camerei foto, cât mai vizibil. Dacă predarea
            nu se face pe bază de proces verbal, atunci trebuie să știi că
            medicamentele se colectează în patru categorii distincte
            {/* <ul>
              <li>Deșeuri de medicamente citotoxice și citostatice</li>
              <li>Deșeuri de medicamente (cu excepția primei categorii)</li>
              <li>
                Deșeuri de medicamente aflate în stare lichidă cu potențial
                înțepător
              </li>
              <li>
                Deșeuri de medicamente aflate în recipiente sub presiune
                (spray-uri)
              </li>
            </ul> */}
          </Text>
        </TopContent>
        <Content>
          <Description>
            <Text variant="titleM" element="h2">
              ETAPA 1
            </Text>
            <Text element="p" variant="bodyS">
              Identifică, acasă, medicamentele expirate sau cele pe care nu le
              mai folosești și generează procesul verbal de predare în maxim un
              minut, cu o simplă fotografie
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
              Prezintă procesul verbal de predare la centrele partenere. Astfel,
              procesul de predare poate să decurgă<b> Rapid</b>, <b>Sigur</b> și{" "}
              <b>Eficient</b>.
            </Text>
          </Description>
          <Image src={GuidImageStep3} alt="Guid" />
        </Content>
      </Container>
    </Layout>
  );
};
