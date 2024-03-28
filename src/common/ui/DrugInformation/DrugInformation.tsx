import type { SelectValue } from '@/types/CollectInterface';
import { PRIVACY_BOX } from 'common/constants/steps';
import { useCollectState } from 'common/hooks/useCollectState';
import { DROPDOWN_VALUES } from 'common/mockData/mockData';
import { Button } from 'common/ui/Button/Button';
import { Dropdown } from 'common/ui/Dropdown/Dropdown';
import { Input } from 'common/ui/Input/Input';
import { gt } from 'lodash-es';
import React, { useCallback } from 'react';
import { PrivacyBox } from '../PrivacyBox';
import { Select } from '../Select/Select';
import {
  AddNewWrapper,
  DrugInformationWrapper,
  FormWrapper,
  InputWrapper,
  MultiFormWrapper,
  Psycholeptic,
} from './DrugInformation.styled';
import { useDrugFormValidation } from './drugFormValidation';

interface DrugInformationProps {
  isLastDrugValid: boolean;
}

export const DrugInformation: React.FC<DrugInformationProps> = ({
  isLastDrugValid,
}) => {
  const {
    drugList,
    updateDrugList,
    addDrug,
    deleteDrug,
    setFormState,
    setNewFormState,
  } = useCollectState();

  const handleQuantityChange = useCallback(
    (values: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = values.target;
      updateDrugList(index, 'quantity', value);
    },
    [updateDrugList]
  );

  const handleAddDrug = useCallback(() => {
    if (isLastDrugValid) {
      addDrug();
      setNewFormState();
    }
  }, [addDrug, isLastDrugValid, setNewFormState]);

  const { getValidationObject } = useDrugFormValidation(drugList);

  const handleTouch = useCallback(
    (
      event: React.FocusEvent<
        HTMLInputElement | HTMLSelectElement | HTMLDivElement
      >,
      index: number
    ) => {
      event.preventDefault();
      const { name } = event.target as HTMLInputElement & HTMLSelectElement;
      setFormState(index, name);
    },
    [setFormState]
  );

  // const isFieldTouched = useCallback(
  //   (fieldName: keyof DrugValue, index: number) =>
  //     drugFormState[index][fieldName] !== DrugFormFieldState.pristine,
  //   [drugFormState]
  // );

  // const [searchParams] = useSearchParams();
  // const admin = useMemo(() => searchParams.get('admin'), [searchParams]);

  return (
    <DrugInformationWrapper>
      {/* {admin === 'true' && ( */}
        <PrivacyBox description={PRIVACY_BOX.DESCRIPTION_STEP_2} enableCamera/>
      {/* )} */}
      <MultiFormWrapper>
        {drugList.map((form, index) => {
          return (
            <FormWrapper key={index}>
              <InputWrapper>
                <Select
                  onSelect={(value: SelectValue) =>
                    updateDrugList(index, 'drugName', value)
                  }
                  value={form.drugName}
                  isDeleteButtonActive={gt(drugList?.length, 1)}
                  onDelete={() => deleteDrug(index)}
                />
                {form.drugName.isPsycholeptic && (
                  <Psycholeptic>
                    Te informăm că medicamentul este de tip psihotrop. Procesul
                    de colectare va fi un pic diferit.
                  </Psycholeptic>
                )}
              </InputWrapper>
              <Dropdown
                name="pack"
                placeholder="Cutie"
                label="Tipul de ambalaj *"
                selectedOptions={form.pack}
                options={DROPDOWN_VALUES}
                callbackOnChange={(pack) => updateDrugList(index, 'pack', pack)}
              />
              <InputWrapper>
                <Input
                  name="quantity"
                  type="number"
                  label="Cantitatea *"
                  value={form?.quantity}
                  onChange={(e) => handleQuantityChange(e, index)}
                  onBlur={(e) => handleTouch(e, index)}
                  valid={!getValidationObject(index)?.quantity?.isValid}
                />
                {/* <ValidationMessage
                  show={
                    isFieldTouched('quantity', index) &&
                    getValidationObject(index)?.quantity?.isValid
                  }
                >
                  {getValidationObject(index)?.quantity?.errorMessage}
                </ValidationMessage> */}
              </InputWrapper>
            </FormWrapper>
          );
        })}
      </MultiFormWrapper>
      <AddNewWrapper>
        <Button variant="secondary" onClick={handleAddDrug}>
          Adaugă alt medicament
        </Button>
      </AddNewWrapper>
    </DrugInformationWrapper>
  );
};
