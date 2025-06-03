import { Layout } from "src/layout/Layout/Layout";
import { StarIcon } from "../Icon";
import { Container, ContainerBox, Description, Title } from "./Values.styled";

export const Values: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Layout>
      <Container id={id}>
        {valuseData.map((value) => (
          <ValueBox
            key={value.title}
            title={value.title}
            description={value.description}
          />
        ))}
      </Container>
    </Layout>
  );
};

interface ValueBoxProps {
  title: string;
  description: string;
}

const ValueBox: React.FC<ValueBoxProps> = ({ title, description }) => {
  return (
    <ContainerBox>
      <StarIcon />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ContainerBox>
  );
};

const valuseData = [
  {
    title: "Clasificare",
    description:
      "Identifica medicamentele si le directioneaza in cele 6 categorii de deseuri",
  },
  {
    title: "Proces Verbal",
    description:
      "Genereaza la fiecare colectare un proces verbal de predare cu cantitatea medicamentelor pe fiecare categorie",
  },
  {
    title: "Raport Lunar",
    description:
      "Genereaza lunar raport total cu cantitatile colectate pe 3 categorii: deseuri periculoase, deseuri asimilabile celor menajere (supimentele alimentare), deseuri asimilabile celor reciclabile (recipientele sub presiune)",
  },
];
