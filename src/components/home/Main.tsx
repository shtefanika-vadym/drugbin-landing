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
        <Text variant="titleL" element="h1">
          Simplificăm responsabilitatea!
        </Text>
        <Text variant="bodyM" element="h3">
          ”Medicamentele expirate sau neutilizate se consideră deșeuri
          periculoase!”
        </Text>
        <Text variant="bodyM" element="p" color={WDS_COLOR_PRIMARY_50}>
          Cum facem ca aceste deșeuri să nu ajungă periculoase pentru mediu?
        </Text>

        <Button onClick={() => scrollTo("about")}>Află mai multe</Button>
        <Image src={homeImage} alt="Home Content" />
      </Container>
    </Layout>
  );
};
