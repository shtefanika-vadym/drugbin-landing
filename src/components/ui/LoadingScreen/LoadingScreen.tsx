import { WDS_COLOR_BLUE_300 } from "src/styles/tokens";
import { Text } from "../Text/Text";
import { Container, Spinner } from "./LoadingScreen.styled";

export const LoadingScreen = () => {
  return (
    <Container>
      <Text variant="titleS" color={WDS_COLOR_BLUE_300}>
        Apreciem că rămâi cu noi până procesăm cererea ta.
      </Text>
      <Text variant="bodyS" color={WDS_COLOR_BLUE_300}>
        Promitem că nu va dura mai mult de un minut! Îți mulțumim.
      </Text>
      <Spinner />
    </Container>
  );
};
