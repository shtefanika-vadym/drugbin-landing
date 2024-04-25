import { Layout } from "src/layout/Layout/Layout";
import { ARTICLE_DATA } from "src/mockData/news";
import { ArticleBox } from "../ui/ArticleBox/ArticleBox";
import { Container } from "./News.styled";

export const News = () => {
  return (
    <Layout>
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
