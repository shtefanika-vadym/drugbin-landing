export interface SearchDrugResponse {
  atc: string;
  id: number;
  importer: string;
  isPsycholeptic: boolean;
  name: string;
  packaging: string;
  prescription: string;
  producer: string;
}

export interface SearchDrug {
  label: string;
  value: string;
  isPsycholeptic: boolean;
  id: number;
}

export interface CenterDetails {
  id: number;
  location: string;
  name: string;
  street: string;
  schedule: string[];
}

export interface Details {
  name: string;
  surname: string;
  cnp: number | null;
  address: string | null;
  email: string | null;
}

export interface Drugs {
  name: {
    id: number;
    isPsycholeptic: boolean;
    label: string;
    value: string;
  };
  pack: string;
  amount: number;
}

export enum DocumentType {
  PSYCHOLEPTIC = 'psycholeptic',
  NORMAL = 'normal'
}