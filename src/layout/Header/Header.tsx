import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { TopNavigation } from "../TopNavigation/TopNavigation";
import { Container } from "./Header.styled";

interface HeaderProps {
  children?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Container>
      <TopNavigation />
      {children}
      <Footer />
    </Container>
  );
};
