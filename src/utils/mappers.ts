import { CollectData, CollectPayload } from "@/types/collect.types";
import {
  DrugList,
  Drugs,
  SearchDrug,
  SearchDrugResponse,
} from "@/types/drug.types";
import {
  DrugsIdentify,
  DrugsIdentifyListResponse,
  DrugsIdentifyResponse,
} from "@/types/drugsIdentify.types";
import { toNumber, toString } from "lodash-es";
import { fromPackagingType, toPackagingType } from "./utils";

export const toDrugSearch = (input: SearchDrugResponse[]): SearchDrug[] => {
  return input.map((drug) => {
    return {
      value: drug.name,
      label: drug.name,
      isPsycholeptic: drug.isPsycholeptic,
      id: drug.id,
      atc: drug.atc,
      prescription: drug.prescription,
      concentration: drug.concentration,
    };
  });
};

export const toCollectDrugs = (data: CollectPayload): CollectData => {
  const { drug, details, center } = data;

  return {
    firstName: details.name,
    lastName: details.surname,
    hospitalId: center.centerID,
    email: details.email || null,
    drugList: drug.map((item) => toDrugList(item))!,
    addres: details?.address!,
    cnp: details?.cnp ? toString(details?.cnp) : null,
  };
};

const toDrugList = (input: Drugs): DrugList => {
  return {
    quantity: toNumber(input.amount),
    pack: toPackagingType(input.pack),
    atc: input.name.atc,
    name: input.name,
    prescription: input.name.prescription,
    concentration: input.name.concentration,
    expirationDate: null,
  };
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
): Drugs[] => {
  return drugs.map((drug) => {
    return {
      name: {
        id: null,
        isPsycholeptic: false,
        label: drug.name,
        value: drug.name,
        atc: drug.atc,
        prescription: drug.prescription,
        concentration: drug.concentration,
      },
      amount: drug.count,
      pack: fromPackagingType(drug.package ?? ""),
      atc: drug.atc,
    };
  });
};

export const toDrugsIdentifyAppend = (drugs: Drugs[]) => {
  return drugs.map((drug) => {
    return {
      name: drug.name,
      pack: drug.pack,
      amount: drug.amount,
    };
  });
};
