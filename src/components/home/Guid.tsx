import GuidImageStep1 from "src/assets/images/S1.png";
import GuidImageStep2 from "src/assets/images/S2.png";
import GuidImageStep3 from "src/assets/images/S3.png";
import GuidImageStep4 from "src/assets/images/S4.png";
import DashboardImage from "src/assets/images/dashboard.jpg";

import { Layout } from "src/layout/Layout/Layout";
import { ContentSection } from "../ui/ContentSection/ContentSection";
import { Container } from "./Guid.styled";

const guidSections = [
  {
    reverse: false,
    title: "1. Preluare automată, fără contact",
    description:
      "Preia toate medicamentele odată astfel încât elimină contactul cu acestea. Elimină astfel riscul de contaminare oferind o experiență futuristă și elegantă de colectare.",
    image: GuidImageStep2,
  },
  {
    reverse: true,
    title: "2. Scanare & identificare",
    description:
      "Fiecare produs farmaceutic este analizat individual cu camere de înaltă rezoluție și un sistem AI avansat. Identificarea este rapidă, precisă și complet automată, indiferent de forma farmaceutică.",
    image: GuidImageStep3,
  },
  {
    reverse: false,
    title: "3. Sortare inteligentă",
    description:
      "Medicamentele sunt direcționate în 6 compartimente specifice de deșeuri, asigurând o eliminare sigură și conformă cu reglementările.",
    image: GuidImageStep4,
  },
  {
    reverse: true,
    title: "4. Rapoarte detaliate",
    description:
      "Înregistrează electronic toate informațiile și emite rapoarte zilnice sau lunare cu cantitățile de medicamente pentru fiecare categorie de deșeuri periculoase.",
    image: DashboardImage,
  },
];

export const Guid: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Layout>
      <Container id={id}>
        {guidSections.map((section, index) => (
          <ContentSection
            key={index}
            reverse={section.reverse}
            title={section.title}
            description={section.description}
            image={section.image}
          />
        ))}
      </Container>
    </Layout>
  );
};
