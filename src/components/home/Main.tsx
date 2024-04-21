import homeImage from "src/assets/images/home_content.png";
import { Button } from "src/components/ui/Button/Button";
import { Text } from "src/components/ui/Text/Text";
import { WDS_COLOR_PRIMARY_50 } from "src/styles/tokens";
import { Container, Image } from "./Main.styled";
import { Layout } from "src/layout/Layout/Layout";

export const Main = () => {
  return (
    <Layout>
      <Container>
        <Text variant="titleXL">Natura luptă pentru tine! Fă-o și tu!</Text>
        <Text variant="bodyM">
          1500 de tone de medicamente ajung anual în apele din România!
        </Text>
        <Text variant="bodyM" color={WDS_COLOR_PRIMARY_50}>
          Nu arunca medicamentele expirate sau neutilizate! Predă-le în centrele
          de colectare special amenajate! Noi te învățăm cum.
        </Text>
        <Button>Află cum</Button>
      </Container>
      <Image src={homeImage} alt="Home Content" />
    </Layout>
  );
};
