import { PRIVACY_BOX } from 'common/constants/steps';
import type { SelectValue } from '@/types/CollectInterface';
import { DROPDOWN_VALUES } from 'common/mockData/mockData';
import {
  DELETE_DRUG_BY_ID,
  SET_DATA_DRUG,
  SET_DRUGS_SIZE,
  SET_NEW_DRUG,
} from 'common/slices/recycleSlice';
import { useAppDispatch, useAppSelector } from 'common/store/hooks';
import { Button } from 'common/ui/Button/Button';
import { Dropdown } from 'common/ui/Dropdown/Dropdown';
import { Input } from 'common/ui/Input/Input';
import { gt } from 'lodash-es';
import type { ChangeEvent, FC } from 'react';
import { useCallback, useState } from 'react';
import { AutocompleteInput } from '../AutocompleteInput/AutocompleteInput';
import { PrivacyBox } from '../PrivacyBox/PrivacyBox';
import {
  AddNewWrapper,
  Delete,
  DrugInformationWrapper,
  Error,
  FormWrapper,
  InputWrapper,
  LabelWrapper,
  MultiFormWrapper,
  Psycholeptic
} from './DrugInformation.styled';

interface DrugInformationProps {
  setActiveStep: (step: (prevActiveStep: number) => number) => void;
}

// TODO --> REFACTORING
export const DrugInformation: FC<DrugInformationProps> = ({ setActiveStep }) => {
  const { collectData, drugsSize } = useAppSelector(
    (state) => state.recycleReducer
  );
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleChangeDropdown = useCallback(
    (value: string, key: number) => {
      const name = 'pack';
      dispatch(SET_DATA_DRUG({ name, value, key }));
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (values: ChangeEvent<HTMLInputElement>, key: number) => {
      const { name, value } = values.target;
      dispatch(SET_DATA_DRUG({ name, value, key }));
    },
    [dispatch]
  );

  const handleOnSelect = useCallback(
    (value: SelectValue, key: number) => {
      const name = 'drugName';
      dispatch(SET_DATA_DRUG({ name, value, key }));
    },
    [dispatch]
  );

  const handleAddNewDrugForm = useCallback(() => {
    const lastDrug = collectData.drugList[drugsSize - 1];

    if (lastDrug.drugName.name && lastDrug.quantity > 0) {
      dispatch(SET_DRUGS_SIZE(drugsSize + 1));
      dispatch(SET_NEW_DRUG());
    }
    lastDrug.drugName.name
      ? setError('')
      : setError('Please fill the last drug name');
  }, [collectData.drugList, dispatch, drugsSize]);

  const handleSubmit = useCallback(() => {
    const lastDrug = collectData.drugList[drugsSize - 1];
    if (lastDrug.drugName.name !== '' && lastDrug.quantity > 0) {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    } else {
      setError('Please fill the last drug name');
    }
  }, [collectData.drugList, drugsSize, setActiveStep]);

  const handleDeleteDrug = useCallback(
    (id: number) => {
      dispatch(DELETE_DRUG_BY_ID(id));
    },
    [dispatch]
  );

  return (
    <DrugInformationWrapper>
      <PrivacyBox description={PRIVACY_BOX.DESCRIPTION_STEP_2} />
      <MultiFormWrapper>
        {Array.from({ length: drugsSize }, (_, i) => (
          <FormWrapper key={i}>
            <InputWrapper id="test">
              {gt(drugsSize, 1) && (
                <LabelWrapper>
                  <Delete onClick={() => handleDeleteDrug(i)}>Sterge</Delete>
                </LabelWrapper>
              )}
              <AutocompleteInput
                label="Numele*"
                placeholder="EX: Ibuprofen"
                onSelect={(e: SelectValue) => handleOnSelect(e, i)}
                value={collectData?.drugList[i]?.drugName}
              />
              {collectData?.drugList[i]?.drugName.isPsycholeptic && (
                <Psycholeptic>
                  Te informăm că medicamentul este de tip psihotrop. Procesul de
                  colectare va fi un pic diferit.
                </Psycholeptic>
              )}
            </InputWrapper>
            <Dropdown
              name="pack"
              placeholder="Pack"
              label="Tipul de ambalaj *"
              selectedOptions={collectData?.drugList[i]?.pack}
              options={DROPDOWN_VALUES}
              callbackOnChange={(e) => handleChangeDropdown(e, i)}
            />
            <InputWrapper>
              <Input
                name="quantity"
                type="number"
                label="Cantitatea *"
                value={collectData?.drugList[i]?.quantity}
                onChange={(e) => handleChange(e, i)}
              />
            </InputWrapper>
          </FormWrapper>
        ))}
      </MultiFormWrapper>
      <AddNewWrapper>
        <Button variant="secondary" onClick={handleAddNewDrugForm}>
          Adaugă alt medicament
        </Button>
        {error && <Error>{error}</Error>}
      </AddNewWrapper>
      <Button onClick={handleSubmit}>Continuă</Button>
    </DrugInformationWrapper>
  );
};
