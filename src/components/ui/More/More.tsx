import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleLabel } from "../ArticleLabel/ArticleLabel";
import { Button } from "../Button/Button";
import { ArrowRight } from "../Icon";
import { Text } from "../Text/Text";
import {
    Box,
    ButtonWrapper,
    Container,
    Description,
    Title,
} from "./More.styled";

interface MoreProps {
  data?: {
    date: string;
    title: string;
    description: string;
    path: string;
    label: string;
  }[];
}

// TODO: refactor
export const More: React.FC<MoreProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (path: string) => {
      navigate(`/article/${path}`);
    },
    [navigate]
  );

  return (
    <Container>
      {data?.map((article) => {
        return (
          <Box>
            <Text variant="bodyXS">{article.date}</Text>
            <Title>{article.title}</Title>
            <Description>{article.description}</Description>
            <ButtonWrapper>
              <ArticleLabel>{article.label}</ArticleLabel>
              <Button
                variant="ghost"
                size="XS"
                onClick={() => handleClick(article.path)}
              >
                Citește <ArrowRight />
              </Button>
            </ButtonWrapper>
          </Box>
        );
      })}
    </Container>
  );
};
