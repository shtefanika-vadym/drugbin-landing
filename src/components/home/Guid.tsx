import GuidImageStep1 from "src/assets/images/S1.png";
import GuidImageStep2 from "src/assets/images/S2.png";
import GuidImageStep3 from "src/assets/images/S3.png";
import GuidImageStep4 from "src/assets/images/S4.png";
import GuidImageStep5 from "src/assets/images/S5.png";

import { Layout } from "src/layout/Layout/Layout";
import { Text } from "../ui/Text/Text";
import {
  Container,
  Content,
  Description,
  Image
} from "./Guid.styled";

export const Guid: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Layout>
      <Container id={id}>
        <Content reverse>
          <Description>
            <Text variant="titleM" element="h2">
              Ce trebuie să știi?
            </Text>
            <Text element="p" variant="bodyS">
              Medicamentele expirate sau neutilizate nu se aruncă la gunoi sau
              în toaletă. Ele sunt considerate deșeuri periculoase și trebuie
              predate exclusiv în punctele de colectare special amenajate din
              cadrul spitalelor publice și private din România. Pentru a ușura
              acest proces și a reduce impactul asupra mediului, am creat
              DrugBin — un dispozitiv inteligent care preia medicamentele tale
              expirate sau pe care nu le mai folosești, le identifică, le
              sortează și le depozitează automat, în siguranță.
            </Text>
          </Description>
          <Image src={GuidImageStep5} alt="Guid" />
        </Content>
        <Content>
          <Description>
            <Text variant="titleM" element="h2">
              Primul pas spre un mediu mai curat
            </Text>
            <Text element="p" variant="bodyS">
              Tot ce trebuie să faci este să depui medicamentele expirate sau
              nefolosite în compartimentul special al dispozitivului. Nu este
              nevoie să le separi sau să le sortezi — DrugBin preia întreaga
              responsabilitate, asigurând un proces curat, sigur și fără efort
              din partea ta.
            </Text>
          </Description>
          <Image src={GuidImageStep1} alt="Guid" />
        </Content>

        <Content reverse>
          <Description>
            <Text variant="titleM" element="h2">
              Preluare automată, fără contact
            </Text>
            <Text element="p" variant="bodyS">
              Odată introduse în aparat, medicamentele sunt sortate cu grijă și
              precizie. Acest sistem automatizat elimină riscurile de
              contaminare și erori umane, oferind o experiență de utilizare
              futuristă și impecabilă.
            </Text>
          </Description>
          <Image src={GuidImageStep2} alt="Guid" />
        </Content>

        <Content>
          <Description>
            <Text variant="titleM" element="h2">
              Scanare & identificare
            </Text>
            <Text element="p" variant="bodyS">
              Fiecare pastilă este analizată individual de o cameră de înaltă
              rezoluție și un sistem AI avansat, care o compară instantaneu cu o
              bază de date extinsă de medicamente. Astfel, identificarea este
              rapidă, precisă și complet automată, indiferent de forma
              farmaceutică (cutie, blister, flacon, fiole).
            </Text>
          </Description>
          <Image src={GuidImageStep3} alt="Guid" />
        </Content>

        <Content reverse>
          <Description>
            <Text variant="titleM" element="h2">
              Sortare inteligentă, eliminare sigură
            </Text>
            <Text element="p" variant="bodyS">
              După identificare, medicamentele sunt sortate automat în 6
              compartimente specife de deșeuri: Medicamente uzuale, Recipiente
              sub presiune, Taietoare si/sau intepatoare, Citotoxice si
              citostatice, Suplimentele alimentare , Insulinele, Psihotrope si
              stupefiante (cele care se elibereaza pe retetă verde tab III){" "}
              <br />E important să știi că medicamentele care se elibereaza pe
              reteta galbena Tab II se predau la farmacia care le-a eliberat!{" "}
              <br />
              Acest proces asigură o stocare corectă, pregătită pentru reciclare
              responsabilă sau eliminare ecologică, în conformitate cu cele mai
              stricte norme de siguranță.
            </Text>
          </Description>
          <Image src={GuidImageStep4} alt="Guid" />
        </Content>
      </Container>
    </Layout>
  );
};
