import type { ReactNode } from 'react'
import { Header } from './Header'
import { Content } from './Header.styled'
import { Footer } from 'common/layout/Footer/Footer'

export interface HeaderProps {
  children?: ReactNode
}

export const HeaderWrapper: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}
