import { ARTICLE_DATA } from "src/mockData/news";
import { ArticleBox } from "../ui/ArticleBox/ArticleBox";
import { Container, Grid, Title } from "./RecentArticles.styled";

export const RecentArticles = () => {
  const recentArticles = ARTICLE_DATA.slice(0, 3);

  return (
    <Container>
      <Title>Articole Recente</Title>
      <Grid>
        {recentArticles.map((article) => (
          <ArticleBox
            key={article.path}
            path={article.path}
            image={article.image}
            altImage={article.path}
            title={article.title}
            description={article.description}
          />
        ))}
      </Grid>
    </Container>
  );
};
