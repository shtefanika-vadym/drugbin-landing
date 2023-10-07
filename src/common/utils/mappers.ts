import { toLower } from 'lodash-es'

export const toCollectDrugs = (data: any) => {
  return {
    firstName: data.firstName,
    chainId: data.chainId,
    lastName: data.lastName,
    email: data?.email,
    drugList: data.drugList.map((item: any) => toDrugList(item)),
  }
}

const toDrugList = (input: any) => {
  return {
    lot: input.lot,
    quantity: input.quantity,
    pack: toLower(input.pack),
    expirationDate: input.expirationDate,
    drugId: input.drugName.drugId,
  }
}
