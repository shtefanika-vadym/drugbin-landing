import {
  Details,
  Drugs,
  SearchDrug,
  SearchDrugResponse,
} from "@/types/drug.types";
import { toNumber, toString } from "lodash-es";

export const toDrugSearch = (input: SearchDrugResponse[]): SearchDrug[] => {
  return input.map((drug) => {
    return {
      value: drug.name,
      label: drug.name,
      isPsycholeptic: drug.isPsycholeptic,
      id: drug.id,
    };
  });
};

export const toCollectDrugs = (
  personalDetails: Details,
  drugList: Drugs[],
  hospitalId: number
) => {
  return {
    firstName: personalDetails.name,
    hospitalId: hospitalId,
    lastName: personalDetails?.surname,
    email: personalDetails?.email || null,
    drugList: drugList.map((item: Drugs) => toDrugList(item)),
    addres: personalDetails?.address,
    cnp: toString(personalDetails?.cnp),
  };
};

const toDrugList = (input: Drugs) => {
  return {
    lot: null,
    quantity: toNumber(input.amount),
    pack: toDrugPack(input.pack),
    expirationDate: null,
    drugId: input.name.id,
  };
};

const toDrugPack = (pack: string) => {
  if (pack === "Cutie") return "pack";
  if (pack === "Blister") return "blister";
  if (pack === "Pastila") return "pill";
};
