import { ArticlesList } from "src/components/articles/ArticlesList";
import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Header } from "src/layout/Header/Header";
import { Layout } from "src/layout/Layout/Layout";

export const ArticlesListPage = () => {
  return (
    <Metadata title="Articole" description="Articole despre gestionarea medicamentelor, sănătate publică și utilizarea aplicației DrugBin.">
      <Header>
        <Layout>
          <ArticlesList />
        </Layout>
      </Header>
    </Metadata>
  );
};
