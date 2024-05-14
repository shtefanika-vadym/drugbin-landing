import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Privacy } from "src/components/privacy/Privacy";
import { Header } from "src/layout/Header/Header";
import { Layout } from "src/layout/Layout/Layout";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";

export const PrivacyPage = () => {
  usePageLoadDetailsAnalytics({ pageType: "privacy policy page" });

  return (
    <Metadata
      title="Politica de Confidențialitate"
      description="Această Politică de Confidențialitate descrie politicile și procedurile noastre referitoare la colectarea, utilizarea și dezvăluirea informațiilor tale atunci când utilizezi Serviciul și îți informează despre drepturile tale privind confidențialitatea și modul în care legea te protejează."
    >
      <Header>
        <Layout>
          <Privacy />
        </Layout>
      </Header>
    </Metadata>
  );
};
