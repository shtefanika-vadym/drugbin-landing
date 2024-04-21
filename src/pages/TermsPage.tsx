import { Terms } from "src/components/terms/Terms";
import { Metadata } from "src/components/ui/Metadata/Metadata";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";
import { Header } from "src/layout/Header/Header";
import { Layout } from "src/layout/Layout/Layout";

export const TermsPage = () => {
  usePageLoadDetailsAnalytics({ pageType: "terms of service page" });

  return (
    <Metadata
      title="Terms of Service - DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Header>
        <Layout>
          <Terms />
        </Layout>
      </Header>
    </Metadata>
  );
};
