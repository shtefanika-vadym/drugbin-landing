import React from "react";
import { Container, Dot, Line } from "./Stepper.styled";

interface StepperProps {
  steps: number;
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const stepArray = Array.from({ length: steps });

  return (
    <Container>
      {stepArray.map((_, index) => (
        <React.Fragment key={index}>
          <Dot active={index < currentStep ? true : false} />
          {index < steps - 1 && <Line key={`line-${index}`} />}
        </React.Fragment>
      ))}
    </Container>
  );
};
