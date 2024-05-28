import { Camera } from "../Camera/Camera";
import { CameraIcon, SecureIcon } from "../Icon";
import { Text } from "../Text/Text";
import { CameraContainer, Container } from "./InfoBox.styled";

export enum InfoType {
  CAMERA = "camera",
  SECURE = "secure",
}

interface InfoBoxProps {
  type: InfoType;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ type }) => {
  return (
    <Container>
      {type === "camera" ? renderCameraInfo() : renderSecureInfo()}
    </Container>
  );
};

const renderCameraInfo = () => (
  <>
    <div>
      <CameraIcon />
    </div>
    <CameraContainer>
      <Text variant="bodyInfo">
        Poți să folosești camera pentru a scana medicamentul, sau poți introduce
        manual datele.
      </Text>
      <Camera />
    </CameraContainer>
  </>
);

const renderSecureInfo = () => (
  <>
    <div>
      <SecureIcon />
    </div>
    <Text variant="bodyInfo">
      Luăm în serios problemele legate de confidențialitate. Poți fi sigur că
      datele tale personale sunt protejate și în siguranță.
    </Text>
  </>
);
