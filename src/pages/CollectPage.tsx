import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Collect } from "src/components/collect/Collect";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";
import { HeaderCollect } from "src/layout/HeaderCollect/HeaderCollect";

export const CollectPage = () => {
  usePageLoadDetailsAnalytics({ pageType: "collect page" });

  return (
    <Metadata
      title="Colectează - DrugBin"
      description="Descoperiți centrele din apropiere pentru eliminarea în siguranță a medicamentelor expirate sau neutilizate. Alăturați-vă mișcării pentru o comunitate mai curată."
    >
      <HeaderCollect>
        <Collect />
      </HeaderCollect>
    </Metadata>
  );
};
