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
export interface Drugs {
  name: DrugName;
  pack: string;
  amount: number;
}

export interface DrugName {
  id: number | null;
  isPsycholeptic: boolean;
  label: string;
  value: string;
  atc: string | null;
  prescription: string | null;
  concentration: string | null;
  category: number;
}

export interface DrugList {
  quantity: number | null;
  pack: string;
  atc: string | null;
  name: DrugName;
  prescription: string | null;
  concentration: string | null;
  expirationDate: null;
}
