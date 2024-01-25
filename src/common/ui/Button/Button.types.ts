import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'square'
  | 'round'
  | 'empty'
  | 'primaryFull'
  | 'white'
  | 'document'
export type ButtonSize = 'S' | 'S-square' | 'S-round' | 'None'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isFullWidth?: boolean 
}

export type StyledButtonProps = Required<Pick<ButtonProps, 'variant' | 'size' | 'isFullWidth'>>
