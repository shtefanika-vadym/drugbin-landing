import { DrugProps, PersonalDetailsProps } from '@/types/collect'
import { toLower } from 'lodash-es'

export const toCollectDrugs = (personalDetails: PersonalDetailsProps, drugList: DrugProps[], hospitalId: number) => {
  return {
    firstName: personalDetails?.firstName,
    chainId: hospitalId,
    lastName: personalDetails?.lastName,
    email: personalDetails?.email,
    drugList: drugList.map((item: DrugProps) => toDrugList(item)),
  }
}

const toDrugList = (input: DrugProps) => {
  return {
    lot: input.lot,
    quantity: input.quantity,
    pack: toLower(input.pack),
    expirationDate: input.expirationDate,
    drugId: input.drugName.drugId,
  }
}
