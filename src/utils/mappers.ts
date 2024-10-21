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
} from "@/types/drugsIdentify.types";
import { toNumber, toString, uniq } from "lodash-es";
import { fromPackagingType, toPackagingType } from "./utils";
import { SuccessDetails, SuccessResponse } from "@/types/success.types";

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
    // NEW
    name: input.name.value,
    id: input.name.id,
    isPsycholeptic: input.name.isPsycholeptic,
    label: input.name.label,
    value: input.name.value,
    atc: input.name.atc,
    prescription: input.name.prescription,
    concentration: input.name.concentration,
    category: input.name.category,

    expirationDate: null,
  };
};

export const toDrugsIdentify = (
  input: DrugsIdentifyListResponse[]
): DrugsIdentify => {
  return {
    count: input.length,
    drugs: toDrugsIdentifyList(input),
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
        category: drug.category ?? 0,
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

export const toSuccessDetails = (input: SuccessResponse): SuccessDetails => {
  return {
    types: uniq(input.drugList.map((item) => item.category))
  };
};
