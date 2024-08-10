export interface SearchDrugResponse {
  atc: string;
  id: number;
  importer: string;
  isPsycholeptic: boolean;
  name: string;
  packaging: string;
  prescription: string;
  producer: string;
  concentration: string;
}

export interface SearchDrug {
  label: string;
  value: string;
  isPsycholeptic: boolean;
  id: number;
  atc: string;
}

export interface CenterDetails {
  id: number;
  location: string;
  name: string;
  fullAddress: string;
  lng: string;
  lat: string;
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
    atc: string;
    prescription: string;
    concentration: string;
  };
  pack: string;
  amount: number;
}

export enum DocumentType {
  PSYCHOLEPTIC = "psycholeptic",
  NORMAL = "normal",
}
