import { Drugs } from "@/types/drug.types";
import { useState } from "react";

const STEPS = 3;

export const useCollectForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [drugData, setDrugData] = useState<Drugs[]>([initialDrugValue]);
  const [userData, setUserData] = useState<UserData>(initialDetailsValue);
  const [centerData, setCenterData] = useState<CenterData>(initialCenterValue);

  const next = () => {
    setCurrentStep((step) => {
      if (step >= STEPS) return step;
      return step + 1;
    });
  };

  const back = () => {
    setCurrentStep((step) => {
      if (step <= 0) return step;
      return step - 1;
    });
  };

  const updateDrugData = (field: Partial<Drugs>) => {
    setDrugData((drug) => {
      return { ...drug, ...field };
    });
  };

  const updateUserData = (field: Partial<UserData>) => {
    setUserData((user) => {
      return { ...user, ...field };
    });
  };

  const updateCenterData = (field: Partial<CenterData>) => {
    setCenterData((center) => {
      return { ...center, ...field };
    });
  };

  return {
    step: currentStep,
    drugData,
    userData,
    centerData,
    next,
    back,
    updateDrugData,
    updateUserData,
    updateCenterData,
  };
};

// REFACTOR

const initialDrugValue = {
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
  address: null,
  email: null,
};
const initialCenterValue = {
  centerID: null,
  centerCity: null,
};

interface UserData {
  name: string;
  surname: string;
  cnp: number | null;
  address: string | null;
  email: string | null;
}

interface CenterData {
  centerID: number | null;
  centerCity: string | null;
}
