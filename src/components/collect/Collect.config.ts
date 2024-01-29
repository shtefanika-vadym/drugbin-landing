import { DrugProps, PersonalInfo } from "@/types/collect";

export const initialDrug: DrugProps = {
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
  
  export const initialPersonalDetails: PersonalInfo = {
    firstName: '',
    lastName: '',
    email: null,
    cnp: null,
    address: null,
  };
  