import { DrugList } from "./drug.types";

export interface CollectResponse {
  recycleId: string;
}

export interface CollectData {
  firstName: string;
  hospitalId: number | null;
  lastName: string | null;
  email: string | null;
  drugList: DrugList[];
  addres: string | null;
  cnp: string | null;
}

