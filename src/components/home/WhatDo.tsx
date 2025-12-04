import DrugBinImage from "src/assets/images/S1.png";
import { Layout } from "src/layout/Layout/Layout";
import { FeatureCard } from "../ui/FeatureCard/FeatureCard";
import {
  ClockIcon,
  CpuIcon,
  LockIcon,
  MoneyIcon,
  ReportIcon,
  ShieldIcon,
} from "../ui/Icon";
import { Text } from "../ui/Text/Text";
import {
  Container,
  FeatureCardsContainer,
  Image,
  TextContainer,
} from "./WhatDo.styled";

const FEATURE_CARDS = [
  {
    icon: <ClockIcon />,
    title: "Disponibil 24/7",
    description: "Poate colecta oricând, fără restricții de program",
  },
  {
    icon: <ShieldIcon />,
    title: "Zero contact",
    description: "Elimină contactul personalului cu deșeurile periculoase",
  },
  {
    icon: <LockIcon />,
    title: "Securitate maximă",
    description: "Elimină riscul unor acțiuni ilicite cu medicamente",
  },
  {
    icon: <CpuIcon />,
    title: "Sortare AI",
    description: "Are expertiza necesară sortării datorită tehnologiei AI",
  },
  {
    icon: <MoneyIcon />,
    title: "Transparență costuri",
    description:
      "Asigură transparența costurilor prin stocarea electronică a datelor",
  },
  {
    icon: <ReportIcon />,
    title: "Rapoarte detaliate",
    description:
      "Emite rapoarte zilnice sau lunare cu cantitățile și tipurile de medicamente",
  },
];

export const WhatDo = () => {
  return (
    <Layout>
      <TextContainer>
        <Text variant="titleM" element="h2">
          Ce face DrugBin?
        </Text>
        <Text variant="bodyS" element="p">
          Este primul dispozitiv inteligent de colectare, sortare și stocare
          medicamente expirate și/sau neutilizate provenite de la populație
        </Text>
      </TextContainer>
      <Container>
        <Image src={DrugBinImage} alt="DrugBin" />
        <FeatureCardsContainer>
          {FEATURE_CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </FeatureCardsContainer>
      </Container>
    </Layout>
  );
};
