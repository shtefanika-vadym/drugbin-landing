import React, { ReactNode } from "react";
import { Container, StyledLoaderContainer } from "./Loader.styled";
import { Spinner } from "../Spinner";

export interface LoaderProps {
  className?: string;
  children?: ReactNode;
  isLoading: boolean;
  size?: number;
  justify?: "flex-start" | "center" | "flex-end";
  spacing?: string;
  color?: `#${string}`;
  ringWidth?: number;
  centered?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  className,
  children,
  isLoading,
  justify,
  spacing,
  centered,
  size,
}) => {
  return (
    <>
      {isLoading ? (
        <Container
          className={className}
          justify={justify}
          spacing={spacing}
          centered={centered}
        >
          <Spinner width={size} height={size} />
        </Container>
      ) : (
        <StyledLoaderContainer>{children}</StyledLoaderContainer>
      )}
    </>
  );
};
