import homeImage from "src/assets/images/drugbin.png";
import { Button } from "src/components/ui/Button/Button";
import { Text } from "src/components/ui/Text/Text";
import { useScrollTo } from "src/hooks/useScrollTo";
import { Layout } from "src/layout/Layout/Layout";
import { WDS_COLOR_PRIMARY_50 } from "src/styles/tokens";
import { Container, Image } from "./Main.styled";

export const Main = () => {
  const { scrollTo } = useScrollTo();

  return (
    <Layout>
      <Container>
        <Text variant="titleXL" element="h1">
          Natura luptă pentru tine! Fă-o și tu!
        </Text>
        <Text variant="bodyM" element="h3">
          1500 de tone de medicamente ajung anual în apele din România!
        </Text>
        <Text variant="bodyM" element="p" color={WDS_COLOR_PRIMARY_50}>
          Nu le arunca. Predă-le responsabil cu ajutorul DrugBin — primul
          dispozitiv inteligent care identifică, sortează și stochează automat
          pastilele expirate sau nefolosite.
        </Text>
        <Button onClick={() => scrollTo("proces")}>Află cum</Button>
      </Container>
      <Image src={homeImage} alt="Home Content" />
    </Layout>
  );
};
