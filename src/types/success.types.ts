import { DrugList } from "./drug.types";

export interface SuccessResponse {
  drugList: DrugList[];
}

export interface SuccessDetails {
  types: number[];
}
