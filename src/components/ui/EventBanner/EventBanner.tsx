import { Layout } from "src/layout/Layout/Layout";
import {
  WDS_COLOR_BUTTON_PRIMARY_BACKGROUND,
  WDS_COLOR_PRIMARY_50,
} from "src/styles/tokens";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Container, TextContainer } from "./EventBanner.styled";

interface EventBannerProps {
  backgroundColor?: string;
  onClick: () => void;
}

export const EventBanner: React.FC<EventBannerProps> = ({
  backgroundColor = WDS_COLOR_PRIMARY_50,
  onClick,
}) => {
  return (
    <Layout>
      <Container backgroundColor={backgroundColor}>
        <TextContainer>
          <Text variant="titleM" element="p" color={WDS_COLOR_BUTTON_PRIMARY_BACKGROUND}>
            Colectează Medicamentele Expirate sau Neutilizate Astăzi
          </Text>
          <Text element="p" color={WDS_COLOR_BUTTON_PRIMARY_BACKGROUND}>
            Ajută-ne să avem un impact pozitiv asupra lumii colectand
            medicamentele tale neutilizate astăzi. Prin participarea la
            programul nostru de colectare a medicamentelor, poți contribui la
            reducerea deșeurilor de medicamente, la promovarea practicilor de
            sănătate durabilă și la salvarea de vieți.
          </Text>
        </TextContainer>
        <Button variant="white" onClick={onClick}>
          Colectează
        </Button>
      </Container>
    </Layout>
  );
};
