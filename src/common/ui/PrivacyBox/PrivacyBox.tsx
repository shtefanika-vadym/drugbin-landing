import secureIcon from 'common/assets/secure-payment-line.svg';
import CameraComponent from '../Camera/CameraComponent';
import {
  Description,
  Icon,
  PrivacyBoxWrapper
} from './PrivacyBox.styled';

interface PrivacyBoxProps {
  description: string;
}

export const PrivacyBox: React.FC<PrivacyBoxProps> = ({ description }) => {
  return (
    <PrivacyBoxWrapper>
      <Icon src={secureIcon} />
      <div>
        <Description>{description}</Description>
        {/* <CameraOpen>Deschide</CameraOpen> */}
        <CameraComponent />
      </div>
    </PrivacyBoxWrapper>
  );
};
