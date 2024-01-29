/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from 'common/ui/Button/Button';
import type { FC, ReactNode } from 'react';
import {
  ButtonWrapper,
  Content,
  Description,
  StepperHeader,
  Title,
} from './Stepper.styled';

interface StepperProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  backDisabled?: boolean;
  nextDisabled?: boolean;
  isLoading?: boolean;
  onNext?: () => void;
  onBack?: () => void;
}

export const Stepper: FC<StepperProps> = ({
  title,
  description,
  children,
  nextDisabled,
  backDisabled,
  isLoading,
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
            <Button variant="secondary" onClick={onBack} disabled={isLoading}>
              Înapoi
            </Button>
          )}
          <Button
            variant="primary"
            onClick={onNext}
            isFullWidth={backDisabled}
            disabled={nextDisabled || isLoading}
          >
            Continuă
          </Button>
        </ButtonWrapper>
      )}
    </Content>
  );
};
