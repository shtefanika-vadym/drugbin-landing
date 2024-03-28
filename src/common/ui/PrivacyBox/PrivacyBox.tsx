import secureIcon from 'common/assets/secure-payment-line.svg';
import CameraComponent from '../Camera/CameraComponent';
import { Description, Icon, PrivacyBoxWrapper } from './PrivacyBox.styled';

interface PrivacyBoxProps {
  description: string;
  enableCamera?: boolean;
}

export const PrivacyBox: React.FC<PrivacyBoxProps> = ({
  description,
  enableCamera = false,
}) => {
  return (
    <PrivacyBoxWrapper>
      <Icon src={secureIcon} />
      <div>
        <Description>{description}</Description>
        {/* <CameraOpen>Deschide</CameraOpen> */}
        {enableCamera && <CameraComponent />}
      </div>
    </PrivacyBoxWrapper>
  );
};
