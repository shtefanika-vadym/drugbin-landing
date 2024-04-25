import { Article } from "src/components/article/Article";
import { Header } from "src/layout/Header/Header";
import { Layout } from "src/layout/Layout/Layout";

export const ArticlePage = () => {
  return (
    <Header>
      <Layout>
        <Article />
      </Layout>
    </Header>
  );
};
