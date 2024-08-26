import { CenterDataForm } from "./center.types";
import { DetailsType } from "./details.types";
import { DrugList, Drugs } from "./drug.types";

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

export interface CollectPayload {
  drug: Drugs[];
  details: DetailsType;
  center: CenterDataForm;
}

export type PartialCollectPayload = Partial<CollectPayload>;
