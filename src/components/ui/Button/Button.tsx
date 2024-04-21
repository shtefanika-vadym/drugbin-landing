import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = 'primary', size = 'M', children, ...rest } = props;
    return (
      <StyledButton ref={ref} size={size} variant={variant} {...rest}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
