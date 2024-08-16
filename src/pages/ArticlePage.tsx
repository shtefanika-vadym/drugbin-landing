import { Article } from "src/components/article/Article";
import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Header } from "src/layout/Header/Header";
import { Layout } from "src/layout/Layout/Layout";

export const ArticlePage = () => {
  return (
    <Metadata title="Articole" description="">
      <Header>
        <Layout>
          <Article />
        </Layout>
      </Header>
    </Metadata>
  );
};
