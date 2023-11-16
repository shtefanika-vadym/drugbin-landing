import { Spinner } from 'common/ui/Spinner/Spinner'
import type { ReactNode } from 'react'
import React from 'react'
import { Container } from './Loader.styled'

export interface LoaderProps {
  className?: string
  children?: ReactNode
  isLoading: boolean
  size?: number
  justify?: 'flex-start' | 'center' | 'flex-end'
  spacing?: string
  color?: `#${string}`
  ringWidth?: number
}

export const Loader: React.FC<LoaderProps> = ({
  className,
  children,
  isLoading,
  justify,
  spacing,
  ...rest
}) => {
  return (
    <>
      {isLoading ? (
        <Container className={className} justify={justify} spacing={spacing}>
          <Spinner {...rest} />
        </Container>
      ) : (
        children
      )}
    </>
  )
}
