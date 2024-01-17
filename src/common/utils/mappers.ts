import { DrugProps, PersonalDetailsProps, SearchResponsProps } from '@/types/collect'

export const toCollectDrugs = (personalDetails: PersonalDetailsProps, drugList: DrugProps[], hospitalId: number) => {
  return {
    firstName: personalDetails?.firstName,
    hospitalId: hospitalId,
    lastName: personalDetails?.lastName,
    email: personalDetails?.email,
    drugList: drugList.map((item: DrugProps) => toDrugList(item)),
    addres: personalDetails?.address,
    cnp: personalDetails?.cnp,
  }
}

const toDrugList = (input: DrugProps) => {
  return {
    lot: input.lot,
    quantity: input.quantity,
    pack: toDrugPack(input.pack),
    expirationDate: input.expirationDate,
    drugId: input.drugName.drugId,
  }
}

const toDrugPack = (pack: string) => {
  if (pack === 'Cutie') return 'pack';
  if (pack === 'Blister') return 'blister';
  if (pack === 'Pastila') return 'pill';
};

export const toDrugSearch = (inputs: SearchResponsProps[]) => {
  return inputs.map((item) => {
    return {
      value: item.name,
      name: item.name,
      packaging: item.packaging,
      drugId: item.id,
      isPsycholeptic: item.isPsycholeptic,
    }
  })
}
