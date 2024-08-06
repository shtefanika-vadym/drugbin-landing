import {
  Details,
  Drugs,
  SearchDrug,
  SearchDrugResponse,
} from "@/types/drug.types";
import {
  DrugsIdentify,
  DrugsIdentifyList,
  DrugsIdentifyListResponse,
  DrugsIdentifyResponse,
} from "@/types/drugsIdentify.types";
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
    cnp: personalDetails?.cnp ? toString(personalDetails?.cnp) : null,
  };
};

// TODO: REMOVE THIS WHEN BACKEND IS FIXED
const toDrugList = (input: Drugs) => {
  return {
    quantity: toNumber(input.amount),
    pack: toDrugPack(input.pack),
    atc: null,
    name: input.name,
    prescription: null,
    concentration: null,
    expirationDate: null,
  };
};

const toDrugPack = (pack: string): string => {
  const packMapping: { [key: string]: string } = {
    Cutie: "box",
    Unitate: "entity",
  };

  return packMapping[pack] || "entity";
};

export const toDrugsIdentify = (
  input: DrugsIdentifyResponse
): DrugsIdentify => {
  return {
    count: input.result.length,
    drugs: toDrugsIdentifyList(input.result),
  };
};

export const toDrugsIdentifyList = (
  drugs: DrugsIdentifyListResponse[]
): DrugsIdentifyList[] => {
  return drugs.map((drug) => {
    return {
      name: {
        id: null,
        isPsycholeptic: false,
        label: drug.name,
        value: drug.name,
      },
      amount: drug.count,
      pack: drug.package,
      concentration: drug.concentration,
      atc: drug.atc,
    };
  });
};

export const toDrugsIdentifyAppend = (drugs: DrugsIdentifyList[]) => {
  return drugs.map((drug) => {
    return {
      name: drug.name,
      pack: drug.pack,
      amount: drug.amount,
    };
  });
};
