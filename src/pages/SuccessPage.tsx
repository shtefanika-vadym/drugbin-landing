import { Metadata } from "src/components/ui/Metadata/Metadata";
import { Success } from "src/components/success/Success";
import { usePageLoadDetailsAnalytics } from "src/hooks/usePageLoadDetailsAnalytics";
import { HeaderCollect } from "src/layout/HeaderCollect/HeaderCollect";

export const SuccessPage = () => {
  usePageLoadDetailsAnalytics({ pageType: "succes page" });

  return (
    <Metadata
      title="DrugBin"
      description="Eforturile tale au fost remarcabile! Ai terminat cu succes toți pașii necesari pentru a colecta medicamentele expirate și pentru a contribui la protejarea comunității și a mediului înconjurător. Explorează meniul nostru și continuă să fii parte din acest efort important pentru siguranța tuturor."
    >
      <HeaderCollect>
        <Success />
      </HeaderCollect>
    </Metadata>
  );
};
