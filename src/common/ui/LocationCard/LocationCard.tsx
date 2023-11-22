import { Button } from '../Button';
import {
  AddressText,
  Container,
  NameText,
  ScheduleText,
  TextWrapper,
} from './LocationCard.styled';

interface PharmaCardProps {
  name?: string;
  isActive: boolean;
  handleSelect: () => void;
}

export const LocationCard: React.FC<PharmaCardProps> = ({
  handleSelect,
  isActive,
}) => {

  // TODO --> implement open maps 
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 47.638827829001535,
    lng: 26.240925940849255,
  }

  const openMaps = () => {
    const url = `https://www.google.com/maps?q=${location.lat},${location.lng}`;
    window.open(url, '_blank');
  };

  return (
    <Container onClick={handleSelect} isActive={isActive}>
      <TextWrapper>
        <NameText>Spitalul Județean Sf. Ioan</NameText>
        <ScheduleText>Lu-Mi 08:00 – 17.00 &#x2022; Sâ-Du 10:00 – 12.00</ScheduleText>
        <AddressText>Bld. 1 Mai nr 24, Secția “Nume”, Cabinet “Nr”</AddressText>
      </TextWrapper>
      <Button variant="secondary" onClick={openMaps}>Deschide in Maps</Button>
    </Container>
  );
};
