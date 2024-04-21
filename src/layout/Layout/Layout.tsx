import type { ReactNode } from 'react';
import { Container } from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
  color?: string;
  fullWidth?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  color,
  fullWidth,
}) => {
  return (
    <Container color={color} fullWidth={fullWidth}>
      {children}
    </Container>
  );
};
