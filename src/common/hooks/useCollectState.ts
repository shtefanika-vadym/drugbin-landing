import { SelectValue } from '@/types/CollectInterface';
import { DrugProps, PersonalInfo } from '@/types/collect';
import {
  DrugFormFieldState,
  DrugFormState,
  DrugValue,
  initialDrugState,
} from 'common/ui/DrugInformation/DrugInformation.type';
import { create } from 'zustand';

interface CollectState {
  personalDetails: PersonalInfo;
  drugFormState: DrugValue[];
  drugList: DrugProps[];
  hospitalId: number;
  activeStep: number;
  setPersonalDetails: (name: string, value: string) => void;
  setHospitalId: (hospitalId: number) => void;
  setFormState: (index: number, name: string) => void;
  setNewFormState: () => void;
  setActiveStep: (step: number) => void;
  updateDrugList: (
    index: number,
    field: string,
    value: SelectValue | string
  ) => void;
  deleteDrug: (index: number) => void;
  addDrug: () => void;
  addDrugsFromArray: (newDrugs: DrugProps[]) => void;
  reset: () => void;
}

const initialPersonalDetails: PersonalInfo = {
  firstName: '',
  lastName: '',
  email: null,
  cnp: null,
  address: null,
};

const initialDrug: DrugProps = {
  drugName: {
    drugId: 0,
    name: '',
    value: '',
    isPsycholeptic: false,
  },
  pack: 'Cutie',
  quantity: 1,
  expirationDate: null,
  lot: '',
};

export const useCollectState = create<CollectState>((set) => {
  return {
    personalDetails: initialPersonalDetails,
    drugList: [initialDrug],
    drugFormState: [initialDrugState],
    hospitalId: null,
    activeStep: 1,
    reset: () => {
      set({
        personalDetails: initialPersonalDetails,
        drugList: [initialDrug],
        hospitalId: null,
        activeStep: 1,
      });
    },
    setHospitalId: (hospitalId) => set({ hospitalId }),
    setActiveStep: (activeStep) => set({ activeStep }),
    setPersonalDetails: (name: string, value: string) => {
      set((state) => ({
        personalDetails: {
          ...state.personalDetails,
          [name]: value,
        },
      }));
    },
    setNewFormState: () =>
      set((state) => {
        return { drugFormState: [...state.drugFormState, initialDrugState] };
      }),
    updateDrugList: (index, field, value) =>
      set((state) => {
        const newDrugs = [...state.drugList];
        newDrugs[index] = { ...newDrugs[index], [field]: value };
        return { drugList: newDrugs };
      }),
    addDrug: () =>
      set((state) => {
        return { drugList: [...state.drugList, initialDrug] };
      }),
    addDrugsFromArray: (newDrugs: DrugProps[]) =>
      set(() => {
        return { drugList: [...newDrugs] };
      }),
    deleteDrug: (index) =>
      set((state) => {
        const newDrugs = [...state.drugList];
        newDrugs.splice(index, 1);
        return { drugList: newDrugs };
      }),
    setFormState: (index: number, name: string) =>
      set((state) => {
        const updatedState = state.drugFormState.map((formField, i) => {
          if (
            i !== index ||
            formField[name as keyof DrugFormState] !==
              DrugFormFieldState.pristine
          ) {
            return formField;
          }
          return { ...formField, [name]: DrugFormFieldState.dirty };
        });
        return { drugFormState: updatedState };
      }),
  };
});
