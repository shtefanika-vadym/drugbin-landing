import { useCallback } from 'react';
import { Button } from '../Button';
import {
  AddressText,
  Container,
  NameText,
  ScheduleText,
  TextWrapper,
} from './LocationCard.styled';

interface PharmaCardProps {
  name: string;
  location: string;
  street: string;
  schedule: string[];
  isActive: boolean;
  handleSelect: () => void;
}

export const LocationCard: React.FC<PharmaCardProps> = ({
  name,
  location,
  street,
  schedule,
  handleSelect,
  isActive,
}) => {
  const openMaps = useCallback(() => {
    const url = location;
    window.open(url, '_blank');
  }, [location]);

  return (
    <Container onClick={handleSelect} isActive={isActive}>
      <TextWrapper>
        <NameText>{name}</NameText>
        <ScheduleText>
          {schedule[0]} &#x2022; {schedule[1]}
        </ScheduleText>
        <AddressText>{street}</AddressText>
      </TextWrapper>
      <Button variant="secondary" onClick={openMaps}>
        Deschide in Maps
      </Button>
    </Container>
  );
};
