import { useCallback } from "react";
import { WDS_COLOR_BLUE_100 } from "src/styles/tokens";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Container, TextWrapper } from "./CenterCard.styled";

interface CenterCardProps {
  name: string;
  street: string;
  schedule: string[];
  isActive: boolean;
  latitude: string;
  longitude: string;
  handleSelect: () => void;
}

export const CenterCard: React.FC<CenterCardProps> = ({
  name,
  street,
  handleSelect,
  isActive,
  latitude,
  longitude,
}) => {
  const openMaps = useCallback(() => {
    window.open(`https://maps.google.com?q=${latitude},${longitude}`, "_blank");
  }, [latitude, longitude]);

  return (
    <Container onClick={handleSelect} isActive={isActive}>
      <TextWrapper>
        <Text variant="bodyS">{name}</Text>
        <Text variant="bodyInfo" color={WDS_COLOR_BLUE_100}>
          {/* {schedule[0]} &#x2022; {schedule[1]} */}
          {`Lu-Mi 08:00 – 17.00  Sâ-Du 10:00 – 12.00`}
        </Text>
        <Text variant="bodyInfo">{street}</Text>
      </TextWrapper>
      <Button variant="secondary" type="button" onClick={openMaps}>
        Deschide in Maps
      </Button>
    </Container>
  );
};
