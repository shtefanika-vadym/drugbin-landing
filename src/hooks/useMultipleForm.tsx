import { createContext, useCallback, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { PositionType, useCurrentLocation } from "./useCurrentLocation";
import { DrugName } from "@/types/drug.types";

export interface MultipleFormContextProps {
  methods: UseFormReturn<FormValues>;
  step: number;
  isFirstStep: boolean;
  nextStep: () => void;
  prevStep: () => void;
  location: PositionType;
  isLocationLoading: boolean;
  verifyLocationAccess: () => void;
}

export interface FormValues {
  drug: {
    name: DrugName;
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
    centerID: number | null;
    centerCity: string | null;
  };
}

// Initial values
export const initialDrugValue = {
  name: {},
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

// Create the context with default values
export const MultipleFormContext = createContext<MultipleFormContextProps>({
  methods: null as any, // Ideally, avoid `null as any` and handle default values more gracefully
  step: 0,
  isFirstStep: false,
  nextStep: () => {},
  prevStep: () => {},
  location: {
    latitude: null,
    longitude: null,
  },
  isLocationLoading: false,
  verifyLocationAccess: () => {},
});

export const useMultipleForm = (totalSteps: number) => {
  const [step, setStep] = useState<number>(0);
  const isFirstStep = step === 0;

  const {
    verifyLocationAccess,
    location,
    isLoading: isLocationLoading,
  } = useCurrentLocation();

  const methods = useForm<FormValues>({
    defaultValues: {
      drug: [initialDrugValue],
      details: initialDetailsValue,
      center: initialCenterValue,
    },
    mode: "onTouched",
  });

  const nextStep = useCallback(() => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  }, [step, totalSteps]);

  const prevStep = useCallback(() => {
    if (!isFirstStep) {
      setStep(step - 1);
    }
  }, [isFirstStep, step]);

  return {
    methods,
    step,
    isFirstStep,
    location,
    isLocationLoading,
    verifyLocationAccess,
    nextStep,
    prevStep,
  };
};