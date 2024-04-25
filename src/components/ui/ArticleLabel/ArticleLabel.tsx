import React from "react";
import { Container, Label } from "./ArticleLabel.styled";

interface ArticleLabelProps {
  children: React.ReactNode;
}

export const ArticleLabel: React.FC<ArticleLabelProps> = ({ children }) => {
  return (
    <Container>
      <Label>{children}</Label>
    </Container>
  );
};
