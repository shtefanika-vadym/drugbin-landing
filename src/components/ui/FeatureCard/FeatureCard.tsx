import React from "react";
import { WDS_COLOR_NEUTRALGREY_200 } from "src/styles/tokens";
import { Text } from "../Text/Text";
import { Card, IconContainer, TextContainer } from "./FeatureCard.styled";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card>
      <IconContainer>{icon}</IconContainer>
      <TextContainer>
        <Text variant="titleXS" element="p">
          {title}
        </Text>
        <Text variant="bodyS" element="p" color={WDS_COLOR_NEUTRALGREY_200}>
          {description}
        </Text>
      </TextContainer>
    </Card>
  );
};

