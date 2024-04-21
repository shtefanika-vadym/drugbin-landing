import { WDS_COLOR_BLUE_100 } from "src/styles/tokens";
import { useCallback } from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import {
    Container,
    TextWrapper
} from "./CenterCard.styled";

interface CenterCardProps {
  name: string;
  location: string;
  street: string;
  schedule: string[];
  isActive: boolean;
  handleSelect: () => void;
}

export const CenterCard: React.FC<CenterCardProps> = ({
  name,
  location,
  street,
  schedule,
  handleSelect,
  isActive,
}) => {
  const openMaps = useCallback(() => {
    const url = location;
    window.open(url, "_blank");
  }, [location]);

  return (
    <Container onClick={handleSelect} isActive={isActive}>
      <TextWrapper>
        <Text variant="bodyS">{name}</Text>
        <Text variant="bodyInfo" color={WDS_COLOR_BLUE_100}>
          {schedule[0]} &#x2022; {schedule[1]}
        </Text>
        <Text variant="bodyInfo">{street}</Text>
      </TextWrapper>
      <Button variant="secondary" onClick={openMaps}>
        Deschide in Maps
      </Button>
    </Container>
  );
};
