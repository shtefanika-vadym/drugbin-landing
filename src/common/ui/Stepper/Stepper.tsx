import { Button } from 'common/ui/Button/Button';
import type { FC, ReactNode } from 'react';
import {
  ButtonWrapper,
  Content,
  Description,
  StepperHeader,
  Title,
} from './Stepper.styled';

interface IStepper {
  title?: string;
  description?: string;
  children?: ReactNode;
  nextDisabled?: boolean;
  backDisabled?: boolean;
  onNext?: () => void;
  onBack?: () => void;
}

export const Stepper: FC<IStepper> = ({
  title,
  description,
  children,
  nextDisabled,
  backDisabled,
  onBack,
  onNext,
}) => {
  return (
    <Content>
      {(title || description) && (
        <StepperHeader>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </StepperHeader>
      )}
      <div>{children}</div>
      {!!onNext && (
        <ButtonWrapper>
          {!backDisabled && (
            <Button variant="secondary" onClick={onBack}>
              Înapoi
            </Button>
          )}
          <Button
            variant="primary"
            onClick={onNext}
            isFullWidth={backDisabled}
            disabled={nextDisabled}
          >
            Continuă
          </Button>
        </ButtonWrapper>
      )}
    </Content>
  );
};
