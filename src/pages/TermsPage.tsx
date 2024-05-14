import { Terms } from "src/components/terms/Terms";
import { Metadata } from "src/components/ui/Metadata/Metadata";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";
import { Header } from "src/layout/Header/Header";
import { Layout } from "src/layout/Layout/Layout";

export const TermsPage = () => {
  usePageLoadDetailsAnalytics({ pageType: "terms of service page" });

  return (
    <Metadata
      title="Termenii și condițiile de utilizare"
      description="Vă rugăm să citiți acești termeni și condiții cu atenție înainte de a utiliza Serviciul nostru. Cuvintele cu litera inițială majusculă au înțelesuri definite în condițiile următoare. Definițiile următoare vor avea același înțeles indiferent dacă apar în singular sau în plural."
    >
      <Header>
        <Layout>
          <Terms />
        </Layout>
      </Header>
    </Metadata>
  );
};
