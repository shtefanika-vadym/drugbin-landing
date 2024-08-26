import { DrugName, Drugs } from "./drug.types";

export interface DrugsIdentifyResponse {
  result: DrugsIdentifyListResponse[];
}

export interface DrugsIdentifyListResponse {
  name: string;
  count: number;
  package: string | null;
  concentration: string | null;
  atc: string | null;
  prescription: string | null;
}

export interface DrugsIdentify {
  count: number;
  drugs: Drugs[];
}
