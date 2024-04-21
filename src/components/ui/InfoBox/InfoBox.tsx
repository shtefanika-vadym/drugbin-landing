import { CameraIcon, SecureIcon } from "../Icon";
import { Text } from "../Text/Text";
import { Container } from "./InfoBox.styled";

export enum InfoType {
  CAMERA = "camera",
  SECURE = "secure",
}

interface InfoBoxProps {
  type: InfoType;
}

// TODO: REFACTOR
export const InfoBox: React.FC<InfoBoxProps> = ({ type = "camera" }) => {
  return (
    <Container>
      {type === "camera" ? (
        <>
          <div>
            <CameraIcon />
          </div>
          <Text variant="bodyInfo">
            Poți să folosești camera pentru a scana medicamentul, sau poți
            introduce manual datele.
          </Text>
        </>
      ) : (
        <>
          <div>
            <SecureIcon />
          </div>
          <Text variant="bodyInfo">
            Luăm în serios problemele legate de confidențialitate. Poți fi sigur
            că datele tale personale sunt protejate și în siguranță.
          </Text>
        </>
      )}
    </Container>
  );
};
