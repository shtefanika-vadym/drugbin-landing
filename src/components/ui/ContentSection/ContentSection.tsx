import React from "react";
import { Text } from "../Text/Text";
import { Content, Description, Image } from "./ContentSection.styled";

export const ContentSection = ({
  reverse = false,
  title,
  description,
  image,
}: {
  reverse?: boolean;
  title: string;
  description: string | React.ReactNode;
  image: string;
}) => {
  return (
    <Content reverse={reverse}>
      <Description>
        <Text variant="titleM" element="h2">
          {title}
        </Text>
        <Text element="p" variant="bodyS">
          {description}
        </Text>
      </Description>
      <Image src={image} alt={title} />
    </Content>
  );
};

