import { NameText, PharmaCardContainer, ScheduleText } from './PharmaCard.styled'

interface PharmaCardProps {
  name: string
  isActive: boolean
  handleSelect: () => void
}

export const PharmaCard: React.FC<PharmaCardProps> = ({ name, handleSelect, isActive }) => {
  return (
    <PharmaCardContainer onClick={handleSelect} isActive={isActive}>
      <ScheduleText>Mo-Fr 8:00 – 22.00</ScheduleText>
      <NameText>{name}</NameText>
    </PharmaCardContainer>
  )
}
