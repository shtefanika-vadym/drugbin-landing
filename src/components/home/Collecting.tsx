import { Layout } from "src/layout/Layout/Layout";
import { FeatureCard } from "../ui/FeatureCard/FeatureCard";
import { Carousel } from "../ui/Carousel/Carousel";
import { ShieldIcon } from "../ui/Icon";
import { Text } from "../ui/Text/Text";
import { TextContainer } from "./Collecting.styled";

const COLLECTING_CATEGORIES = [
  {
    id: 1,
    title: "Medicamente uzuale",
    description: "Toate medicamentele obişnuite expirate sau neutilizate",
    icon: <ShieldIcon />,
    optional: false,
  },
  {
    id: 2,
    title: "Recipiente sub presiune",
    description: "Asimilabile deşeurilor reciclabile",
    icon: <ShieldIcon />,
    optional: false,
  },
  {
    id: 3,
    title: "Tăietoare şi/sau înțepătoare",
    description: "Ace, seringi și alte obiecte ascuțite",
    icon: <ShieldIcon/>,
    optional: false,
  },
  {
    id: 4,
    title: "Citotoxice și citostatice",
    description: "Medicamente pentru tratamente oncologice",
    icon: <ShieldIcon/>,
    optional: false,
  },
  {
    id: 5,
    title: "Suplimente alimentare",
    description: "Asimilabile deşeurilor menajere",
    icon: <ShieldIcon/>,
    optional: false,
  },
  {
    id: 6,
    title: "Insuline",
    description: "Colectare opțională pentru diabetici",
    icon: <ShieldIcon/>,
    optional: true,
  },
  {
    id: 7,
    title: "Psihotrope și stupefiante",
    description: "Colectare opțională cu securitate sporită",
    icon: <ShieldIcon/>,
    optional: true,
  },
];

export const Collecting = () => {
  return (
    <Layout fullWidth color="#F1F5F9">
      <Layout>
        <TextContainer>
          <Text variant="titleM" element="h2">
            Ce poate colecta DrugBin?
          </Text>
          <Text variant="bodyS" element="p">
            Sistemul nostru inteligent poate identifica și sorta automat
            multiple categorii de deșeuri farmaceutice
          </Text>
        </TextContainer>
        <Carousel itemsToShow={4}>
          {COLLECTING_CATEGORIES.map((category) => (
            <FeatureCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </Carousel>
      </Layout>
    </Layout>
  );
};
