import { Drugs } from "./drug.types";

export interface DrugsIdentifyListResponse {
  name: string;
  count: number;
  package: string | null;
  concentration: string | null;
  atc: string | null;
  prescription: string | null;
  category: number | null;
}

export interface DrugsIdentify {
  count: number;
  drugs: Drugs[];
}
