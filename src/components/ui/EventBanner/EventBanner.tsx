import { Layout } from "src/layout/Layout/Layout";
import {
  WDS_COLOR_BUTTON_PRIMARY_BACKGROUND,
  WDS_COLOR_PRIMARY_50,
} from "src/styles/tokens";
import { Text } from "../Text/Text";
import { Container, TextContainer } from "./EventBanner.styled";
import { Button } from "../Button/Button";

interface EventBannerProps {
  backgroundColor?: string;
  buttonText?: string;
  title: string;
  text: string;
  id?: string;
  onClick: () => void;
}

export const EventBanner: React.FC<EventBannerProps> = ({
  backgroundColor = WDS_COLOR_PRIMARY_50,
  title,
  text,
  buttonText,
  onClick,
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
            {title}
          </Text>
          <Text element="p" color={WDS_COLOR_BUTTON_PRIMARY_BACKGROUND}>
            {text}
          </Text>
        </TextContainer>

        <Button variant="white" onClick={onClick}>
          {buttonText}
        </Button>
      </Container>
    </Layout>
  );
};
