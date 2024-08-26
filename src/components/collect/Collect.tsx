import { size } from "lodash-es";
import { FormProvider } from "react-hook-form";
import { useCollectForm } from "../../hooks/useCollectForm";
import { CollectGroup } from "../ui/CollectGroup/CollectGroup";
import { InfoType } from "../ui/InfoBox/InfoBox";
import { CenterStep } from "./CenterStep";
import { Container } from "./Collect.styled";
import { CollectContext } from "./CollectContext";
import { DetailsStep } from "./DetailsStep";
import { DrugStep } from "./DrugStep";
import { TermsStep } from "./TermsStep";

const steps = [
  {
    title: "Colectează medicamente",
    description:
      "Completează datele despre medicamentele pe care vrei să le colectezi, va dura doar câteva secunde. Poți adăuga și preda mai multe medicamente.",
    infoType: InfoType.CAMERA,
    renderComponent: <DrugStep />,
  },
  {
    title: "Colectează medicamente",
    description:
      "Acum este momentul să introduci datele tale personale. Avem nevoie de acestea pentru a asigura calitatea procesului de colectare și siguranța tuturor, inclusiv a ta.",
    infoType: InfoType.SECURE,
    renderComponent: <DetailsStep />,
  },
  {
    title: "Colectează medicamente",
    description:
      "Este timpul să alegi centrul de colectare unde urmează să predai medicamentele.",
    mandatoryField: false,
    renderComponent: <CenterStep />,
  },
  {
    title: "Termeni și Condiții",
    stepper: false,
    mandatoryField: false,
    renderComponent: <TermsStep />,
  },
];

export const Collect = () => {
  const collectForm = useCollectForm(size(steps));
  const { step, methods } = collectForm;

  return (
    <CollectContext.Provider value={collectForm}>
      <FormProvider {...methods}>
        <Container>
          <CollectGroup
            title={steps[step].title}
            description={steps[step].description}
            infoType={steps[step].infoType}
            currentStep={step}
            mandatoryField={steps[step].mandatoryField}
            stepper={steps[step].stepper}
          >
            {steps[step].renderComponent}
          </CollectGroup>
        </Container>
      </FormProvider>
    </CollectContext.Provider>
  );
};
