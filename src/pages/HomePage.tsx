import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Home } from "src/components/home/Home";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";
import { Header } from "src/layout/Header/Header";

export const HomePage = () => {
  usePageLoadDetailsAnalytics({ pageType: "home page" });

  return (
    <Metadata
      title="DrugBin - Nu arunca medicamentele expirate sau neutilizate! Predă-le în centrele de colectare special amenajate! Noi te învățăm cum."
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Header>
        <Home />
      </Header>
    </Metadata>
  );
};
