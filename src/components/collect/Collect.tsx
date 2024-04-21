import { FormProvider } from "react-hook-form";
import {
  MultipleFormContext,
  useMultipleForm,
} from "src/hooks/useMultipleForm";
import { CollectGroup } from "../ui/CollectGroup/CollectGroup";
import { InfoType } from "../ui/InfoBox/InfoBox";
import { CenterStep } from "./CenterStep";
import { Container } from "./Collect.styled";
import { DetailsStep } from "./DetailsStep";
import { DrugStep } from "./DrugStep";
import { TermsStep } from "./TermsStep";

const steps = [
  {
    title: "Colectează medicamente",
    description:
      "Completează datele despre medicamentele pe care vrei sa le reciclezi, va dura doar câteva minute. Poți să adaugi mai multe medicamente spre reciclare.",
    infoType: InfoType.CAMERA,
    renderComponent: <DrugStep />,
  },
  {
    title: "Colectează medicamente",
    description:
      "Acum este momentul să introduci datele tale personale. Avem nevoie de acestea pentru a asigura calitatea procesului de recilcare și siguranța tuturor, inclusiv a ta.",
    infoType: InfoType.SECURE,
    renderComponent: <DetailsStep />,
  },
  {
    title: "Colectează medicamente",
    description:
      "Este timpul să alegi spitalul (de stat sau privat) unde urmează să predai medicamentele, în mod gratuit.",
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
  const multipleForm = useMultipleForm(steps.length);
  const { step } = multipleForm;

  return (
    <MultipleFormContext.Provider value={multipleForm}>
      <FormProvider {...multipleForm.methods}>
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
    </MultipleFormContext.Provider>
  );
};
