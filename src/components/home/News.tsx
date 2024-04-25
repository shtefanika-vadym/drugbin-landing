import { Layout } from "src/layout/Layout/Layout";
import { ARTICLE_DATA } from "src/mockData/news";
import { ArticleBox } from "../ui/ArticleBox/ArticleBox";
import { Container, Title } from "./News.styled";

export const News = () => {
  return (
    <Layout>
      <Title variant="titleL">
        Materiale educaționale pentru colectarea responsabilă a medicamentelor
      </Title>
      <Container>
        {ARTICLE_DATA.map((article) => {
          return (
            <ArticleBox
              path={article.path}
              image={article.image}
              altImage={article.path}
              title={article.title}
              description={article.description}
            />
          );
        })}
      </Container>
    </Layout>
  );
};
