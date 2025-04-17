import GuidImageStep1 from "src/assets/images/S1.png";
import GuidImageStep2 from "src/assets/images/S2.png";
import GuidImageStep3 from "src/assets/images/S3.png";
import GuidImageStep4 from "src/assets/images/S4.png";

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
            Medicamentele expirate sau neutilizate nu se aruncă la gunoi sau în
            toaletă. Ele sunt considerate deșeuri periculoase și trebuie predate
            exclusiv în punctele de colectare special amenajate din cadrul
            spitalelor publice și private din România. Pentru a ușura acest
            proces și a reduce impactul asupra mediului, am creat DrugBin — un
            dispozitiv inteligent care preia medicamentele tale vechi, le
            identifică, le sortează și le depozitează automat, în siguranță.
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
              Primul pas spre un mediu mai curat
            </Text>
            <Text element="p" variant="bodyS">
              Tot ce trebuie să faci este să torni medicamentele expirate sau
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
              Odată introduse în aparat, un braț robotic ultra-modern preia
              fiecare pastilă în parte cu grijă și precizie. Acest sistem
              automatizat elimină riscurile de contaminare și erori umane,
              oferind o experiență de utilizare futuristă și impecabilă.
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
              rapidă, precisă și complet automată, indiferent de forma sau
              culoarea pastilei.
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
              După identificare, pastilele sunt sortate automat în compartimente
              special concepute, în funcție de compoziție, tip sau grad de risc.
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
