import { Layout } from "src/layout/Layout/Layout";
import {
  WDS_COLOR_BUTTON_PRIMARY_BACKGROUND,
  WDS_COLOR_PRIMARY_50,
} from "src/styles/tokens";
import { Text } from "../Text/Text";
import { Container, TextContainer } from "./EventBanner.styled";

interface EventBannerProps {
  backgroundColor?: string;
  onClick: () => void;
  id?: string;
}

export const EventBanner: React.FC<EventBannerProps> = ({
  backgroundColor = WDS_COLOR_PRIMARY_50,
  id,
}) => {
  return (
    <Layout>
      <Container id={id} backgroundColor={backgroundColor}>
        <TextContainer>
          <Text
            variant="titleM"
            element="p"
            color={WDS_COLOR_BUTTON_PRIMARY_BACKGROUND}
          >
            Fii parte din solutie! Returnează medicamentele expirate sau
            neutilizate în mod responsabil!
          </Text>
          <Text element="p" color={WDS_COLOR_BUTTON_PRIMARY_BACKGROUND}>
            Deprinderile contează! Du-ți medicamentele nefolosite la cele mai
            apropiate puncte de colectare și contribuie la un viitor mai sănătos
            pentru tine și comunitatea ta. Alege să fii responsabil! Acțiunile
            tale pot preveni poluarea și pot salva vieți. Împreună, putem
            transforma deșeurile în oportunități pentru un mediu mai sigur și
            mai curat.
          </Text>
        </TextContainer>

        {/* <Button variant="white" onClick={onClick}>
          Colectează
        </Button> */}
      </Container>
    </Layout>
  );
};
