import type { ReactNode } from 'react'
import { Content } from './ContentWrapper.styled'

interface ContentWrapperProps {
  children: ReactNode
  id?: any
  color?: string
  fullWidth?: boolean
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  id,
  color,
  fullWidth,
}) => {
  return (
    <Content color={color} fullWidth={fullWidth} id={id}>
      {children}
    </Content>
  )
}
