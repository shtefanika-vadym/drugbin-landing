import React, { InputHTMLAttributes } from 'react';
import { Container, Label, StyledCheck, StyledCheckbox, StyledInput } from './Checkbox.styled';

type CheckboxType = InputHTMLAttributes<HTMLInputElement>;
export type CheckAlignment = 'left' | 'right';

interface CheckboxProps extends CheckboxType {
  id: string;
  checkAlignment?: CheckAlignment;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { id, children, defaultChecked, className, checkAlignment = 'left', ...rest } = props;
  return (
    <Container className={className}>
      <StyledInput
        ref={ref}
        id={id}
        name={id}
        type="checkbox"
        defaultChecked={defaultChecked}
        {...rest}
      />
      <Label checkAlignment={checkAlignment} htmlFor={id}>
        <StyledCheckbox aria-hidden="true">
          <StyledCheck />
        </StyledCheckbox>
        {children as any}
      </Label>
    </Container>
  );
});

Checkbox.displayName = 'Checkbox';
