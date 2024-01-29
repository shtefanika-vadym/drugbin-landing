import React, { ReactNode } from 'react';
import { AlertIcon } from '../Icon/Icon';
import { Container } from './ValidationMessage.styled';

export interface ValidationMessageProps {
  show?: boolean;
  children?: ReactNode;
  className?: string;
}
export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  children,
  show,
  className,
}) => {
  return show ? (
    <Container className={className}>
      <AlertIcon width={12} height={12} />
      {children}
    </Container>
  ) : null;
};
