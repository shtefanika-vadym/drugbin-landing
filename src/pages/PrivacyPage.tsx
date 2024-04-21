import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Privacy } from "src/components/privacy/Privacy";
import { Header } from "src/layout/Header/Header";
import { Layout } from "src/layout/Layout/Layout";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";

export const PrivacyPage = () => {
  usePageLoadDetailsAnalytics({ pageType: "privacy policy page" });

  return (
    <Metadata
      title="Privacy Policy - DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Header>
        <Layout>
          <Privacy />
        </Layout>
      </Header>
    </Metadata>
  );
};
