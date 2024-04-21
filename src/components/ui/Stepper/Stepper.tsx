import { Container, Dot, Line } from './Stepper.styled';

interface StepperProps {
  steps: number;
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const stepArray = Array.from({ length: steps });

  return (
    <Container>
      {stepArray.map((_, index) => (
        <>
          <Dot key={index} active={index < currentStep} />
          {index < steps - 1 && <Line key={`line-${index}`} />}
        </>
      ))}
    </Container>
  );
};
