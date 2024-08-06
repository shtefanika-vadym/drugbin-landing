import { createContext, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export interface MultipleFormContextProps {
  methods: any;
  step: number;
  isFirstStep: boolean;
  nextStep: () => void;
  prevStep: () => void;
}

type FromValuse = {
  drug: {
    name: string;
    pack: string;
    amount: number;
  }[];
  details: {
    name: string;
    surname: string;
    cnp: number | null;
    address: string | null;
    email: string | null;
  };
  center: {
    centerID: null | number;
    centerCity: null | string;
  };
};

export const initialDrugValue = {
  name: "",
  pack: "Cutie",
  amount: 1,
};

export const initialDetailsValue = {
  name: "",
  surname: "",
  cnp: null,
  address: null,
  email: null,
};

export const initialCenterValue = {
  centerID: null,
  centerCity: null,
};

export const MultipleFormContext = createContext<MultipleFormContextProps>({
  methods: null,
  step: 0,
  isFirstStep: false,
  nextStep: () => {},
  prevStep: () => {},
});

export const useMultipleForm = (totalSteps: number) => {
  const [step, setStep] = useState<number>(0);
  const isFirstStep = step === 0;

  const methods = useForm<FromValuse>({
    defaultValues: {
      drug: [initialDrugValue],
      details: initialDetailsValue,
      center: initialCenterValue,
    },
    mode: "onTouched",
  });

  const nextStep = useCallback(() => {
    step < totalSteps - 1 && setStep(step + 1);
  }, [step, totalSteps]);

  const prevStep = useCallback(() => {
    !isFirstStep && setStep(step - 1);
  }, [isFirstStep, step]);

  return {
    methods,
    step,
    isFirstStep,
    nextStep,
    prevStep,
  };
};
