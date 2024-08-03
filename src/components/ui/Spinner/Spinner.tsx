import { Container } from "./Spinner.styled";

interface SpinnerProps {
  width?: number;
  height?: number;
  border?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({
  width = 24,
  height = 24,
  border = 3,
}) => {
  return <Container width={width} height={height} border={border} />;
};
