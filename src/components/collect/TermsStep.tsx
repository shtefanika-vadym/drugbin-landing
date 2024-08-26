import { useCallback, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { useGoogleAnalytics } from "src/analytics/googleAnalyticsInstance";
import { useCollectData } from "src/hooks/collect";
import { Button } from "../ui/Button/Button";
import { Text } from "../ui/Text/Text";
import { ButtonContainer } from "./Collect.styled";
import { CollectContext } from "./CollectContext";
import { Consent, Container, PrivacyPolicy } from "./TermsStep.styled";
import { CollectPayload } from "@/types/collect.types";

export const TermsStep = () => {
  const { back } = useContext(CollectContext);
  const { getValues } = useFormContext();
  const { postCollectData } = useCollectData();
  const { trackButtonClick } = useGoogleAnalytics();
  const formValues = getValues();

  const handleNext = useCallback(async () => {
    trackButtonClick("final step");
    await postCollectData(formValues as CollectPayload);
  }, [formValues, postCollectData, trackButtonClick]);

  return (
    <Container>
      <PrivacyPolicy>
        <Text>{privacyPolicyText}</Text>
      </PrivacyPolicy>
      <Consent>
        Pentru a finaliza acest proces, trebuie să fii de acord cu aceste
        prevederi.
      </Consent>
      <ButtonContainer>
        <Button variant="secondary" onClick={back}>
          Refuz
        </Button>
        <Button onClick={handleNext}>Sunt de acord</Button>
      </ButtonContainer>
    </Container>
  );
};

const privacyPolicyText = `Confidențialitatea ta este importantă pentru noi. Politica DrugBin este de a respecta confidențialitatea informațiilor pe care le colectăm de la tine pe site-ul nostru și pe alte site-uri pe care le deținem și le operăm.

Cerem informații personale doar atunci când avem cu adevărat nevoie de ele pentru a-ți furniza un serviciu. Le colectăm în mod corect și legal, cu cunoștința și consimțământul tău. Îți comunicăm și de ce le colectăm și cum vor fi utilizate.

Păstrăm informațiile colectate doar pe perioada necesară pentru a-ți furniza serviciul solicitat. Datele pe care le stocăm sunt protejate în mod corespunzător pentru a preveni pierderea și furtul, precum și accesul, divulgarea, copierea, utilizarea sau modificarea neautorizată. Nu partajăm public sau cu terțe părți nicio informație de identificare personală, cu excepția cazurilor în care suntem obligați de lege.
`;
