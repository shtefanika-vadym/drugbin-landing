export interface PersonalInfo {
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
    quantity: number | string;
    expirationDate: string | null;
    lot: string;
  }
  
export interface SearchResponsProps {
  atc: string,
  id: number,
  importer: string,
  isPsycholeptic: boolean
  name: string
  packaging: string
  prescription: string
  producer: string
}

export interface SearchProps {
  value: string,
  name: string,
  packaging: string,
  drugId: number,
  isPsycholeptic: false,
}