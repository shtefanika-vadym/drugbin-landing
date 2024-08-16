import { useCallback } from "react";
import { WDS_COLOR_BLUE_100 } from "src/styles/tokens";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Container, TextWrapper } from "./CenterCard.styled";

interface CenterCardProps {
  isActive: boolean;
  fullAddress: string;
  name: string;
  id: number;
  handleSelect: (centerID: number | null) => void;
}

export const CenterCard: React.FC<CenterCardProps> = ({
  id,
  name,
  isActive,
  fullAddress,
  handleSelect,
}) => {
  const openGoogleMaps = useCallback(() => {
    window.open(
      "http://maps.google.com/?q=" +
        name?.replace(" ", "+") +
        fullAddress?.replace(" ", "+"),
      "_blank"
    );
  }, [name, fullAddress]);

  const handleChangeCenter = useCallback(() => {
    handleSelect(id);
  }, [id, handleSelect]);

  return (
    <Container onClick={handleChangeCenter} isActive={isActive}>
      <TextWrapper>
        <Text variant="bodyS">{name}</Text>
        <Text variant="bodyInfo" color={WDS_COLOR_BLUE_100}>
          Lu-Mi 08:00 – 17.00 &#x2022; Sâ-Du 10:00 – 12.00
        </Text>
        <Text variant="bodyInfo">{fullAddress}</Text>
      </TextWrapper>
      <Button variant="secondary" type="button" onClick={openGoogleMaps}>
        Deschide in Maps
      </Button>
    </Container>
  );
};
