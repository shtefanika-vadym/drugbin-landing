import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'document' | 'white';
export type ButtonSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'FULL';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export type StyledButtonProps = Required<Pick<ButtonProps, 'variant' | 'size'>>;
