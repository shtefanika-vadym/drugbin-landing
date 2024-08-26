import { PartialCollectPayload } from "@/types/collect.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { some } from "lodash-es";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useCurrentLocation } from "src/hooks/useCurrentLocation";
import { getValidationSchema } from "src/utils/validation";

// Initial values
export const initialDrugValue = {
  name: {
    id: null,
    isPsycholeptic: false,
    label: "",
    value: "",
    atc: "",
    prescription: "",
    concentration: "",
  },
  pack: "Cutie",
  amount: 1,
};

const initialDetailsValue = {
  name: "",
  surname: "",
  cnp: null,
  address: "",
  email: "",
};

const initialCenterValue = {
  centerID: null,
  centerCity: "",
};

export const useCollectForm = (steps: number) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isExtendedDetailsForm, setIsExtendedDetailsForm] = useState(false);

  const methods = useForm<PartialCollectPayload>({
    defaultValues: {
      details: initialDetailsValue,
      center: initialCenterValue,
      drug: [initialDrugValue],
    },
    mode: "onTouched",
    resolver: yupResolver(
      getValidationSchema(currentStep, isExtendedDetailsForm)
    ),
    context: { isExtendedDetailsForm },
  });
  const {
    verifyLocationAccess,
    location,
    isLoading: isLocationLoading,
  } = useCurrentLocation();

  const formValues = methods.watch();
  const hasPsycholepticDrug = useMemo(
    () => some(formValues.drug, (item) => item.name.atc?.includes("N05")),
    [formValues]
  );

  useEffect(() => {
    setIsExtendedDetailsForm(hasPsycholepticDrug);
  }, [hasPsycholepticDrug]);

  const next = () => {
    setCurrentStep((step) => {
      if (step >= steps) return step;
      return step + 1;
    });
  };

  const back = () => {
    setCurrentStep((step) => {
      if (step <= 0) return step;
      return step - 1;
    });
  };

  return {
    next,
    back,
    methods,
    step: currentStep,
    location,
    isLocationLoading,
    hasPsycholepticDrug,
    drugListForm: formValues.drug,
    verifyLocationAccess,
  };
};
