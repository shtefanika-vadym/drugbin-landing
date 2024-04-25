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
} from "./ReadMore.styled";

interface ReadMoreProps {
  data?: {
    date: string;
    title: string;
    description: string;
    path: string;
    label: string;
  }[];
}

export const ReadMore: React.FC<ReadMoreProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (path: string) => {
      navigate(`/article/${path}`);
      window.scrollTo(0, 0);
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
