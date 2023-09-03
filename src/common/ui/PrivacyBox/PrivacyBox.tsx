import secureIcon from 'common/assets/secure-payment-line.svg'
import { Description, Icon, PrivacyBoxWrapper } from './PrivacyBox.styled'
import { PRIVACY_BOX } from 'common/constants/steps'

export const PrivacyBox = () => {
  return (
    <PrivacyBoxWrapper>
      <Icon src={secureIcon} />
      <Description>{PRIVACY_BOX.DESCRIPTION}</Description>
    </PrivacyBoxWrapper>
  )
}
