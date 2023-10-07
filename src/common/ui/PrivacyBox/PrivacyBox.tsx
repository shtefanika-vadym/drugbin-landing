import secureIcon from 'common/assets/secure-payment-line.svg'
import { Description, Icon, PrivacyBoxWrapper } from './PrivacyBox.styled'

interface PrivacyBoxProps {
  description: string
}

export const PrivacyBox: React.FC<PrivacyBoxProps> = ({ description }) => {
  return (
    <PrivacyBoxWrapper>
      <Icon src={secureIcon} />
      <Description>{description}</Description>
    </PrivacyBoxWrapper>
  )
}
