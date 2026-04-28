import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLE_DATA } from "src/mockData/news";
import { ArticleLabel } from "../ui/ArticleLabel/ArticleLabel";
import { Button } from "../ui/Button/Button";
import { ArrowRight } from "../ui/Icon";
import {
  Card,
  CardDate,
  CardDescription,
  CardFooter,
  CardImage,
  CardMeta,
  CardTitle,
  Container,
  Grid,
  PageTitle,
} from "./ArticlesList.styled";

export const ArticlesList = () => {
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
      <PageTitle>Articole</PageTitle>
      <Grid>
        {ARTICLE_DATA.map((article) => (
          <Card key={article.path} onClick={() => handleClick(article.path)}>
            <CardImage src={article.image} alt={article.title} />
            <CardMeta>
              <ArticleLabel>{article.label}</ArticleLabel>
              <CardDate>{article.date}</CardDate>
            </CardMeta>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
            <CardFooter>
              <Button
                variant="ghost"
                size="XS"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(article.path);
                }}
              >
                Citește articolul <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
