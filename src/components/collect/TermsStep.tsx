import { useCallback, useContext } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGoogleAnalytics } from "src/analytics/googleAnalyticsInstance";
import { useRecycleDrugMutation } from "src/api/drug";
import { MultipleFormContext } from "src/hooks/useMultipleForm";
import { toCollectDrugs } from "src/utils/mappers";
import { Button } from "../ui/Button/Button";
import { Text } from "../ui/Text/Text";
import { ToastType, notify } from "../ui/Toast/CustomToast";
import { ButtonContainer } from "./Collect.styled";
import { Consent, Container, PrivacyPolicy } from "./TermsStep.styled";

export const TermsStep = () => {
  const { prevStep } = useContext(MultipleFormContext);
  const [recycleDrug] = useRecycleDrugMutation();
  const { trackButtonClick } = useGoogleAnalytics();
  const navigate = useNavigate();

  const { control } = useFormContext();
  const watchedDrugFields = useWatch({
    control,
    name: "drug",
  });
  const watchedDetailsFields = useWatch({
    control,
    name: "details",
  });
  const watchedCenter = useWatch({
    control,
    name: "center",
  });

  const handleNext = useCallback(async () => {
    trackButtonClick("final step");

    const response: any = await recycleDrug(
      toCollectDrugs(watchedDetailsFields, watchedDrugFields, watchedCenter?.centerID)
    );

    if (response.error) {
      notify(
        "Oops! Ceva nu a mers conform planului. Te rog să încerci din nou mai târziu.",
        ToastType.ERROR
      );
    } else {
      navigate(response?.data);
    }
  }, [
    navigate,
    recycleDrug,
    trackButtonClick,
    watchedCenter,
    watchedDetailsFields,
    watchedDrugFields,
  ]);

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
        <Button variant="secondary" onClick={prevStep}>
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
