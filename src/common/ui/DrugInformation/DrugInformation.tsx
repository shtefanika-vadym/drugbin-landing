import type { SelectValue } from 'common/interface/CollectInterface'
import { DROPDOWN_VALUES } from 'common/mockData/mockData'
import {
  DELETE_DRUG_BY_ID,
  SET_DATA_DRUG,
  SET_DRUGS_SIZE,
  SET_NEW_DRUG,
} from 'common/slices/recycleSlice'
import { useAppDispatch, useAppSelector } from 'common/store/hooks'
import { AutocompleteInput } from 'common/ui/AutocompleteInput/AutocompleteInput'
import { Button } from 'common/ui/Button/Button'
import { Camera } from 'common/ui/Camera/Camera'
import { Dropdown } from 'common/ui/Dropdown/Dropdown'
import { Input } from 'common/ui/Input/Input'
import { SwitchButton } from 'common/ui/SwitchButton/SwitchButton'
import type { ChangeEvent, FC } from 'react'
import { useCallback, useState } from 'react'
import {
  AddNewWrapper,
  ButtonWrapper,
  Delete,
  DrugInformationWrapper,
  Error,
  FormWrapper,
  InputWrapper,
  Label,
  LabelWrapper,
  MultiFormWrapper,
} from './DrugInformation.styled'

interface IProps {
  setActiveStep: (step: any) => void
}

export const DrugInformation: FC<IProps> = ({ setActiveStep }) => {
  const dispatch = useAppDispatch()
  const { collectData, drugsSize } = useAppSelector((state) => state.recycleReducer)
  const [error, setError] = useState<string>('')

  const handleChangeDropdown = useCallback((value: string, key: number) => {
    const name = 'pack'
    dispatch(SET_DATA_DRUG({ name, value, key }))
  }, [])

  const handleChange = useCallback((values: ChangeEvent<HTMLInputElement>, key: number) => {
    const { name, value } = values.target
    dispatch(SET_DATA_DRUG({ name, value, key }))
  }, [])

  const handleOnSelect = useCallback((value: SelectValue, key: number) => {
    const name = 'drugName'
    dispatch(SET_DATA_DRUG({ name, value, key }))
  }, [])

  const handleAddNewDrugForm = useCallback(() => {
    const lastDrug = collectData.drugList[drugsSize - 1]

    if (lastDrug.drugName.name && lastDrug.quantity > 0) {
      dispatch(SET_DRUGS_SIZE(drugsSize + 1))
      dispatch(SET_NEW_DRUG())
    }
    lastDrug.drugName.name ? setError('') : setError('Please fill the last drug name')
  }, [collectData])

  const handleGoBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
  }, [])

  const handleSubmit = useCallback(() => {
    const lastDrug = collectData.drugList[drugsSize - 1]
    if (lastDrug.drugName.name !== '' && lastDrug.quantity > 0) {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
    } else {
      setError('Please fill the last drug name')
    }
  }, [collectData.drugList])

  const handleDeleteDrug = useCallback((id: number) => {
    dispatch(DELETE_DRUG_BY_ID(id))
  }, [])

  return (
    <DrugInformationWrapper>
      <SwitchButton />
      <MultiFormWrapper>
        <Camera />
        {Array.from({ length: drugsSize }, (_, i) => (
          <FormWrapper key={i}>
            <InputWrapper>
              <LabelWrapper>
                <Label>Drug name *</Label>
                {drugsSize > 1 && <Delete onClick={() => handleDeleteDrug(i)}>Delete</Delete>}
              </LabelWrapper>
              <AutocompleteInput
                name='name'
                value={collectData?.drugList[i]?.drugName}
                placeholder='EX: Ibuprofen'
                onSelect={(e) => handleOnSelect(e, i)}
              />
            </InputWrapper>
            <Dropdown
              name='pack'
              placeholder='Pack'
              label='Package type *'
              selectedOptions={collectData?.drugList[i]?.pack}
              options={DROPDOWN_VALUES}
              callbackOnChange={(e: any) => handleChangeDropdown(e, i)}
            />
            <InputWrapper>
              <Input
                name='quantity'
                type='number'
                label='Quantity *'
                value={collectData?.drugList[i]?.quantity}
                onChange={(e) => handleChange(e, i)}
              />
            </InputWrapper>
            {/* <InputWrapper>
              <Input
                name='expirationDate'
                label='Expiration date'
                value={collectData?.drugList[i]?.expirationDate}
                onChange={(e) => handleChange(e, i)}
                placeholder='EX: 16/12/2020'
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                name='lot'
                label='LOT number'
                value={collectData?.drugList[i]?.lot}
                onChange={(e) => handleChange(e, i)}
                placeholder='EX: M9080158'
              />
            </InputWrapper> */}
          </FormWrapper>
        ))}
      </MultiFormWrapper>
      <AddNewWrapper>
        <Button variant='secondary' onClick={handleAddNewDrugForm}>
          Add new drug
        </Button>
        {error && <Error>{error}</Error>}
      </AddNewWrapper>
      <ButtonWrapper>
        <Button variant='empty' onClick={handleGoBack}>
          Go back
        </Button>
        <Button onClick={handleSubmit}>Continue</Button>
      </ButtonWrapper>
    </DrugInformationWrapper>
  )
}
