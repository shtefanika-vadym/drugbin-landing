export interface PersonalDetailsProps {
    firstName: string;
    lastName: string;
    email: string | null;
    cnp: number | null;
    address: string | null;
  }
  
  export interface DrugProps {
    drugName: {
      drugId: number;
      name: string;
      value: string;
      isPsycholeptic: boolean;
    };
    pack: string;
    quantity: number;
    expirationDate: string | null;
    lot: string;
  }
  