import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Home } from "src/components/home/Home";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";
import { Header } from "src/layout/Header/Header";

export const HomePage = () => {
  usePageLoadDetailsAnalytics({ pageType: "home page" });

  return (
    <Metadata
      title="DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Header>
        <Home />
      </Header>
    </Metadata>
  );
};
