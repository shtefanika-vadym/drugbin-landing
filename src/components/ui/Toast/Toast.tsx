import { WDS_COLOR_ERROR_100, WDS_COLOR_SUCCESS } from "src/styles/tokens";
import { AlertIcon, SuccessIcon } from "../Icon";
import { Text } from "../Text/Text";
import { Container, Icon } from "./Toast.styled";

export enum ToastType {
  SUCCES = "succes",
  ERROR = "error",
}

interface ToastProps {
  message: string;
  show: boolean;
  type: ToastType;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  show,
  type = ToastType.SUCCES,
}) => {
  const toastColor =
    type === ToastType.SUCCES ? WDS_COLOR_SUCCESS : WDS_COLOR_ERROR_100;
  const toastIcon = type === ToastType.SUCCES ? <SuccessIcon /> : <AlertIcon />;

  return (
    <Container show={show}>
      <div>
        <Icon color={toastColor}>{toastIcon}</Icon>
      </div>
      <Text variant="bodyInfo">{message}</Text>
    </Container>
  );
};
