import type { SelectValue } from '@/types/CollectInterface';
import { DrugProps } from '@/types/collect';
import { PRIVACY_BOX } from 'common/constants/steps';
import { DROPDOWN_VALUES } from 'common/mockData/mockData';
import { Button } from 'common/ui/Button/Button';
import { Dropdown } from 'common/ui/Dropdown/Dropdown';
import { Input } from 'common/ui/Input/Input';
import { initialDrug } from 'components/collect/Collect.config';
import { gt } from 'lodash-es';
import type { ChangeEvent } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { AutocompleteInput } from '../AutocompleteInput/AutocompleteInput';
import { PrivacyBox } from '../PrivacyBox/PrivacyBox';
import {
  AddNewWrapper,
  Delete,
  DrugInformationWrapper,
  Error,
  FormWrapper,
  InputWrapper,
  MultiFormWrapper,
  Psycholeptic
} from './DrugInformation.styled';

interface DrugInformationProps {
  drugList: DrugProps[];
  setDrugList: (drugList: DrugProps[]) => void;
  isLastDrugValid: boolean;
}

export const DrugInformation: React.FC<DrugInformationProps> = ({
  drugList,
  setDrugList,
  isLastDrugValid,
}) => {
  const [error, setError] = useState<string>('');

  const handleInputChange = useCallback(
    (values: ChangeEvent<HTMLInputElement>, key: number) => {
      const { name, value } = values.target;
      setDrugList(
        drugList.map((drug, i) =>
          i === key ? { ...drug, [name]: value } : drug
        )
      );
    },
    [drugList, setDrugList]
  );

  const handleSelector = useCallback(
    (value: SelectValue | string, key: number, keyValue: string) => {
      setDrugList(
        drugList.map((drug, i) =>
          i === key ? { ...drug, [keyValue]: value } : drug
        )
      );
    },
    [drugList, setDrugList]
  );

  const handleAddNewDrugForm = useCallback(() => {
    if (isLastDrugValid) {
      setDrugList([...drugList, initialDrug]);
    } else {
      setError(
        'Pentru a adăuga un medicament nou, completează toate câmpurile.'
      );
    }
  }, [isLastDrugValid, setDrugList, drugList]);

  const handleDeleteDrug = useCallback(
    (index: number) => {
      const newArray = [...drugList];
      newArray.splice(index, 1);
      setDrugList(newArray);
    },
    [drugList, setDrugList]
  );

  useEffect(() => {
    if (isLastDrugValid) setError('');
  }, [isLastDrugValid]);

  return (
    <DrugInformationWrapper>
      <PrivacyBox description={PRIVACY_BOX.DESCRIPTION_STEP_2} />
      <MultiFormWrapper>
        {Array.from({ length: drugList?.length }, (_, i) => (
          <FormWrapper key={i}>
            <InputWrapper>
              {gt(drugList?.length, 1) && (
                  <Delete onClick={() => handleDeleteDrug(i)}>Sterge</Delete>
              )}
              <AutocompleteInput
                label="Numele*"
                placeholder="EX: Ibuprofen"
                onSelect={(e: SelectValue) => handleSelector(e, i, 'drugName')}
                value={drugList[i]?.drugName}
              />
              {drugList[i]?.drugName.isPsycholeptic && (
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
              selectedOptions={drugList[i]?.pack}
              options={DROPDOWN_VALUES}
              callbackOnChange={(e) => handleSelector(e, i, 'pack')}
            />
            <InputWrapper>
              <Input
                name="quantity"
                type="number"
                label="Cantitatea *"
                value={drugList[i]?.quantity}
                onChange={(e) => handleInputChange(e, i)}
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
    </DrugInformationWrapper>
  );
};
