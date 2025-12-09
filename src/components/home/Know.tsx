import { Text } from "../ui/Text/Text";
import { Container, ContentLeft, ContentRight } from "./Know.styled";

export const Know = () => {
  return (
    <Container>
      <ContentLeft>
        <Text variant="titleM" element="h1">
          Ce trebuie să știi?
        </Text>
        <Text variant="bodyS" element="p">
          ”Medicamentele expirate sau neutilizate se consideră deșeuri
          periculoase!” alertează dar nu ghidează!
        </Text>
      </ContentLeft>
      <ContentRight>
        <Text variant="bodyS" element="p">
          Anual, 1500 de medicamente ajung în apele din Romănia. Există o
          afectare gravă a biodivesității cu depășiri de peste 300 de ori față
          de limitele admise de antibiotice în ape și sol. Colectarea oficială
          în România este de 30 de ori mai mica față de media europeană.
          Poluarea chimică este subtilă și nu se percepe imediat.
        </Text>
      </ContentRight>
    </Container>
  );
};
