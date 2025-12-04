import { Layout } from "src/layout/Layout/Layout";
import { WDS_COLOR_NEUTRALGREY_200 } from "src/styles/tokens";
import { Button } from "../ui/Button/Button";
import { LogoXSIcon } from "../ui/Icon";
import { Text } from "../ui/Text/Text";
import {
  Container,
  LeftContainer,
  RightContainer,
  TextContainer,
} from "./FirstStep.styled";

export const FirstStep = () => {
  return (
    <Layout fullWidth color="#F1F5F9">
      <Layout>
        <Container>
          <LeftContainer>
            <TextContainer>
              <Text variant="titleM" element="h2">
                Primul pas spre un viitor mai curat!
              </Text>
              <Text
                variant="bodyS"
                element="p"
                color={WDS_COLOR_NEUTRALGREY_200}
              >
                Fă primul pas spre un mediu mai curat, pentru că
                responsabilitatea individuală constribuie la sănătatea
                colectivă!
              </Text>
            </TextContainer>
            <LogoXSIcon />
            <div>
              <Button>Contactează-ne</Button>
            </div>
          </LeftContainer>
          <RightContainer>
            <iframe
              width="100%"
              height="353"
              src="https://www.youtube.com/embed/TtTGVH7MeyI"
              title="Tu știi ce trebuie să faci cu medicamentele expirate?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </RightContainer>
        </Container>
      </Layout>
    </Layout>
  );
};
